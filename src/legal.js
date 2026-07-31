import './style.css'
import { icon } from './icons.js'
import { mountChatWidget } from './chat-widget.js'

/**
 * Renderer for the two legal pages. Both share the site shell, so they live in
 * one module and pick their content from the route, the same way the service
 * pages do.
 */

const business = {
  phoneDisplay: '747-324-9008',
  phoneHref: 'tel:7473249008',
  email: 'info@solcrestfilm.com',
  legalName: 'Solcrest Film Co LLC',
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

const SMS_LINES = [
  'Message frequency varies.',
  'Msg &amp; data rates may apply.',
  'Reply STOP to opt out.',
  'Reply HELP for help.',
]

const pages = {
  'privacy-policy': {
    crumb: 'Privacy Policy',
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    intro:
      'This policy explains what Solcrest Film Co LLC collects when you contact us, why we collect it, and how it is used. It applies to solcrestfilm.com and to the estimate forms on it.',
    sections: [
      {
        title: 'Information we collect',
        body: 'We collect the details you choose to send us through an estimate form on this website, a phone call, a text message or email: your name, phone number, email address, ZIP code, the service you are asking about, any notes you write, and any photographs of your glass that you upload. We do not ask for payment card details on this website.',
        points: [
          'Contact details you enter yourself.',
          'Project details and photographs you send us.',
          'Standard analytics data about how the site is used, collected through Google Analytics.',
        ],
      },
      {
        title: 'How we use it',
        body: 'Your details are used to answer your request, prepare an estimate, arrange a visit, carry out the work and follow up afterwards. Analytics data is used only in aggregate to understand which pages are useful.',
      },
      {
        title: 'SMS and phone communication',
        body: 'Solcrest Film Co may use SMS to respond to customer requests, send estimate updates, appointment scheduling messages, reminders, service follow-ups, and occasional promotional messages if the customer opts in.',
        points: [
          ...SMS_LINES,
          'SMS consent is not sold, rented, or shared with third parties or affiliates for marketing purposes.',
          'SMS consent may only be shared with service providers necessary to deliver messages.',
        ],
      },
      {
        title: 'Who your information is shared with',
        body: 'We do not sell or rent your personal information. It is shared only with the service providers we need in order to run the business — for example the platforms that host this website, deliver our forms, and send our messages — and only to the extent required to provide those services. It may also be disclosed where the law requires it.',
      },
      {
        title: 'How long we keep it',
        body: 'Enquiry and project records are kept for as long as needed to serve you and to meet our business and tax obligations, then deleted.',
      },
      {
        title: 'Cookies and analytics',
        body: 'This site uses Google Analytics, which sets cookies to measure page visits. You can block or delete these cookies in your browser settings; the site works without them.',
      },
      {
        title: 'Your choices',
        body: 'You can ask us what information we hold about you, ask for it to be corrected or deleted, and withdraw consent to marketing at any time. To opt out of text messages reply STOP to any message from us. To reach us about anything in this policy, use the contact details below.',
      },
      {
        title: 'Contact',
        body: `Solcrest Film Co LLC — Los Angeles, California. Email ${business.email} or call ${business.phoneDisplay}.`,
      },
    ],
  },

  'terms-and-conditions': {
    crumb: 'Terms & Conditions',
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    intro:
      'These terms cover the use of solcrestfilm.com and the estimate forms and messaging offered through it. By using the site you accept them.',
    sections: [
      {
        title: 'About us',
        body: 'This website is operated by Solcrest Film Co LLC, a window film installation company registered in California and working across Los Angeles and the surrounding areas.',
      },
      {
        title: 'Estimates and quotations',
        body: 'Anything shown on this site is information, not a binding offer. Prices, timelines and product recommendations are confirmed in a written estimate for your specific glass after we have seen photographs, measurements and, where needed, the site itself.',
      },
      {
        title: 'SMS and calling terms',
        body: 'By submitting a form on this website and opting in, the user agrees to receive calls and text messages from Solcrest Film Co. Messages may include estimate updates, appointment scheduling, service follow-ups, reminders, and promotional offers if opted in.',
        points: ['Consent is not a condition of purchase.', ...SMS_LINES],
      },
      {
        title: 'Use of this website',
        body: 'You agree not to misuse the site, submit false information, or send content you have no right to share. Photographs you upload are used only to prepare and carry out your project.',
      },
      {
        title: 'Content and photographs',
        body: 'Text, photographs and graphics on this site belong to Solcrest Film Co LLC unless stated otherwise, and may not be reproduced without permission. Project photographs show completed work; the finish on your own glass depends on the film selected, the glass itself and the installation conditions.',
      },
      {
        title: 'Limitation of liability',
        body: 'The site is provided as it is. We are not liable for decisions made solely on the basis of information published here rather than on a written estimate. Nothing in these terms limits any liability that cannot be limited by law.',
      },
      {
        title: 'Changes',
        body: 'These terms may be updated from time to time. The version published on this page is the one that applies.',
      },
      {
        title: 'Contact',
        body: `Questions about these terms: email ${business.email} or call ${business.phoneDisplay}.`,
      },
    ],
  },
}

const route = window.location.pathname.replace(/\.html$/, '').replace(/^\//, '') || 'privacy-policy'
const page = pages[route] ?? pages['privacy-policy']

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
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">→</span>
        <span aria-current="page">${page.crumb}</span>
      </nav>

      <section class="section legal-hero">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1>${page.title}</h1>
        <p class="hero-text service-hero-text">${page.intro}</p>
        <p class="legal-updated">Last updated: 29 July 2026</p>
      </section>

      ${page.sections
        .map(
          (section) => `
            <section class="section info-block-section legal-section">
              <div class="section-heading">
                <h2>${section.title}</h2>
              </div>
              <p class="info-block-intro">${section.body}</p>
              ${
                section.points
                  ? `<ul class="info-block-list">${section.points.map((p) => `<li>${p}</li>`).join('')}</ul>`
                  : ''
              }
            </section>
          `,
        )
        .join('')}
    </main>
  </div>

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
          <p><a href="${business.phoneHref}">${business.phoneDisplay}</a></p>
          <p><a href="mailto:${business.email}">${business.email}</a></p>
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

menuToggle?.addEventListener('click', () => setMenuState(!menuOpen))
dropdownToggle?.addEventListener('click', () => setServicesState(!servicesOpen))

document.addEventListener('click', (event) => {
  if (!servicesOpen) return
  const dropdown = dropdownToggle?.parentElement
  if (dropdown && !dropdown.contains(event.target)) setServicesState(false)
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
  if (window.innerWidth > 860) setMenuState(false)
})

mountChatWidget()
