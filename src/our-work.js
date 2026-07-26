import './style.css'
import './our-work.css'
import { icon } from './icons.js'

const IG_API     = '/api/instagram?limit=50'
const CURATED_API = '/api/curated'
const IG_PROFILE = 'https://www.instagram.com/solcrestfilmco/'

const escAttr = (s) =>
  (s || '').replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]))

const CATEGORIES = [
  { id: 'all',          label: 'All Work' },
  { id: 'solar',        label: 'Solar Control' },
  { id: 'privacy',      label: 'Privacy' },
  { id: 'safety',       label: 'Safety & Security' },
  { id: 'antigraffiti', label: 'Anti-Graffiti' },
  { id: 'decorative',   label: 'Decorative' },
  { id: 'smartfilm',    label: 'Smart Film' },
]

// ── Header ──────────────────────────────
const headerHTML = `
  <header class="topbar topbar-on-photo" id="topbar">
    <a class="brand" href="/" aria-label="Solcrest Film Co home">
      <img class="brand-logo" src="/solcrest-logo-header-dark.png" alt="Solcrest Film Co logo" />
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation menu">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-shell" id="mobile-nav">
      <nav class="nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/#services">Services</a>
        <a href="/our-work.html" aria-current="page">Our Work</a>
        <a href="/about.html">About</a>
        <a href="/#contact">Contact</a>
      </nav>
      <div class="nav-actions">
        <a class="nav-cta nav-cta-secondary" href="tel:7473249008">${icon('smartphone')}Call / Text Now</a>
        <a class="nav-cta" href="/#contact">Get Estimate</a>
      </div>
    </div>
  </header>
`

// ── Hero ─────────────────────────────────
const heroHTML = `
  <section class="ow-hero">
    <div class="ow-hero-overlay"></div>
    <div class="ow-hero-content">
      <p class="eyebrow" style="color:rgba(255,255,255,0.8)">Solcrest Film Co — Los Angeles</p>
      <h1>Our Work</h1>
      <p class="ow-hero-sub">Real window film installations — solar control, privacy, safety, anti-graffiti and decorative film across Los Angeles.</p>
      <a class="button button-primary" href="/#contact">${icon('badgeCheck')}Get Free Estimate</a>
    </div>
  </section>
`

// ── Category tabs ─────────────────────────
const tabsHTML = `
  <div class="ow-tabs-bar" id="ow-tabs-bar" role="tablist" aria-label="Filter by service type">
    ${CATEGORIES.map((cat) => `
      <button
        class="ow-tab ${cat.id === 'all' ? 'ow-tab-active' : ''}"
        role="tab"
        aria-selected="${cat.id === 'all' ? 'true' : 'false'}"
        data-cat="${cat.id}"
      >${cat.label}</button>
    `).join('')}
  </div>
`

// ── Gallery ───────────────────────────────
const galleryHTML = `
  <section class="ow-gallery-section">
    <div class="ow-gallery-inner">
      <p class="ow-gallery-label">A selection of our recent projects</p>
      ${tabsHTML}
      <div class="ow-gallery-grid" id="ow-grid">
        ${Array(12).fill('<div class="ow-skeleton"></div>').join('')}
      </div>
      <div class="ow-follow-row">
        <a class="button button-secondary" href="${IG_PROFILE}" target="_blank" rel="noopener noreferrer">
          ${icon('instagram')}&nbsp;Follow @solcrestfilmco for more
        </a>
      </div>
    </div>
  </section>
`

// ── CTA ───────────────────────────────────
const ctaHTML = `
  <section class="ow-cta">
    <div class="ow-cta-inner">
      <p class="eyebrow">Ready to transform your glass?</p>
      <h2>Get a Free Estimate Today</h2>
      <p>Call, text or send photos — we'll get back to you fast.</p>
      <div class="cta-row">
        <a class="button button-primary" href="/#contact">${icon('badgeCheck')}Get Free Estimate</a>
        <a class="button button-secondary" href="sms:7473249008">${icon('smartphone')}Text Us Photos</a>
      </div>
    </div>
  </section>
`

// ── Footer ────────────────────────────────
const footerHTML = `
  <footer class="footer footer-premium">
    <div class="footer-premium-inner">
      <div class="footer-col footer-col-brand">
        <img class="footer-logo" src="/solcrest-logo-header-dark.png" alt="Solcrest Film Co logo" />
        <p class="footer-tagline">Premium Architectural Window Film Installation in Los Angeles</p>
      </div>
      <div class="footer-col footer-col-contact">
        <h4>Contact</h4>
        <p><a href="tel:7473249008">747-324-9008</a></p>
        <p><a href="mailto:info@solcrestfilm.com">info@solcrestfilm.com</a></p>
        <p>Los Angeles, CA</p>
      </div>
      <div class="footer-col footer-col-links">
        <h4>Services</h4>
        <a href="/residential-window-film-los-angeles.html">Solar Control</a>
        <a href="/safety-security-window-film-los-angeles.html">Safety &amp; Security</a>
        <a href="/anti-graffiti-window-film-los-angeles.html">Anti-Graffiti</a>
        <a href="/decorative-privacy-window-film-los-angeles.html">Decorative &amp; Privacy</a>
        <a href="/smart-film-installation-los-angeles.html">Smart Film</a>
        <a href="/storefront-window-protection-los-angeles.html">Storefront Window Protection</a>
        <a href="/commercial-window-film-los-angeles.html">Commercial Window Film</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Solcrest Film Co. All rights reserved.</p>
    </div>
  </footer>
`

