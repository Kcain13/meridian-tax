/* ============================================================
   COMPONENT: Footer
   All styles live in styles/components/footer.css
   ============================================================ */

   function createFooter() {
    const el = document.createElement('footer');
    el.className = 'footer';
    el.id = 'footer';
  
    el.innerHTML = `
      <!-- Top bar -->
      <div class="footer-top">
        <div class="container footer-top-inner">
  
          <!-- Logo + tagline -->
          <div class="footer-brand">
            <a href="#" class="footer-logo" data-page="home">
              <img src="assets/images/logo.png" alt="Meridian Tax Advisory"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <span class="footer-logo-fallback">
                <span class="footer-logo-icon">M</span>
                <span class="footer-logo-text">Meridian<span>Tax Advisory</span></span>
              </span>
            </a>
            <p class="footer-tagline">
              Expert tax planning and accounting services — built on integrity, precision, and a deep commitment to your success.
            </p>
          </div>
  
          <!-- Company info -->
          <div class="footer-col">
            <h4 class="footer-col-heading">Contact Us</h4>
            <ul class="footer-info-list">
              <li class="footer-info-item">
                <div class="footer-info-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p class="footer-info-label">Email</p>
                  <a href="mailto:info@meridiantaxadvisory.com" class="footer-info-value">info@meridiantaxadvisory.com</a>
                </div>
              </li>
              <li class="footer-info-item">
                <div class="footer-info-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p class="footer-info-label">Office</p>
                  <p class="footer-info-value">10055 Red Run Blvd, Suite 200<br>Owings Mills, MD 21117</p>
                </div>
              </li>
              <li class="footer-info-item">
                <div class="footer-info-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div>
                  <p class="footer-info-label">Office Hours</p>
                  <p class="footer-info-value">Mon – Fri: 9:00 AM – 5:00 PM<br>Sat: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>
  
          <!-- Quick links -->
          <div class="footer-col">
            <h4 class="footer-col-heading">Quick Links</h4>
            <ul class="footer-nav-list">
              <li><a href="#" class="footer-nav-link" data-page="home">Home</a></li>
              <li><a href="#" class="footer-nav-link" data-page="services">Services</a></li>
              <li><a href="#" class="footer-nav-link" data-page="about">About</a></li>
              <li><a href="#" class="footer-nav-link" data-page="contact">Contact</a></li>
            </ul>
          </div>
  
          <!-- Client actions -->
          <div class="footer-col">
            <h4 class="footer-col-heading">Client Access</h4>
            <div class="footer-actions">
              <a href="https://secure.cpacharge.com/pages/meridiantaxadvisoryllc/payments"
                class="footer-action-btn footer-action-pay"
                target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
                Pay Invoice
              </a>
              <a href="https://meridiantaxadvisory.clientportal.com/#/login"
                class="footer-action-btn footer-action-upload"
                target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                Upload Documents
              </a>
            </div>
          </div>
  
        </div>
      </div>
  
      <!-- Bottom bar -->
      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <p class="footer-copy">
            &copy; ${new Date().getFullYear()} Meridian Tax Advisory, LLC. All rights reserved.
          </p>
          <p class="footer-disclaimer">
            The information on this website is for general informational purposes only and does not constitute legal or tax advice.
          </p>
        </div>
      </div>
    `;
  
    // Internal SPA navigation
    el.querySelectorAll('[data-page]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        router.navigate(link.dataset.page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  
    return el;
  }