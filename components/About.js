/* ============================================================
   COMPONENT: About (Homepage strip)
   ============================================================ */

   function createAbout() {
    const el = document.createElement('section');
    el.className = 'about section';
    el.id = 'about-strip';
  
    el.innerHTML = `
      <div class="container">
        <div class="about-grid">
  
          <!-- Image side -->
          <div class="about-visual reveal">
            <div class="about-img-wrap">
              <!-- Replace with your about/office image -->
              <img src="assets/images/about-office.jpeg" alt="Meridian Tax Advisory Office"
                onerror="this.parentElement.classList.add('about-img-placeholder')">
              <div class="about-img-accent"></div>
            </div>
          </div>
  
          <!-- Text side -->
          <div class="about-content reveal">
            <p class="section-label">Our Story</p>
            <h2 class="section-title">Built on Trust.<br><span>Driven by Results.</span></h2>
            <div class="divider mt-24"></div>
            <p class="about-text">
              Meridian Tax Advisory was founded on one simple belief: every client deserves the same
              level of sophisticated tax and accounting counsel traditionally reserved for large corporations.
            </p>
            <p class="about-text mt-16">
              With over two decades of experience serving individuals, families, and businesses across
              all industries, our team brings a personal, proactive approach to every engagement —
              ensuring you never pay more than your fair share and always have a clear picture of your
              financial health.
            </p>
  
            <div class="about-pillars mt-32">
              <div class="about-pillar">
                <div class="about-pillar-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span>Personalized, one-on-one service</span>
              </div>
              <div class="about-pillar">
                <div class="about-pillar-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span>Year-round tax planning — not just filing season</span>
              </div>
              <div class="about-pillar">
                <div class="about-pillar-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span>Transparent pricing with no surprises</span>
              </div>
              <div class="about-pillar">
                <div class="about-pillar-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span>Technology-forward, secure client portal</span>
              </div>
            </div>
  
            <div class="about-actions">
              <button class="btn btn-primary" data-page="about">Meet Our Team</button>
              <button class="btn btn-outline" data-page="contact">Get In Touch</button>
            </div>
          </div>
  
        </div>
      </div>
    `;
  
    el.querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', () => router.navigate(btn.dataset.page));
    });
  
    return el;
  }