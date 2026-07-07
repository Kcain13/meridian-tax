/* ============================================================
   COMPONENT: Services
   Click a card to expand it in place with full details and a
   back arrow to return to the grid. No page navigation occurs.
   ============================================================ */

   const SERVICES_DATA = [
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      title: 'Tax Management Services',
      summary: 'Strategic tax planning and preparation built on deep knowledge of current tax law to minimize liability and maximize cash flow.',
      description: `At Meridian Tax Advisory, LLC, we guide our clients through a full range of tax planning and preparation decisions with strategies that minimize your tax liabilities, maximize your cash flow and keep you on track to your financial goals. Our expertise, experience, analysis and thorough research allow us to optimize financial opportunities to be found in existing as well as recently altered tax laws. We are knowledgeable and up to date on the tax laws and can make sense of your receipts, bills and notices.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      title: 'Accounting Services',
      summary: 'Accurate record-keeping and reporting to help your business maintain profitability and capitalize on new opportunities.',
      description: `From start-ups to established enterprises, businesses rely on accurate and insightful financial information in order to maintain profitability and capitalize on new opportunities. Meridian Tax Advisory, LLC's accounting services steer you closer to these goals with accurate record-keeping and reporting as well as support on financial issues such as initial accounting system setup, cost-containment, tax planning, investments, and employee benefit and profit-sharing plans.`,
      list: {
        label: 'These services include but are not limited to:',
        items: [
          'General ledger and financial statement preparation',
          'Bookkeeping (Monthly, quarterly, or annual)',
          'Accounting system setup and support',
          'Payroll processing',
          'Cash flow budgeting and forecasting',
          'Personal financial statements',
          'Employee benefit and profit-sharing plans',
          'Corporate tax planning and return preparation',
          'Litigation support'
        ]
      }
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      title: 'Assurance and Advisory Services',
      summary: 'Objective analysis to help control costs, increase efficiency, and adapt to changes in the marketplace, standards, and tax law.',
      description: `At Meridian Tax Advisory, LLC, we focus on building close client relationships that add long-term value. This includes assuring the solidity of financial records, evaluating financial procedures and working to produce strategies that help our clients face the myriad challenges of business planning and execution. Our clients benefit from objective analysis to assist in controlling costs, increasing efficiency, and implementing new technologies and procedures that take advantage of changes in the marketplace, accounting standards, and tax law. Our assurance services will improve information quality or its context, meaning more success for your business.`,
      list: {
        label: 'These services include but are not limited to:',
        items: [
          'Audits, reviews, and compilations',
          'Entity selection and restructuring',
          'Accounting software selection, implementation, and support',
          'Business valuations',
          'Financial projections and forecasts',
          'Debt and finances advising',
          'Mergers and acquisitions',
          'Transaction structuring and negotiations',
          'Business succession'
        ]
      }
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
      title: 'Audits, Reviews, and Compilation',
      summary: 'Three levels of financial statement assurance — audits, reviews, and compilations — tailored to your company\u2019s needs.',
      description: `Meridian Tax Advisory, LLC's financial statement services comprise all three levels of assurance depending on your company's needs.`,
      subsections: [
        {
          heading: 'Audits',
          text: 'Audits offer the highest level of assurance to third parties, and include in-depth examination and confirmation of account balances, inventories, and selected transactions. We perform audits for you to remove errors, ascertaining the validity and reliability of your information.'
        },
        {
          heading: 'Reviews',
          text: 'Reviews provide limited assurance to outside interests and involve inquiries and analytical procedures that confirm financial statement matters and identify any items requiring further analysis. We perform reviews to ensure the integrity of your data.'
        },
        {
          heading: 'Compilations',
          text: 'Compilations are usually requested for internal purposes and are based upon information provided by a company\u2019s management. They do not offer assurance but may involve some adjustment to accounting records.'
        }
      ]
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      title: 'Estate and Trust Planning and Tax Preparation',
      summary: 'Navigate complex tax laws to facilitate the transfer of assets and minimize tax liability for your beneficiaries.',
      description: `Effective estate and trust planning can ensure financial security for loved ones. For businesses, it can maintain a smooth succession of ownership. Meridian Tax Advisory, LLC's role is to help you navigate the complex and shifting tax laws to facilitate the transfer of assets and minimize the tax liability of your beneficiaries. Everyone should have a well-thought-out plan as to how to distribute the assets left in one's estate so as to avoid complications and to be sure that the individual\u2019s wishes are followed. Having your taxes and estate thoroughly and carefully planned will ensure that your loved ones don't have any complications to deal with during a time of loss.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
      title: 'Litigation Support and Forensic Accounting',
      summary: 'Quantification of economic loss, financial record analysis, and fraud investigation across commercial litigation and disputes.',
      description: `Meridian Tax Advisory, LLC litigation support and forensic accounting services can be employed in a wide range of situations, including commercial litigation, financial investigations, business valuations, business and marital dissolutions, and bankruptcies. These services can involve quantification of economic loss or damages, analysis of financial records, and fraud and theft investigation. Financial and personal records are often vast and confusing to sort through. With our professional training in this matter, we can make sense of these records and transactions and get to your bottom line.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8M9 9v9M15 9v9"/></svg>`,
      title: 'QuickBooks Accounting Help and Assistance',
      summary: 'Training, installation, setup, support, and reviews to help you use QuickBooks more efficiently and effectively.',
      description: `QuickBooks can provide useful and timely information in the form of financial statements, reports and graphs. However, it can only provide this information if you purchase the right product and then install, setup and use it properly. We don't just help you use the software, we help you use it more efficiently and more effectively.<br><br>Meridian Tax Advisory, LLC offers the following solutions to help meet your QuickBooks needs:`,
      subsections: [
        {
          heading: 'Personal Training',
          text: 'We train you personally! Either one-on-one or several individuals within your organization at your company\u2019s location.'
        },
        {
          heading: 'Installation',
          text: 'We install QuickBooks on your stand alone computer or in a network environment, in either single- or multi-user mode.'
        },
        {
          heading: 'Setup',
          text: 'We assist new QuickBooks users with initial setup including: EasyStep Interview, Preferences, Lists, Customers, Vendors, Employees, Banking and Reports. We also help experienced users manage their businesses more effectively by improving their current setup. Many users experience problems and lack the ability to generate and track important information as a result of inadequate setup.'
        },
        {
          heading: 'Support',
          text: 'Our QuickBooks support service can assist you with any installation, setup or operation assistance you might need. In addition, our support is not limited just to the software part of it, but we can also provide accounting and payroll assistance.'
        },
        {
          heading: 'Review',
          text: 'Our QuickBooks review service helps companies that have the human resources to perform daily accounting and payroll tasks, but need an accounting and payroll expert to review your transactions, accounts and reports. This review ensures that you receive timely, relevant and reliable financial information. We also inform you of any corrections, adjustments or reclassifications necessary to ensure that the financial information you receive reflects the correct financial condition of your business. Reviews may be conducted at any time, but monthly reviews provide you with up-to-date information and feedback about your business.'
        }
      ]
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17v4h4l11-11-4-4L3 17z"/><path d="M14 6l4 4"/></svg>`,
      title: 'Bookkeeping/Write-up',
      summary: 'Help with the organization and day-to-day tasks of bookkeeping so you can focus on your core business.',
      description: `Accurate record-keeping is essential to a successful business yet can also be complicated and time consuming. Meridian Tax Advisory, LLC can help you with the organization and day-to-day tasks of bookkeeping so that you can focus on your core business.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
      title: 'Entity Selection and Restructuring',
      summary: 'Advice on choosing the most advantageous entity type for your business, from inception through growth and restructuring.',
      description: `Your business entity has a large impact on your taxes and other liabilities. From your company's inception through its growth and development, Meridian Tax Advisory, LLC can advise you on choosing an entity type and later restructuring if advantageous. With our knowledge and expertise, you will always be receiving the most advantageous entity type for the functions your business performs.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'IRS Representation',
      summary: 'Professional representation during an audit, guiding your dealings with federal and state tax agencies.',
      description: `Professional representation can be vital during an audit, and our experience with tax authorities enables us to guide clients in their dealings with federal and state agencies. If you have been chosen for an audit, the professional representation you can find with our firm can put many of your worries at bay. We are ready and willing to answer any and all questions the IRS may be asking of you.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h.01M12 8h4M8 12h.01M12 12h4M8 16h.01M12 16h4"/></svg>`,
      title: 'Computer Consulting',
      summary: 'Auditing system competencies and supporting the choice and implementation of new hardware or network systems.',
      description: `As technologies rapidly advance, companies increasingly need to update their computer systems. Meridian Tax Advisory, LLC can audit your system competencies and gauge upgrade needs as well as provide support in choosing and implementing new hardware or network systems. As experts in this field, we can put your computer problems at bay as well as improve your computer system's performance taking into consideration any budget you may have.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12h4l3 8 4-16 3 8h4"/></svg>`,
      title: 'Payroll Services',
      summary: 'Reduce the time spent on administration with a computerized payroll system for processing, payment, and tax returns.',
      description: `Meridian Tax Advisory, LLC's payroll services can help you reduce the time spent on administration through developing and implementing a computerized payroll system that will facilitate processing, timely payment and preparation of tax returns.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>`,
      title: 'Cash Flow and Budgeting Analysis',
      summary: 'Tracking sources and uses, forecasting, and budgeting to improve liquidity, reduce costs, and increase profitability.',
      description: `Good cash management can improve a company's liquidity, reduce costs, and increase profitability. Meridian Tax Advisory, LLC can help you maintain optimal cash flow levels by tracking sources and uses, forecasting, and budgeting accordingly. To a business entity, cash flow is something that can make or break the business' ability to survive. We can help you analyze your spending, re-balance your budget and/or debts for an optimal cash flow to support your business' success. This balance plan would be revisited if and when there were any major changes in your business structure to ensure that you are operating at an optimal level. With our help and guidance, you will always be on top of your finances and ready for the future.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3h18v18H3zM3 9h18M9 21V9"/></svg>`,
      title: 'Business Valuation',
      summary: 'In-depth analysis to identify and analyze the factors that drive the value of your company or one in which you have an interest.',
      description: `The range of needs for valuing businesses continues to widen, and Meridian Tax Advisory, LLC can provide in-depth analysis to help you identify and analyze the factors that drive the value of your company or one in which you have an interest. Uses for this service include estate planning and compliance, buying and selling businesses, divorce matters, family limited partnerships and ESOPs. There are so many factors that contribute to the perceived value of a business. Our expert help can help you evaluate entities that you have an interest in and guide you towards making business decisions that you feel confident with.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7M21 16v5h-5M21 21l-7-7M3 8V3h5M3 3l7 7"/></svg>`,
      title: 'Mergers, Acquisitions, and Sales',
      summary: 'Careful analysis and due diligence to help structure and negotiate business transactions and transitions.',
      description: `Business transactions and transitions are complicated affairs, and whether you're buying, selling, or considering a potential merger, Meridian Tax Advisory, LLC can provide professional know-how to help you successfully structure and negotiate the deal. Meridian Tax Advisory, LLC employs careful analysis and due diligence to determine a fair asking price, pinpoint the most favorable tax structures, evaluate financial and cash flow impact, and assess compatible business functions and tactics. Expanding or contracting your business is a huge undertaking. With our expert advice, you can make the right business decisions for your business for optimum success.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      title: 'Debt and Finance Advising',
      summary: 'Sorting out debt management and financing options to lower payments and reduce the total amount of interest paid.',
      description: `Whether your needs are corporate or personal, Meridian Tax Advisory, LLC's professionals can assist you in sorting out the different options available for debt management and financing that will lower your payments and/or reduce the total amount of interest paid. Re-balancing your debts can also result in tax deduction savings. Even if you are able to handle the payments and the amounts of your current debts, our expertise may be able to save you money and/or lower your payments.`
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
      title: 'International Taxation',
      summary: 'Extensive knowledge of cross-border taxation for U.S. companies abroad, foreign corporations, and foreign citizens working domestically.',
      description: `Our experience with the taxation of United States companies doing business abroad and residents working abroad as well as foreign corporations doing business in the United States or foreign citizens working in the United States has provided us with an extensive base of knowledge in the area of international taxation.`
    }
  ];
  
  function createServices(compact = false, expandIndex = null) {
    const el = document.createElement('section');
    el.className = 'services section';
    el.id = 'services';
  
    const displayServices = compact ? SERVICES_DATA.slice(0, 3) : SERVICES_DATA;
  
    el.innerHTML = `
      <div class="container">
        <div class="services-header ${compact ? '' : 'text-center'}">
          <p class="section-label">What We Do</p>
          <h2 class="section-title">Comprehensive<br><span>Financial Services</span></h2>
          ${!compact ? `
            <p class="section-subtitle" style="margin: 0 auto;">
              From individual tax returns to complex business advisory, we deliver the expertise
              you need — all under one roof.
            </p>
            <div class="divider divider-center mt-24"></div>
          ` : ''}
        </div>
  
        <div class="services-grid mt-48" id="services-grid">
          ${displayServices.map((s, i) => renderServiceCard(s, i)).join('')}
        </div>
  
        ${compact ? `
          <div class="text-center mt-48">
            <button class="btn btn-outline" data-page="services">View All Services</button>
          </div>
        ` : ''}
      </div>
    `;
  
    el.querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', () => router.navigate(btn.dataset.page));
    });
  
    initServiceCardExpansion(el);
  
    // Coming from the navbar's services dropdown — jump straight to the
    // expanded view for the selected service.
    if (expandIndex !== null && expandIndex !== undefined) {
      const targetCard = el.querySelector(`.service-card[data-index="${expandIndex}"]`);
      if (targetCard) {
        const grid = el.querySelector('#services-grid');
        grid.classList.add('grid-has-expanded');
        targetCard.classList.add('expanded');
        // Scroll to the top of the services section so the heading is visible,
        // not to the expanded card directly mid-page.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        });
      }
    }
  
    return el;
  }
  
  /* ---- Render a single card (collapsed view by default) ---- */
  function renderServiceCard(service, index) {
    return `
      <div class="service-card reveal" data-index="${index}" style="animation-delay: ${index * 0.06}s">
  
        <!-- Collapsed view -->
        <div class="service-card-collapsed">
          <div class="service-icon">${service.icon}</div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.summary}</p>
          <button class="service-link service-expand-btn" data-index="${index}">
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
  
        <!-- Expanded view -->
        <div class="service-card-expanded">
          <button class="service-back-btn" data-index="${index}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Services
          </button>
  
          <div class="service-expanded-content">
            <div class="service-expanded-icon">${service.icon}</div>
            <h3 class="service-expanded-title">${service.title}</h3>
            <div class="service-expanded-body">
              <p>${service.description}</p>
  
              ${service.list ? `
                <p class="service-list-label">${service.list.label}</p>
                <ul class="service-list">
                  ${service.list.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
              ` : ''}
  
              ${service.subsections ? service.subsections.map(sub => `
                <div class="service-subsection">
                  <h4>${sub.heading}</h4>
                  <p>${sub.text}</p>
                </div>
              `).join('') : ''}
            </div>
  
            <button class="btn btn-outline service-cta" data-page="contact" data-service="${service.title}">
              Discuss This Service
            </button>
          </div>
        </div>
  
      </div>
    `;
  }
  
  /* ---- Expand/collapse behavior (stays on Services, no page nav) ---- */
  function initServiceCardExpansion(root) {
    const grid = root.querySelector('#services-grid');
  
    function expandCard(index) {
      const card = grid.querySelector(`.service-card[data-index="${index}"]`);
      if (!card) return;
      grid.classList.add('grid-has-expanded');
      grid.querySelectorAll('.service-card').forEach(c => c.classList.remove('expanded'));
      card.classList.add('expanded');
      // Scroll to the top of the services section so the heading stays visible.
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  
    function collapseAll() {
      grid.classList.remove('grid-has-expanded');
      grid.querySelectorAll('.service-card').forEach(c => c.classList.remove('expanded'));
    }
  
    grid.querySelectorAll('.service-expand-btn').forEach(btn => {
      btn.addEventListener('click', () => expandCard(btn.dataset.index));
    });
  
    grid.querySelectorAll('.service-back-btn').forEach(btn => {
      btn.addEventListener('click', collapseAll);
    });
  
    // Also allow clicking anywhere on the collapsed card to expand it
    grid.querySelectorAll('.service-card').forEach(card => {
      card.querySelector('.service-card-collapsed').addEventListener('click', (e) => {
        if (e.target.closest('.service-expand-btn')) return; // avoid double-trigger
        expandCard(card.dataset.index);
      });
    });
  
    // CTA buttons inside expanded view navigate to Contact page (intentional page nav),
    // passing along the service title so the Contact form can pre-select it
    grid.querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', () => router.navigate(btn.dataset.page, btn.dataset.service || null));
    });
  }