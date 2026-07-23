import './style.css'
import { icon } from './icons.js'
import { mountChatWidget } from './chat-widget.js'

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

const serviceCards = [
  {
    iconName: 'sun',
    title: 'Solar Control Film',
    text: 'Reduce heat, glare and UV damage for homes, offices and storefronts.',
    href: '/residential-window-film-los-angeles.html',
    linkLabel: 'Explore Solar / Residential',
    photo: '/card-solar.jpg',
  },
  {
    iconName: 'shield',
    title: 'Safety & Security Film',
    text: 'Help strengthen glass and hold shattered glass together after impact.',
    href: '/safety-security-window-film-los-angeles.html',
    linkLabel: 'View Safety Film',
    photo: '/card-safety.jpg',
  },
  {
    iconName: 'sprayCan',
    title: 'Anti-Graffiti Film',
    text: 'Protect storefront glass from scratches, vandalism and costly replacement.',
    href: '/anti-graffiti-window-film-los-angeles.html',
    linkLabel: 'View Anti-Graffiti',
    photo: '/card-antigraffiti.jpg',
  },
  {
    iconName: 'eyeOff',
    title: 'Decorative & Privacy Film',
    text: 'Frosted, blackout, gradient and custom privacy solutions.',
    href: '/decorative-privacy-window-film-los-angeles.html',
    linkLabel: 'View Decorative Film',
    photo: '/card-decorative.jpg',
  },
  {
    iconName: 'smartphone',
    title: 'Smart Film',
    text: 'Switchable privacy film for offices, clinics, conference rooms and luxury interiors.',
    href: '/smart-film-installation-los-angeles.html',
    linkLabel: 'View Smart Film',
    photo: '/card-smartfilm.jpg',
  },
]

const partnerServiceCard = {
  iconName: 'sparkles',
  title: 'Glass Polishing & Restoration',
  text: 'Scratch removal and glass restoration handled by our trusted partner team — ask us about it alongside your film estimate.',
  href: '#contact',
  linkLabel: 'Ask About This Service',
  photo: '/card-glasspolish.jpg',
}

const cardPhotoStyle = (photo) => `background-image: url('${photo}')`

const renderServiceCards = () => `
  ${serviceCards
    .map(
      (card) => `
        <a class="service-card service-card-photo" href="${card.href}" style="${cardPhotoStyle(card.photo)}">
          <span class="service-number">${icon(card.iconName)}</span>
          <div class="service-card-content">
            <h3>${card.title}</h3>
            <p>${card.text}</p>
            <span class="text-link">${card.linkLabel}</span>
          </div>
        </a>
      `,
    )
    .join('')}
  <a class="service-card service-card-photo partner-card" href="${partnerServiceCard.href}" style="${cardPhotoStyle(partnerServiceCard.photo)}">
    <div class="service-card-top">
      <span class="partner-badge">Partner Service</span>
      <span class="service-number">${icon(partnerServiceCard.iconName)}</span>
    </div>
    <div class="service-card-content">
      <h3>${partnerServiceCard.title}</h3>
      <p>${partnerServiceCard.text}</p>
      <span class="text-link">${partnerServiceCard.linkLabel}</span>
    </div>
  </a>
`

const valueStripItems = [
  { iconName: 'sun', label: 'Heat & UV Control', href: '/residential-window-film-los-angeles.html' },
  { iconName: 'eyeOff', label: 'Privacy', href: '/decorative-privacy-window-film-los-angeles.html' },
  { iconName: 'shield', label: 'Safety & Security', href: '/safety-security-window-film-los-angeles.html' },
  { iconName: 'store', label: 'Storefront Protection', href: '/storefront-window-protection-los-angeles.html' },
  { iconName: 'smartphone', label: 'Smart Film', href: '/smart-film-installation-los-angeles.html' },
  { iconName: 'diamond', label: 'Premium Quality', href: '#services' },
]

const renderValueStrip = () =>
  valueStripItems
    .map(
      (item) => `
        <a class="value-item" href="${item.href}">
          ${icon(item.iconName)}
          <span>${item.label}</span>
        </a>
      `,
    )
    .join('')

const certifications = [
  { iconName: 'shieldCheck', label: 'Licensed & Insured' },
  { iconName: 'mapPin', label: 'Los Angeles Local' },
]

const pinIcon = '<img class="pin-icon" src="/pin-gold.png" alt="" />'

