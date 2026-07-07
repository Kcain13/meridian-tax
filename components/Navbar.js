/* ============================================================
   COMPONENT: Navbar
   ============================================================ */

// CPACharge secure payment portal — opens in a new tab
const PAYMENT_PORTAL_URL = 'https://secure.cpacharge.com/pages/meridiantaxadvisoryllc/payments';

const CLIENT_PORTAL_URL = 'https://meridiantaxadvisory.clientportal.com/#/login';

function createNavbar() {
  const el = document.createElement('header');
  el.className = 'navbar';
  el.id = 'navbar';

  el.innerHTML = `
    <div class="navbar-inner container">
      <a href="#" class="navbar-logo" data-page="home">
        <img src="assets/images/logo.png" alt="Meridian Tax Advisory" class="navbar-logo-img"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <span class="navbar-logo-fallback">
          <span class="logo-icon">M</span>
          <span class="logo-text">Meridian<span>Tax Advisory</span></span>
        </span>
      </a>

      <nav class="navbar-nav" id="navbar-nav">
        <a href="#" class="nav-link active" data-page="home">Home</a>

        <div class="nav-item-dropdown" id="services-dropdown">
          <a href="#" class="nav-link nav-link-services" data-page="services">
            Services
            <svg class="nav-link-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </a>
          <div class="services-dropdown-panel">
            <ul class="services-dropdown-list">
              ${SERVICES_DATA.map((s, i) => `
                <li>
                  <a href="#" class="services-dropdown-link" data-service-index="${i}">${s.title}</a>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <a href="#" class="nav-link" data-page="about">About</a>
        <a href="#" class="nav-link" data-page="contact">Contact</a>
        <a href="${PAYMENT_PORTAL_URL}" class="nav-link nav-link-pay" target="_blank" rel="noopener noreferrer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
          Pay Invoice
        </a>
    
      </nav>

      <div class="navbar-actions">
      
      <a href="${CLIENT_PORTAL_URL}" class="btn navbar-cta navbar-upload-btn" target="_blank" rel="noopener noreferrer">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        Upload Documents
      </a>
        <a href="${PAYMENT_PORTAL_URL}" class="btn btn-primary navbar-cta navbar-pay-btn" target="_blank" rel="noopener noreferrer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
          Pay Invoice
        </a>
      </div>

      <button class="navbar-hamburger" id="navbar-hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  return el;
}

function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('navbar-hamburger');
  const navLinks  = navbar.querySelectorAll(
    '.nav-link[data-page]:not(.nav-link-services), .navbar-cta[data-page], .navbar-logo[data-page]'
  );
  const payLinks  = navbar.querySelectorAll('.nav-link-pay, .navbar-pay-btn, .nav-link-upload, .navbar-upload-btn');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    const nav = document.getElementById('navbar-nav');
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Page navigation (internal SPA routes only)
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page || 'home';
      router.navigate(page);
      document.getElementById('navbar-nav').classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // External payment portal links — just close the mobile menu, let the browser handle navigation
  payLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navbar-nav').classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  initServicesDropdown(navbar, hamburger);
}

/* ----------------------------------------------------------------
   Services dropdown
   Desktop: opens on hover, closes when the pointer leaves the
   dropdown area (link + panel together).
   Clicking the "Services" link itself still navigates to the full
   Services page as normal. Clicking an individual service in the
   list navigates to Services and auto-expands that service's
   `.service-card-expanded` view.
   Mobile: the dropdown panel is hidden — the hamburger menu's plain
   "Services" link takes the user to the page instead.
---------------------------------------------------------------- */
function initServicesDropdown(navbar) {
  const dropdown    = navbar.querySelector('#services-dropdown');
  const trigger      = dropdown.querySelector('.nav-link-services');
  const serviceLinks = dropdown.querySelectorAll('.services-dropdown-link');

  let closeTimer = null;

  function openDropdown() {
    clearTimeout(closeTimer);
    dropdown.classList.add('open');
  }

  function closeDropdown() {
    closeTimer = setTimeout(() => dropdown.classList.remove('open'), 120);
  }

  dropdown.addEventListener('mouseenter', openDropdown);
  dropdown.addEventListener('mouseleave', closeDropdown);

  // Keyboard/touch accessibility: toggle on focus-within via click on the trigger's caret area
  trigger.addEventListener('focus', openDropdown);

  // "Services" link itself — normal full-page navigation
  trigger.addEventListener('click', e => {
    e.preventDefault();
    router.navigate('services');
    dropdown.classList.remove('open');
    document.getElementById('navbar-nav').classList.remove('open');
    navbar.querySelector('#navbar-hamburger').classList.remove('open');
  });

  // Individual service links — navigate to Services page and auto-expand that card
  serviceLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const index = Number(link.dataset.serviceIndex);
      router.navigate('services', { expandIndex: index });
      dropdown.classList.remove('open');
      document.getElementById('navbar-nav').classList.remove('open');
      navbar.querySelector('#navbar-hamburger').classList.remove('open');
    });
  });
}