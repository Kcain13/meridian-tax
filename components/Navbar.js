/* ============================================================
   COMPONENT: Navbar
   ============================================================ */

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
          <a href="#" class="nav-link" data-page="services">Services</a>
          <a href="#" class="nav-link" data-page="about">About</a>
          <a href="#" class="nav-link" data-page="payment">Make a Payment</a>
          <a href="#" class="nav-link" data-page="contact">Contact</a>
        </nav>
  
        <div class="navbar-actions">
          <a href="tel:+15551234567" class="navbar-phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            (555) 123-4567
          </a>
          <button class="btn btn-primary navbar-cta" data-page="contact">Get Started</button>
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
    const navLinks  = navbar.querySelectorAll('.nav-link, .navbar-cta, .navbar-logo');
  
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
  
    // Page navigation
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const page = link.dataset.page || 'home';
        router.navigate(page);
        document.getElementById('navbar-nav').classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }