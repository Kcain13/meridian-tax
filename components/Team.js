/* ============================================================
   COMPONENT: Team
   Build this component here. All styles go in:
   styles/components/team.css
   ============================================================ */

   function createTeam() {
    const el = document.createElement('section');
    el.className = 'team section';
    el.id = 'team';
  
    el.innerHTML = `
      <div class="container">
        <p class="section-label">Team</p>
        <h2 class="section-title">Coming Soon</h2>
      </div>
    `;
  
    return el;
  }