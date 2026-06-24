/* ============================================================
   COMPONENT: WhyChooseUs
   Build this component here. All styles go in:
   styles/components/whychooseus.css
   ============================================================ */

function createWhyChooseUs() {
  const el = document.createElement('section');
  el.className = 'whychooseus section';
  el.id = 'whychooseus';

  el.innerHTML = `
    <div class="container">
      <p class="section-label">Why Choose Us</p>
      <h2 class="section-title">Coming Soon</h2>
    </div>
  `;

  return el;
}
