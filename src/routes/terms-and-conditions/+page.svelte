<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import metadata from './metadata.json';

  const sections = [
    { id: 'acceptance', title: '1. Acceptance & Contract Structure' },
    { id: 'consultations', title: '2. Consultations & Estimates' },
    { id: 'scope-changes', title: '3. Project Scope & Change Orders' },
    { id: 'access-boundaries', title: '4. Site Access & Boundaries' },
    { id: 'permits-hoa', title: '5. Permits & HOA Approvals' },
    { id: 'utilities-811', title: '6. Utilities & Colorado 811' },
    { id: 'subsurface-conditions', title: '7. Subsurface & Ground Conditions' },
    { id: 'payments-liens', title: '8. Payment Milestones & Liens' },
    { id: 'warranties', title: '9. Craftsmanship Warranties' },
    { id: 'weather-delays', title: '10. Weather & Project Timelines' },
    { id: 'intellectual-property', title: '11. Design Rights & Photography' },
    { id: 'cancellation', title: '12. Cancellation & Restocking' },
    { id: 'liability', title: '13. Limitation of Liability' },
    { id: 'governing-law', title: '14. Governing Law & Dispute Resolution' },
    { id: 'website-use', title: '15. Website Informational Disclaimer' },
    { id: 'contact', title: '16. Company Contact Information' }
  ];
</script>

<Seo {metadata} />

