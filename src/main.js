import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#hero" aria-label="Solcrest Film Co home">
        <img class="brand-logo" src="/solcrest-logo.jpg" alt="Solcrest Film Co logo" />
      </a>
      <nav class="nav">
        <a href="#services">Services</a>
        <a href="#advantages">Advantages</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="nav-cta" href="#contact">Request Quote</a>
    </header>

    <main>
      <section class="hero section" id="hero">
        <div class="hero-overlay"></div>
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Premium window film for Los Angeles properties</p>
            <h1>Luxury comfort, privacy, and glare control for modern glass.</h1>
            <p class="hero-text">
              Solcrest Film Co installs premium window film for homes, storefronts, offices, and interior glass across
              Los Angeles County. We help you reduce heat, improve privacy, control glare, and create a cleaner,
              more elevated finish without sacrificing natural light.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="#contact">Get a Private Quote</a>
              <a class="button button-secondary" href="tel:7473249008">Call 747-324-9008</a>
            </div>
            <div class="contact-inline">
              <a href="mailto:info@solcrestfilm.com">info@solcrestfilm.com</a>
              <span>•</span>
              <span>Serving Los Angeles County & nearby cities</span>
            </div>
            <div class="hero-stat-row">
              <div>
                <strong>Residential</strong>
                <span>Heat, glare, UV, privacy</span>
              </div>
              <div>
                <strong>Commercial</strong>
                <span>Storefronts, offices, interior glass</span>
              </div>
              <div>
                <strong>Luxury finish</strong>
                <span>Clean visual integration with modern spaces</span>
              </div>
            </div>
          </div>

          <div class="hero-side">
            <article class="feature-panel panel-tall">
              <p class="panel-label">Why clients call Solcrest</p>
              <div class="feature-list">
                <div>
                  <strong>Too much sun</strong>
                  <span>Rooms and storefronts that overheat or get washed out during the day.</span>
                </div>
                <div>
                  <strong>Need more privacy</strong>
                  <span>Street-facing glass, bathrooms, offices, and entry zones that need cleaner separation.</span>
                </div>
                <div>
                  <strong>Want a better look</strong>
                  <span>Film that improves the visual character of the glass without heavy coverings.</span>
                </div>
              </div>
            </article>
            <article class="feature-panel panel-accent">
              <p class="panel-label">Fast quote workflow</p>
              <h3>Send the project type, city, and photos if you have them.</h3>
              <p>We can later connect this directly to GoHighLevel or a proper lead form once the final intake flow is ready.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section benefit-strip" aria-label="Core benefits">
        <div>Heat reduction</div>
        <div>Privacy film</div>
        <div>Glare control</div>
        <div>UV protection</div>
        <div>Security film</div>
      </section>

      <section class="section" id="services">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2>Window film solutions designed for comfort, privacy, and architectural polish.</h2>
          <p>
            This homepage is now aligned with the Solcrest identity and structured so we can grow it into a stronger
            multi-page SEO site with service pages, city pages, and a premium portfolio section.
          </p>
        </div>
        <div class="card-grid four-up">
          <article class="service-card service-card-featured">
            <span class="service-number">01</span>
            <h3>Residential Window Film</h3>
            <p>Reduce harsh sun, improve room comfort, and protect interiors while keeping the space bright and clean.</p>
            <a class="text-link" href="/residential-window-film">View Residential Page</a>
          </article>
          <article class="service-card">
            <span class="service-number">02</span>
            <h3>Commercial Window Film</h3>
            <p>Upgrade offices, storefronts, and work environments with better comfort, consistency, and presentation.</p>
          </article>
          <article class="service-card">
            <span class="service-number">03</span>
            <h3>Privacy & Decorative Film</h3>
            <p>Create elegant separation for bathrooms, conference rooms, entries, and interior partitions.</p>
          </article>
          <article class="service-card">
            <span class="service-number">04</span>
            <h3>Safety & Security Film</h3>
            <p>Add another layer of protection to vulnerable glass while keeping a polished architectural look.</p>
          </article>
        </div>
      </section>

      <section class="section split-section" id="advantages">
        <div>
          <p class="eyebrow">Advantages</p>
          <h2>The value is not just functional — it is visual, practical, and long-term.</h2>
          <p>
            Premium window film can make a property feel more refined while solving real daily problems: heat, glare,
            privacy, and overexposure. For both residential and commercial spaces, it creates a cleaner experience and
            a more intentional finish.
          </p>
        </div>
        <div class="luxury-list">
          <div>Reduce heat and hot spots in sun-heavy rooms</div>
          <div>Cut glare on TVs, desks, displays, and work surfaces</div>
          <div>Protect interiors from UV exposure and fading</div>
          <div>Improve privacy without fully blocking natural light</div>
          <div>Give the glass a cleaner, more premium visual tone</div>
        </div>
      </section>

      <section class="section portfolio-section" id="portfolio">
        <div class="section-heading">
          <p class="eyebrow">Portfolio direction</p>
          <h2>A more premium foundation for future photos, before/afters, and case studies.</h2>
          <p>
            Once you send real project images, I can turn these into a strong luxury portfolio section that actually sells the brand.
          </p>
        </div>
        <div class="portfolio-grid">
          <article class="portfolio-card portfolio-dark">
            <p class="card-kicker">Residential</p>
            <h3>Sun-heavy living rooms and bedrooms</h3>
            <p>Perfect for spaces that get too bright, too hot, or uncomfortable in the afternoon.</p>
          </article>
          <article class="portfolio-card portfolio-gold">
            <p class="card-kicker">Commercial</p>
            <h3>Storefronts, offices, and customer-facing glass</h3>
            <p>Clean up the look of the space while making it more comfortable for staff and guests.</p>
          </article>
          <article class="portfolio-card portfolio-silver">
            <p class="card-kicker">Interior glass</p>
            <h3>Bathrooms, entries, partitions, and private work areas</h3>
            <p>Create privacy and visual structure without replacing the existing glass.</p>
          </article>
        </div>
      </section>

      <section class="section" id="process">
        <div class="section-heading">
          <p class="eyebrow">Process</p>
          <h2>A clean experience from first conversation to final installation.</h2>
        </div>
        <div class="steps">
          <article>
            <span>01</span>
            <h3>Reach out</h3>
            <p>Tell us what type of project you have, where it is, and what issue you want to solve.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Review options</h3>
            <p>We guide you toward the right film based on comfort, privacy, glare, and appearance.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Confirm scope</h3>
            <p>We align on the right solution, project scope, and best next step for installation.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Install cleanly</h3>
            <p>Your space gets a more polished, comfortable, and elevated glass finish.</p>
          </article>
        </div>
      </section>

      <section class="section testimonials">
        <div class="section-heading">
          <p class="eyebrow">Trust & proof</p>
          <h2>Ready for real reviews, project images, and high-trust proof blocks.</h2>
          <p>
            Right now this section is styled to match the brand. Next we should replace these placeholders with real photos,
            Google reviews, and project-specific proof.
          </p>
        </div>
        <div class="card-grid two-up">
          <article class="quote-card">
            <p>“The room felt noticeably cooler, the glare dropped, and the windows still looked elegant.”</p>
            <strong>Residential review slot</strong>
          </article>
          <article class="quote-card">
            <p>“The storefront looked cleaner and the space felt more comfortable for both customers and staff.”</p>
            <strong>Commercial review slot</strong>
          </article>
        </div>
      </section>

      <section class="section faq" id="faq">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2>Common questions before choosing the right film.</h2>
        </div>
        <div class="faq-list">
          <details>
            <summary>What types of properties do you work on?</summary>
            <p>Homes, offices, storefronts, entry glass, bathrooms, interior partitions, and other residential or commercial spaces.</p>
          </details>
          <details>
            <summary>Can this website become a full SEO site later?</summary>
            <p>Yes. It is already structured so we can add service pages, city pages, gallery pages, and stronger local SEO content.</p>
          </details>
          <details>
            <summary>What helps speed up the quote process?</summary>
            <p>The project type, city, a short description of the problem, and photos if available.</p>
          </details>
          <details>
            <summary>Do you only work in Los Angeles?</summary>
            <p>The brand is positioned for Los Angeles County and nearby cities, and we can expand location coverage as we build city pages.</p>
          </details>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div>
          <p class="eyebrow">Request a quote</p>
          <h2>Tell us what you want to get done.</h2>
          <p>
            This gives the live site a clean conversion point right now. Next we can replace the temporary mailto flow with a real lead form,
            CRM integration, or direct GoHighLevel intake.
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
        <p>Luxury window film for comfort, privacy, and a more refined architectural finish.</p>
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
