import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell service-page-shell">
    <header class="topbar">
      <a class="brand" href="/" aria-label="Solcrest Film Co home">
        <img class="brand-logo" src="/solcrest-logo.jpg" alt="Solcrest Film Co logo" />
      </a>
      <nav class="nav">
        <a href="/#services">Services</a>
        <a href="/#advantages">Advantages</a>
        <a href="/#portfolio">Portfolio</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a class="nav-cta" href="/#contact">Request Quote</a>
    </header>

    <main>
      <section class="section service-hero">
        <p class="eyebrow">Residential Window Film</p>
        <h1>Premium window film for cooler, more private, and more comfortable homes.</h1>
        <p class="hero-text service-hero-text">
          Solcrest Film Co helps Los Angeles homeowners reduce heat, glare, and UV exposure while keeping interiors bright,
          polished, and visually clean. This page is the first dedicated service page in the SEO structure for the website.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="/#contact">Request a Quote</a>
          <a class="button button-secondary" href="tel:7473249008">Call 747-324-9008</a>
        </div>
      </section>

      <section class="section split-section">
        <div>
          <p class="eyebrow">When homeowners reach out</p>
          <h2>Most residential film projects start with one of four problems.</h2>
        </div>
        <div class="luxury-list">
          <div>Rooms that overheat in the afternoon</div>
          <div>TV glare or harsh light on work surfaces</div>
          <div>Too much visibility from the outside</div>
          <div>UV exposure affecting floors, furniture, and finishes</div>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">What residential film can do</p>
          <h2>Comfort and appearance can improve at the same time.</h2>
        </div>
        <div class="card-grid two-up">
          <article class="service-card">
            <h3>Reduce heat and glare</h3>
            <p>Help sun-heavy rooms feel more balanced and more usable during the brightest parts of the day.</p>
          </article>
          <article class="service-card">
            <h3>Improve privacy</h3>
            <p>Create a more protected feel for street-facing windows, bathrooms, and other exposed glass areas.</p>
          </article>
          <article class="service-card">
            <h3>Protect interiors</h3>
            <p>Reduce UV exposure that can contribute to fading on floors, furniture, and interior finishes.</p>
          </article>
          <article class="service-card">
            <h3>Keep a clean visual finish</h3>
            <p>Maintain a premium look without heavy curtains or bulky window treatments.</p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Good fit for</p>
          <h2>Common spaces for residential window film.</h2>
        </div>
        <div class="portfolio-grid">
          <article class="portfolio-card portfolio-dark">
            <p class="card-kicker">Living spaces</p>
            <h3>Living rooms, family rooms, and open-plan areas</h3>
          </article>
          <article class="portfolio-card portfolio-gold">
            <p class="card-kicker">Private zones</p>
            <h3>Bedrooms, bathrooms, side windows, and street-facing glass</h3>
          </article>
          <article class="portfolio-card portfolio-silver">
            <p class="card-kicker">Everyday use</p>
            <h3>Home offices, breakfast nooks, and rooms with screen glare</h3>
          </article>
        </div>
      </section>

      <section class="section contact-section">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>Request a residential quote.</h2>
          <p>
            Send the city, project type, and photos if you have them. This page can later be expanded with local SEO sections,
            FAQs, internal links, and before/after project proof.
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
