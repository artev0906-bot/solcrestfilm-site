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

// The hero photo shares the split grid with the copy; the content photos below
// take the wider of the two columns.
const HERO_SIZES = '(max-width: 900px) 92vw, 40vw'
const CONTENT_SIZES = '(max-width: 900px) 92vw, 42vw'

// Every service page linked from the body copy, not just from the nav
const serviceCards = [
  [
    'Residential Window Film',
    'Heat, glare, UV exposure and daytime privacy in homes — from a single room to full glazing, including skylights where access allows.',
    '/residential-window-film-los-angeles.html',
  ],
  [
    'Commercial Window Film',
    'Offices, retail, restaurants, schools, clinics and industrial buildings, where different areas of the same building usually need different films.',
    '/commercial-window-film-los-angeles.html',
  ],
  [
    'Solar Control Film',
    'Solar-control films that reduce heat and glare while keeping rooms bright and preserving the view.',
    '/residential-window-film-los-angeles.html',
  ],
  [
    'Safety & Security Film',
    'Thicker film that helps hold shattered glass together and increases the time and effort needed to get through an opening.',
    '/safety-security-window-film-los-angeles.html',
  ],
  [
    'Anti-Graffiti Film',
    'A replaceable sacrificial layer over storefront glass, so scratching, tagging and etching land on film instead of the pane.',
    '/anti-graffiti-window-film-los-angeles.html',
  ],
  [
    'Decorative & Privacy Film',
    'Frosted, blackout, whiteout, gradient and printed finishes for partitions, bathrooms, entry glass and interior glazing.',
    '/decorative-privacy-window-film-los-angeles.html',
  ],
  [
    'Smart Film',
    'PDLC switchable film that changes between transparent and private modes using electrical power.',
    '/smart-film-installation-los-angeles.html',
  ],
  [
    'Storefront Window Protection',
    'Anti-graffiti, solar-control and safety film on customer-facing frontage, entry doors and display glass.',
    '/storefront-window-protection-los-angeles.html',
  ],
]

const processSteps = [
  [
    'Send photos and rough sizes',
    'Photos of the glass, approximate width and height, your ZIP code and what you want to fix. That is usually enough for a first recommendation.',
  ],
  [
    'Match the film to the glass',
    'Glass type, orientation and how the space is used decide the film. Dual-pane and older frames change what is appropriate, and we confirm before quoting.',
  ],
  [
    'Agree scope and schedule',
    'What goes where, what it costs and when it happens, in writing before anything starts.',
  ],
  [
    'Installation',
    'Glass is prepared and the film is applied. Many homes and smaller commercial projects can be completed within a day, depending on the number of openings, access and project scope.',
  ],
  [
    'Curing and aftercare',
    'Film cures over days to a few weeks depending on thickness and weather. Some haze during that period is normal, and we explain what to expect and how to clean the glass afterwards.',
  ],
]

const reasons = [
  '15+ years of hands-on experience',
  'Owner-operated',
  'Professional architectural film systems',
  'Clean, precise installation',
  'Residential and commercial',
  'Fast, detailed estimates',
]

const serviceAreas = [
  'Los Angeles',
  'Beverly Hills',
  'Glendale',
  'Burbank',
  'Woodland Hills',
  'West Hills',
  'Porter Ranch',
  'West Hollywood',
  'Santa Monica',
  'Pasadena',
]

const serviceOptions = [
  'Residential Window Film',
  'Commercial Window Film',
  'Solar Control',
  'Safety & Security',
  'Anti-Graffiti',
  'Decorative & Privacy',
  'Smart Film',
  'Storefront Protection',
  'Not Sure',
]

const servicesDropdown = serviceMenuItems
  .map((item) => `<a href="${item.href}">${item.label}</a>`)
  .join('')

