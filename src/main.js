import './style.css'

const business = {
  phoneDisplay: '747-324-9008',
  phoneHref: 'tel:7473249008',
  textHref: 'sms:7473249008',
  email: 'info@solcrestfilm.com',
  estimateFormAction: 'https://formspree.io/f/xdargbee',
  n8nWebhook: 'https://artev0906.app.n8n.cloud/webhook/solcrest-website-lead',
}

const serviceMenuItems = [
  { label: 'Solar Control', href: '/residential-window-film-los-angeles.html' },
  { label: 'Safety & Security', href: '/safety-security-window-film-los-angeles.html' },
  { label: 'Anti-Graffiti', href: '/anti-graffiti-window-film-los-angeles.html' },
  { label: 'Decorative & Privacy', href: '/decorative-privacy-window-film-los-angeles.html' },
  { label: 'Smart Film', href: '/smart-film-installation-los-angeles.html' },
]

const serviceOptions = [
  'Solar Control',
  'Safety & Security',
  'Anti-Graffiti',
  'Decorative & Privacy',
  'Smart Film',
  'Not Sure',
]

const servicesDropdown = serviceMenuItems
  .map((item) => `<a href="${item.href}">${item.label}</a>`)
  .join('')

const serviceSelectOptions = serviceOptions
  .map((option) => `<option value="${option}">${option}</option>`)
  .join('')

const projectCards = [
  {
    kicker: 'Before / After',
    title: 'Residential heat and glare control',
    text: 'Example of a Los Angeles home using solar control film to reduce afternoon heat and screen glare.',
    alt: 'Residential window film Los Angeles solar control film installation on sun exposed home glass',
    tone: 'portfolio-dark',
  },
  {
    kicker: 'Storefront protection',
    title: 'Commercial anti-graffiti protection',
    text: 'Storefront window protection with sacrificial anti-graffiti film for a high-traffic retail frontage in LA.',
    alt: 'Storefront window film Los Angeles anti graffiti film on commercial glass storefront',
    tone: 'portfolio-gold',
  },
  {
    kicker: 'Interior privacy',
    title: 'Decorative and smart privacy film',
    text: 'Architectural privacy film for offices, clinics and luxury interiors without replacing existing glass.',
    alt: 'Decorative privacy window film Los Angeles smart film office glass installation',
    tone: 'portfolio-silver',
  },
]

