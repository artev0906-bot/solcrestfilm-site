import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#hero" aria-label="Solcrest Film Co home">
        <div class="brand-mark" aria-hidden="true">
          <div class="sunburst"></div>
          <div class="roof-line"></div>
          <div class="panel-stack">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="brand-text">
          <strong>SOLCR<span class="brand-e">E</span>ST</strong>
          <span>FILM CO</span>
        </div>
      </a>
      <nav class="nav">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#process">Process</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="nav-cta" href="#contact">Book a Consultation</a>
    </header>

    <main>
      <section class="hero section" id="hero">
        <div class="hero-backdrop"></div>
        <div class="hero-copy">
          <p class="eyebrow">Luxury window film for Los Angeles properties</p>
          <h1>Modern heat control, privacy, and glare reduction with a premium finish.</h1>
          <p class="hero-text">
            Solcrest Film Co helps homeowners, storefronts, offices, and interior spaces feel cooler, look sharper,
            and stay more protected. We install premium window film with a clean luxury aesthetic built for modern
            California spaces.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Request a Quote</a>
            <a class="button button-secondary" href="tel:7473249008">Call 747-324-9008</a>
          </div>
          <div class="contact-inline">
            <a href="mailto:info@solcrestfilm.com">info@solcrestfilm.com</a>
            <span>•</span>
            <span>Serving Los Angeles County & nearby cities</span>
          </div>
        </div>

        <div class="hero-panels">
          <article class="glass-panel panel-featured">
            <p class="panel-label">Signature benefits</p>
            <h3>Refined protection for residential and commercial glass.</h3>
            <ul>
              <li>Reduce heat and harsh sun exposure</li>
              <li>Improve privacy without heavy window treatments</li>
              <li>Elevate the look of homes, offices, and storefronts</li>
            </ul>
          </article>
          <article class="glass-panel panel-mini">
            <p class="panel-label">Ideal for</p>
            <div class="mini-grid">
              <span>Luxury homes</span>
              <span>Storefront glass</span>
              <span>Office partitions</span>
              <span>Bathrooms & entries</span>
            </div>
          </article>
        </div>
      </section>

      <section class="section benefit-strip" aria-label="Core benefits">
        <div>Heat reduction</div>
        <div>Glare control</div>
        <div>Privacy film</div>
        <div>UV protection</div>
        <div>Security options</div>
      </section>

      <section class="section" id="services">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2>Window film solutions designed around comfort, privacy, and visual impact.</h2>
          <p>
            This site is now visually aligned with the Solcrest brand and still structured for future expansion into
            service-specific and city-specific SEO pages.
          </p>
        </div>
        <div class="card-grid four-up">
          <article class="service-card">
            <span class="service-number">01</span>
            <h3>Residential Window Film</h3>
            <p>For living rooms, bedrooms, and sun-heavy areas that need cooler temperatures and cleaner light.</p>
          </article>
          <article class="service-card">
            <span class="service-number">02</span>
            <h3>Commercial Window Film</h3>
            <p>For offices, retail storefronts, and customer-facing glass that need comfort and consistency.</p>
          </article>
          <article class="service-card">
            <span class="service-number">03</span>
            <h3>Privacy & Decorative Film</h3>
            <p>For entry glass, bathrooms, conference rooms, and partitions where elegance and privacy matter.</p>
          </article>
          <article class="service-card">
            <span class="service-number">04</span>
            <h3>Safety & Security Film</h3>
            <p>For spaces that need another layer of protection while preserving a polished architectural look.</p>
          </article>
        </div>
      </section>

      <section class="section split-section" id="portfolio">
        <div>
          <p class="eyebrow">Brand direction</p>
          <h2>Built to feel more premium, cinematic, and architectural — like the Solcrest identity.</h2>
          <p>
            The visual language now leans into black, metallic silver, and muted gold, with sharper structure,
            thinner lines, and a more elevated presentation that matches the logo you sent.
          </p>
        </div>
        <div class="check-list luxury-list">
          <div>Dark luxury color palette</div>
          <div>Gold accent rules and highlights</div>
          <div>Clean geometric card system</div>
          <div>High-end visual tone instead of generic local-service styling</div>
        </div>
      </section>

      <section class="section" id="process">
        <div class="section-heading">
          <p class="eyebrow">Process</p>
          <h2>A polished process from first inquiry to final installation.</h2>
        </div>
        <div class="steps">
          <article>
            <span>01</span>
            <h3>Reach out</h3>
            <p>Tell us the type of property, your city, and the main issue you want to solve.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Review options</h3>
            <p>We recommend the right film based on heat, privacy, glare, and the visual style of the space.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Confirm scope</h3>
            <p>We lock in the project direction, quote, and next step for installation.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Install cleanly</h3>
            <p>Your space gets a cleaner, more comfortable, and more refined glass finish.</p>
          </article>
        </div>
      </section>

      <section class="section testimonials">
        <div class="section-heading">
          <p class="eyebrow">Proof & positioning</p>
          <h2>Ready for real project photography, case studies, and reviews.</h2>
          <p>
            Once you send real photos and client feedback, I can replace these styled placeholders with much stronger
            proof blocks that match the same luxury visual language.
          </p>
        </div>
        <div class="card-grid two-up">
          <article class="quote-card">
            <p>“The rooms stayed more comfortable, the glare dropped, and the windows still looked clean and elegant.”</p>
            <strong>Residential review slot</strong>
          </article>
          <article class="quote-card">
            <p>“The storefront felt more polished and more comfortable for both the team and our customers.”</p>
            <strong>Commercial review slot</strong>
          </article>
        </div>
      </section>

      <section class="section faq" id="faq">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2>Questions people ask before choosing the right film.</h2>
        </div>
        <div class="faq-list">
          <details>
            <summary>What kinds of spaces do you work on?</summary>
            <p>Homes, offices, storefronts, entry glass, bathrooms, partitions, and other residential or commercial glass areas.</p>
          </details>
          <details>
            <summary>Can this site grow into a full SEO website?</summary>
            <p>Yes. The structure is already built so we can add service pages, city pages, gallery pages, and more content later.</p>
          </details>
          <details>
            <summary>What helps speed up the quote process?</summary>
            <p>The project type, city, a few photos if available, and the main goal such as heat reduction or privacy.</p>
          </details>
          <details>
            <summary>Do you only serve Los Angeles?</summary>
            <p>The brand is positioned for Los Angeles County and nearby cities, and we can expand the site by area as needed.</p>
          </details>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div>
          <p class="eyebrow">Request a quote</p>
          <h2>Tell us what you want to get done.</h2>
          <p>
            This section can later connect directly to GoHighLevel, a real form backend, or a more advanced estimator.
            For now it gives the brand a clean conversion point on the live site.
          </p>
          <div class="contact-block">
            <a href="tel:7473249008">747-324-9008</a>
            <a href="mailto:info@solcrestfilm.com">info@solcrestfilm.com</a>
            <span>solcrestfilm.com</span>
          </div>
        </div>
        <form class="contact-card" action="mailto:info@solcrestfilm.com" method="post" enctype="text/plain">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="info@solcrestfilm.com" />
          </label>
          <label>
            Project type
            <select>
              <option>Residential window film</option>
              <option>Commercial window film</option>
              <option>Privacy / decorative film</option>
              <option>Safety / security film</option>
            </select>
          </label>
          <label>
            Project details
            <textarea rows="4" placeholder="Example: home in Glendale, front windows get too hot in the afternoon."></textarea>
          </label>
          <button class="button button-primary" type="submit">Send Quote Request</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <div>
        <strong>SOLCREST FILM CO</strong>
        <p>Luxury window film for comfort, privacy, and modern glass design.</p>
        <p><a href="mailto:info@solcrestfilm.com">info@solcrestfilm.com</a></p>
        <p><a href="tel:7473249008">747-324-9008</a></p>
      </div>
      <div class="footer-links">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Get a Quote</a>
      </div>
    </footer>
  </div>
`
