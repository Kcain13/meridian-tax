/* ============================================================
   COMPONENT: Testimonials
   Build this component here. All styles go in:
   styles/components/testimonials.css
   ============================================================ */

function createTestimonials() {
  const el = document.createElement('section');
  el.className = 'testimonials section';
  el.id = 'testimonials';

  el.innerHTML = `
    <div class="container">
      <p class="section-label">Testimonials</p>
      <h2 class="section-title">Coming Soon</h2>
    </div>
  `;

  return el;
}
