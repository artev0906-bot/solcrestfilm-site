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

const servicePages = [
  {
    file: 'residential-window-film-los-angeles.html',
    eyebrow: 'Premium Residential Window Film',
    title: 'Residential Window Film in Los Angeles',
    description:
      'Reduce heat, glare, UV exposure and privacy issues for homes, bedrooms, bathrooms and living spaces across Los Angeles.',
    heroImage: {
      src: '/residential-hero.jpg',
      alt: 'Sun protection film installed on the front windows and garage glass of a Los Angeles home',
    },
    problemsTitle: 'Most residential film projects start with comfort and privacy problems.',
    problems: [
      'Rooms that overheat in the afternoon',
      'TV glare and harsh light on work surfaces',
      'Too much visibility from the outside',
      'UV exposure affecting floors, furniture and finishes',
    ],
    filmTypesTitle: 'Types of residential window film we install',
    filmTypes: [
      ['Heat Control Film', 'Nano-ceramic and solar-control films that cut heat and glare while keeping rooms bright and views clear.'],
      ['Clear UV Film', 'Nearly invisible protection that blocks the UV exposure behind faded floors, furniture and artwork.'],
      ['Daytime Privacy Film', 'Reflective films that make it hard to see in from the street during the day without blocking your view out.'],
      ['Frosted & Decorative Film', 'Frosted, gradient and patterned finishes for bathrooms, entry glass, sidelites and interior doors.'],
      ['Safety Film for Doors & Ground-Floor Windows', 'Thicker film that helps hold shattered glass together on sliding doors and accessible windows.'],
      ['Exterior Film for Difficult Glass', 'Exterior-rated films for skylights and glass that cannot be treated from the inside, where the glass type allows it.'],
    ],
    chooserTitle: 'Which residential window film is right for your home?',
    chooser: [
      ['Reduce heat while keeping natural light', 'Light nano-ceramic film'],
      ['Cut glare as much as possible', 'Darker solar-control film'],
      ['Privacy during the day', 'Reflective privacy film'],
      ['Privacy day and night', 'Frosted or decorative film'],
      ['Protect interiors from UV fading', 'Clear or lightly tinted UV film'],
      ['Hold broken glass together', 'Safety and security film'],
    ],
    solutionsTitle: 'What residential film can solve',
    solutions: [
      ['Reduce heat and glare', 'Help sun-heavy rooms feel more balanced and more usable during the brightest parts of the day.'],
      ['Improve privacy', 'Create a more protected feel for street-facing windows, bathrooms, and exposed glass areas.'],
      ['Protect interiors', 'Reduce UV exposure that can contribute to fading on floors, furniture, and interior finishes.'],
      ['Keep a clean finish', 'Maintain a premium look without bulky window treatments.'],
    ],
    projectsTitle: 'Recent residential projects',
    projects: [
      {
        img: '/residential-project-1.jpg',
        alt: 'Protective solar control film installed on the sliding glass doors of a Los Angeles home',
        area: 'Private residence',
        tag: 'Heat + Safety',
        body: 'Protective anti-vandal solar film on the sliding doors, with standard solar control film on the rest of the home’s windows — heat and glare control plus an added protection layer on the most accessible glass.',
      },
      {
        img: '/residential-project-2.jpg',
        alt: 'Sun protection film installed on a rooftop skylight of a hillside Los Angeles home',
        area: 'Hillside home',
        tag: 'Skylight & Roof Glazing',
        body: 'Sun-protective film installed on rooftop skylights to cut the heat coming in from overhead glass. Skylight work depends on roof access, glass type and condition — we confirm limitations and warranty coverage before any work starts.',
      },
    ],
    processTitle: 'How a residential installation works',
    processSteps: [
      ['Send photos & goals', 'Share photos, rough measurements, your ZIP and what you want to fix — heat, privacy, fading or safety.'],
      ['Get a recommendation', 'We suggest specific films based on your glass type, sun exposure and the look you want.'],
      ['Clean installation', 'Most homes are completed in a few hours to one day, with furniture and floors protected.'],
      ['Curing & aftercare', 'Film fully cures over days to a few weeks; we explain what to expect and how to care for it.'],
    ],
    faqTitle: 'Residential window film questions',
    faq: [
      ['Will residential window film make my home dark?', 'Not necessarily. Light nano-ceramic films reduce heat and UV with very little visible darkening. Darker films are available when maximum glare control is the goal — we help you pick the light level that fits each room.'],
      ['Does privacy film work at night?', 'Daytime reflective privacy film depends on it being brighter outside than inside, so its effect reverses at night with interior lights on. For privacy day and night, frosted or decorative film is the more reliable choice.'],
      ['Can window film damage dual-pane glass?', 'The wrong film on dual-pane (insulated) glass can create thermal stress. We check your glass type first and only install films rated for it, which is one of the main reasons to use a professional installer.'],
      ['What film works best for heat reduction?', 'Nano-ceramic films offer the best balance of heat rejection and natural light. If glare is the bigger problem, a darker solar-control film cuts more visible light as well as heat.'],
      ['How long does installation take?', 'Most homes take from a few hours to one day depending on the number and size of windows and access. We confirm the timeline after seeing photos and measurements.'],
      ['Can film be installed on skylights?', 'Often yes, usually with exterior-rated film. It depends on access, the glass type and its condition — we confirm what is possible, along with any limitations and warranty coverage, before work starts.'],
      ['How long does residential window film last?', 'Quality architectural films typically last 10–15+ years on interior surfaces. Exterior films have shorter lifespans, which we explain up front for skylight and exterior projects.'],
      ['Can the film be removed later?', 'Yes. Professionally installed film can be removed without damaging the glass, and old or failing film can be replaced with a newer product.'],
    ],
    areasNote:
      'We install residential window film throughout Los Angeles and surrounding areas, including Beverly Hills, Glendale, Burbank, Woodland Hills, West Hills, Porter Ranch and nearby communities.',
    formIntro:
      'Send photos, approximate measurements and your ZIP code. We’ll recommend suitable options based on heat, privacy, appearance and glass type.',
    serviceOptions: [
      'Heat Control',
      'UV Protection',
      'Privacy',
      'Decorative Film',
      'Safety Film',
      'Skylight Film',
      'Not Sure',
    ],
  },
  {
    file: 'commercial-window-film-los-angeles.html',
    eyebrow: 'Commercial Window Film',
    title: 'Commercial Window Film for Offices, Storefronts and Buildings in Los Angeles',
    description:
      'Improve comfort, privacy, anti-graffiti protection, glare control and overall presentation for commercial glass across Los Angeles.',
    problemsTitle: 'Commercial projects usually start with customer-facing glass problems.',
    problems: [
      'Overheating storefront and office glass',
      'Privacy concerns in work areas and meeting rooms',
      'Glare on screens and interior workspaces',
      'A need for cleaner, more premium presentation',
    ],
    solutionsTitle: 'What commercial film can solve',
    solutions: [
      ['Reduce heat and glare', 'Improve day-to-day comfort for teams and visitors.'],
      ['Upgrade privacy', 'Add privacy solutions for offices, conference rooms and glass partitions.'],
      ['Improve presentation', 'Create a more polished appearance for client-facing properties.'],
      ['Support protection needs', 'Layer in safety, anti-graffiti or decorative solutions where needed.'],
    ],
  },
  {
    file: 'safety-security-window-film-los-angeles.html',
    eyebrow: 'Safety & Security Film',
    title: 'Safety & Security Window Film Installation in Los Angeles',
    description:
      'Help strengthen vulnerable glass and hold shattered glass together after impact with safety and security film solutions.',
    problemsTitle: 'Security-focused projects usually start with vulnerable glass.',
    problems: [
      'Concern about shattered glass after impact',
      'Break-in risk at storefronts or exposed entry points',
      'Need for a stronger hold on damaged glass',
      'Safety upgrades for residential or commercial properties',
    ],
    solutionsTitle: 'What safety film can solve',
    solutions: [
      ['Hold shattered glass together', 'Reduce dangerous fallout after impact or breakage.'],
      ['Add another protection layer', 'Create a stronger response on vulnerable glass areas.'],
      ['Support commercial safety planning', 'Useful for storefronts, entries and high-traffic glass.'],
      ['Work cleanly with existing glass', 'A more practical protection layer than full replacement in many cases.'],
    ],
  },
  {
    file: 'anti-graffiti-window-film-los-angeles.html',
    eyebrow: 'Anti-Graffiti Film',
    title: 'Anti-Graffiti Window Film for Storefront Protection in Los Angeles',
    description:
      'Protect storefront glass from scratches, vandalism and costly replacement with sacrificial anti-graffiti film.',
    problemsTitle: 'Anti-graffiti projects usually start with exposed storefront glass.',
    problems: [
      'Frequent scratches or vandalism on street-facing glass',
      'Costly replacement of damaged storefront panels',
      'Need for a sacrificial protective layer',
      'High-traffic commercial zones with repeated abuse',
    ],
    solutionsTitle: 'What anti-graffiti film can solve',
    solutions: [
      ['Protect finished glass', 'Take the damage on the film instead of the actual glass.'],
      ['Reduce replacement costs', 'Replacing film is usually simpler than replacing full glass panels.'],
      ['Protect storefront presentation', 'Keep high-visibility commercial spaces looking cleaner.'],
      ['Maintain business continuity', 'Avoid longer downtime tied to full glass replacement.'],
    ],
  },
  {
    file: 'decorative-privacy-window-film-los-angeles.html',
    eyebrow: 'Decorative / Privacy Film',
    title: 'Decorative and Privacy Window Film Installation in Los Angeles',
    description:
      'Frosted, blackout, gradient and custom privacy film solutions for offices, homes, bathrooms and luxury interiors.',
    problemsTitle: 'Decorative and privacy projects usually start with exposed interior glass.',
    problems: [
      'Bathrooms and entries that need privacy',
      'Conference rooms and offices with exposed glass',
      'Luxury interiors needing a cleaner design statement',
      'Need for decorative or branding-oriented glass treatments',
    ],
    solutionsTitle: 'What decorative film can solve',
    solutions: [
      ['Create privacy', 'Frosted, blackout and custom privacy solutions for residential or commercial use.'],
      ['Improve design', 'Give plain glass a stronger architectural presence.'],
      ['Control visibility', 'Segment spaces without replacing the glass.'],
      ['Support custom looks', 'Gradient and tailored patterns for more refined interiors.'],
    ],
  },
  {
    file: 'smart-film-installation-los-angeles.html',
    eyebrow: 'Smart Film',
    title: 'Smart Film Installation in Los Angeles',
    description:
      'Switchable privacy film for offices, clinics, conference rooms and luxury interiors that want instant privacy control.',
    problemsTitle: 'Smart film projects usually start with a need for flexible privacy.',
    problems: [
      'Glass that needs privacy on demand',
      'Conference rooms and clinics needing fast visibility control',
      'Luxury interiors that want a more advanced privacy system',
      'Spaces where fixed frosting is too limiting',
    ],
    solutionsTitle: 'What smart film can solve',
    solutions: [
      ['Switch privacy instantly', 'Move from clear to private without physical coverings.'],
      ['Support modern interiors', 'A high-end solution for offices and luxury environments.'],
      ['Preserve clean design', 'Avoid cluttering glass with heavier treatments.'],
      ['Fit flexible spaces', 'Useful where privacy needs change throughout the day.'],
    ],
  },
  {
    file: 'storefront-window-protection-los-angeles.html',
    eyebrow: 'Storefront Window Protection',
    title: 'Storefront Window Protection in Los Angeles',
    description:
      'Protection-oriented film solutions for storefront glass, including anti-graffiti, solar control and security-focused applications.',
    problemsTitle: 'Storefront projects usually combine visibility, comfort and protection issues.',
    problems: [
      'Scratches, vandalism or graffiti on exterior glass',
      'Heat gain and glare in customer-facing spaces',
      'Security concerns on exposed entry glass',
      'Need for a cleaner premium storefront finish',
    ],
    solutionsTitle: 'What storefront protection can solve',
    solutions: [
      ['Defend against surface damage', 'Use anti-graffiti film as a sacrificial layer.'],
      ['Improve storefront comfort', 'Reduce heat and glare for staff and visitors.'],
      ['Support safer glass response', 'Layer in safety/security film where appropriate.'],
      ['Upgrade street presence', 'Cleaner glass and a more intentional retail presentation.'],
    ],
  },
]