const renderCertifications = () =>
  certifications
    .map(
      (cert) => `
        <div class="cert-badge">
          ${cert.iconName === 'mapPin' ? pinIcon : icon(cert.iconName)}
          <span>${cert.label}</span>
        </div>
      `,
    )
    .join('')

const estimateChecklist = [
  'Send photos, measurements, and your main goal.',
  "We'll confirm details and recommend the best film for your needs.",
  'Get your estimate quickly and move forward with confidence.',
]

const renderEstimateChecklist = () =>
  estimateChecklist
    .map(
      (item) => `
        <li>
          ${icon('check')}
          <span>${item}</span>
        </li>
      `,
    )
    .join('')

const estimateSteps = [
  {
    iconSrc: '/icon-camera.png',
    title: 'Send Photos',
    text: 'Interior or exterior photos of your glass.',
  },
  {
    iconSrc: '/icon-measure.png',
    title: 'Add Measurements',
    text: 'Approximate size and location.',
  },
  {
    iconSrc: '/icon-estimate.png',
    title: 'Get Your Estimate',
    text: 'Receive a fast, accurate quote tailored to you.',
  },
]

const renderEstimateSteps = () =>
  estimateSteps
    .map(
      (step, index) => `
        <article class="estimate-step">
          <img class="estimate-step-icon" src="${step.iconSrc}" alt="${step.title}" width="100" height="100" />
          <span class="estimate-step-number">${index + 1}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </article>
      `,
    )
    .join('')

const processSteps = [
  {
    iconName: 'messageCircle',
    title: 'Send photos and measurements',
    text: 'We need the project type, city, photos and rough measurements if available.',
  },
  {
    iconName: 'ruler',
    title: 'Get a rough estimate',
    text: 'We give a rough estimate based on the type of film and the project scope.',
  },
  {
    iconName: 'wrench',
    title: 'Schedule installation',
    text: 'Once the scope is confirmed, we schedule the installation window.',
  },
  {
    iconName: 'shieldCheck',
    title: 'Professional clean installation',
    text: 'Your glass gets a cleaner, protected, more premium final finish.',
  },
]

const renderSteps = () =>
  processSteps
    .map(
      (step, index) => `
        <article>
          ${icon(step.iconName, 'step-icon')}
          <span>${String(index + 1).padStart(2, '0')}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </article>
      `,
    )
    .join('')

const serviceAreas = [
  'Los Angeles',
  'Beverly Hills',
  'Santa Monica',
  'West Hollywood',
  'Glendale',
  'Burbank',
  'Pasadena',
  'DTLA',
  'Hollywood',
  'Sherman Oaks',
  'Studio City',
  'Culver City',
  'Long Beach',
  'Orange County',
]

const renderAreas = () =>
  serviceAreas.map((area) => `<span>${pinIcon}${area}</span>`).join('')

const igSkeletons = Array(9).fill('<div class="ig-feed-skeleton"></div>').join('')

