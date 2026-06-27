import './style.css'

const servicePages = [
  {
    file: 'residential-window-film-los-angeles.html',
    eyebrow: 'Residential Window Film',
    title: 'Premium Residential Window Film in Los Angeles',
    description: 'Reduce heat, glare, UV exposure and privacy issues for homes, bedrooms, bathrooms and living spaces across Los Angeles.',
    problemsTitle: 'Most residential film projects start with comfort and privacy problems.',
    problems: [
      'Rooms that overheat in the afternoon',
      'TV glare and harsh light on work surfaces',
      'Too much visibility from the outside',
      'UV exposure affecting floors, furniture and finishes',
    ],
    solutionsTitle: 'What residential film can solve',
    solutions: [
      ['Reduce heat and glare', 'Help sun-heavy rooms feel more balanced and more usable during the brightest parts of the day.'],
      ['Improve privacy', 'Create a more protected feel for street-facing windows, bathrooms, and exposed glass areas.'],
      ['Protect interiors', 'Reduce UV exposure that can contribute to fading on floors, furniture, and interior finishes.'],
      ['Keep a clean finish', 'Maintain a premium look without bulky window treatments.'],
    ],
  },
  {
    file: 'commercial-window-film-los-angeles.html',
    eyebrow: 'Commercial Window Film',
    title: 'Commercial Window Film for Offices, Storefronts and Buildings in Los Angeles',
    description: 'Improve comfort, privacy, anti-graffiti protection, glare control and overall presentation for commercial glass across Los Angeles.',
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
    description: 'Help strengthen vulnerable glass and hold shattered glass together after impact with safety and security film solutions.',
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
    description: 'Protect storefront glass from scratches, vandalism and costly replacement with sacrificial anti-graffiti film.',
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
    description: 'Frosted, blackout, gradient and custom privacy film solutions for offices, homes, bathrooms and luxury interiors.',
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
    description: 'Switchable privacy film for offices, clinics, conference rooms and luxury interiors that want instant privacy control.',
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
    description: 'Protection-oriented film solutions for storefront glass, including anti-graffiti, solar control and security-focused applications.',
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

const route = window.location.pathname.split('/').pop() || 'residential-window-film-los-angeles.html'
const page = servicePages.find((item) => item.file === route) ?? servicePages[0]

document.querySelector('#app').innerHTML = `
  <div class="site-shell service-page-shell">
    <header class="topbar">
      <a class="brand" href="/" aria-label="Solcrest Film Co home">
        <img class="brand-logo" src="/solcrest-logo-dark-final.jpg" alt="Solcrest Film Co logo" />
      </a>
      <nav class="nav">
        <a href="/#services">Services</a>
        <a href="/#residential">Residential</a>
        <a href="/#commercial">Commercial</a>
        <a href="/#areas">Areas</a>
        <a href="/#contact">Estimate</a>
      </nav>
      <div class="nav-actions">
        <a class="nav-cta nav-cta-secondary" href="tel:7473249008">Call / Text</a>
        <a class="nav-cta" href="/#contact">Get Estimate</a>
      </div>
    </header>

    <main>
      <section class="section service-hero">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1>${page.title}</h1>
        <p class="hero-text service-hero-text">${page.description}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/#contact">Get a Free Estimate</a>
          <a class="button button-secondary" href="tel:7473249008">Call / Text Now</a>
        </div>
      </section>

      <section class="section split-section">
        <div>
          <p class="eyebrow">Common reasons clients reach out</p>
          <h2>${page.problemsTitle}</h2>
        </div>
        <div class="luxury-list">
          ${page.problems.map((item) => `<div>${item}</div>`).join('')}
        </div>
      </section>

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

      <section class="section contact-section">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>Request an estimate for this service.</h2>
          <p>
            Send the city, project type, and photos if you have them. These service pages are built to support stronger local SEO and clearer lead capture.
          </p>
        </div>
        <div class="contact-block">
          <a href="tel:7473249008">747-324-9008</a>
          <a href="mailto:info@solcrestfilm.com">info@solcrestfilm.com</a>
          <a class="text-link" href="/">Back to Homepage</a>
        </div>
      </section>
    </main>
  </div>
`

const topbar = document.querySelector('.topbar')
let lastScrollY = window.scrollY
window.addEventListener('scroll', () => {
  if (!topbar) return
  const currentY = window.scrollY
  if (currentY > 120 && currentY > lastScrollY) {
    topbar.classList.add('topbar-hidden')
  } else {
    topbar.classList.remove('topbar-hidden')
  }
  lastScrollY = currentY
})
