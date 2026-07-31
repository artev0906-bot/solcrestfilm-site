/**
 * Build-time pre-rendering.
 *
 * Every page on this site is an empty `<div id="app">` that a JS module fills
 * in. That works in a browser and nowhere else: carrier A2P reviewers, and
 * crawlers generally, fetch the raw HTML and see nothing — no form, no consent
 * checkboxes, no legal text.
 *
 * This script runs after `vite build`. For each target it loads the page's own
 * module through Vite's SSR pipeline against a jsdom document, reads whatever
 * the module put inside `#app`, and writes that into the built HTML file. The
 * markup therefore comes from the same source the browser runs — it cannot
 * drift from what visitors see.
 *
 * In the browser nothing changes. The module still assigns `#app.innerHTML` on
 * load, replacing the pre-rendered nodes wholesale before any listener is
 * attached. There is no hydration step to mismatch, and no node is ever
 * duplicated. See NOTES at the bottom.
 */

import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'
import { createServer } from 'vite'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** url is only used for the message; file is what gets rewritten. */
const targets = [
  { url: '/', file: 'dist/index.html', module: '/src/main.js', location: 'https://solcrestfilm.com/' },
  {
    url: '/privacy-policy',
    file: 'dist/privacy-policy.html',
    module: '/src/legal.js',
    location: 'https://solcrestfilm.com/privacy-policy',
  },
  {
    url: '/terms-and-conditions',
    file: 'dist/terms-and-conditions.html',
    module: '/src/legal.js',
    location: 'https://solcrestfilm.com/terms-and-conditions',
  },
]

const APP_DIV = '<div id="app"></div>'

/**
 * Browser APIs jsdom does not implement, stubbed to be inert.
 *
 * IntersectionObserver matters most: the homepage defers its Instagram request
 * until the section scrolls close, and falls back to fetching immediately when
 * the API is missing. A stub that never fires keeps the build off the network.
 */
function installBrowserStubs(window) {
  class InertIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  }
  window.IntersectionObserver = InertIntersectionObserver

  if (!window.matchMedia) {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
      onchange: null,
      dispatchEvent: () => false,
    })
  }

  // Nothing may reach the network during a build. Anything that tries is a bug
  // worth failing on rather than silently baking a half-rendered page.
  window.fetch = () => Promise.reject(new Error('network access is not available while pre-rendering'))
}

/** Puts the jsdom window's globals where module code expects to find them. */
function installGlobals(window) {
  const names = [
    'window',
    'document',
    'navigator',
    'location',
    'history',
    'localStorage',
    'sessionStorage',
    'getComputedStyle',
    'requestAnimationFrame',
    'cancelAnimationFrame',
    'IntersectionObserver',
    'matchMedia',
    'fetch',
    'Image',
    'Event',
    'CustomEvent',
    'MouseEvent',
    'KeyboardEvent',
    'FormData',
    'Node',
    'Element',
    'HTMLElement',
    'DOMParser',
  ]

  const restore = []
  for (const name of names) {
    const had = name in globalThis
    const previous = globalThis[name]
    const value = name === 'window' ? window : window[name]
    if (value === undefined) continue
    Object.defineProperty(globalThis, name, { value, configurable: true, writable: true })
    restore.push(() => {
      if (had) Object.defineProperty(globalThis, name, { value: previous, configurable: true, writable: true })
      else delete globalThis[name]
    })
  }
  return () => restore.forEach((fn) => fn())
}

async function prerender(target) {
  const filePath = resolve(root, target.file)
  const html = await readFile(filePath, 'utf8')

  if (!html.includes(APP_DIV)) {
    throw new Error(`${target.file}: expected to find ${APP_DIV}`)
  }

  const dom = new JSDOM(html, { url: target.location, pretendToBeVisual: true })
  installBrowserStubs(dom.window)
  const restoreGlobals = installGlobals(dom.window)

  // A fresh server per target: the module graph is cached per server, and
  // legal.js has to run twice — once per route — reading window.location each
  // time.
  const server = await createServer({
    root,
    logLevel: 'error',
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  })

  try {
    await server.ssrLoadModule(target.module)
    const app = dom.window.document.querySelector('#app')
    const markup = app?.innerHTML?.trim() ?? ''

    if (markup.length < 1000) {
      throw new Error(`${target.file}: rendered only ${markup.length} characters, refusing to write`)
    }

    await writeFile(filePath, html.replace(APP_DIV, `<div id="app">${markup}</div>`), 'utf8')
    return { ...target, bytes: markup.length }
  } finally {
    await server.close()
    restoreGlobals()
    dom.window.close()
  }
}

const results = []
for (const target of targets) {
  results.push(await prerender(target))
}

for (const result of results) {
  console.log(`prerendered ${result.url.padEnd(22)} ${String(result.bytes).padStart(7)} bytes → ${result.file}`)
}

/**
 * NOTES on duplication and hydration
 *
 * - Only `#app.innerHTML` is captured. The chat widget appends itself to
 *   <body>, outside #app, so it is never written into the HTML and can never
 *   appear twice.
 * - The client assigns `#app.innerHTML` before it queries for any element, so
 *   every listener binds to nodes it created. Pre-rendered nodes are discarded
 *   in that same assignment — they never receive a listener.
 * - IDs are therefore never duplicated: the pre-rendered copy is gone before
 *   the second copy exists.
 * - There is no hydration: this is pre-rendering for readers that do not run
 *   JS, plus an ordinary client render for those that do.
 */