document.querySelector('#app').innerHTML = `
    <header class="topbar topbar-on-photo" id="topbar">
      <a class="brand" href="#hero" aria-label="Solcrest Film Co home">
        <img
          class="brand-logo"
          src="/solcrest-logo-header-dark.png"
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
          <a href="/our-work.html">Our Work</a>
          <a href="/about.html">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <a class="nav-cta nav-cta-secondary" href="${business.phoneHref}">${icon('smartphone')}Call / Text Now</a>
          <a class="nav-cta" href="#contact">Get Estimate</a>
        </div>
      </div>
    </header>

    <div class="hero-block">
      <div class="hero-photo-overlay"></div>
      <section class="hero-photo" id="hero">
        <div class="hero-photo-inner">
          <div class="hero-photo-content">
            <span class="hero-badge">${icon('shieldCheck')}Licensed &amp; Insured</span>
            <p class="eyebrow">Premium Window Film Installation in Los Angeles</p>
            <h1>Window Film Solutions for Homes, Businesses &amp; Commercial Buildings</h1>
            <p class="hero-photo-text">
              We install premium window films that reduce heat and glare, add privacy and security, protect your interiors, and elevate the look of your glass.
            </p>
            <div class="hero-chip-row">
              <a class="hero-chip" href="/residential-window-film-los-angeles.html">Solar Control</a>
              <a class="hero-chip" href="/safety-security-window-film-los-angeles.html">Safety &amp; Security</a>
              <a class="hero-chip" href="/anti-graffiti-window-film-los-angeles.html">Anti-Graffiti</a>
              <a class="hero-chip" href="/decorative-privacy-window-film-los-angeles.html">Decorative</a>
              <a class="hero-chip" href="/smart-film-installation-los-angeles.html">Smart Film</a>
            </div>
            <div class="hero-actions">
              <a class="button button-primary" href="#contact">${icon('badgeCheck')}Get Free, No-Pressure Estimate</a>
              <a class="button button-secondary" href="${business.textHref}">${icon('smartphone')}Text Us Photos for Pricing</a>
            </div>
            <p class="hero-phone-line">
              <a href="${business.phoneHref}">${icon('smartphone')}${business.phoneDisplay}</a>
            </p>
          </div>

          <div class="hero-trust-bar">
            <div class="hero-trust-item">
              <span class="hero-trust-value">15+</span>
              <span class="hero-trust-label">Years in the Trade</span>
            </div>
            <div class="hero-trust-item">
              <span class="hero-trust-value">LA</span>
              <span class="hero-trust-label">Local Experts</span>
            </div>
            <div class="hero-trust-item">
              <span class="hero-trust-value">200+</span>
              <span class="hero-trust-label">Film Options</span>
            </div>
            <div class="hero-trust-item">
              <span class="hero-trust-value">100%</span>
              <span class="hero-trust-label">Licensed &amp; Insured</span>
            </div>
          </div>
        </div>
      </section>
  </div>

  <div class="site-shell">
    <main>
      <section class="section value-strip" aria-label="What we solve">
        ${renderValueStrip()}
      </section>

      <section class="section projects-photo" id="projects">
        <div class="projects-bg"></div>
        <div class="projects-panel">
          <div class="section-heading">
            <p class="eyebrow">Recent Projects / Before & After</p>
            <h2>Real Los Angeles window film installations — from our Instagram.</h2>
            <p>
              Browse our latest solar control, privacy, anti-graffiti, safety film and decorative projects across Los Angeles.
            </p>
          </div>
          <div class="ig-feed-grid" id="instagram-feed-grid">
            ${igSkeletons}
          </div>
          <div class="cta-row center-cta-row" style="margin-top:2rem;gap:12px;flex-wrap:wrap;justify-content:center;">
            <a class="button button-primary" href="/our-work.html">${icon('sparkles')}&nbsp;View All Projects</a>
            <a class="button button-secondary" href="https://www.instagram.com/solcrestfilmco/" target="_blank" rel="noopener noreferrer">${icon('instagram')}&nbsp;Follow @solcrestfilmco</a>
          </div>
        </div>
      </section>

      <section class="section services-photo" id="services">
        <div class="services-photo-bg"></div>
        <div class="services-glass-panel">
          <div class="section-heading">
            <p class="eyebrow">Services</p>
            <h2>Premium architectural window film services for homes, offices and storefront glass.</h2>
            <p>
              We do not sell "tinting" as a generic commodity. We solve heat, glare, privacy, security, break-in protection,
              anti-graffiti, and smart privacy needs with a cleaner architectural finish.
            </p>
          </div>
          <div class="card-grid services-grid">
            ${renderServiceCards()}
          </div>
          <div class="cta-row center-cta-row">
            <a class="button button-secondary" href="#services">View All Services</a>
          </div>
        </div>
      </section>

      <section class="section fast-estimate-photo" id="fast-estimate" aria-label="Fast estimate workflow">
        <div class="fast-estimate-bg"></div>
        <div class="fast-estimate-panel">
          <div class="split-section estimate-grid">
            <div>
              <p class="eyebrow">Fast Estimate Workflow</p>
              <h2>Simple. Fast. Accurate.</h2>
              <p>Send a few details and we'll get you a custom estimate — fast.</p>
              <ul class="checklist">
                ${renderEstimateChecklist()}
              </ul>
            </div>
            <div class="estimate-steps">
              ${renderEstimateSteps()}
            </div>
          </div>
          <div class="estimate-tip">
            ${icon('clock')}
            <div>
              <strong>Faster details = faster estimate.</strong>
              <span>Tell us your priority: heat reduction, privacy, safety, anti-graffiti, or smart film.</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section why-solcrest-photo" id="why-solcrest">
        <div class="why-solcrest-bg"></div>
        <div class="why-solcrest-panel split-section">
          <div>
            <p class="eyebrow">Why Solcrest</p>
            <h2>A premium finish depends on clean installation, precise measurements, and the right materials.</h2>
            <p>
              Solcrest is positioned as a premium architectural window film company, not a basic tint shop. That means cleaner work,
              stronger presentation, better material fit, and a process that respects the property.
            </p>
          </div>
          <div class="luxury-list">
            <article class="luxury-item">
              <img class="luxury-icon" src="/icon-ruler.png" alt="" width="88" height="88" />
              <div>Precise measurements and cleaner final fit</div>
            </article>
            <article class="luxury-item">
              <img class="luxury-icon" src="/icon-materials.png" alt="" width="88" height="88" />
              <div>Premium materials matched to the use case</div>
            </article>
            <article class="luxury-item">
              <img class="luxury-icon" src="/icon-finish.png" alt="" width="88" height="88" />
              <div>Professional finish for high-visibility spaces</div>
            </article>
            <article class="luxury-item">
              <img class="luxury-icon" src="/icon-solutions.png" alt="" width="88" height="88" />
              <div>Solutions for heat, privacy, security, vandalism and smart glass needs</div>
            </article>
            <article class="luxury-item">
              <img class="luxury-icon" src="/icon-property.png" alt="" width="88" height="88" />
              <div>Residential and commercial project experience</div>
            </article>
          </div>
        </div>
      </section>

      <section class="section residential-photo" id="residential">
        <div class="residential-bg"></div>
        <div class="residential-panel split-section">
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
        </div>
      </section>

      <section class="section commercial-photo" id="commercial">
        <div class="commercial-bg"></div>
        <div class="commercial-stage">
          <div class="commercial-panel split-section">
            <div class="commercial-copy">
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
          </div>
        </div>
      </section>

      <section class="section process-photo" id="process">
        <div class="process-bg"></div>
        <div class="process-panel">
          <div class="section-heading">
            <p class="eyebrow">Process</p>
            <h2>Simple, fast, and clean from first message to final installation.</h2>
          </div>
          <div class="steps">
            ${renderSteps()}
          </div>
        </div>
        <div class="certifications-panel" aria-label="Certifications">
          ${renderCertifications()}
        </div>
      </section>

      <section class="section areas-photo" id="areas">
        <div class="areas-bg"></div>
        <div class="areas-panel">
          <div class="section-heading areas-heading">
            <div>
              <p class="eyebrow">Service Areas</p>
              <h2>Serving Los Angeles and surrounding premium residential and commercial markets.</h2>
            </div>
            <img class="areas-heading-icon" src="/areas-diamond-icon.png" alt="" />
          </div>
          <div class="areas-layout">
            <div class="areas-map-slot">
              <img src="/areas-map.png" alt="Map of the Los Angeles area served by Solcrest Film Co" />
            </div>
            <div class="areas-grid">
              ${renderAreas()}
            </div>
          </div>
        </div>
      </section>

      <section class="section faq-photo" id="faq">
        <div class="faq-bg"></div>
        <div class="faq-panel">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2>Questions people ask before requesting an estimate.</h2>
        </div>
        <div class="faq-list">
          <details open><summary>How much does window film cost?</summary><p>Most residential solar, privacy, frosted, and decorative films start around $7–$10 per sq ft depending on the film type, window size, access, and total project scope. Safety, security, anti-graffiti, exterior, and specialty films are priced based on material thickness, installation difficulty, and whether extra preparation is needed. The fastest way to get an accurate estimate is to send photos, rough measurements, and your main goal.</p></details>
          <details><summary>How long does installation take?</summary><p>Small residential projects can often be completed in a few hours. Larger homes, storefronts, commercial glass, exterior installations, safety film, or smart film projects may take longer depending on glass size, access, preparation, and scheduling. After we review photos and measurements, we can give you a more accurate timeline.</p></details>
          <details><summary>Can window film reduce heat?</summary><p>Yes. Solar control window film can help reduce heat, glare, and UV exposure, making rooms more comfortable during the day. It can also help protect floors, furniture, artwork, and interior finishes from sun damage. The best film depends on how much heat reduction, light, privacy, and appearance you want.</p></details>
          <details><summary>Does privacy film work at night?</summary><p>Privacy film depends on lighting. Some reflective privacy films work best during the day when it is brighter outside than inside. At night, if the lights are on inside, visibility can change. For stronger privacy, we may recommend frosted, blackout, decorative, or specialty privacy film depending on the location and your goal.</p></details>
          <details><summary>What is safety film?</summary><p>Safety and security film is a thicker protective film designed to help hold shattered glass together after impact. It can add another layer of protection for glass doors, storefronts, windows, and vulnerable entry points. It does not make glass unbreakable, but it can make break-ins, impact, and glass failure more difficult and less dangerous.</p></details>
          <details><summary>Is anti-graffiti film replaceable?</summary><p>Yes. Anti-graffiti film is designed as a sacrificial protective layer for glass. If the surface gets scratched, tagged, etched, or damaged, the film can often be removed and replaced without replacing the actual glass. This is especially useful for storefronts, elevators, commercial glass, and high-traffic areas.</p></details>
          <details><summary>Can smart film be installed on existing glass?</summary><p>In many cases, yes. Smart film can be applied to existing glass to create switchable privacy, turning the glass from clear to private when powered. The final recommendation depends on the glass condition, size, wiring access, controller location, and whether the project is residential, office, clinic, conference room, or commercial space.</p></details>
          <details><summary>Do I need photos and measurements for an estimate?</summary><p>Yes. Photos and rough measurements help us provide a faster and more accurate estimate. Clear photos of the glass, approximate width and height, location, and your main goal — heat reduction, privacy, safety, anti-graffiti, decorative, or smart film — are usually enough to start. For larger or more complex projects, we may recommend an in-person visit.</p></details>
        </div>
        </div>
      </section>

      <section class="section final-cta-photo" id="contact">
        <div class="final-cta-bg"></div>
        <div class="final-cta-panel">
        <div class="contact-section contact-section-form">
          <div>
            <div class="section-heading narrow-center left-align-heading">
              <p class="eyebrow">Request an Estimate</p>
              <h2>Get a Fast Estimate Today</h2>
              <p>
                Send your ZIP, service type, measurements and photos if you have them. Leave either a phone number or an email so we can get back to you.
              </p>
            </div>
            <div class="cta-row cta-row-wrap">
              <a class="button button-secondary" href="${business.phoneHref}">Call Now</a>
              <a class="button button-secondary" href="${business.textHref}">Text Us</a>
              <a class="button button-secondary" href="#contact-form">Send Photos for Estimate</a>
            </div>
            <div class="social-links">
              <a href="https://www.instagram.com/solcrestfilmco/" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Instagram">${icon('instagram')}</a>
              <a href="https://www.facebook.com/solcrestfilm/" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Facebook">${icon('facebook')}</a>
              <a href="https://share.google/TTXOlBBFKuizqpQMi" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Google">${icon('google')}</a>
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

            <button class="button button-primary submit-button" type="submit">Get My Estimate</button>
            <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
          </form>
        </div>
        </div>
      </section>
    </main>

    <footer class="footer footer-premium">
      <div class="footer-premium-inner">
        <div class="footer-col footer-col-brand">
          <img
            class="footer-logo"
            src="/solcrest-logo-header-dark.png"
            alt="Solcrest Film Co premium window film Los Angeles logo"
          />
          <p class="footer-tagline">Premium Architectural Window Film Installation in Los Angeles</p>
        </div>
        <div class="footer-col footer-col-contact">
          <h3 class="footer-col-title">Contact</h3>
          <p><a href="mailto:${business.email}">${business.email}</a></p>
          <p><a href="${business.phoneHref}">${business.phoneDisplay}</a></p>
          <div class="social-links footer-premium-social">
            <a href="https://www.instagram.com/solcrestfilmco/" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Instagram">${icon('instagram')}</a>
            <a href="https://www.facebook.com/solcrestfilm/" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Facebook">${icon('facebook')}</a>
            <a href="https://share.google/TTXOlBBFKuizqpQMi" target="_blank" rel="noopener noreferrer" aria-label="Solcrest Film Co on Google">${icon('google')}</a>
          </div>
        </div>
        <div class="footer-col footer-col-links">
          <h3 class="footer-col-title">Quick Links</h3>
          <div class="footer-quick-links">
            <a href="#services">Services</a>
            <a href="#residential">Residential</a>
            <a href="#commercial">Commercial</a>
            <a href="#contact">Estimate</a>
          </div>
        </div>
      </div>
      <div class="footer-premium-bottom">
        <p>&copy; 2026 Solcrest Film Co. All rights reserved.</p>
      </div>
    </footer>

    <div class="sticky-cta-bar">
      <a class="sticky-cta-call" href="${business.phoneHref}">${icon('smartphone')}<span>Call</span></a>
      <a class="sticky-cta-request" href="#contact">${icon('badgeCheck')}<span>Get Estimate</span></a>
    </div>
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
    const response = await fetch(business.n8nWebhook, {
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

// --- Instagram feed + pinned category showcase ---
const CAT_LABELS = {
  solar:        'Solar Control',
  privacy:      'Privacy',
  safety:       'Safety & Security',
  antigraffiti: 'Anti-Graffiti',
  decorative:   'Decorative',
  smartfilm:    'Smart Film',
}
const CAT_ORDER = ['solar', 'privacy', 'safety', 'antigraffiti', 'decorative', 'smartfilm']

async function loadInstagramFeed() {
  const grid = document.getElementById('instagram-feed-grid')
  if (!grid) return
  const escAttr = (s) => (s || '').replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]))

  try {
    const [igRes, curatedRes] = await Promise.all([
      fetch('/api/instagram?limit=18'),
      fetch('/api/curated').catch(() => ({ json: () => ({ posts: [] }) })),
    ])
    if (!igRes.ok) throw new Error('Feed error')
    const [igData, curatedData] = await Promise.all([igRes.json(), curatedRes.json()])

    const curated = curatedData.posts || []
    const pinnedByCategory = {}
    for (const p of curated) {
      if (p.pinned && p.category) pinnedByCategory[p.category] = p
    }
    const hasPinned = Object.keys(pinnedByCategory).length > 0

    if (hasPinned) {
      // Show pinned category showcase
      const cards = CAT_ORDER.map((cat) => {
        const p = pinnedByCategory[cat]
        if (!p) return ''
        const thumb = p.thumb || ''
        const label = CAT_LABELS[cat] || cat
        const caption = escAttr(p.caption || label)
        const href = `/our-work.html`
        return `
          <a class="ig-feed-item ig-cat-card" href="${href}" aria-label="${label}">
            <img src="${thumb}" alt="${caption}" loading="lazy" decoding="async" />
            <div class="ig-cat-overlay">
              <span class="ig-cat-label">${label}</span>
              <span class="ig-cat-cta">View Projects →</span>
            </div>
          </a>`
      }).filter(Boolean).join('')

      grid.innerHTML = cards
      // Update heading
      const h2 = grid.closest('.projects-panel')?.querySelector('h2')
      const eyebrow = grid.closest('.projects-panel')?.querySelector('.eyebrow')
      if (h2) h2.textContent = 'Our Work — By Service Type'
      if (eyebrow) eyebrow.textContent = 'Featured Projects'
    } else {
      // Fallback: regular Instagram feed
      const posts = (igData.data || [])
        .filter((p) => p.media_type === 'VIDEO' ? p.thumbnail_url : (p.media_url || p.thumbnail_url))
        .slice(0, 11)
      const items = posts.map((post) => {
        const thumb = post.thumbnail_url || post.media_url || ''
        const raw = (post.caption || '').trim()
        const caption = escAttr(raw.length > 90 ? raw.slice(0, 90) + '…' : raw)
        const isVideo = post.media_type === 'VIDEO'
        return `<a class="ig-feed-item" href="${post.permalink}" target="_blank" rel="noopener noreferrer" aria-label="${caption || 'View on Instagram'}">
          <img src="${thumb}" alt="${caption || 'Solcrest Film Co project'}" loading="lazy" decoding="async" />
          ${isVideo ? '<span class="ig-reel-badge">&#9654; Reel</span>' : ''}
          <div class="ig-feed-overlay"><p>${caption}</p></div>
        </a>`
      }).join('')
      const follow = `<a class="ig-feed-item ig-feed-follow" href="https://www.instagram.com/solcrestfilmco/" target="_blank" rel="noopener noreferrer" aria-label="Follow Solcrest Film Co on Instagram">
        ${icon('instagram')}<span>@solcrestfilmco</span><small>Follow for more</small>
      </a>`
      grid.innerHTML = items + follow
    }
  } catch (_) {
    grid.innerHTML = `<p class="ig-feed-error"><a href="https://www.instagram.com/solcrestfilmco/" target="_blank" rel="noopener noreferrer">View our latest projects on Instagram →</a></p>`
  }
}
loadInstagramFeed()

mountChatWidget()
