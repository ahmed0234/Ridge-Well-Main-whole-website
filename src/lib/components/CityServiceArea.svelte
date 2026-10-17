<script lang="ts">
  import type { CityData } from '#lib/data/cityData.ts';
  import { masterServices, allCitySlugs, cityData } from '#lib/data/cityData.ts';

  let { city }: { city: CityData } = $props();

  const services = $derived(city.serviceIds.map((id: string) => masterServices[id]).filter(Boolean));
  const otherCities = $derived(allCitySlugs.filter((slug: string) => slug !== city.slug).map((slug: string) => cityData[slug]));
</script>

<div class="page city-page">
  <!-- Hero Section -->
  <section class="inner-hero">
    <div class="wrap hero-split">
      <div>
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a> / <a href="/service-areas/">Our service areas</a> / {city.name}
        </nav>
        <span class="kicker">{city.kicker}</span>
        <h1>{city.heroTitle}</h1>
        <p>{city.heroSubtitle}</p>
        <div class="actions hero-actions">
          <a class="btn" href="/contact/">Get my free consultation<span aria-hidden="true">↗</span></a>
          <a class="cta-phone" href="tel:+17208825772">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path>
            </svg>
            720-882-5772
          </a>
        </div>
        <div class="trust-pill-strip">
          <span class="trust-pill">★ 5-Year Paver Warranty</span>
          <span class="trust-pill">✓ In-House Colorado Crew</span>
          <span class="trust-pill">✓ Serving Since 2011</span>
          <span class="trust-pill">✓ Free On-Site Estimates</span>
        </div>
      </div>
      <div class="inner-photo">
        <img
          src={city.heroImage}
          alt="{city.heroTitle} by Ridgewell Landscape and Design"
          width="1200"
          height="800"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </section>

  <!-- Editorial Section: Climate, Neighborhoods & Local Context -->
  <section class="section local-context-section">
    <div class="wrap editorial-layout">
      <!-- Main Column -->
      <article class="prose local-narrative">
        <span class="kicker">LOCAL CLIMATE &amp; TERRAIN EXPERTISE</span>
        <h2>{city.climateHeading}</h2>
        <p class="lead-text">{city.climateIntro}</p>

        {#each city.climateBody as paragraph}
          <p>{paragraph}</p>
        {/each}

        <!-- Neighborhoods Cloud in Mobile/Content -->
        <div class="content-feature neighborhood-feature">
          <h3>Neighborhoods We Serve in {city.name}</h3>
          <p>
            Whether your property is in an established community or a newly developed master-planned neighborhood, our in-house crews provide on-site consultations across the area:
          </p>
          <div class="neighborhood-tag-grid">
            {#each city.neighborhoods as neighborhood}
              <span class="neighborhood-tag">{neighborhood}</span>
            {/each}
          </div>
        </div>
      </article>

      <!-- Sidebar Column -->
      <aside class="sidebar local-sidebar">
        <!-- Local Property Snapshot Card -->
        <div class="side-cta snapshot-card">
          <span class="kicker">{city.name.toUpperCase()} PROFILE</span>
          <h3>Local Property Snapshot</h3>
          <div class="snapshot-list">
            {#each city.localHighlights as highlight}
              <div class="snapshot-item">
                <span class="snapshot-label">{highlight.label}</span>
                <strong class="snapshot-val">{highlight.value}</strong>
              </div>
            {/each}
          </div>
          <a class="btn" href="/contact/">Consult with Francisco <span>↗</span></a>
          <a class="side-phone" href="tel:+17208825772">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path>
            </svg>
            720-882-5772
          </a>
        </div>
      </aside>
    </div>
  </section>

  <!-- Dynamic Available Services Section -->
  <section class="section services-showcase-section" id="{city.slug}">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="kicker">AVAILABLE IN {city.name.toUpperCase()}</span>
          <h2>Outdoor Living &amp; Landscaping Services</h2>
        </div>
        <p>
          Explore the services we deliver for {city.name} properties. Each project is built to order by our dedicated in-house team.
        </p>
      </div>

      <div class="dynamic-services-grid">
        {#each services as service, idx}
          <article class="city-service-card">
            <a href={service.href} class="card-img-wrapper" aria-label="Learn more about {service.title}">
              <img
                src={service.image}
                alt="{service.title} in {city.name}, Colorado"
                width="1200"
                height="628"
                loading="lazy"
                decoding="async"
              />
              <span class="service-index-badge">0{idx + 1}</span>
            </a>
            <div class="card-body">
              <span class="card-category">{service.category}</span>
              <h3><a href={service.href}>{service.title}</a></h3>
              <p>{service.shortDesc}</p>
              
              <ul class="benefit-list">
                {#each service.benefits as benefit}
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>{benefit}</span>
                  </li>
                {/each}
              </ul>

              <a class="service-action-link" href={service.href}>
                Explore {service.title} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        {/each}

        <!-- Custom Scope Card -->
        <article class="city-service-card custom-project-card">
          <div class="custom-card-content">
            <span class="card-category">CUSTOM ARCHITECTURE</span>
            <h3>Looking for a Custom Combination?</h3>
            <p>
              {city.customServiceNote || `Need a multi-tier outdoor kitchen, fire feature, or full xeriscape renovation in ${city.name}? Our team designs and builds comprehensive master plans.`}
            </p>
            <div class="custom-perks">
              <div class="perk-item">✓ 3D Master Concept Modeling</div>
              <div class="perk-item">✓ Local HOA &amp; Permit Coordination</div>
              <div class="perk-item">✓ Dedicated In-House Project Manager</div>
            </div>
            <a class="btn" href="/contact/">Discuss your custom plan <span>↗</span></a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- The Ridgewell Difference / Why Homeowners Choose Us -->
  <section class="section why-choose-section">
    <div class="wrap">
      <div class="section-head text-center">
        <span class="kicker">THE RIDGEWELL CRAFTSMANSHIP STANDARD</span>
        <h2>Why {city.name} Homeowners Trust Us With Their Yards</h2>
        <p>
          We aren't a high-volume franchise. Francisco Garcia founded Ridgewell in 2011 to deliver meticulous craftsmanship, honest communication, and yards built to last.
        </p>
      </div>

      <div class="value-pillars-grid">
        <div class="pillar-card">
          <div class="pillar-icon">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h4>5-Year Craftsmanship Warranty</h4>
          <p>
            We stand behind our work. All paver patios, walkways, and retaining walls built on our aggregate foundations include a 5-year warranty against settling and shifting.
          </p>
        </div>

        <div class="pillar-card">
          <div class="pillar-icon">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h4>In-House Dedicated Crew</h4>
          <p>
            No rotating day-labor or unvetted subcontractors. Francisco Garcia and our experienced full-time team manage every cut, excavation pass, and stone placement personally.
          </p>
        </div>

        <div class="pillar-card">
          <div class="pillar-icon">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h4>Colorado Climate Engineering</h4>
          <p>
            From extreme winter sub-zero freezes to 95° summer heat, our deep aggregate road-base excavation and geotextile separation prevent the frost heave that ruins standard concrete.
          </p>
        </div>

        <div class="pillar-card">
          <div class="pillar-icon">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
          </div>
          <h4>Water-Wise Efficiency</h4>
          <p>
            Save on high municipal water rates with smart xeriscapes, high-efficiency drip systems, and drought-tolerant native plants that flourish in Colorado's high-altitude climate.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3-Step Process Section -->
  <section class="section process-section">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="kicker">HOW WE WORK TOGETHER</span>
          <h2>A Simple, Stress-Free Process</h2>
        </div>
        <p>From your first phone call to the final punch-list walkthrough, we make transforming your yard straightforward.</p>
      </div>

      <div class="process-steps-grid">
        <div class="process-step">
          <span class="step-num">01</span>
          <h4>Walk the Space</h4>
          <p>
            We meet at your {city.name} home for a complimentary consultation. We examine grading, soil conditions, tree roots, sun angles, and listen carefully to your goals.
          </p>
        </div>

        <div class="process-step">
          <span class="step-num">02</span>
          <h4>Design &amp; Transparent Proposal</h4>
          <p>
            We prepare custom 2D/3D layouts, hand-selected paver and stone samples, and an itemized proposal with clear milestone pricing and realistic completion timelines.
          </p>
        </div>

        <div class="process-step">
          <span class="step-num">03</span>
          <h4>In-House Build &amp; Walkthrough</h4>
          <p>
            Our crew completes the work with daily site cleanups. Before final payment, we perform a joint walkthrough to make sure every joint, cut, and stone exceeds your expectations.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Local FAQs Section -->
  {#if city.faqs && city.faqs.length > 0}
    <section class="section city-faqs-section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <span class="kicker">COMMON QUESTIONS</span>
            <h2>Landscaping &amp; Hardscaping in {city.name}</h2>
          </div>
          <p>Helpful answers to common questions about outdoor living projects in your area.</p>
        </div>

        <div class="faq-list">
          {#each city.faqs as faq}
            <details class="faq-item">
              <summary>{faq.question}</summary>
              <div>
                <p>{faq.answer}</p>
              </div>
            </details>
          {/each}
        </div>
      </div>
    </section>
  {/if}

  <!-- Other Service Areas Strip -->
  <section class="section other-areas-section">
    <div class="wrap">
      <div class="other-areas-box">
        <span class="kicker">FRONT RANGE COVERAGE</span>
        <h3>Also Serving Neighboring Communities</h3>
        <p>In addition to {city.name}, Ridgewell designs and builds across the greater Denver metro area:</p>
        <div class="city-pill-grid">
          {#each otherCities as otherCity}
            <a href="/service-areas/{otherCity.slug}/" class="city-nav-pill">
              <span>{otherCity.name}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Closing CTA Section -->
  <section class="cta">
    <div class="wrap">
      <span class="kicker">START WITH THE PART OF YOUR YARD THAT ISN’T WORKING</span>
      <h2>You don’t need a finished plan.<br />That’s where we come in.</h2>
      <p>
        Show us your space in {city.name}. Tell us what you want to change.<br />
        We’ll help you work out the next step at a free on-site consultation.
      </p>
      <div class="actions">
        <a class="btn" href="/contact/">Get my free consultation<span aria-hidden="true">↗</span></a>
        <a class="cta-phone" href="tel:+17208825772">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path>
          </svg>
          720-882-5772
        </a>
      </div>
      <small>Meet in person with Francisco. Ask questions. Explore what’s possible.</small>
    </div>
  </section>
</div>

<style>
  /* Hero Enhancements */
  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }

  .trust-pill-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
  }

  .trust-pill {
    background: #fff;
    border: 1px solid var(--line);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 11.5px;
    font-weight: 700;
    color: var(--ink);
    letter-spacing: 0.2px;
  }

  /* Local Narrative & Neighborhood Feature */
  .local-narrative .lead-text {
    font-size: 17px;
    line-height: 1.8;
    color: var(--ink);
    font-weight: 600;
    margin-bottom: 22px;
  }

  .neighborhood-feature {
    margin-top: 35px;
    background: #fdfcf9;
    border: 1px solid var(--sand);
    border-radius: 7px;
    padding: 24px 26px;
  }

  .neighborhood-feature h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
    color: var(--ink);
  }

  .neighborhood-tag-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
  }

  .neighborhood-tag {
    background: #fff;
    border: 1px solid var(--line);
    color: var(--ink);
    font-size: 12px;
    font-weight: 600;
    padding: 6px 13px;
    border-radius: 4px;
  }

  /* Snapshot Card */
  .snapshot-card {
    background: var(--cream);
    border: 1px solid var(--line);
  }

  .snapshot-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 14px 0 20px;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    margin-bottom: 20px;
  }

  .snapshot-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .snapshot-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: var(--muted);
    font-weight: 700;
  }

  .snapshot-val {
    font-size: 13.5px;
    color: var(--ink);
    line-height: 1.4;
  }

  /* Services Showcase Grid */
  .services-showcase-section {
    background: #fbf9f5;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .dynamic-services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 30px;
    margin-top: 36px;
  }

  .city-service-card {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .city-service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(67, 37, 48, 0.08);
    border-color: var(--sand);
  }

  .card-img-wrapper {
    position: relative;
    height: 220px;
    overflow: hidden;
    display: block;
  }

  .card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  .city-service-card:hover .card-img-wrapper img {
    transform: scale(1.04);
  }

  .service-index-badge {
    position: absolute;
    top: 14px;
    right: 14px;
    background: rgba(51, 40, 42, 0.85);
    backdrop-filter: blur(4px);
    color: #fff;
    font-size: 11px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }

  .card-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .card-category {
    font-size: 10.5px;
    font-weight: 800;
    color: var(--rust);
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 8px;
    display: block;
  }

  .card-body h3 {
    font-size: 21px;
    letter-spacing: -0.5px;
    margin: 0 0 12px;
  }

  .card-body h3 a {
    text-decoration: none;
    color: var(--ink);
    transition: color 0.15s ease;
  }

  .card-body h3 a:hover {
    color: var(--rust);
  }

  .card-body p {
    font-size: 14px;
    line-height: 1.7;
    color: var(--muted);
    margin-bottom: 18px;
  }

  .benefit-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .benefit-list li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12.5px;
    color: var(--ink);
    font-weight: 600;
  }

  .benefit-list svg {
    width: 15px;
    height: 15px;
    stroke: var(--teal);
    stroke-width: 2.5;
    flex-shrink: 0;
  }

  .service-action-link {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--rust);
    font-weight: 700;
    font-size: 13.5px;
    text-decoration: none;
    transition: gap 0.2s ease;
  }

  .service-action-link:hover {
    gap: 12px;
    text-decoration: underline;
  }

  /* Custom Project Card */
  .custom-project-card {
    background: linear-gradient(135deg, #f5f1e9 0%, #ebe2d3 100%);
    border: 1px dashed var(--rust);
    justify-content: center;
  }

  .custom-card-content {
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }

  .custom-card-content h3 {
    font-size: 22px;
    margin: 6px 0 14px;
    color: var(--ink);
  }

  .custom-card-content p {
    font-size: 14px;
    line-height: 1.7;
    color: #5a534e;
    margin-bottom: 20px;
  }

  .custom-perks {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 26px;
  }

  /* Value Pillars Grid */
  .why-choose-section {
    background: #fff;
  }

  .text-center {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 40px;
  }

  .value-pillars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 26px;
  }

  .pillar-card {
    background: var(--cream);
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 30px 24px;
    transition: transform 0.2s ease;
  }

  .pillar-card:hover {
    transform: translateY(-3px);
  }

  .pillar-icon {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
  }

  .pillar-icon svg {
    width: 24px;
    height: 24px;
    stroke: var(--rust);
  }

  .pillar-card h4 {
    font-size: 18px;
    margin: 0 0 10px;
    color: var(--ink);
    letter-spacing: -0.3px;
  }

  .pillar-card p {
    font-size: 13.5px;
    line-height: 1.7;
    color: var(--muted);
    margin: 0;
  }

  /* Process Steps */
  .process-section {
    background: #fbf9f5;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .process-steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 36px;
  }

  .process-step {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 30px 26px;
    position: relative;
  }

  .step-num {
    font-size: 32px;
    font-weight: 850;
    color: var(--sand);
    letter-spacing: -1px;
    line-height: 1;
    display: block;
    margin-bottom: 14px;
  }

  .process-step h4 {
    font-size: 19px;
    margin: 0 0 10px;
    color: var(--ink);
  }

  .process-step p {
    font-size: 13.5px;
    line-height: 1.7;
    color: var(--muted);
    margin: 0;
  }

  /* City FAQs */
  .city-faqs-section {
    background: #fff;
  }

  .faq-list {
    max-width: 900px;
    margin: 30px auto 0;
  }

  /* Other Areas Box */
  .other-areas-box {
    background: var(--cream);
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 36px;
    text-align: center;
  }

  .other-areas-box h3 {
    font-size: 24px;
    letter-spacing: -0.5px;
    margin: 6px 0 12px;
  }

  .other-areas-box p {
    font-size: 14px;
    color: var(--muted);
    max-width: 600px;
    margin: 0 auto 24px;
  }

  .city-pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .city-nav-pill {
    background: #fff;
    border: 1px solid var(--line);
    padding: 10px 18px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    color: var(--ink);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
  }

  .city-nav-pill svg {
    width: 14px;
    height: 14px;
    stroke: var(--rust);
    transition: transform 0.2s ease;
  }

  .city-nav-pill:hover {
    background: var(--rust);
    border-color: var(--rust);
    color: #fff;
    transform: translateY(-2px);
  }

  .city-nav-pill:hover svg {
    stroke: #fff;
    transform: translate(2px, -2px);
  }

  /* Responsive Rules */
  @media (max-width: 760px) {
    .dynamic-services-grid {
      grid-template-columns: 1fr;
    }

    .other-areas-box {
      padding: 24px 18px;
    }

    .trust-pill-strip {
      gap: 8px;
    }

    .trust-pill {
      font-size: 11px;
    }
  }
</style>
