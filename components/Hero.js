/* ============================================================
   COMPONENT: Hero
   ============================================================ */

   function createHero() {
    const el = document.createElement('section');
    el.className = 'hero';
    el.id = 'hero';
  
    el.innerHTML = `
      <div class="hero-bg">
        <!-- Replace with your hero background image -->
        <img src="assets/images/hero-bg.jpg" alt="" class="hero-bg-img">
        <div class="hero-overlay"></div>
        <div class="hero-grid-pattern"></div>
      </div>
  
      <div class="hero-content container">
        <div class="hero-text">
          <div class="hero-eyebrow">
            <span class="hero-dot"></span>
            Trusted Tax & Accounting Professionals
          </div>
          <h1 class="hero-title">
            Your Financial<br>
            Future,<br>
            <span class="hero-title-accent">Precisely Guided</span>
          </h1>
          <p class="hero-subtitle">
            Meridian Tax Advisory delivers expert tax planning, accounting, and advisory
            services — built on integrity, precision, and a deep commitment to your success.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary hero-btn" data-page="contact">
              Schedule a Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button class="btn btn-secondary" data-page="services">
              Explore Services
            </button>
          </div>
        </div>
  
        <div class="hero-visual">
          <!-- Replace with your feature/team image -->
          <div class="hero-img-frame">
            <img src="assets/images/hero-feature.webp" alt="Meridian Tax Advisory Team" class="hero-img"
              onerror="this.parentElement.classList.add('hero-img-placeholder')">
          </div>
        </div>
      </div>
  
      <div class="hero-scroll-hint">
        
        <div class="hero-scroll-line"></div>
      </div>
    `;
  
    el.querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', () => router.navigate(btn.dataset.page));
    });
  
    return el;
  }