<div class="page terms-page">
  <!-- Hero Section -->
  <section class="inner-hero">
    <div class="wrap hero-split">
      <div>
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a> / Terms and conditions
        </nav>
        <span class="kicker">LEGAL POLICIES &amp; AGREEMENTS</span>
        <h1>Terms and Conditions</h1>
        <p>
          These Terms and Conditions govern your use of the Ridgewell Landscape and Design website, consultation requests, estimates, and standard residential landscape construction agreements throughout the Denver metro area.
        </p>
        <div class="meta-strip">
          <div class="meta-item">
            <span class="meta-label">Last Updated:</span>
            <strong>October 2026</strong>
          </div>
          <div class="meta-item">
            <span class="meta-label">Governing Law:</span>
            <strong>State of Colorado</strong>
          </div>
          <div class="meta-item">
            <span class="meta-label">Headquarters:</span>
            <strong>Centennial, CO</strong>
          </div>
        </div>
      </div>
      <div class="inner-photo">
        <img
          src="/assets/optimized/paver_patios.webp"
          alt="Ridgewell Landscape and Design craftsmanship in Colorado"
          width="1200"
          height="800"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </section>

  <!-- Main Content Layout -->
  <section class="section">
    <div class="wrap editorial-layout">
      <!-- Article Content -->
      <article class="prose terms-content">
        <!-- Overview Notice -->
        <div class="content-feature terms-intro-box">
          <div class="terms-intro-header">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <div>
              <h3>Contract Relationship Summary</h3>
              <p>
                Website content and online estimates are for informational planning purposes. Physical construction, hardscape installations, and landscape transformations are formally governed by an individualized written Proposal and Construction Contract executed between Ridgewell Landscape and Design and the property owner.
              </p>
            </div>
          </div>
        </div>

        <!-- Section 1 -->
        <section id="acceptance" class="terms-section">
          <h2>1. Acceptance of Terms &amp; Master Contract Structure</h2>
          <p>
            Welcome to the website of <strong>Ridgewell Landscape and Design</strong> ("Ridgewell," "we," "us," or "our"), founded by Francisco Garcia and serving residential communities across the Colorado Front Range since 2011. By browsing our website (<em>ridgewellcolorado.com</em>), submitting an online consultation request, or approving an estimate, you agree to be bound by these Terms and Conditions.
          </p>
          <p>
            For homeowners contracting construction services, these terms set forth our standard operational policies. In the event of any direct inconsistency between these general terms and the provisions of a signed project contract, the terms of the signed, written agreement shall take precedence.
          </p>
        </section>

        <!-- Section 2 -->
        <section id="consultations" class="terms-section">
          <h2>2. Consultations, Proposals &amp; Quotation Validity</h2>
          <p>
            We offer complimentary on-site consultations to assess yard dimensions, grading, soil conditions, and homeowner preferences. Following a consultation, we provide an itemized written proposal detailing material selections, labor, and anticipated phases.
          </p>
          <ul>
            <li><strong>Proposal Expiration:</strong> Written proposals and price quotes remain valid for thirty (30) calendar days from the date of issuance, after which prices may be subject to adjustment based on supplier costs (pavers, natural stone, lumber, nursery stock) and seasonal availability.</li>
            <li><strong>Acceptance:</strong> An estimate becomes a binding contract once signed or approved in writing by the property owner and accompanied by the designated initial scheduling deposit.</li>
          </ul>

          <div class="confirmation-flag">
            <div class="flag-label">
              <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <span>Business Confirmation Detail</span>
            </div>
            <p>
              Standard proposal validity is set to 30 calendar days to protect against building material price fluctuations. Please confirm if your company policy utilizes 30, 45, or 60 days.
            </p>
          </div>
        </section>

        <!-- Section 3 -->
        <section id="scope-changes" class="terms-section">
          <h2>3. Project Scope, Design Plans &amp; Change Orders</h2>
          <p>
            All construction work will adhere strictly to the written specifications and design drawings referenced in your accepted proposal.
          </p>
          <p>
            <strong>Written Change Orders:</strong> If the client requests modifications, additions, or substitutions after work has commenced (such as expanding patio square footage, upgrading paver selections, adding low-voltage lighting, or modifying retaining wall heights), Ridgewell will draft a written Change Order. Change Orders specify changes in material costs, labor adjustments, and project schedule impacts. No additional work will proceed without client authorization.
          </p>
          <p>
            <strong>Natural Material Variations:</strong> Natural stone, flagstone, decorative gravel, mulch, and timber naturally exhibit organic variations in color, grain, texture, and veining. Samples provided represent approximate aesthetics; minor variations in finished installations are characteristic of natural landscaping elements and do not constitute defects.
          </p>
        </section>

        <!-- Section 4 -->
        <section id="access-boundaries" class="terms-section">
          <h2>4. Site Access, Property Boundaries &amp; Worksite Care</h2>
          <p>
            To ensure safe and efficient execution, the homeowner agrees to provide reasonable working access to the property:
          </p>
          <ul>
            <li><strong>Working Hours:</strong> Standard on-site operations occur Monday through Friday between 7:30 AM and 6:00 PM, and Saturdays as needed or permitted by local municipal noise ordinances.</li>
            <li><strong>Equipment Pathways &amp; Staging:</strong> Homeowner grants permission to route excavators, skid-steers, plate compactors, and haul trucks through agreed access gates or driveways, and to stage bulk aggregates (road base, bedding sand, pavers) on designated driveways or street fronts. While our crew exercises conscientious care, minor tire scuffs or turf depressions along access routes are routine in heavy landscape construction.</li>
            <li><strong>Property Lines:</strong> The homeowner is responsible for verifying legal property boundaries and markers. Ridgewell builds strictly in accordance with client-approved plans and designated boundary markers.</li>
            <li><strong>Safety of Pets and Occupants:</strong> Clients must ensure that children and pets remain indoors or safely separated from active excavation and construction zones during working hours.</li>
          </ul>
        </section>

        <!-- Section 5 -->
        <section id="permits-hoa" class="terms-section">
          <h2>5. Permits, HOA Approvals &amp; Municipal Codes</h2>
          <p>
            Compliance with community and local government standards is an essential step in every outdoor living project:
          </p>
          <ul>
            <li><strong>HOA &amp; Architectural Review:</strong> Unless explicitly contracted as an administrative service, the homeowner is responsible for submitting project plans to their Homeowners Association (HOA) or Architectural Review Committee (ARC) and securing written approval prior to mobilization.</li>
            <li><strong>Municipal Building Permits:</strong> For projects requiring city or county permits (e.g., retaining walls exceeding four feet in total height, licensed gas line extensions for outdoor kitchens or fire pits, and pergola electrical circuits), Ridgewell assists with engineering drawings and coordinates municipal inspections. Applicable municipal permit fees are detailed in the project estimate.</li>
          </ul>
        </section>

        <!-- Section 6 -->
        <section id="utilities-811" class="terms-section">
          <h2>6. Underground Utilities &amp; Colorado 811 Locates</h2>
          <p>
            Safety and utility preservation are paramount on every excavation job:
          </p>
          <ul>
            <li><strong>Public Utilities (Colorado 811):</strong> Prior to ground disturbance, Ridgewell contacts the Utility Notification Center of Colorado (UNCC / Colorado 811) to locate and mark public gas, electric, telecommunication, and municipal water/sewer mains.</li>
            <li><strong>Private Utilities (Client Responsibility):</strong> Colorado 811 <em>does not locate private underground lines</em>. The homeowner is strictly responsible for notifying Ridgewell and physically flagging any private underground installations, including private sprinkler lines and valves, invisible dog fences, exterior low-voltage lighting wires, secondary electrical runs to outbuildings or hot tubs, and septic tanks or leach fields.</li>
            <li><strong>Liability Limitation:</strong> Ridgewell is not liable for damages to private subterranean lines or fixtures that were not mapped, marked, or brought to our written attention prior to excavation.</li>
          </ul>
        </section>

        <!-- Section 7 -->
        <section id="subsurface-conditions" class="terms-section">
          <h2>7. Subsurface Obstacles &amp; Unforeseen Ground Conditions</h2>
          <p>
            Base preparation is fundamental to the longevity of Front Range hardscapes. Quotations are formulated based on typical soil conditions in the project's locality.
          </p>
          <p>
            If our excavation team encounters buried concrete footers, abandoned piping, massive subterranean boulders, hazardous materials, excessive bedrock requiring mechanical hammering, or unmapped water tables, Ridgewell will promptly notify the property owner. Work directly affected will pause while an agreed Change Order is prepared reflecting the specialized machinery or additional labor hours required.
          </p>
        </section>

        <!-- Section 8 -->
        <section id="payments-liens" class="terms-section">
          <h2>8. Payment Milestones, Invoicing &amp; Colorado Lien Notice</h2>
          <p>
            Project investments are disbursed according to clear, predictable completion milestones agreed upon in your proposal:
          </p>
          <ul>
            <li><strong>Initial Deposit:</strong> Required upon contract execution to reserve construction scheduling and initiate material orders.</li>
            <li><strong>Progress Milestones:</strong> Structured payments tied to tangible job stages (such as excavation completion, base compaction, or hardscape framing).</li>
            <li><strong>Final Walkthrough Balance:</strong> Payable upon substantial completion of contracted scope and a joint punch-list walkthrough with our project manager.</li>
            <li><strong>Late Balances:</strong> Invoices are payable upon receipt. Invoices unpaid after thirty (30) days are subject to interest at 1.5% per month (or the maximum permitted by Colorado law), plus reasonable collection and attorney fees if legal recovery becomes necessary.</li>
            <li><strong>Colorado Mechanics' Lien Law Notice:</strong> Work performed and materials supplied are subject to Colorado Mechanics' Lien statutes (C.R.S. § 38-22-101 et seq.), which protect contractors, subcontractors, and materialmen in the event of non-payment.</li>
          </ul>

          <div class="confirmation-flag">
            <div class="flag-label">
              <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <span>Business Confirmation Detail</span>
            </div>
            <p>
              Exact payment milestone percentages (e.g., 20% deposit, 40% demo/base, 30% construction, 10% final) should reflect your standard contract schedule.
            </p>
          </div>
        </section>

        <!-- Section 9 -->
        <section id="warranties" class="terms-section">
          <h2>9. Craftsmanship Warranties &amp; Care Standards</h2>
          <p>
            Ridgewell stands firmly behind our workmanship and materials. We build to withstand Colorado’s demanding 300+ days of sun, extreme winter freeze-thaw cycles, and heavy spring precipitation:
          </p>

          <div class="warranty-card-grid">
            <div class="warranty-card">
              <div class="warranty-badge">5-Year Warranty</div>
              <h4>Paver Patios &amp; Retaining Walls</h4>
              <p>
                Covers structural settlement, base displacement, or failure resulting from installation craftsmanship on paver patios, walkways, and retaining walls constructed on Ridgewell-installed aggregate bases.
              </p>
            </div>
            <div class="warranty-card">
              <div class="warranty-badge">1-Year Warranty</div>
              <h4>Irrigation &amp; Nursery Stock</h4>
              <p>
                Covers newly installed irrigation piping, valves, and specified trees and shrubs, provided appropriate homeowner watering guidelines and seasonal winterization protocols are maintained.
              </p>
            </div>
          </div>

          <h3>Manufacturer Guarantees</h3>
          <p>
            Concrete pavers, outdoor kitchen grills and appliances, gas burners, fire pit inserts, composite pergola lumber, and outdoor lighting transformers carry separate warranties issued directly by their manufacturers. Ridgewell assigns all manufacturer warranties directly to the homeowner.
          </p>

          <h3>Warranty Exclusions</h3>
          <p>Our craftsmanship warranty does not cover:</p>
          <ul>
            <li>Ground movement caused by exceptional geological events, flooding, or soil subsidence resulting from improper homeowner drainage alterations (e.g., disconnected downspouts or redirected swales).</li>
            <li>Freeze damage caused by the homeowner's failure to blow out and winterize irrigation systems or water features prior to the first freezing autumn temperatures.</li>
            <li>Efflorescence (a natural, temporary crystalline salt deposit that can emerge on the surface of concrete pavers and naturally weathers away).</li>
            <li>Damage resulting from caustic de-icing salts (rock salt, calcium/magnesium chloride), vehicular overload on non-vehicular paver surfaces, or normal environmental wear and tear.</li>
            <li>Plant loss caused by drought, underwatering, rodent/deer browsing, or severe unseasonal hail storms.</li>
          </ul>

          <div class="confirmation-flag">
            <div class="flag-label">
              <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <span>Business Confirmation Detail</span>
            </div>
            <p>
              Please verify nursery replacement limits (e.g., standard one-time replacement of qualifying nursery stock within 12 months) and whether sod and annual perennials are excluded from coverage.
            </p>
          </div>
        </section>

        <!-- Section 10 -->
        <section id="weather-delays" class="terms-section">
          <h2>10. Weather Delays, Seasonal Timelines &amp; Force Majeure</h2>
          <p>
            Colorado’s climate is dynamic and unpredictable. Soil excavation, aggregate compaction, and polymeric sand installation require specific moisture and temperature thresholds to achieve structural integrity.
          </p>
          <p>
            Estimated project start dates and completion durations are provided in good faith. Ridgewell cannot be held liable for delays caused by sub-freezing soil conditions, snow events, torrential rainfall, extreme heat advisories, supplier shortages, transit delays, or acts of God. In such circumstances, schedules will be extended by the time reasonably necessary to resume operations safely.
          </p>
        </section>

        <!-- Section 11 -->
        <section id="intellectual-property" class="terms-section">
          <h2>11. Design Rights &amp; Project Photography</h2>
          <p>
            <strong>Landscape Designs:</strong> All 2D plans, 3D renderings, conceptual sketches, and construction drawings prepared by Ridgewell remain our proprietary intellectual property until paid for in full. Designs may not be transferred, replicated, or constructed by third-party contractors without our prior written authorization.
          </p>
          <p>
            <strong>Project Photography &amp; Marketing:</strong> Ridgewell reserves the right to photograph and record video of completed outdoor living spaces for promotional use on our website, social media, marketing brochures, and portfolio publications. We respect client privacy: photographs will never disclose house numbers, street names, vehicle license plates, or identifiable personal imagery without explicit permission.
          </p>
        </section>

        <!-- Section 12 -->
        <section id="cancellation" class="terms-section">
          <h2>12. Cancellation, Rescission &amp; Restocking Fees</h2>
          <p>
            <strong>Right of Rescission:</strong> To the extent provided under Colorado and federal consumer protection statutes for residential solicitation agreements, homeowners may cancel a contracted engagement within three (3) business days of signing without penalty.
          </p>
          <p>
            <strong>Post-Rescission Cancellation:</strong> If a project is cancelled by the homeowner after the statutory cancellation period has expired, the homeowner agrees to reimburse Ridgewell for all incurred design and administrative hours, non-refundable permit fees, and supplier restocking charges (typically 15% to 25% for custom pavers or specialty natural stone orders), along with freight costs for returned inventory.
          </p>

          <div class="confirmation-flag">
            <div class="flag-label">
              <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <span>Business Confirmation Detail</span>
            </div>
            <p>
              Please review your distributor restocking fee agreements to confirm exact manufacturer restocking percentages.
            </p>
          </div>
        </section>

        <!-- Section 13 -->
        <section id="liability" class="terms-section">
          <h2>13. Limitation of Liability &amp; Indemnification</h2>
          <p>
            To the maximum extent permitted by Colorado law:
          </p>
          <ul>
            <li><strong>Aggregate Liability:</strong> Ridgewell’s cumulative liability for any claim arising out of or related to our services, whether in contract, tort (including negligence), or strict liability, shall be limited to the total amount paid by the client under the specific project contract in dispute.</li>
            <li><strong>Consequential Damages:</strong> In no event shall either party be liable to the other for indirect, special, incidental, punitive, or consequential damages (including loss of property use, commercial loss, or emotional distress), even if advised of the possibility of such damages.</li>
          </ul>
        </section>

        <!-- Section 14 -->
        <section id="governing-law" class="terms-section">
          <h2>14. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms and Conditions and all construction contracts shall be governed by and construed in accordance with the laws of the <strong>State of Colorado</strong>, without regard to its conflict of law principles.
          </p>
          <p>
            In the event of a dispute, both parties commit to attempting in good faith to resolve the issue through direct discussions between the property owner and company leadership. If direct negotiation does not resolve the matter within thirty (30) days, the parties agree to submit the dispute to confidential mediation before a mutually agreed mediator in Arapahoe County, Colorado, prior to initiating any formal arbitration or judicial litigation.
          </p>
        </section>

        <!-- Section 15 -->
        <section id="website-use" class="terms-section">
          <h2>15. Website Informational Disclaimer</h2>
          <p>
            All information provided on <em>ridgewellcolorado.com</em>—including blog articles, paver cost guides, landscaping calculators, and maintenance tips—is presented for general informational, educational, and inspirational purposes only.
          </p>
          <p>
            While we strive to ensure our published advice is accurate and reflects Front Range landscaping standards, blog and website materials do not constitute licensed structural engineering, geotechnical analysis, or legal guidance for specific site conditions. Every yard possesses unique grade, drainage, and soil characteristics that require individualized on-site evaluation.
          </p>
        </section>

        <!-- Section 16 -->
        <section id="contact" class="terms-section">
          <h2>16. Company Contact Information</h2>
          <p>
            If you have questions regarding these terms, our warranties, or a pending project estimate, please contact our team directly:
          </p>
          <div class="content-feature business-contact-card">
            <h3>Ridgewell Landscape and Design</h3>
            <p class="contact-subhead">Proudly serving the Denver Metro Area &amp; Colorado Front Range</p>
            <div class="contact-meta-grid">
              <div class="meta-row">
                <span class="meta-title">Founder:</span>
                <span>Francisco Garcia (Operating since 2011)</span>
              </div>
              <div class="meta-row">
                <span class="meta-title">Physical Address:</span>
                <span>16575 E Hialeah Dr, Centennial, CO 80015</span>
              </div>
              <div class="meta-row">
                <span class="meta-title">Phone:</span>
                <a href="tel:+17208825772" class="phone-link">720-882-5772</a>
              </div>
              <div class="meta-row">
                <span class="meta-title">Email:</span>
                <a href="mailto:info@ridgewellcolorado.com" class="email-link">info@ridgewellcolorado.com</a>
              </div>
              <div class="meta-row">
                <span class="meta-title">Website:</span>
                <a href="https://ridgewellcolorado.com/">ridgewellcolorado.com</a>
              </div>
            </div>
            <div class="contact-card-actions">
              <a href="/contact/" class="btn">Schedule a free consultation <span>↗</span></a>
              <a href="tel:+17208825772" class="btn outline">Call 720-882-5772</a>
            </div>
          </div>
        </section>
      </article>

      <!-- Sticky Sidebar -->
      <aside class="sidebar terms-sidebar">
        <!-- Quick Jump Links -->
        <div class="side-nav-card">
          <span class="kicker">ON THIS PAGE</span>
          <h3 class="side-nav-title">Quick Navigation</h3>
          <nav class="side-nav-list" aria-label="Terms sections navigation">
            {#each sections as section}
              <a href="#{section.id}" class="side-nav-link">{section.title}</a>
            {/each}
          </nav>
        </div>

        <!-- Consultation CTA Box -->
        <div class="side-cta">
          <span class="kicker">READY TO PLAN?</span>
          <h3>Let’s talk about your yard.</h3>
          <p>
            Start with an in-person consultation. We’ll walk your property, explore ideas, and provide a clear, transparent proposal.
          </p>
          <a class="btn" href="/contact/">Book consultation <span>↗</span></a>
          <a class="side-phone" href="tel:+17208825772">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path></svg>
            <span>720-882-5772</span>
          </a>
        </div>
      </aside>
    </div>
  </section>
</div>

<style>
  /* Hero & Meta Strip */
  .meta-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 30px;
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid var(--line);
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 1.4;
  }

  .meta-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--muted);
    font-weight: 700;
  }

  .meta-item strong {
    color: var(--ink);
    font-size: 14px;
    margin-top: 2px;
  }

  /* Content & Section Layout */
  .terms-content {
    max-width: 100%;
  }

  .terms-section {
    margin-bottom: 50px;
    scroll-margin-top: 120px;
  }

  .terms-section h2 {
    font-size: 27px;
    line-height: 1.25;
    letter-spacing: -0.8px;
    color: var(--ink);
    margin-top: 10px;
    margin-bottom: 18px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--line);
  }

  .terms-section h3 {
    font-size: 19px;
    letter-spacing: -0.4px;
    margin-top: 28px;
    margin-bottom: 12px;
    color: var(--ink);
  }

  /* Intro Box */
  .terms-intro-box {
    background: #fdfcf9;
    border: 1px solid var(--sand);
    border-left: 4px solid var(--rust);
    padding: 24px;
    margin-bottom: 40px;
    border-radius: 6px;
  }

  .terms-intro-header {
    display: flex;
    gap: 18px;
    align-items: flex-start;
  }

  .terms-intro-header svg {
    width: 28px;
    height: 28px;
    stroke: var(--rust);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .terms-intro-header h3 {
    margin: 0 0 8px;
    font-size: 18px;
    color: var(--ink);
  }

  .terms-intro-header p {
    margin: 0;
    font-size: 14px;
    line-height: 1.7;
    color: var(--muted);
  }

  /* Business Confirmation Flag */
  .confirmation-flag {
    background: #fffcf4;
    border: 1px dashed #d99a2b;
    border-radius: 6px;
    padding: 16px 20px;
    margin: 22px 0;
  }

  .flag-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #9c6708;
    margin-bottom: 6px;
  }

  .flag-label svg {
    width: 16px;
    height: 16px;
    stroke: #9c6708;
  }

  .confirmation-flag p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.6;
    color: #5c4314;
    font-style: italic;
  }

  /* Warranty Cards */
  .warranty-card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 24px 0 30px;
  }

  .warranty-card {
    background: var(--cream);
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: 24px 20px;
    position: relative;
  }

  .warranty-badge {
    display: inline-block;
    background: var(--plum);
    color: white;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 4px;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
  }

  .warranty-card h4 {
    font-size: 18px;
    margin: 0 0 10px;
    color: var(--ink);
  }

  .warranty-card p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.65;
    color: var(--muted);
  }

  /* Business Contact Card */
  .business-contact-card {
    background: #fdfcf9;
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: 28px;
    margin-top: 24px;
  }

  .business-contact-card h3 {
    margin: 0 0 4px;
    font-size: 22px;
    color: var(--ink);
  }

  .contact-subhead {
    font-size: 13.5px;
    color: var(--muted);
    margin-bottom: 20px;
  }

  .contact-meta-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    margin-bottom: 24px;
  }

  .meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 14px;
    line-height: 1.5;
  }

  .meta-title {
    font-weight: 700;
    color: var(--ink);
    min-width: 140px;
  }

  .phone-link,
  .email-link {
    color: var(--rust);
    font-weight: 700;
    text-decoration: none;
  }

  .phone-link:hover,
  .email-link:hover {
    text-decoration: underline;
  }

  .contact-card-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  /* Side Navigation */
  .side-nav-card {
    background: var(--cream);
    border: 1px solid var(--line);
    border-radius: 7px;
    padding: 24px 20px;
    margin-bottom: 24px;
  }

  .side-nav-title {
    font-size: 17px;
    margin: 0 0 14px;
    color: var(--ink);
    letter-spacing: -0.3px;
  }

  .side-nav-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .side-nav-link {
    font-size: 12px;
    line-height: 1.4;
    color: var(--muted);
    padding: 6px 8px;
    border-radius: 4px;
    text-decoration: none;
    transition: background 0.15s, color 0.15s;
  }

  .side-nav-link:hover {
    background: #e9e3d8;
    color: var(--rust);
  }

  /* Responsive Adjustments */
  @media (max-width: 760px) {
    .warranty-card-grid {
      grid-template-columns: 1fr;
    }

    .meta-strip {
      gap: 14px;
    }

    .terms-section h2 {
      font-size: 22px;
    }

    .terms-intro-header {
      flex-direction: column;
      gap: 10px;
    }

    .meta-row {
      flex-direction: column;
      gap: 2px;
    }

    .meta-title {
      min-width: auto;
    }

    .contact-card-actions .btn {
      width: 100%;
    }
  }
</style>