const serviceSelectOptions = serviceOptions
  .map((option) => `<option value="${option}">${option}</option>`)
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
          <a href="/about.html" aria-current="page">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <a class="nav-cta nav-cta-secondary" href="${business.phoneHref}">Call / Text Now</a>
          <a class="nav-cta" href="#contact">Get Estimate</a>
        </div>
      </div>
    </header>

    <main>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">→</span>
        <span aria-current="page">About</span>
      </nav>

      <section class="section service-hero service-hero-split">
        <div class="service-hero-copy">
          <p class="eyebrow">Los Angeles Window Film Company</p>
          <h1>About Solcrest Film Co</h1>
          <p class="hero-text service-hero-text">
            Solcrest Film Co LLC installs architectural window film across Los Angeles and surrounding areas — solar control, privacy, safety, anti-graffiti and switchable film for homes and commercial property.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Get a Fast Estimate</a>
            <a class="button button-secondary" href="${business.phoneHref}">Call / Text Now</a>
          </div>
        </div>
        <img
          class="service-hero-photo"
          src="/hero-building-sunset-960.jpg"
          srcset="/hero-building-sunset-560.jpg 560w, /hero-building-sunset-960.jpg 960w, /hero-building-sunset-1440.jpg 1440w, /hero-building-sunset.jpg 2400w"
          sizes="${HERO_SIZES}"
          alt="Sunlit glass frontage of a Los Angeles building at dusk"
          fetchpriority="high"
          decoding="async"
          width="2400"
          height="1350"
        />
      </section>

      <section class="section info-block-section">
        <div class="section-heading">
          <p class="eyebrow">The company</p>
          <h2>An owner-operated window film company in Los Angeles</h2>
        </div>
        <p class="info-block-intro">
          Solcrest Film Co LLC is a window film installation company registered in California and working throughout Los Angeles and the surrounding areas. The company is owner-operated, and every project is managed with direct accountability from estimate through installation.
        </p>
        <p class="info-block-intro">
          We install professional architectural film systems selected for the glass, project goals and installation conditions, rather than applying one product line to everything. Homes, offices, storefronts, clinics and industrial buildings put very different demands on glass, and the film that suits one is rarely the right answer for the next.
        </p>
        <p class="info-block-intro">
          Behind that is 15+ years of hands-on experience with architectural window film — on single panes and full frontages, on new glazing and on glass that has already been through a previous installation.
        </p>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2>What we install</h2>
        </div>
        <div class="card-grid two-up">
          ${serviceCards
            .map(
              ([title, body, href]) => `
                <article class="service-card">
                  <h3>${title}</h3>
                  <p>${body}</p>
                  <p class="card-link"><a href="${href}">${title} →</a></p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section split-section about-split">
        <div>
          <p class="eyebrow">Homes</p>
          <h2>Residential work</h2>
          <p class="info-block-intro">
            Most residential projects start with a room that is too hot in the afternoon, glare on a screen, a window someone can see straight into, or floors and furniture fading in the sun. Many residential projects can be completed within a day, depending on the number of windows, access and installation conditions. Furniture and floors are protected, and we explain curing and aftercare before we leave.
          </p>
          <p class="card-link"><a href="/residential-window-film-los-angeles.html">Residential Window Film →</a></p>
        </div>
        <img
          class="about-photo"
          src="/residential-project-1.jpg"
          srcset="/residential-project-1-560.jpg 560w, /residential-project-1.jpg 1000w"
          sizes="${CONTENT_SIZES}"
          alt="Solar control film installed on the sliding glass doors of a Los Angeles home"
          loading="lazy"
          decoding="async"
          width="1000"
          height="714"
        />
      </section>

      <section class="section split-section about-split">
        <div>
          <p class="eyebrow">Commercial property</p>
          <h2>Commercial work</h2>
          <p class="info-block-intro">
            Commercial glazing rarely has one answer. Perimeter glass, meeting rooms, entry doors and street-level frontage each carry their own problem, and the specification is built area by area. Work is planned around how the building operates — outside trading hours where that is what the site needs, and split into phases on larger buildings.
          </p>
          <p class="card-link"><a href="/commercial-window-film-los-angeles.html">Commercial Window Film →</a></p>
        </div>
        <img
          class="about-photo"
          src="/commercial-project-1.jpg"
          srcset="/commercial-project-1-560.jpg 560w, /commercial-project-1.jpg 1000w"
          sizes="${CONTENT_SIZES}"
          alt="Solar control film on overhead atrium glazing at a Los Angeles shopping center"
          loading="lazy"
          decoding="async"
          width="1000"
          height="752"
        />
      </section>

      <section class="section split-section about-split">
        <div>
          <p class="eyebrow">Process</p>
          <h2>How a project runs</h2>
          <div class="luxury-list about-process-list">
            ${processSteps
              .map(
                ([title, body], index) => `
                  <div>
                    <strong><span class="process-step-num">${index + 1}.</span> ${title}</strong>
                    <span>${body}</span>
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
        <img
          class="about-photo"
          src="/antigraffiti-project-1.jpg"
          srcset="/antigraffiti-project-1-560.jpg 560w, /antigraffiti-project-1.jpg 1000w"
          sizes="${CONTENT_SIZES}"
          alt="Installer applying protective film to commercial storefront glass in Los Angeles"
          loading="lazy"
          decoding="async"
          width="1000"
          height="752"
        />
      </section>

      <section class="section benefits-section">
        <div class="section-heading">
          <p class="eyebrow">Why Solcrest</p>
          <h2>Built around clean execution and direct accountability</h2>
        </div>
        <ul class="benefits-list">
          ${reasons.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </section>

      <section class="section info-block-section">
        <div class="section-heading">
          <p class="eyebrow">For business accounts</p>
          <h2>Working with businesses</h2>
        </div>
        <p class="info-block-intro">
          Commercial work comes with paperwork and scheduling constraints that residential work does not. Both are handled as part of the job rather than left to the end.
        </p>
        <ul class="info-block-list">
          <li>Official invoices are available.</li>
          <li>A W-9 is available upon request.</li>
          <li>Work can be scheduled outside normal business hours.</li>
          <li>Larger projects can be completed in phases.</li>
        </ul>
        <p class="info-block-link"><a href="/commercial-window-film-los-angeles.html">See Commercial Window Film →</a></p>
      </section>

      <section class="section service-areas-note">
        <div class="section-heading">
          <p class="eyebrow">Where we work</p>
          <h2>Los Angeles and surrounding areas</h2>
        </div>
        <p>We travel throughout Los Angeles and the surrounding areas, including:</p>
        <ul class="benefits-list about-areas-list">
          ${serviceAreas.map((area) => `<li>${area}</li>`).join('')}
        </ul>
        <p>If your property is outside this list, send the details anyway and we will tell you whether we can reach it.</p>
      </section>

      <section class="section contact-section contact-section-form" id="contact">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>Tell us about your glass</h2>
          <p>
            Send photos, approximate measurements and your ZIP code. Tell us what you are trying to fix — heat, glare, privacy, safety or appearance — and we will recommend a film and confirm what the work involves.
          </p>
          <div class="contact-block">
            <a href="${business.phoneHref}">${business.phoneDisplay}</a>
            <a href="mailto:${business.email}">${business.email}</a>
            <a class="text-link" href="/">Back to Homepage</a>
          </div>
        </div>
        <form
          id="contact-form"
          class="contact-card"
          action="${business.estimateFormAction}"
          method="POST"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="_subject" value="Solcrest Film Co — General Estimate Request" />
          <input type="hidden" name="Service Category" value="General Estimate Request" />
          <input type="hidden" name="_replyto" value="" />
          <input type="text" name="_gotcha" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true" />

          <p class="form-contact-hint">Please provide either a phone number or email.</p>

          <div class="form-grid two-column-form">
            <label>
              Name
              <input type="text" name="Name" autocomplete="name" required />
            </label>
            <label>
              Phone
              <input type="tel" name="Phone" autocomplete="tel" />
            </label>
            <label>
              Email
              <input type="email" name="Email" autocomplete="email" />
            </label>
            <label>
              ZIP Code
              <input type="text" name="ZIP" autocomplete="postal-code" required />
            </label>
          </div>

          <label>
            Service
            <select name="Service" required>
              <option value="" disabled selected>Select a service</option>
              ${serviceSelectOptions}
            </select>
          </label>

          <label>
            Message / Notes (optional)
            <textarea name="Message / Notes" rows="5" placeholder="Tell us about the glass, goals, square footage, or timeline."></textarea>
          </label>

          <label>
            Photo upload (optional)
            <span class="file-upload-field">
              <input type="file" name="Photo Upload" accept="image/*" multiple class="file-upload-input" />
              <button type="button" class="file-upload-button">Choose Files</button>
              <span class="file-upload-filename">No file chosen</span>
            </span>
          </label>

          <button class="button button-primary submit-button" type="submit">Request My Free Estimate</button>
          <p class="form-promise">We typically reply within one business day.</p>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>
      </section>
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
            <a href="#contact">Request an Estimate</a>
          </div>
        </div>
      </div>
      <div class="footer-premium-bottom">
        <p>&copy; ${new Date().getFullYear()} Solcrest Film Co. All rights reserved.</p>
      </div>
    </footer>

  <div class="sticky-cta-bar">
    <a class="sticky-cta-call" href="${business.phoneHref}">${icon('smartphone')}<span>Call</span></a>
    <a class="sticky-cta-request" href="#contact">${icon('badgeCheck')}<span>Get Estimate</span></a>
  </div>
`

const topbar = document.querySelector('.topbar')
const menuToggle = document.querySelector('.menu-toggle')
const navShell = document.querySelector('.nav-shell')
const dropdownToggle = document.querySelector('.nav-dropdown-toggle')
const contactForm = document.querySelector('#contact-form')
const formStatus = document.querySelector('#form-status')
const replyToField = contactForm?.querySelector('input[name="_replyto"]')
const fileUploadInput = contactForm?.querySelector('.file-upload-input')
const fileUploadButton = contactForm?.querySelector('.file-upload-button')
const fileUploadFilename = contactForm?.querySelector('.file-upload-filename')

fileUploadButton?.addEventListener('click', () => {
  fileUploadInput?.click()
})

fileUploadInput?.addEventListener('change', () => {
  if (!fileUploadFilename) return
  const files = fileUploadInput.files
  if (!files || files.length === 0) {
    fileUploadFilename.textContent = 'No file chosen'
  } else if (files.length === 1) {
    fileUploadFilename.textContent = files[0].name
  } else {
    fileUploadFilename.textContent = `${files.length} files selected`
  }
})

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

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault()

  if (!formStatus) return
  const submitButton = contactForm.querySelector('.submit-button')
  const emailField = contactForm.querySelector('input[name="Email"]')
  const phoneField = contactForm.querySelector('input[name="Phone"]')
  const emailValue = emailField?.value?.trim() ?? ''
  const phoneValue = phoneField?.value?.trim() ?? ''
  if (replyToField) replyToField.value = emailValue

  if (!emailValue && !phoneValue) {
    formStatus.textContent = 'Please leave either a phone number or an email so we can get back to you.'
    emailField?.focus()
    return
  }

  const photoInput = contactForm.querySelector('input[name="Photo Upload"]')
  const selectedFiles = Array.from(photoInput?.files ?? [])

  if (selectedFiles.length > 10) {
    formStatus.textContent = 'Please upload up to 10 photos only.'
    photoInput?.focus()
    return
  }

  const formData = new FormData(contactForm)
  if (selectedFiles.length > 1) {
    formData.delete('Photo Upload')
    selectedFiles.forEach((file) => {
      formData.append('Photo Upload', file)
    })
  } else if (selectedFiles.length === 0) {
    formData.delete('Photo Upload')
  }
  formStatus.textContent = 'Sending your request...'
  submitButton?.setAttribute('disabled', 'disabled')

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    contactForm.reset()
    if (replyToField) replyToField.value = ''
    formStatus.textContent = "Thank you! We'll get back to you within 24 hours."
  } catch (error) {
    formStatus.textContent = 'Something went wrong. Please call or text us and we will help you directly.'
  } finally {
    submitButton?.removeAttribute('disabled')
  }
})

// Points at the same organization node the homepage declares, so the two pages
// describe one business rather than two.
const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: 'https://solcrestfilm.com/about.html',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://solcrestfilm.com/#business',
    name: 'Solcrest Film Co',
    legalName: 'Solcrest Film Co LLC',
    url: 'https://solcrestfilm.com/',
    telephone: '+17473249008',
    email: business.email,
    areaServed: serviceAreas,
    knowsAbout: [
      'Window film installation',
      'Solar control film',
      'Safety and security film',
      'Anti-graffiti film',
      'Decorative and privacy film',
      'PDLC smart film',
    ],
    sameAs: [
      'https://www.instagram.com/solcrestfilmco/',
      'https://www.facebook.com/solcrestfilm/',
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solcrestfilm.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://solcrestfilm.com/about.html' },
  ],
}

;[aboutSchema, breadcrumbSchema].forEach((schema) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
})

mountChatWidget()
