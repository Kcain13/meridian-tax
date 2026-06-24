/* ============================================================
   COMPONENT: Footer
   Build this component here. All styles go in:
   styles/components/footer.css
   ============================================================ */

function createFooter() {
  const el = document.createElement('section');
  el.className = 'footer section';
  el.id = 'footer';

  el.innerHTML = `
    <div class="container">
      <p class="section-label">Footer</p>
      <h2 class="section-title">Coming Soon</h2>
    </div>
  `;

  return el;
}