// ── Lightbox ──────────────────────────────
const lightboxHTML = `
  <div class="ow-lightbox" id="ow-lightbox" role="dialog" aria-modal="true" aria-label="Project photo" hidden>
    <div class="ow-lightbox-backdrop" id="ow-lb-backdrop"></div>
    <div class="ow-lightbox-card">
      <button class="ow-lb-close" id="ow-lb-close" aria-label="Close">&times;</button>
      <div class="ow-lb-media" id="ow-lb-media"></div>
      <div class="ow-lb-body">
        <p class="ow-lb-caption" id="ow-lb-caption"></p>
        <div class="ow-lb-actions">
          <a class="button button-primary" href="/#contact">${icon('badgeCheck')}Get Estimate</a>
          <a class="ow-lb-ig-link" id="ow-lb-ig" href="${IG_PROFILE}" target="_blank" rel="noopener noreferrer">
            ${icon('instagram')} View on Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
`

// ── Render page ───────────────────────────
document.querySelector('#app').innerHTML =
  headerHTML + heroHTML + galleryHTML + ctaHTML + footerHTML + lightboxHTML

// ── Header behaviour ──────────────────────
const topbar    = document.querySelector('.topbar')
const menuToggle = document.querySelector('.menu-toggle')
const navShell  = document.querySelector('.nav-shell')
let lastY = window.scrollY
let menuOpen = false

menuToggle?.addEventListener('click', () => {
  menuOpen = !menuOpen
  menuToggle.setAttribute('aria-expanded', String(menuOpen))
  navShell?.classList.toggle('nav-shell-open', menuOpen)
  topbar?.classList.toggle('topbar-menu-open', menuOpen)
})

window.addEventListener('scroll', () => {
  const y = window.scrollY
  if (!menuOpen && y > 120 && y > lastY) topbar?.classList.add('topbar-hidden')
  else topbar?.classList.remove('topbar-hidden')
  lastY = y
})

// ── Lightbox ──────────────────────────────
const lightbox  = document.getElementById('ow-lightbox')
const lbMedia   = document.getElementById('ow-lb-media')
const lbCaption = document.getElementById('ow-lb-caption')
const lbIgLink  = document.getElementById('ow-lb-ig')
const lbClose   = document.getElementById('ow-lb-close')
const lbBackdrop = document.getElementById('ow-lb-backdrop')

let carouselSlides = []
let carouselIndex  = 0

function renderCarouselSlide(idx) {
  const slide = carouselSlides[idx]
  const total = carouselSlides.length
  lbMedia.innerHTML = `
    <img src="${slide}" alt="Project photo ${idx + 1} of ${total}" />
    ${total > 1 ? `
    <div class="ow-carousel-nav">
      <button class="ow-carousel-btn ow-carousel-prev" aria-label="Previous">&#8249;</button>
      <span class="ow-carousel-count">${idx + 1} / ${total}</span>
      <button class="ow-carousel-btn ow-carousel-next" aria-label="Next">&#8250;</button>
    </div>` : ''}
  `
  if (total > 1) {
    lbMedia.querySelector('.ow-carousel-prev')?.addEventListener('click', (e) => {
      e.stopPropagation()
      carouselIndex = (carouselIndex - 1 + total) % total
      renderCarouselSlide(carouselIndex)
    })
    lbMedia.querySelector('.ow-carousel-next')?.addEventListener('click', (e) => {
      e.stopPropagation()
      carouselIndex = (carouselIndex + 1) % total
      renderCarouselSlide(carouselIndex)
    })
  }
}

function openLightbox(post) {
  const isVideo    = post.media_type === 'VIDEO'
  const isCarousel = post.media_type === 'CAROUSEL_ALBUM'

  if (isVideo && post.media_url) {
    lbMedia.innerHTML = `<video src="${post.media_url}" poster="${post.thumbnail_url || ''}"
      controls autoplay muted playsinline loop
      style="width:100%;height:100%;object-fit:cover;display:block;"></video>`
  } else if (isCarousel && post.children?.data?.length) {
    carouselSlides = post.children.data.map((c) => c.media_url || c.thumbnail_url || '')
    carouselIndex  = 0
    renderCarouselSlide(0)
  } else {
    lbMedia.innerHTML = `<img src="${post.media_url || post.thumbnail_url || ''}" alt="Project photo" />`
  }

  lbCaption.textContent = post.siteCaption || post.caption || ''
  lbIgLink.href = post.permalink
  lightbox.hidden = false
  document.body.style.overflow = 'hidden'
  lbClose.focus()
}

