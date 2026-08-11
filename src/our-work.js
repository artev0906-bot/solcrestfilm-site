import './style.css'
import './our-work.css'
import { icon } from './icons.js'
import { mountOutboundTracking } from './analytics.js'

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
        <a class="nav-cta nav-cta-secondary" href="tel:+12132143212">${icon('smartphone')}Call / Text Now</a>
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
      <h1>Our Window Film Work in Los Angeles</h1>
      <p class="ow-hero-sub">Window film projects completed across Los Angeles — storefronts, offices, homes and interior glass. The featured projects below show the work completed and the film systems used; the gallery underneath is updated with more of our work.</p>
      <a class="button button-primary" href="/#contact">${icon('badgeCheck')}Get Free Estimate</a>
    </div>
  </section>
`

// ── Featured projects ─────────────────────
// Static, served from our own /public, and each one already published on its
// service page. They stay on the page whether or not the Instagram gallery
// below loads, and they are the only work here a crawler can actually read.
const featuredProjects = [
  {
    img: '/storefront-project-1.jpg',
    srcset: '/storefront-project-1-560.jpg 560w, /storefront-project-1.jpg 1000w',
    w: 1000,
    h: 752,
    alt: 'Glass polishing and anti-graffiti film installation on a retail storefront in Hollywood, Los Angeles',
    title: 'Retail Storefront Restoration',
    area: 'Hollywood',
    tag: 'Glass Polishing + Anti-Graffiti Film',
    body: 'The existing storefront glass was polished to remove surface damage, then protected with a new replaceable layer of anti-graffiti film.',
    href: '/anti-graffiti-window-film-los-angeles.html',
    linkLabel: 'Anti-Graffiti Film →',
  },
  {
    img: '/storefront-project-2.jpg',
    srcset: '/storefront-project-2-560.jpg 560w, /storefront-project-2.jpg 1000w',
    w: 1000,
    h: 752,
    alt: 'Dark solar control film installed across the storefront glass of a Los Angeles commercial unit',
    title: 'Commercial Storefront Tint',
    area: 'Los Angeles',
    tag: 'Black Solar-Control Film',
    body: 'Dark solar-control film across the full storefront glazing, cutting heat and glare and giving the frontage a uniform look from the street.',
    href: '/storefront-window-protection-los-angeles.html',
    linkLabel: 'Storefront Window Protection →',
  },
  {
    img: '/commercial-project-1.jpg',
    srcset: '/commercial-project-1-560.jpg 560w, /commercial-project-1.jpg 1000w',
    w: 1000,
    h: 750,
    alt: 'Solar control film installed across the windows of a two-story office building in the Los Angeles area',
    title: 'Office Building Solar Control',
    area: 'Los Angeles Area',
    tag: 'Solar Control Film',
    body: 'The old film was removed, the glass was cleaned and prepared, and new solar-control film was installed across 930 sq. ft. of office windows. The project was completed in three days.',
    href: '/commercial-window-film-los-angeles.html',
    linkLabel: 'Commercial Window Film →',
  },
  {
    img: '/residential-project-1.jpg',
    srcset: '/residential-project-1-560.jpg 560w, /residential-project-1.jpg 1000w',
    w: 1000,
    h: 714,
    alt: 'Protective solar control film installed on the sliding glass doors of a Los Angeles home',
    title: 'Modern Hillside Home',
    area: 'Los Angeles',
    tag: 'Heat Control + Safety Film',
    body: 'Solar-control film installed across the home, with safety film added to the accessible doors and windows.',
    href: '/residential-window-film-los-angeles.html',
    linkLabel: 'Residential Window Film →',
  },
  {
    img: '/decorative-project-1.jpg',
    w: 1000,
    h: 752,
    alt: 'Blackout film installed on a full-height interior glass wall in a Los Angeles studio space',
    title: 'Studio Glass Wall',
    area: 'Los Angeles',
    tag: 'Blackout Film',
    body: 'Opaque black film across a full-height glass wall, blocking light and separating the room without building a partition.',
    href: '/decorative-privacy-window-film-los-angeles.html',
    linkLabel: 'Decorative & Privacy Film →',
  },
  {
    img: '/safety-project-1.jpg',
    w: 1000,
    h: 752,
    alt: 'Clear safety film installed on a residential entry door and its glass sidelights in Los Angeles',
    title: 'Residential Entry Door & Sidelights',
    area: 'Los Angeles',
    tag: 'Clear Safety Film',
    body: 'Clear safety film on the door glass and both sidelights — the most accessible glass on the house — with no change to how the entry looks.',
    href: '/safety-security-window-film-los-angeles.html',
    linkLabel: 'Safety & Security Film →',
  },
]

const featuredHTML = `
  <section class="section ow-featured" id="featured">
    <div class="section-heading">
      <p class="eyebrow">Selected work</p>
      <h2>Featured Projects</h2>
    </div>
    <div class="card-grid two-up project-mini-grid">
      ${featuredProjects
        .map(
          (project) => `
            <article class="service-card project-mini">
              <img
                src="${project.img}"
                ${project.srcset ? `srcset="${project.srcset}" sizes="(max-width: 640px) 92vw, (max-width: 900px) 85vw, 44vw"` : ''}
                alt="${project.alt}"
                loading="lazy"
                decoding="async"
                width="${project.w}"
                height="${project.h}"
              />
              <div class="project-mini-body">
                <h3 class="project-mini-title">${project.title}</h3>
                <p class="project-mini-meta">${project.area} · ${project.tag}</p>
                <p>${project.body}</p>
                <p class="card-link"><a href="${project.href}">${project.linkLabel}</a></p>
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
  </section>
`

// ── Browse by service ─────────────────────
const browseHTML = `
  <section class="section ow-browse">
    <div class="section-heading">
      <p class="eyebrow">By service</p>
      <h2>Browse by service</h2>
    </div>
    <div class="footer-quick-links ow-browse-links">
      <a href="/residential-window-film-los-angeles.html">Residential Window Film</a>
      <a href="/commercial-window-film-los-angeles.html">Commercial Window Film</a>
      <a href="/safety-security-window-film-los-angeles.html">Safety &amp; Security Film</a>
      <a href="/anti-graffiti-window-film-los-angeles.html">Anti-Graffiti Film</a>
      <a href="/decorative-privacy-window-film-los-angeles.html">Decorative &amp; Privacy Film</a>
      <a href="/smart-film-installation-los-angeles.html">Smart Film</a>
      <a href="/storefront-window-protection-los-angeles.html">Storefront Window Protection</a>
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
        <a class="button button-secondary" href="sms:+12132143212">${icon('smartphone')}Text Us Photos</a>
      </div>
    </div>
  </section>
`

// ── Footer ────────────────────────────────
const footerHTML = `
  <footer class="footer footer-premium">
    <div class="footer-premium-inner footer-premium-inner-service">
      <div class="footer-col footer-col-brand">
        <img
          class="footer-logo"
          src="/solcrest-logo-header-dark.png"
          alt="Solcrest Film Co premium window film Los Angeles logo"
          width="573"
          height="202"
        />
        <p class="footer-tagline">Premium Architectural Window Film Installation in Los Angeles</p>
      </div>
      <div class="footer-col footer-col-contact">
        <h3 class="footer-col-title">Contact</h3>
        <p><a href="tel:+12132143212">+1 (213) 214-3212</a></p>
        <p><a href="mailto:info@solcrestfilm.com">info@solcrestfilm.com</a></p>
        <div class="social-links footer-premium-social">
          <a href="https://www.instagram.com/solcrestfilmco/" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Instagram">${icon('instagram')}</a>
          <a href="https://www.facebook.com/solcrestfilm/" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Facebook">${icon('facebook')}</a>
          <a href="https://share.google/TTXOlBBFKuizqpQMi" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Google Business Profile">${icon('google')}</a>
        </div>
      </div>
      <div class="footer-col footer-col-links">
        <h3 class="footer-col-title">Services</h3>
        <div class="footer-quick-links">
          <a href="/residential-window-film-los-angeles.html">Residential Window Film</a>
          <a href="/commercial-window-film-los-angeles.html">Commercial Window Film</a>
          <a href="/safety-security-window-film-los-angeles.html">Safety &amp; Security Film</a>
          <a href="/anti-graffiti-window-film-los-angeles.html">Anti-Graffiti Film</a>
          <a href="/decorative-privacy-window-film-los-angeles.html">Decorative &amp; Privacy Film</a>
          <a href="/smart-film-installation-los-angeles.html">Smart Film</a>
          <a href="/storefront-window-protection-los-angeles.html">Storefront Window Protection</a>
        </div>
      </div>
      <div class="footer-col footer-col-areas">
        <h3 class="footer-col-title">Service Areas</h3>
        <p class="footer-areas-text">
          Los Angeles, Beverly Hills, Glendale, Burbank, Woodland Hills, West Hills, Porter Ranch and nearby communities.
        </p>
        <div class="footer-quick-links footer-quick-links-tight">
          <a href="/our-work.html">Our Work</a>
          <a href="/about.html">About</a>
          <a href="/#contact">Request an Estimate</a>
        </div>
      </div>
    </div>
    <div class="footer-premium-bottom">
      <p>&copy; ${new Date().getFullYear()} Solcrest Film Co. All rights reserved.</p>
      <p class="footer-legal-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <span aria-hidden="true">·</span>
        <a href="/terms-and-conditions">Terms &amp; Conditions</a>
      </p>
    </div>
  </footer>
`

const stickyCtaHTML = `
  <div class="sticky-cta-bar">
    <a class="sticky-cta-call" href="tel:+12132143212">${icon('smartphone')}<span>Call</span></a>
    <a class="sticky-cta-request" href="/#contact">${icon('badgeCheck')}<span>Get Estimate</span></a>
  </div>
`

const breadcrumbsHTML = `
  <nav class="breadcrumbs ow-breadcrumbs" aria-label="Breadcrumb">
    <a href="/">Home</a>
    <span aria-hidden="true">→</span>
    <span aria-current="page">Our Work</span>
  </nav>
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
  headerHTML +
  heroHTML +
  breadcrumbsHTML +
  featuredHTML +
  galleryHTML +
  browseHTML +
  ctaHTML +
  footerHTML +
  stickyCtaHTML +
  lightboxHTML

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
  // A carousel can mix stills and clips, so a slide is only an <img> when it
  // actually is one. Video slides load their file here, on open, never in the grid.
  const media = slide.media_type === 'VIDEO'
    ? `<video src="${escAttr(slide.url)}" ${slide.thumb ? `poster="${escAttr(slide.thumb)}"` : ''}
        controls playsinline preload="none"
        style="width:100%;height:100%;object-fit:cover;display:block;"></video>`
    : `<img src="${escAttr(slide.url)}" alt="Project photo ${idx + 1} of ${total}" />`

  lbMedia.innerHTML = `
    ${media}
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

  if (isVideo && post.videoUrl) {
    lbMedia.innerHTML = `<video src="${escAttr(post.videoUrl)}" poster="${escAttr(post.thumbnail_url || '')}"
      controls autoplay muted playsinline loop preload="none"
      style="width:100%;height:100%;object-fit:cover;display:block;"></video>`
  } else if (isCarousel && post.slides?.length) {
    carouselSlides = post.slides
    carouselIndex  = 0
    renderCarouselSlide(0)
  } else {
    lbMedia.innerHTML = `<img src="${escAttr(post.thumbnail_url || post.media_url || '')}" alt="Project photo" />`
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

// ── Alt text ──────────────────────────────
// Instagram captions are written for Instagram: hashtags, handles, links and
// long runs of emoji. None of that helps a screen reader or image search, so a
// caption is reduced to its first real sentence before it becomes alt text.
// Nothing is invented — a post with nothing usable falls back to its confirmed
// category, and an uncategorised one says only that it is a window film project.
const CATEGORY_ALT = {
  solar: 'Solar control window film project in Los Angeles',
  privacy: 'Privacy window film project in Los Angeles',
  safety: 'Safety and security window film project in Los Angeles',
  antigraffiti: 'Anti-graffiti film project in Los Angeles',
  decorative: 'Decorative window film project in Los Angeles',
  smartfilm: 'Smart film project in Los Angeles',
}
const GENERIC_ALT = 'Window film project in Los Angeles'

function cleanCaption(raw) {
  const stripped = (raw || '')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/@[\w.]+/g, ' ')
    .replace(/#[\p{L}\p{N}_]+/gu, ' ')
    .replace(/(\p{Extended_Pictographic}\s*){2,}/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (!stripped) return ''

  const firstSentence = stripped.split(/(?<=[.!?])\s+/)[0].trim()
  const text = firstSentence.length > 120
    ? firstSentence.slice(0, 110).replace(/\s+\S*$/, '') + '…'
    : firstSentence

  // Too short to describe anything — treat as unusable rather than shipping noise.
  return text.length < 12 ? '' : text
}

function altFor(post) {
  return (
    (post.siteCaption || '').trim() ||
    cleanCaption(post.sourceCaption) ||
    CATEGORY_ALT[post.category] ||
    GENERIC_ALT
  )
}

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
          videoUrl:     c.videoUrl || '',
          thumbnail_url: c.thumb,
          media_type:   c.media_type || 'IMAGE',
          permalink:    c.permalink || '',
          slides:       Array.isArray(c.children) ? c.children.filter((s) => s.url) : [],
          siteCaption:  c.caption || '',
          sourceCaption: c.sourceCaption || '',
          category:     c.category || '',
          pinned:       Boolean(c.pinned),
        }))
        .sort((a, b) => Number(b.pinned) - Number(a.pinned))
    } else {
      // Fallback: no curated data yet — fetch first page from Instagram
      const igData = await fetch('/api/instagram?limit=100').then((r) => r.json())
      const igPosts = igData.data || []
      allPosts = igPosts
        .filter((p) => p.media_type === 'VIDEO' ? p.thumbnail_url : (p.media_url || p.thumbnail_url))
        .map((p) => ({
          id: p.id,
          videoUrl: p.media_type === 'VIDEO' ? p.media_url || '' : '',
          thumbnail_url: p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url || p.thumbnail_url,
          media_type: p.media_type,
          permalink: p.permalink || '',
          slides: (p.children?.data || []).map((child) => ({
            id: child.id,
            media_type: child.media_type,
            url: child.media_url || '',
            thumb: child.thumbnail_url || null,
          })),
          siteCaption: '',
          sourceCaption: p.caption || '',
          category: '',
          pinned: false,
        }))
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
    // Always the still, never the video file — the clip loads when the
    // lightbox opens.
    const thumb   = post.thumbnail_url || ''
    const raw     = (post.siteCaption || '').trim()
    const caption = escAttr(raw.length > 80 ? raw.slice(0, 80) + '…' : raw)
    const alt     = escAttr(altFor(post))
    const isVideo = post.media_type === 'VIDEO'

    return `
      <button class="ow-grid-item" data-post-id="${post.id}" aria-label="View project: ${alt}">
        <img src="${thumb}" alt="${alt}" loading="lazy" decoding="async" />
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

// ── Structured data ───────────────────────
// Only the featured projects are described. The Instagram tiles sit on signed
// CDN URLs that expire, so publishing them as ImageObjects would mean shipping
// markup that rots.
const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Work — Window Film Projects in Los Angeles',
  url: 'https://solcrestfilm.com/our-work.html',
  isPartOf: { '@id': 'https://solcrestfilm.com/#business' },
  about: { '@id': 'https://solcrestfilm.com/#business' },
  hasPart: featuredProjects.map((project) => ({
    '@type': 'ImageObject',
    contentUrl: `https://solcrestfilm.com${project.img}`,
    name: project.title,
    caption: `${project.title} — ${project.area} · ${project.tag}`,
    description: project.body,
    width: project.w,
    height: project.h,
    contentLocation: { '@type': 'Place', name: `${project.area}, CA` },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solcrestfilm.com/' },
    { '@type': 'ListItem', position: 2, name: 'Our Work', item: 'https://solcrestfilm.com/our-work.html' },
  ],
}

// Inside #app rather than <head>: the pre-render step captures #app and
// nothing else, so a head injection never reached the static HTML a crawler
// reads. See the fuller note in service-page.js.
;[collectionSchema, breadcrumbSchema].forEach((schema) => {
  document
    .querySelector('#app')
    .insertAdjacentHTML(
      'beforeend',
      `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`,
    )
})

mountOutboundTracking()