const renderProjectCards = () =>
  projectCards
    .map(
      (card) => `
        <article class="portfolio-card ${card.tone}">
          <div class="portfolio-image-frame">
            <img
              class="portfolio-image"
              src="/solcrest-logo-dark-final.jpg"
              alt="${card.alt}"
              loading="lazy"
            />
          </div>
          <p class="card-kicker">${card.kicker}</p>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `,
    )
    .join('')

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="topbar" id="topbar">
      <a class="brand" href="#hero" aria-label="Solcrest Film Co home">
        <img
          class="brand-logo"
          src="/solcrest-logo-dark-final.jpg"
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
          <a href="#hero">Home</a>
          <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" type="button" aria-expanded="false">Services</button>
            <div class="nav-dropdown-menu">
              ${servicesDropdown}
            </div>
          </div>
          <a href="#residential">Residential</a>
          <a href="#commercial">Commercial</a>
          <a href="/about.html">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <a class="nav-cta nav-cta-secondary" href="${business.phoneHref}">Call / Text Now</a>
          <a class="nav-cta" href="#contact">Get Estimate</a>
        </div>
      </div>
    </header>

    <main>
      <section class="hero section" id="hero">
        <div class="hero-overlay"></div>
        <div class="hero-grid hero-grid-premium">
          <div class="hero-copy">
            <p class="eyebrow">SOLCREST FILM CO</p>
            <h1>Premium Window Film Installation in Los Angeles</h1>
            <h2 class="hero-subheadline">Built to Protect. Designed to Impress.</h2>
            <p class="hero-tagline">Solar Control · Safety & Security · Anti-Graffiti · Decorative · Smart Film</p>
            <p class="hero-text">
              Solcrest Film Co provides premium solar control, safety & security, anti-graffiti, decorative and smart film installation
              for homes, storefronts and commercial properties across Los Angeles.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="#contact">Get a Free Estimate</a>
              <a class="button button-secondary" href="${business.phoneHref}">Call / Text Now</a>
            </div>
            <div class="contact-inline">
              <a href="${business.phoneHref}">${business.phoneDisplay}</a>
              <span>•</span>
              <a href="mailto:${business.email}">${business.email}</a>
              <span>•</span>
              <span>Los Angeles Based</span>
            </div>
          </div>

          <div class="hero-side">
            <article class="feature-panel panel-tall">
              <p class="panel-label">Why clients reach out</p>
              <div class="feature-list">
                <div>
                  <strong>Heat & glare</strong>
                  <span>Rooms, storefronts and offices that get too hot, too bright, or uncomfortable during the day.</span>
                </div>
                <div>
                  <strong>Privacy & security</strong>
                  <span>Glass that needs better privacy, stronger hold after impact, or more protection from break-in damage.</span>
                </div>
                <div>
                  <strong>Vandalism & finish</strong>
                  <span>Storefront glass, decorative panels, and luxury interiors that need protection and a cleaner final look.</span>
                </div>
              </div>
            </article>
            <article class="feature-panel panel-accent">
              <p class="panel-label">Fast estimate workflow</p>
              <h3>Send photos, measurements, and your main goal.</h3>
              <p>We can quote faster when we know whether the priority is heat reduction, security, anti-graffiti protection, privacy, or smart film.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section trust-bar" aria-label="Trust bar">
        <div>11+ Years Experience</div>
        <div>Residential & Commercial</div>
        <div>Los Angeles Based</div>
        <div>Free Estimates</div>
        <div>Clean Professional Installation</div>
      </section>

      <section class="section" id="services">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2>Premium architectural window film services for homes, offices and storefront glass.</h2>
          <p>
            We do not sell "tinting" as a generic commodity. We solve heat, glare, privacy, security, break-in protection,
            anti-graffiti, and smart privacy needs with a cleaner architectural finish.
          </p>
        </div>
        <div class="card-grid services-grid">
          <article class="service-card service-card-featured">
            <span class="service-number">01</span>
            <h3>Solar Control Film</h3>
            <p>Reduce heat, glare and UV damage for homes, offices and storefronts.</p>
            <a class="text-link" href="/residential-window-film-los-angeles.html">Explore Solar / Residential</a>
          </article>
          <article class="service-card">
            <span class="service-number">02</span>
            <h3>Safety & Security Film</h3>
            <p>Help strengthen glass and hold shattered glass together after impact.</p>
            <a class="text-link" href="/safety-security-window-film-los-angeles.html">View Safety Film</a>
          </article>
          <article class="service-card">
            <span class="service-number">03</span>
            <h3>Anti-Graffiti Film</h3>
            <p>Protect storefront glass from scratches, vandalism and costly replacement.</p>
            <a class="text-link" href="/anti-graffiti-window-film-los-angeles.html">View Anti-Graffiti</a>
          </article>
          <article class="service-card">
            <span class="service-number">04</span>
            <h3>Decorative / Privacy Film</h3>
            <p>Frosted, blackout, gradient and custom privacy solutions.</p>
            <a class="text-link" href="/decorative-privacy-window-film-los-angeles.html">View Decorative Film</a>
          </article>
          <article class="service-card">
            <span class="service-number">05</span>
            <h3>Smart Film</h3>
            <p>Switchable privacy film for offices, clinics, conference rooms and luxury interiors.</p>
            <a class="text-link" href="/smart-film-installation-los-angeles.html">View Smart Film</a>
          </article>
        </div>
      </section>

      <section class="section split-section" id="why-solcrest">
        <div>
          <p class="eyebrow">Why Solcrest</p>
          <h2>A premium finish depends on clean installation, precise measurements, and the right materials.</h2>
          <p>
            Solcrest is positioned as a premium architectural window film company, not a basic tint shop. That means cleaner work,
            stronger presentation, better material fit, and a process that respects the property.
          </p>
        </div>
        <div class="luxury-list">
          <div>Precise measurements and cleaner final fit</div>
          <div>Premium materials matched to the use case</div>
          <div>Professional finish for high-visibility spaces</div>
          <div>Solutions for heat, privacy, security, vandalism and smart glass needs</div>
          <div>Residential and commercial project experience</div>
        </div>
      </section>

      <section class="section split-section" id="residential">
        <div>
          <p class="eyebrow">Residential Window Film</p>
          <h2>For homes that need better comfort, privacy, and UV protection.</h2>
          <p>
            Residential projects usually start with heat reduction, glare, privacy, UV protection, or comfort issues in bedrooms,
            living rooms, bathrooms, entries, and home offices.
          </p>
          <a class="button button-primary inline-cta" href="/residential-window-film-los-angeles.html">Residential Window Film in Los Angeles</a>
        </div>
        <div class="card-grid two-up compact-grid">
          <article class="service-card"><h3>Heat reduction</h3><p>Cooler rooms and less afternoon discomfort.</p></article>
          <article class="service-card"><h3>Privacy</h3><p>Cleaner privacy without heavy coverings.</p></article>
          <article class="service-card"><h3>UV protection</h3><p>Help protect floors, finishes and furniture.</p></article>
          <article class="service-card"><h3>Comfort</h3><p>Reduce glare on TVs, desks and everyday living spaces.</p></article>
        </div>
      </section>

      <section class="section split-section" id="commercial">
        <div>
          <p class="eyebrow">Commercial Window Film</p>
          <h2>For storefronts, offices, mixed-use buildings and customer-facing glass.</h2>
          <p>
            Commercial work often involves anti-graffiti protection, safety film, privacy, glare control, branding support,
            or a cleaner exterior presentation for the property.
          </p>
          <a class="button button-primary inline-cta" href="/commercial-window-film-los-angeles.html">Commercial Window Film in Los Angeles</a>
        </div>
        <div class="card-grid two-up compact-grid">
          <article class="service-card"><h3>Storefront protection</h3><p>Stronger presentation and anti-graffiti solutions.</p></article>
          <article class="service-card"><h3>Office privacy</h3><p>Conference rooms, interior glass, and work zones.</p></article>
          <article class="service-card"><h3>Safety film</h3><p>Help hold glass together after impact or breakage.</p></article>
          <article class="service-card"><h3>Brand finish</h3><p>Architectural look that feels clean and premium.</p></article>
        </div>
      </section>

      <section class="section" id="projects">
        <div class="section-heading">
          <p class="eyebrow">Recent Projects / Before & After</p>
          <h2>Recent Los Angeles window film projects and installation examples.</h2>
          <p>
            Preview the types of residential, storefront, decorative and privacy projects Solcrest Film Co handles across Los Angeles.
            This section is designed to showcase finished work, before-and-after results and real installation examples.
          </p>
        </div>
        <div class="portfolio-grid">
          ${renderProjectCards()}
        </div>
        <div class="cta-row">
          <a class="button button-primary" href="#contact">Send Photos for Estimate</a>
          <a class="button button-secondary" href="${business.phoneHref}">Call Now</a>
        </div>
      </section>

      <section class="section" id="process">
        <div class="section-heading">
          <p class="eyebrow">Process</p>
          <h2>Simple, fast, and clean from first message to final installation.</h2>
        </div>
        <div class="steps">
          <article>
            <span>01</span>
            <h3>Send photos and measurements</h3>
            <p>We need the project type, city, photos and rough measurements if available.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Get a rough estimate</h3>
            <p>We give a rough estimate based on the type of film and the project scope.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Schedule installation</h3>
            <p>Once the scope is confirmed, we schedule the installation window.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Professional clean installation</h3>
            <p>Your glass gets a cleaner, protected, more premium final finish.</p>
          </article>
        </div>
      </section>

      <section class="section" id="areas">
        <div class="section-heading">
          <p class="eyebrow">Service Areas</p>
          <h2>Serving Los Angeles and surrounding premium residential and commercial markets.</h2>
        </div>
        <div class="areas-grid">
          <span>Los Angeles</span>
          <span>Beverly Hills</span>
          <span>Santa Monica</span>
          <span>West Hollywood</span>
          <span>Glendale</span>
          <span>Burbank</span>
          <span>Pasadena</span>
          <span>DTLA</span>
          <span>Hollywood</span>
          <span>Sherman Oaks</span>
          <span>Studio City</span>
          <span>Culver City</span>
          <span>Long Beach</span>
          <span>Orange County</span>
        </div>
      </section>

      <section class="section faq" id="faq">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2>Questions people ask before requesting an estimate.</h2>
        </div>
        <div class="faq-list">
          <details><summary>How much does window film cost?</summary><p>Pricing depends on the type of film, square footage, glass conditions, and whether the project is residential or commercial.</p></details>
          <details><summary>How long does installation take?</summary><p>Small projects may move quickly, while larger storefront or commercial work takes longer depending on scope.</p></details>
          <details><summary>Can window film reduce heat?</summary><p>Yes, solar control film can significantly reduce heat, glare, and UV exposure in the right application.</p></details>
          <details><summary>Does privacy film work at night?</summary><p>Some privacy films behave differently at night depending on interior and exterior lighting, so film selection matters.</p></details>
          <details><summary>What is safety film?</summary><p>Safety and security film helps hold shattered glass together after impact and adds another layer of protection.</p></details>
          <details><summary>Is anti-graffiti film replaceable?</summary><p>Yes, anti-graffiti film is designed as a sacrificial protective layer that can be replaced after damage.</p></details>
          <details><summary>Can smart film be installed on existing glass?</summary><p>In many cases yes, depending on the existing glass and project requirements.</p></details>
          <details><summary>Do I need photos and measurements for an estimate?</summary><p>Yes — photos and rough measurements make it much easier to provide a faster, more accurate estimate.</p></details>
        </div>
      </section>

      <section class="section final-cta" id="contact">
        <div class="contact-section contact-section-form">
          <div>
            <div class="section-heading narrow-center left-align-heading">
              <p class="eyebrow">Request an Estimate</p>
              <h2>Get a Free Estimate Today</h2>
              <p>
                Send your ZIP, service type, measurements and photos if you have them. Leave either a phone number or an email so we can get back to you.
              </p>
            </div>
            <div class="cta-row cta-row-wrap">
              <a class="button button-secondary" href="${business.phoneHref}">Call Now</a>
              <a class="button button-secondary" href="${business.textHref}">Text Us</a>
              <a class="button button-secondary" href="#contact-form">Send Photos for Estimate</a>
            </div>
          </div>
          <form
            id="contact-form"
            class="contact-card"
            action="${business.estimateFormAction}"
            method="POST"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="_subject" value="Solcrest Film Co website estimate request" />
            <input type="hidden" name="_replyto" value="" />
            <input type="text" name="_gotcha" class="hp-field" tabindex="-1" autocomplete="off" />

            <div class="form-grid two-column-form">
              <label>
                Name
                <input type="text" name="Name" autocomplete="name" required />
              </label>
              <label>
                Phone (optional)
                <input type="tel" name="Phone" autocomplete="tel" />
              </label>
              <label>
                Email (optional)
                <input type="email" name="Email" autocomplete="email" />
              </label>
              <label>
                ZIP Code
                <input type="text" name="ZIP" autocomplete="postal-code" />
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
              Message / Notes
              <textarea name="Message / Notes" rows="5" placeholder="Tell us about the glass, goals, square footage, or timeline." required></textarea>
            </label>

            <label>
              Photo upload (optional)
              <input type="file" name="Photo Upload" accept="image/*" multiple />
            </label>

            <button class="button button-primary submit-button" type="submit">Send Estimate Request</button>
            <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div>
        <strong>SOLCREST FILM CO</strong>
        <p>Premium Architectural Window Film Installation in Los Angeles.</p>
        <p><a href="mailto:${business.email}">${business.email}</a></p>
        <p><a href="${business.phoneHref}">${business.phoneDisplay}</a></p>
      </div>
      <div class="footer-links">
        <a href="#services">Services</a>
        <a href="#residential">Residential</a>
        <a href="#commercial">Commercial</a>
        <a href="#contact">Estimate</a>
      </div>
    </footer>
  </div>
`

const topbar = document.querySelector('.topbar')
const menuToggle = document.querySelector('.menu-toggle')
const navShell = document.querySelector('.nav-shell')
const dropdownToggle = document.querySelector('.nav-dropdown-toggle')
const contactForm = document.querySelector('#contact-form')
const formStatus = document.querySelector('#form-status')
const replyToField = contactForm?.querySelector('input[name="_replyto"]')

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
  }
  formStatus.textContent = 'Sending your request...'
  submitButton?.setAttribute('disabled', 'disabled')

  fetch(business.n8nWebhook, {
    method: 'POST',
    body: formData,
  }).catch(() => {})

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
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
