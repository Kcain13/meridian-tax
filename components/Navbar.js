/* ============================================================
   COMPONENT: Navbar
   ============================================================ */

   const PAYMENT_PORTAL_URL     = 'https://secure.cpacharge.com/pages/meridiantaxadvisoryllc/payments';
   const CLIENT_PORTAL_URL      = 'https://meridiantaxadvisory.clientportal.com/#/login';
   const FINANCIAL_PLANNING_URL = 'https://www.capitalfinancialmaryland.com/';
   
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
   
           <!-- ── Desktop: hover "Services" → category panel ── -->
           <div class="nav-item-dropdown" id="services-dropdown">
             <a href="#" class="nav-link nav-link-services" data-page="services">
               Services
               <svg class="nav-link-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                 <polyline points="6 9 12 15 18 9"/>
               </svg>
             </a>
   
             <!-- Level-1 panel: two categories -->
             <div class="services-dropdown-panel" id="services-cat-panel">
   
               <!-- Tax & Accounting — reveals level-2 flyout on hover -->
               <div class="svc-cat-item" id="cat-tax">
                 <button class="svc-cat-btn">
                   Tax &amp; Accounting
                   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                     <polyline points="9 18 15 12 9 6"/>
                   </svg>
                 </button>
   
                 <!-- Level-2 flyout: individual services -->
                 <div class="svc-flyout" id="svc-flyout">
                   <ul class="services-dropdown-list">
                     ${SERVICES_DATA.map((s, i) => `
                       <li>
                         <a href="#" class="services-dropdown-link" data-service-index="${i}">${s.title}</a>
                       </li>
                     `).join('')}
                   </ul>
                 </div>
               </div>
   
               <!-- Financial Planning — external link -->
               <a href="${FINANCIAL_PLANNING_URL}" class="svc-cat-btn svc-cat-external"
                 target="_blank" rel="noopener noreferrer">
                 Financial Planning
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                   <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                 </svg>
               </a>
   
             </div>
           </div>
   
           <a href="#" class="nav-link" data-page="about">About</a>
           <a href="#" class="nav-link" data-page="contact">Contact</a>
   
           <!-- ── Mobile-only: accordion Services → sub-items ── -->
           <div class="mobile-services-accordion" id="mobile-services-accordion">
             <button class="mobile-accordion-trigger" id="mobile-services-trigger">
               Services
               <svg class="mobile-accordion-caret" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                 <polyline points="6 9 12 15 18 9"/>
               </svg>
             </button>
             <div class="mobile-accordion-panel" id="mobile-accordion-panel">
               <!-- Tax & Accounting sub-accordion -->
               <div class="mobile-sub-accordion" id="mobile-tax-accordion">
                 <button class="mobile-sub-trigger" id="mobile-tax-trigger">
                   Tax &amp; Accounting
                   <svg class="mobile-sub-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                     <polyline points="6 9 12 15 18 9"/>
                   </svg>
                 </button>
                 <div class="mobile-sub-panel" id="mobile-tax-panel">
                   ${SERVICES_DATA.map((s, i) => `
                     <a href="#" class="mobile-service-link" data-service-index="${i}">${s.title}</a>
                   `).join('')}
                 </div>
               </div>
               <!-- Financial Planning external link -->
               <a href="${FINANCIAL_PLANNING_URL}" class="mobile-cat-link mobile-cat-external"
                 target="_blank" rel="noopener noreferrer">
                 Financial Planning
                 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                   <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                 </svg>
               </a>
             </div>
           </div>
   
           <!-- Mobile-only: Pay Invoice + Upload Documents -->
           <a href="${PAYMENT_PORTAL_URL}" class="nav-link nav-link-pay" target="_blank" rel="noopener noreferrer">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
               <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
             </svg>
             Pay Invoice
           </a>
           <a href="${CLIENT_PORTAL_URL}" class="nav-link nav-link-upload" target="_blank" rel="noopener noreferrer">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
               <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
             </svg>
             Upload Documents
           </a>
         </nav>
   
         <div class="navbar-actions">
           <a href="${CLIENT_PORTAL_URL}" class="btn btn-outline navbar-cta navbar-upload-btn" target="_blank" rel="noopener noreferrer">
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
   
   /* ============================================================
      initNavbar
      ============================================================ */
   function initNavbar() {
     const navbar    = document.getElementById('navbar');
     const hamburger = document.getElementById('navbar-hamburger');
     const navLinks  = navbar.querySelectorAll(
       '.nav-link[data-page]:not(.nav-link-services), .navbar-logo[data-page]'
     );
     const externalLinks = navbar.querySelectorAll(
       '.nav-link-pay, .navbar-pay-btn, .nav-link-upload, .navbar-upload-btn, .mobile-cat-external, .svc-cat-external'
     );
   
     // Scroll shadow
     window.addEventListener('scroll', () => {
       navbar.classList.toggle('scrolled', window.scrollY > 20);
     });
   
     // Hamburger toggle
     hamburger.addEventListener('click', () => {
       const nav = document.getElementById('navbar-nav');
       hamburger.classList.toggle('open');
       nav.classList.toggle('open');
     });
   
     // Internal SPA links
     navLinks.forEach(link => {
       link.addEventListener('click', e => {
         e.preventDefault();
         router.navigate(link.dataset.page || 'home');
         closeMenu();
       });
     });
   
     // External links — just close menu, let browser handle
     externalLinks.forEach(link => {
       link.addEventListener('click', closeMenu);
     });
   
     function closeMenu() {
       document.getElementById('navbar-nav').classList.remove('open');
       hamburger.classList.remove('open');
       // also reset mobile accordions
       const mobilePanel = document.getElementById('mobile-accordion-panel');
       const taxPanel    = document.getElementById('mobile-tax-panel');
       const mobileAcc   = document.getElementById('mobile-services-accordion');
       const taxAcc      = document.getElementById('mobile-tax-accordion');
       if (mobilePanel) mobilePanel.style.maxHeight = '0';
       if (taxPanel)    taxPanel.style.maxHeight    = '0';
       if (mobileAcc)   mobileAcc.classList.remove('open');
       if (taxAcc)      taxAcc.classList.remove('open');
     }
   
     initDesktopServicesDropdown(navbar, closeMenu);
     initMobileServicesAccordion(navbar, closeMenu);
   }
   
   /* ============================================================
      Desktop: hover dropdown → flyout
      ============================================================ */
   function initDesktopServicesDropdown(navbar, closeMenu) {
     const dropdown    = navbar.querySelector('#services-dropdown');
     const trigger     = dropdown.querySelector('.nav-link-services');
     const catTax      = dropdown.querySelector('#cat-tax');
     const flyout      = dropdown.querySelector('#svc-flyout');
     const serviceLinks = dropdown.querySelectorAll('.services-dropdown-link');
   
     let dropTimer = null;
     let flyTimer  = null;
   
     // Level-1: open/close category panel
     function openDrop()  { clearTimeout(dropTimer); dropdown.classList.add('open'); }
     function closeDrop() { dropTimer = setTimeout(() => { dropdown.classList.remove('open'); closeFly(); }, 150); }
   
     // Level-2: open/close Tax & Accounting flyout
     function openFly()  { clearTimeout(flyTimer); catTax.classList.add('flyout-open'); }
     function closeFly() { flyTimer = setTimeout(() => catTax.classList.remove('flyout-open'), 150); }
   
     dropdown.addEventListener('mouseenter', openDrop);
     dropdown.addEventListener('mouseleave', closeDrop);
     catTax.addEventListener('mouseenter', openFly);
     catTax.addEventListener('mouseleave', () => {
       // Stay open while hovering the flyout itself
       flyTimer = setTimeout(() => catTax.classList.remove('flyout-open'), 150);
     });
     flyout.addEventListener('mouseenter', () => { clearTimeout(flyTimer); });
     flyout.addEventListener('mouseleave', () => {
       flyTimer = setTimeout(() => catTax.classList.remove('flyout-open'), 150);
     });
   
     // "Services" label — navigate to full services page
     trigger.addEventListener('click', e => {
       e.preventDefault();
       router.navigate('services');
       dropdown.classList.remove('open');
       catTax.classList.remove('flyout-open');
       closeMenu();
     });
   
     // Individual service links
     serviceLinks.forEach(link => {
       link.addEventListener('click', e => {
         e.preventDefault();
         router.navigate('services', { expandIndex: Number(link.dataset.serviceIndex) });
         dropdown.classList.remove('open');
         catTax.classList.remove('flyout-open');
         closeMenu();
       });
     });
   }
   
   /* ============================================================
      Mobile: accordion Services → sub-accordions
      ============================================================ */
   function initMobileServicesAccordion(navbar, closeMenu) {
     // Level-1: Services toggle
     const servicesAcc     = navbar.querySelector('#mobile-services-accordion');
     const servicesTrigger = navbar.querySelector('#mobile-services-trigger');
     const servicesPanel   = navbar.querySelector('#mobile-accordion-panel');
   
     servicesTrigger.addEventListener('click', () => {
       const isOpen = servicesAcc.classList.toggle('open');
       servicesPanel.style.maxHeight = isOpen ? servicesPanel.scrollHeight + 'px' : '0';
     });
   
     // Level-2: Tax & Accounting toggle
     const taxAcc     = navbar.querySelector('#mobile-tax-accordion');
     const taxTrigger = navbar.querySelector('#mobile-tax-trigger');
     const taxPanel   = navbar.querySelector('#mobile-tax-panel');
   
     taxTrigger.addEventListener('click', () => {
       const isOpen = taxAcc.classList.toggle('open');
       taxPanel.style.maxHeight = isOpen ? taxPanel.scrollHeight + 'px' : '0';
       // Re-measure parent panel so it grows to fit
       servicesPanel.style.maxHeight = servicesPanel.scrollHeight + taxPanel.scrollHeight + 'px';
     });
   
     // Individual service links in mobile accordion
     navbar.querySelectorAll('.mobile-service-link').forEach(link => {
       link.addEventListener('click', e => {
         e.preventDefault();
         router.navigate('services', { expandIndex: Number(link.dataset.serviceIndex) });
         closeMenu();
       });
     });
   }