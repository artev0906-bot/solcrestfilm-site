import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#hero">
        <span class="brand-mark">SC</span>
        <span>Solcrest Film Co</span>
      </a>
      <nav class="nav">
        <a href="#services">Services</a>
        <a href="#benefits">Benefits</a>
        <a href="#process">Process</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="nav-cta" href="tel:7473249008">Call Now</a>
    </header>

    <main>
      <section class="hero section" id="hero">
        <div class="hero-copy">
          <p class="eyebrow">Window film for Los Angeles homes & businesses</p>
          <h1>Cooler interiors, more privacy, and a cleaner look for your glass.</h1>
          <p class="hero-text">
            Solcrest Film Co installs premium window film for residential and commercial spaces across Los Angeles County.
            Whether you need heat reduction, glare control, privacy, decorative glass, or safety film, we help you choose
            the right finish and make the install process simple.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Get a Free Quote</a>
            <a class="button button-secondary" href="tel:7473249008">Call 747-324-9008</a>
          </div>
          <div class="contact-inline">
            <a href="mailto:info@solcrestfilm.com">info@solcrestfilm.com</a>
            <span>•</span>
            <span>Los Angeles County & nearby cities</span>
          </div>
          <ul class="hero-points">
            <li>Residential window film</li>
            <li>Commercial window film</li>
            <li>Privacy, decorative, and safety film</li>
          </ul>
        </div>

        <div class="hero-visual">
          <div class="glass-card card-tall">
            <p class="card-kicker">Popular reasons clients reach out</p>
            <div class="stat-stack">
              <article>
                <strong>Too much heat</strong>
                <span>Rooms that get hot in the afternoon or are hard to cool.</span>
              </article>
              <article>
                <strong>Lack of privacy</strong>
                <span>Street-facing windows, office glass, bathrooms, and entry panels.</span>
              </article>
              <article>
                <strong>Harsh glare</strong>
                <span>TV rooms, desks, storefronts, and reception areas with direct sun.</span>
              </article>
            </div>
          </div>
          <div class="glass-card card-accent">
            <p class="mini-label">Fast quote workflow</p>
            <h3>Send the project type, city, and photos if you have them.</h3>
            <p>We can use this section later for a stronger lead form, GHL integration, or project estimator.</p>
          </div>
        </div>
      </section>

      <section class="section trust-strip" aria-label="Core benefits">
        <div>Heat reduction</div>
        <div>Glare control</div>
        <div>UV protection</div>
        <div>Privacy upgrades</div>
        <div>Security film</div>
      </section>

      <section class="section" id="services">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2>The right film depends on what problem you're solving.</h2>
          <p>
            This landing page is built to convert right now and grow into a full multi-page website later. Each service block below
            can become its own dedicated page as we expand the site.
          </p>
        </div>
        <div class="card-grid four-up">
          <article class="info-card service-card">
            <span class="service-number">01</span>
            <h3>Residential Window Film</h3>
            <p>Reduce solar heat, harsh light, and UV damage while keeping a clean natural look.</p>
          </article>
          <article class="info-card service-card">
            <span class="service-number">02</span>
            <h3>Commercial Window Film</h3>
            <p>Improve comfort, energy performance, and visual consistency for offices and storefronts.</p>
          </article>
          <article class="info-card service-card">
            <span class="service-number">03</span>
            <h3>Privacy & Decorative Film</h3>
            <p>Ideal for bathrooms, conference rooms, interior glass, side lights, and entry areas.</p>
          </article>
          <article class="info-card service-card">
            <span class="service-number">04</span>
            <h3>Safety & Security Film</h3>
            <p>Add another layer of protection to vulnerable glass in homes and businesses.</p>
          </article>
        </div>
      </section>

      <section class="section split-section" id="benefits">
        <div>
          <p class="eyebrow">Why people install window film</p>
          <h2>It’s not just about shade — it’s about comfort, function, and appearance.</h2>
          <p>
            Good film makes a room feel better, protects interiors from UV exposure, improves privacy, and gives glass a cleaner,
            more intentional finish. For business spaces, it also helps create a better experience for staff and customers.
          </p>
        </div>
        <div class="check-list">
          <div>Lower heat and reduce hot spots</div>
          <div>Cut screen glare and eye strain</div>
          <div>Protect furniture, floors, and displays from UV</div>
          <div>Improve privacy without fully blocking natural light</div>
          <div>Upgrade the look of interior and exterior glass</div>
        </div>
      </section>

      <section class="section" id="projects">
        <div class="section-heading">
          <p class="eyebrow">Use cases</p>
          <h2>Examples of the kinds of projects this site can help convert.</h2>
          <p>
            Once you give me your real project photos, I can replace these visual placeholders with stronger gallery blocks and before/after proof.
          </p>
        </div>
        <div class="project-showcase">
          <article class="project-card project-feature dark-panel">
            <p class="mini-label">Residential</p>
            <h3>Sun-heavy living rooms and bedrooms</h3>
            <p>For spaces that get too warm, too bright, or uncomfortable in the afternoon.</p>
          </article>
          <article class="project-card project-feature warm-panel">
            <p class="mini-label">Commercial</p>
            <h3>Storefronts, offices, and customer-facing glass</h3>
            <p>Better comfort, better privacy, and a cleaner look for daily operations.</p>
          </article>
          <article class="project-card project-feature blue-panel">
            <p class="mini-label">Interior glass</p>
            <h3>Privacy film for bathrooms, meeting rooms, and entry glass</h3>
            <p>Functional privacy without replacing the glass itself.</p>
          </article>
        </div>
      </section>

      <section class="section" id="process">
        <div class="section-heading">
          <p class="eyebrow">Process</p>
          <h2>Simple, clean, and easy for the customer.</h2>
        </div>
        <div class="steps">
          <article>
            <span>01</span>
            <h3>Reach out</h3>
            <p>Call, email, or submit the form with the type of project and city.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Share details</h3>
            <p>Photos and basic goals help us narrow down the right film faster.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Review options</h3>
            <p>We guide you toward the best fit for heat, privacy, glare, or security.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Schedule install</h3>
            <p>Confirm the next step and move toward a clean finished installation.</p>
          </article>
        </div>
      </section>

      <section class="section testimonials">
        <div class="section-heading">
          <p class="eyebrow">Trust section</p>
          <h2>Ready for your real reviews, Google proof, and project photos.</h2>
          <p>
            Right now this section is styled to look finished, but it’s waiting for your actual social proof. Once you share photos,
            reviews, or screenshots, I can turn this into a much stronger trust block.
          </p>
        </div>
        <div class="card-grid two-up">
          <article class="quote-card">
            <p>“The room stayed much more comfortable in the afternoon, and the glare on the TV dropped right away.”</p>
            <strong>Residential review slot</strong>
          </article>
          <article class="quote-card">
            <p>“The front glass looked cleaner, and the space felt better for both staff and customers.”</p>
            <strong>Commercial review slot</strong>
          </article>
        </div>
      </section>

      <section class="section faq" id="faq">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2>Questions people usually ask before requesting a quote.</h2>
        </div>
        <div class="faq-list">
          <details>
            <summary>What kinds of window film do you install?</summary>
            <p>Residential, commercial, privacy, decorative, and safety/security film options.</p>
          </details>
          <details>
            <summary>Do you only work in Los Angeles?</summary>
            <p>The site is positioned for Los Angeles County and nearby cities, and we can add separate city pages later.</p>
          </details>
          <details>
            <summary>Can this become a full website later?</summary>
            <p>Yes. This page is structured so we can add service pages, city pages, gallery pages, and SEO content without rebuilding everything.</p>
          </details>
          <details>
            <summary>What should I send for a faster quote?</summary>
            <p>The service type, city, a short description of the project, and photos if available.</p>
          </details>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div>
          <p class="eyebrow">Get a quote</p>
          <h2>Tell us what you’re looking to get done.</h2>
          <p>
            This is the main conversion area for the first version of the site. We can later connect it directly to GoHighLevel,
            a form backend, or another lead intake system.
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
        <strong>Solcrest Film Co</strong>
        <p>Window film solutions for comfort, privacy, and protection.</p>
        <p><a href="mailto:info@solcrestfilm.com">info@solcrestfilm.com</a></p>
        <p><a href="tel:7473249008">747-324-9008</a></p>
      </div>
      <div class="footer-links">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Get a Quote</a>
      </div>
    </footer>
  </div>
`