const servicesDropdown = serviceMenuItems
  .map((item) => `<a href="${item.href}">${item.label}</a>`)
  .join('')

const route = window.location.pathname.split('/').pop() || 'residential-window-film-los-angeles.html'
const page = servicePages.find((item) => item.file === route) ?? servicePages[0]

const serviceSelectOptions = (page.serviceOptions ?? serviceOptions)
  .map((option) => `<option value="${option}">${option}</option>`)
  .join('')

const projectImageByPage = {
  'residential-window-film-los-angeles.html': {
    alt: 'Residential window film Los Angeles solar control film installation on home glass',
    text: 'Premium residential glass film for heat reduction, privacy and UV protection across Los Angeles.',
  },
  'commercial-window-film-los-angeles.html': {
    alt: 'Commercial window film Los Angeles office and storefront solar control film installation',
    text: 'Commercial film applications for storefronts, offices, glare control and cleaner building presentation.',
  },
  'safety-security-window-film-los-angeles.html': {
    alt: 'Safety security window film Los Angeles protection film on storefront glass and entry glazing',
    text: 'Safety and security film helps strengthen vulnerable glazing and hold shattered glass together after impact.',
  },
  'anti-graffiti-window-film-los-angeles.html': {
    alt: 'Anti graffiti window film Los Angeles storefront glass protection installation',
    text: 'Anti-graffiti protection for storefront glass exposed to scratching, tagging and repeated vandalism.',
  },
  'decorative-privacy-window-film-los-angeles.html': {
    alt: 'Decorative privacy window film Los Angeles frosted film on office and interior glass',
    text: 'Decorative and privacy film for offices, bathrooms, conference rooms and luxury interior glass.',
  },
  'smart-film-installation-los-angeles.html': {
    alt: 'Smart film installation Los Angeles switchable privacy film on office conference room glass',
    text: 'Switchable smart film for modern privacy control in clinics, offices and luxury interiors.',
  },
  'storefront-window-protection-los-angeles.html': {
    alt: 'Storefront window protection Los Angeles anti graffiti and safety film on retail glass',
    text: 'Storefront-focused film solutions that combine protection, comfort and premium curb presentation.',
  },
}

