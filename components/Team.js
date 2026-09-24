/* ============================================================
   COMPONENT: Team
   All styles live in styles/components/team.css
   ============================================================ */

   const TEAM_MEMBERS = [

    {
      name:  'Katy Firth',
      title: 'Partner, CPA, CFE',
      credentials: ['Certified Public Accountant', 'Certified Fraud Examiner', 'Licensed in MD, VA & FL'],
      bio: [
        'Katy is a partner of Meridian Tax Advisory, LLC. She believes that great accounting is about more than preparing tax returns or financial statements — it is about helping people make confident financial decisions and removing the stress that taxes and bookkeeping can bring.',
        'Katy earned two bachelor\'s degrees from Florida State University — one in accounting and one in finance — along with a Master\'s degree in Forensic and Fraud Examination from West Virginia University.',
        'In addition to tax preparation and planning, Katy has years of experience in bookkeeping, business formation, and financial administration. She enjoys helping individuals, families, and business owners navigate complex financial and tax issues with clarity and confidence.',
        'As a nerd for numbers with an unreasonable love of well-crafted spreadsheets, Katy genuinely enjoys solving financial puzzles and creating organized systems that make life easier for her clients. She believes accounting is about giving people peace of mind so they can focus on what matters most: their businesses, careers, and families.',
      ],
      email: 'katy@meridiantaxadvisory.com',
      linkedin: '',
    },
    {
      name:  'Todd Dunsten',
      title: 'Senior Manager, EA',
      credentials: ['Enrolled Agent', '15+ Years Experience', 'B.S. Finance, Salisbury University'],
      bio: [
        'Todd Dunsten brings more than 15 years of accounting experience to his role as Senior Manager at Meridian Tax Advisory, LLC. He works with closely held businesses, their owners, and individuals on a wide range of tax compliance, planning, and advisory matters.',
        'Todd has extensive experience providing tax planning and compliance services for partnerships, S corporations, C corporations, nonprofit organizations, and individuals. He also advises clients on entity structuring, business transactions, and complex federal and state tax matters.',
        'Todd takes a practical and proactive approach to building long-term client relationships. He believes effective tax planning begins with a strong understanding of each client\'s business and financial goals. Through ongoing communication, Todd works to anticipate issues, identify planning opportunities, and provide clear guidance as his clients\' businesses and financial circumstances evolve.',
        'Todd is an Enrolled Agent authorized to practice before the Internal Revenue Service. Outside of work, he enjoys spending time with his family, traveling, golfing, and cheering on the Baltimore Ravens and Maryland Terrapins.',
      ],
      email: 'todd.dunsten@meridiantaxadvisory.com',
      linkedin: '',
    },
    {
      name:  'Ryan Salah',
      title: 'Managing Partner',
      credentials: ['CFP®', 'CPWA®', 'Certified Plan Fiduciary Advisor®'],
      bio: [
        'Ryan helps bridge tax strategy and comprehensive wealth planning for clients. Born and raised outside of Washington, D.C., Ryan is also managing partner of Capital Financial Partners, the wealth management firm he has been a part of since 2015. It was that work that led directly to Meridian: too often, tax preparation and financial planning live in separate worlds.',
        'Ryan\'s perspective is regularly sought after by Barron\'s, Financial-Planning.com, FA-mag.com, CNBC, and WealthManagement.com. In 2025, he was named to AdvisorHub\'s Top 100 Next Gen Advisors list.',
        'At Meridian, his focus is on coordination: making sure a client\'s tax picture and their broader financial plan are built together rather than stitched together at filing time, spanning cash flow, retirement, insurance and estate considerations, and investments.',
        'Ryan completed his CFP® coursework through the American College and his Certified Private Wealth Advisor® coursework through the Yale School of Management. He graduated from Stevenson University with a degree in Business Administration. He lives in Lutherville with his wife and two young kids.',
      ],
      email: 'ryan@meridiantaxadvisory.com',
      linkedin: '',
    },
    {
      name:  'Todd Evans',
      title: 'Partner, Capital Financial Partners',
      credentials: ['Forbes Top Next-Gen Wealth Advisors 2023', 'Harvard Business School — Alternative Investments', 'B.A. Business Administration & Economics, Virginia Wesleyan University'],
      bio: [
        'Todd H. Evans is a Partner at Capital Financial Partners, LLC. In 2023, Todd was named to Forbes\' Top Next-Gen Wealth Advisors Best-in-State list.',
        'Todd and his team are fiduciaries specializing in comprehensive financial planning, investment management, and tax planning for business owners and high-net-worth families. Their approach is built around a simple philosophy: tax planning and wealth management should not operate independently.',
        'Investment decisions can have meaningful tax consequences, just as tax decisions can create opportunities — or limitations — within an investment and financial plan. By bringing these disciplines together, Todd and his team help clients make more coordinated decisions across their entire financial lives, spanning investment strategy, retirement planning, tax planning, charitable giving, estate planning, insurance, and business succession.',
        'For business owners in particular, this means looking at both the business and personal balance sheet — identifying opportunities to improve tax efficiency, build and protect wealth, and ultimately transition assets in the most effective way possible.',
      ],
      email: 'todd.evans@meridiantaxadvisory.com',
      linkedin: '',
    },
  ];
  
  function createTeam() {
    const el = document.createElement('section');
    el.className = 'team section';
    el.id = 'team';
  
    el.innerHTML = `
      <div class="container">
        <div class="team-header">
          <p class="section-label">Our Team</p>
          <h2 class="section-title">The People Behind<br><span>Your Success</span></h2>
          <div class="divider mt-24"></div>
          <p class="section-subtitle">
            Decades of combined experience in tax planning, accounting, and financial advisory —
            dedicated to delivering personal, expert guidance to every client.
          </p>
        </div>
  
        <div class="team-list">
          ${TEAM_MEMBERS.map((m, i) => renderTeamMember(m, i)).join('')}
        </div>
      </div>
    `;
  
    el.querySelectorAll('.team-contact-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        router.navigate('contact', { memberName: btn.dataset.member });
      });
    });
  
    return el;
  }
  
  function renderTeamMember(member, index) {
    const initials = member.name.split(' ').map(n => n[0]).join('');
  
    const linkedinBtn = member.linkedin
      ? `<a href="${member.linkedin}" class="team-action-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile for ${member.name}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>`
      : '';
  
    return `
      <div class="team-member reveal" style="animation-delay: ${index * 0.1}s">
        <div class="team-member-inner">
  
          <!-- Left: identity column -->
          <div class="team-identity">
            <div class="team-avatar">${initials}</div>
            <div class="team-meta">
              <h3 class="team-name">${member.name}</h3>
              <p class="team-title">${member.title}</p>
            </div>
            <ul class="team-credentials">
              ${member.credentials.map(c => `<li>${c}</li>`).join('')}
            </ul>
            <div class="team-actions">
              <button class="team-contact-btn" data-member="${member.name}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Send a Message
              </button>
              ${linkedinBtn}
            </div>
          </div>
  
          <!-- Right: bio column -->
          <div class="team-bio-col">
            ${member.bio.map(p => `<p class="team-bio-para">${p}</p>`).join('')}
          </div>
  
        </div>
      </div>
    `;
  }