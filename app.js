/* ============================================================
   APP ROUTER
   Handles client-side navigation between pages.
   ============================================================ */

   const router = {
    currentPage: 'home',
    payload: null,
  
    navigate(page, payload = null) {
      this.currentPage = page;
      this.payload = payload;
      this.render();
      this.updateActiveLink(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  
    updateActiveLink(page) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
      });
    },
  
    render() {
      const app = document.getElementById('app');
      // Clear everything below the navbar
      const navbar = document.getElementById('navbar');
      app.innerHTML = '';
      app.appendChild(navbar);
  
      let pageEl;
      switch (this.currentPage) {
        case 'services': pageEl = renderServicesPage(this.payload); break;
        case 'about':    pageEl = renderAboutPage();    break;
        case 'contact':  pageEl = renderContactPage(this.payload); break;
        case 'payment':  pageEl = renderPaymentPage();  break;
        default:         pageEl = renderHome();         break;
      }
  
      app.appendChild(pageEl);
  
      // Trigger scroll-reveal on new page elements
      initScrollReveal();
    }
  };
  
  function renderHome() {
    const page = document.createElement('div');
    page.className = 'page';
    page.appendChild(createHero());
    page.appendChild(createServices(true));   // compact = show 3 cards + "View All" btn
    page.appendChild(createAbout());
    page.appendChild(createContact());
    page.appendChild(createFooter());
    return page;
  }
  
  function renderServicesPage(payload = null) {
    const page = document.createElement('div');
    page.className = 'page';
    const expandIndex = payload && typeof payload === 'object' ? payload.expandIndex : null;
    page.appendChild(createServices(false, expandIndex));  // full = all services, no "View All" btn
    page.appendChild(createContact());
    page.appendChild(createFooter());
    return page;
  }
  
  function renderAboutPage() {
    const page = document.createElement('div');
    page.className = 'page';
    page.appendChild(createAbout());
    page.appendChild(createTeam());
    page.appendChild(createContact());
    page.appendChild(createFooter());
    return page;
  }
  
  function renderContactPage(prefillService = null) {
    const page = document.createElement('div');
    page.className = 'page';
    page.appendChild(createContact(prefillService));
    page.appendChild(createFooter());
    return page;
  }
  
  /* ---- Scroll Reveal ---- */
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
  
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  
  /* ---- Boot ---- */
  document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const navbar = createNavbar();
    app.appendChild(navbar);
    initNavbar();
    router.render();
  });