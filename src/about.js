import './style.css'
import { icon } from './icons.js'
import { mountChatWidget } from './chat-widget.js'

const business = {
  phoneDisplay: '747-324-9008',
  phoneHref: 'tel:7473249008',
  textHref: 'sms:7473249008',
  email: 'info@solcrestfilm.com',
  estimateFormAction: 'https://formspree.io/f/xdargbee',
}

const serviceMenuItems = [
  { label: 'Solar Control', href: '/residential-window-film-los-angeles.html' },
  { label: 'Safety & Security', href: '/safety-security-window-film-los-angeles.html' },
  { label: 'Anti-Graffiti', href: '/anti-graffiti-window-film-los-angeles.html' },
  { label: 'Decorative & Privacy', href: '/decorative-privacy-window-film-los-angeles.html' },
  { label: 'Smart Film', href: '/smart-film-installation-los-angeles.html' },
  { label: 'Storefront Window Protection', href: '/storefront-window-protection-los-angeles.html' },
  { label: 'Commercial Window Film', href: '/commercial-window-film-los-angeles.html' },
]

const servicesDropdown = serviceMenuItems
  .map((item) => `<a href="${item.href}">${item.label}</a>`)
  .join('')

document.querySelector('#app').innerHTML = `
  <div class="site-shell service-page-shell">
    <header class="topbar" id="topbar">
      <a class="brand" href="/" aria-label="Solcrest Film Co home">
        <img
          class="brand-logo"
          src="/solcrest-logo-light.png"
          alt="Solcrest Film Co premium window film Los Angeles logo"
        />
      </a>

      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-shell" id="mobile-nav">
        <nav class="nav" aria-label="Main navigation">
          <a href="/#hero">Home</a>
          <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" type="button" aria-expanded="false">Services</button>
            <div class="nav-dropdown-menu">
              ${servicesDropdown}
            </div>
          </div>
          <a href="/residential-window-film-los-angeles.html">Residential</a>
          <a href="/commercial-window-film-los-angeles.html">Commercial</a>
          <a href="/about.html">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <a class="nav-cta nav-cta-secondary" href="${business.phoneHref}">Call / Text Now</a>
          <a class="nav-cta" href="/#contact">Get Estimate</a>
        </div>
      </div>
    </header>

    <main>
      <section class="section service-hero">
        <p class="eyebrow">About Solcrest Film Co</p>
        <h1>About Solcrest Film Co</h1>
        <p class="hero-text service-hero-text">
          Solcrest Film Co is a premium window film installation company based in Los Angeles with over 11 years of hands-on experience.
          We work with homeowners, property managers, business owners and commercial developers across Los Angeles and surrounding areas.
          Every installation is done with precision, clean technique and premium materials — no shortcuts, no subcontractors.
          We handle solar control, safety and security, anti-graffiti, decorative and smart film projects of any size.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="/#contact">Get a Fast Estimate</a>
          <a class="button button-secondary" href="${business.phoneHref}">Call / Text Now</a>
        </div>
      </section>

      <section class="section split-section">
        <div>
          <p class="eyebrow">Why clients choose us</p>
          <h2>Built around clean execution, premium materials and direct accountability.</h2>
        </div>
        <div class="luxury-list">
          <div>11+ years experience</div>
          <div>Owner-operated</div>
          <div>Premium materials only</div>
          <div>Clean and precise installation</div>
          <div>Residential and commercial</div>
          <div>Fast estimates</div>
        </div>
      </section>

      <section class="section final-cta">
        <div class="section-heading narrow-center">
          <p class="eyebrow">Ready to talk?</p>
          <h2>Get a Fast Estimate</h2>
          <p>Send your project details, city, and photos through the estimate form on the homepage.</p>
        </div>
        <div class="cta-row center-cta-row">
          <a class="button button-primary" href="/#contact">Get a Fast Estimate</a>
          <a class="button button-secondary" href="${business.textHref}">Text Us</a>
        </div>
      </section>
    </main>
  </div>

  <footer class="footer">
      <div>
        <strong>SOLCREST FILM CO</strong>
        <p>Premium Architectural Window Film Installation in Los Angeles.</p>
        <p><a href="mailto:${business.email}">${business.email}</a></p>
        <p><a href="${business.phoneHref}">${business.phoneDisplay}</a></p>
      </div>
      <div class="footer-links">
        <a href="/">Home</a>
        <a href="/residential-window-film-los-angeles.html">Residential</a>
        <a href="/commercial-window-film-los-angeles.html">Commercial</a>
        <a href="/#contact">Estimate</a>
      </div>
    </footer>

  <div class="sticky-cta-bar">
    <a class="sticky-cta-call" href="${business.phoneHref}">${icon('smartphone')}<span>Call</span></a>
    <a class="sticky-cta-request" href="/#contact">${icon('badgeCheck')}<span>Get Estimate</span></a>
  </div>
`

const topbar = document.querySelector('.topbar')
const menuToggle = document.querySelector('.menu-toggle')
const navShell = document.querySelector('.nav-shell')
const dropdownToggle = document.querySelector('.nav-dropdown-toggle')

let lastScrollY = window.scrollY
let menuOpen = false
let servicesOpen = false

const setMenuState = (open) => {
  menuOpen = open
  if (!menuToggle || !navShell) return
  menuToggle.setAttribute('aria-expanded', String(open))
  navShell.classList.toggle('nav-shell-open', open)
  topbar?.classList.toggle('topbar-menu-open', open)
}

const setServicesState = (open) => {
  servicesOpen = open
  if (!dropdownToggle) return
  dropdownToggle.setAttribute('aria-expanded', String(open))
  dropdownToggle.parentElement?.classList.toggle('nav-dropdown-open', open)
}

window.addEventListener('scroll', () => {
  if (!topbar) return
  const currentY = window.scrollY
  if (!menuOpen && currentY > 120 && currentY > lastScrollY) {
    topbar.classList.add('topbar-hidden')
  } else {
    topbar.classList.remove('topbar-hidden')
  }
  lastScrollY = currentY
})

menuToggle?.addEventListener('click', () => {
  setMenuState(!menuOpen)
})

dropdownToggle?.addEventListener('click', () => {
  setServicesState(!servicesOpen)
})

document.addEventListener('click', (event) => {
  if (!servicesOpen) return
  const dropdown = dropdownToggle?.parentElement
  if (dropdown && !dropdown.contains(event.target)) {
    setServicesState(false)
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && servicesOpen) {
    setServicesState(false)
    dropdownToggle?.focus()
  }
})

navShell?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false)
    setServicesState(false)
  })
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    setMenuState(false)
  }
})

mountChatWidget()