function closeLightbox() {
  const vid = lbMedia.querySelector('video')
  if (vid) { vid.pause(); vid.src = '' }
  lightbox.hidden = true
  document.body.style.overflow = ''
  lbMedia.innerHTML = ''
  carouselSlides = []
}

lbClose?.addEventListener('click', closeLightbox)
lbBackdrop?.addEventListener('click', closeLightbox)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox()
  if (e.key === 'ArrowLeft'  && !lightbox.hidden && carouselSlides.length > 1) {
    carouselIndex = (carouselIndex - 1 + carouselSlides.length) % carouselSlides.length
    renderCarouselSlide(carouselIndex)
  }
  if (e.key === 'ArrowRight' && !lightbox.hidden && carouselSlides.length > 1) {
    carouselIndex = (carouselIndex + 1) % carouselSlides.length
    renderCarouselSlide(carouselIndex)
  }
})

// ── Gallery ───────────────────────────────
let allPosts = []   // merged posts for display
let activeFilter = 'all'
let postMap = {}    // id → post, updated on each render

async function loadGallery() {
  const grid = document.getElementById('ow-grid')
  if (!grid) return

  try {
    // Single request to our own Redis cache — no Instagram API needed
    const curatedData = await fetch(CURATED_API).then((r) => r.json()).catch(() => ({ posts: [] }))
    const curated = curatedData.posts || []

    if (curated.length > 0) {
      // Use stored media data directly from Redis
      allPosts = curated
        .filter((c) => c.visible && c.thumb)
        .map((c) => ({
          id:           c.id,
          media_url:    c.videoUrl || c.thumb,
          thumbnail_url: c.thumb,
          media_type:   c.media_type || 'IMAGE',
          permalink:    c.permalink || '',
          children:     c.children?.length
            ? { data: c.children }
            : null,
          siteCaption:  c.caption || '',
          category:     c.category || '',
        }))
    } else {
      // Fallback: no curated data yet — fetch first page from Instagram
      const igData = await fetch('/api/instagram?limit=100').then((r) => r.json())
      const igPosts = igData.data || []
      allPosts = igPosts
        .filter((p) => p.media_type === 'VIDEO' ? p.thumbnail_url : (p.media_url || p.thumbnail_url))
        .map((p) => ({ ...p, siteCaption: p.caption || '', category: '' }))
    }

    renderGallery()
    bindTabs()
  } catch (_) {
    grid.innerHTML = `
      <p style="grid-column:1/-1;text-align:center;color:#3D2B1F;padding:3rem;">
        <a href="${IG_PROFILE}" target="_blank" rel="noopener noreferrer" style="color:#A9824F;text-decoration:underline;font-weight:600;">
          View our latest projects on Instagram →
        </a>
      </p>`
  }
}

function renderGallery() {
  const grid = document.getElementById('ow-grid')
  if (!grid) return

  const filtered = activeFilter === 'all'
    ? allPosts
    : allPosts.filter((p) => p.category === activeFilter)

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:3rem;color:rgba(61,43,31,0.55)">No projects in this category yet.</p>`
    return
  }

  grid.innerHTML = filtered.map((post) => {
    const thumb   = post.thumbnail_url || post.media_url || ''
    const raw     = (post.siteCaption || '').trim()
    const caption = escAttr(raw.length > 80 ? raw.slice(0, 80) + '…' : raw)
    const isVideo = post.media_type === 'VIDEO'

    return `
      <button class="ow-grid-item" data-post-id="${post.id}" aria-label="View project: ${caption || 'Window film project'}">
        <img src="${thumb}" alt="${caption || 'Window film project'}" loading="lazy" decoding="async" />
        ${isVideo ? '<span class="ow-reel-badge">&#9654; Reel</span>' : ''}
        <div class="ow-grid-overlay">
          <p>${caption}</p>
          <span class="ow-view-btn">View Project</span>
        </div>
      </button>
    `
  }).join('')

  // Update post lookup map for the lightbox click handler
  postMap = Object.fromEntries(filtered.map((p) => [p.id, p]))
}

function bindTabs() {
  const bar = document.getElementById('ow-tabs-bar')
  if (!bar) return

  // Hide tabs that have no posts (except 'all')
  const usedCats = new Set(allPosts.map((p) => p.category).filter(Boolean))
  bar.querySelectorAll('.ow-tab[data-cat]').forEach((tab) => {
    const cat = tab.dataset.cat
    if (cat !== 'all' && !usedCats.has(cat)) {
      tab.style.display = 'none'
    }
  })

  bar.querySelectorAll('.ow-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      activeFilter = tab.dataset.cat
      bar.querySelectorAll('.ow-tab').forEach((t) => {
        t.classList.toggle('ow-tab-active', t === tab)
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false')
      })
      renderGallery()
    })
  })
}

// Single delegated click listener — attached once, uses the shared postMap
const grid = document.getElementById('ow-grid')
if (grid) {
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.ow-grid-item')
    if (!btn) return
    const post = postMap[btn.dataset.postId]
    if (post) openLightbox(post)
  })
}

loadGallery()