const pageImage = projectImageByPage[page.file]

// Optional deep-content sections (rendered only when the page config provides them)
const filmTypesSection = page.filmTypes
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Film types</p>
          <h2>${page.filmTypesTitle}</h2>
        </div>
        <div class="card-grid two-up">
          ${page.filmTypes
            .map(
              ([title, body]) => `
                <article class="service-card">
                  <h3>${title}</h3>
                  <p>${body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    `
  : ''

const chooserSection = page.chooser
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Choosing a film</p>
          <h2>${page.chooserTitle}</h2>
        </div>
        <div class="chooser-table-wrap">
          <table class="chooser-table">
            <thead>
              <tr><th scope="col">Your goal</th><th scope="col">Recommended film</th></tr>
            </thead>
            <tbody>
              ${page.chooser
                .map(([goal, film]) => `<tr><td>${goal}</td><td>${film}</td></tr>`)
                .join('')}
            </tbody>
          </table>
        </div>
      </section>
    `
  : ''

const projectsSection = page.projects
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Real projects</p>
          <h2>${page.projectsTitle}</h2>
        </div>
        <div class="card-grid two-up project-mini-grid">
          ${page.projects
            .map(
              (project) => `
                <article class="service-card project-mini">
                  <img src="${project.img}" alt="${project.alt}" decoding="async" width="900" height="1125" />
                  <div class="project-mini-body">
                    <p class="project-mini-meta"><strong>${project.area}</strong> — ${project.tag}</p>
                    <p>${project.body}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    `
  : ''

const processSection = page.processSteps
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Process</p>
          <h2>${page.processTitle}</h2>
        </div>
        <div class="card-grid two-up">
          ${page.processSteps
            .map(
              ([title, body], index) => `
                <article class="service-card">
                  <h3><span class="process-step-num">${index + 1}.</span> ${title}</h3>
                  <p>${body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    `
  : ''

const faqSection = page.faq
  ? `
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2>${page.faqTitle}</h2>
        </div>
        <div class="faq-list">
          ${page.faq
            .map(
              ([question, answer], index) => `
                <details${index === 0 ? ' open' : ''}><summary>${question}</summary><p>${answer}</p></details>
              `,
            )
            .join('')}
        </div>
      </section>
    `
  : ''

const areasSection = page.areasNote
  ? `
      <section class="section service-areas-note">
        <p>${page.areasNote}</p>
      </section>
    `
  : ''

// Legacy filler section only for pages without the deeper content
const proofSection = page.filmTypes
  ? ''
  : `
      <section class="section service-proof-section">
        <div class="section-heading">
          <p class="eyebrow">Project fit</p>
          <h2>How this service supports premium Los Angeles properties.</h2>
          <p>${pageImage.text}</p>
        </div>
      </section>
    `

const heroSection = page.heroImage
  ? `
      <section class="section service-hero service-hero-split">
        <div class="service-hero-copy">
          <p class="eyebrow">${page.eyebrow}</p>
          <h1>${page.title}</h1>
          <p class="hero-text service-hero-text">${page.description}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Get a Fast Estimate</a>
            <a class="button button-secondary" href="${business.phoneHref}">Call / Text Now</a>
          </div>
        </div>
        <img class="service-hero-photo" src="${page.heroImage.src}" alt="${page.heroImage.alt}" fetchpriority="high" width="1000" height="1201" />
      </section>
    `
  : `
      <section class="section service-hero">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1>${page.title}</h1>
        <p class="hero-text service-hero-text">${page.description}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/#contact">Get a Fast Estimate</a>
          <a class="button button-secondary" href="${business.phoneHref}">Call / Text Now</a>
        </div>
      </section>
    `

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
        <span aria-current="page">${page.eyebrow}</span>
      </nav>

      ${heroSection}

      <section class="section split-section">
        <div>
          <p class="eyebrow">Common reasons clients reach out</p>
          <h2>${page.problemsTitle}</h2>
        </div>
        <div class="luxury-list">
          ${page.problems.map((item) => `<div>${item}</div>`).join('')}
        </div>
      </section>

      ${filmTypesSection}

      ${chooserSection}

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">What this service solves</p>
          <h2>${page.solutionsTitle}</h2>
        </div>
        <div class="card-grid two-up">
          ${page.solutions
            .map(
              ([title, body]) => `
                <article class="service-card">
                  <h3>${title}</h3>
                  <p>${body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      ${projectsSection}

      ${processSection}

      ${faqSection}

      ${areasSection}

      ${proofSection}

      <section class="section contact-section contact-section-form" id="contact">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>${page.formIntro ? 'Not sure which film you need?' : 'Request an estimate for this service.'}</h2>
          <p>
            ${page.formIntro ?? 'Send your ZIP, service type, measurements and photos if you have them. Leave either a phone number or an email so we can get back to you.'}
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
          <input type="hidden" name="_subject" value="Solcrest Film Co website estimate request" />
          <input type="hidden" name="_replyto" value="" />
          <input type="text" name="_gotcha" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true" />

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

          <p class="form-hint">Please leave at least one way to reach you — a phone number or an email.</p>

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

// FAQ structured data for pages that define their own FAQ
if (page.faq) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
  const schemaScript = document.createElement('script')
  schemaScript.type = 'application/ld+json'
  schemaScript.textContent = JSON.stringify(faqSchema)
  document.head.appendChild(schemaScript)
}

mountChatWidget()
