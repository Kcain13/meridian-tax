/* ============================================================
   COMPONENT: Contact
   Uses Formspree for form submission.
   Replace YOUR_FORMSPREE_ID with your actual Formspree form ID.
   Get one free at https://formspree.io
   ============================================================ */

   const FORMSPREE_ID = 'xgogbork'; // e.g. 'xpwzygkb'

   function createContact(prefillService = null) {
     const el = document.createElement('section');
     el.className = 'contact section';
     el.id = 'contact';
   
     el.innerHTML = `
       <div class="container">
         <div class="contact-grid">
   
           <!-- Left: info panel -->
           <div class="contact-info reveal">
             <p class="section-label">Get In Touch</p>
             <h2 class="section-title">Let's Talk About<br><span>Your Finances</span></h2>
             <div class="divider mt-24"></div>
             <p class="contact-intro">
               Whether you need help with tax planning, have a question about your business
               finances, or are ready to schedule a consultation — we're here and happy to help.
             </p>
   
             <div class="contact-details">
           
   
               <div class="contact-detail-item">
                 <div class="contact-detail-icon">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                   </svg>
                 </div>
                 <div>
                   <p class="contact-detail-label">Email</p>
                   <a href="mailto:info@meridiantaxadvisory.com" class="contact-detail-value">info@meridiantaxadvisory.com</a>
                 </div>
               </div>
   
               <div class="contact-detail-item">
                 <div class="contact-detail-icon">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                   </svg>
                 </div>
                 <div>
                   <p class="contact-detail-label">Office</p>
                   <p class="contact-detail-value">10055 Red Run Blvd, Suite 200<br>Owings Mills, MD 21117</p>
                 </div>
               </div>
   
               <div class="contact-detail-item">
                 <div class="contact-detail-icon">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                     <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                   </svg>
                 </div>
                 <div>
                   <p class="contact-detail-label">Office Hours</p>
                   <p class="contact-detail-value">Mon – Fri: 9:00 AM – 5:00 PM<br>Sat: By Appointment</p>
                 </div>
               </div>
             </div>
           </div>
   
           <!-- Right: Formspree form -->
           <div class="contact-form-wrap reveal">
             <div class="contact-form-card">
               <h3 class="contact-form-title">Send Us a Message</h3>
               <p class="contact-form-subtitle">We'll get back to you within one business day.</p>
   
               <form class="contact-form" id="contact-form"
                 action="https://formspree.io/f/${FORMSPREE_ID}"
                 method="POST"
                 novalidate>
   
                 <div class="form-row">
                   <div class="form-group">
                     <label class="form-label" for="cf-first-name">First Name <span class="form-required">*</span></label>
                     <input class="form-input" type="text" id="cf-first-name" name="first_name"
                       placeholder="Jane" required autocomplete="given-name">
                     <span class="form-error" id="err-first-name"></span>
                   </div>
                   <div class="form-group">
                     <label class="form-label" for="cf-last-name">Last Name <span class="form-required">*</span></label>
                     <input class="form-input" type="text" id="cf-last-name" name="last_name"
                       placeholder="Smith" required autocomplete="family-name">
                     <span class="form-error" id="err-last-name"></span>
                   </div>
                 </div>
   
                 <div class="form-group">
                   <label class="form-label" for="cf-email">Email Address <span class="form-required">*</span></label>
                   <input class="form-input" type="email" id="cf-email" name="email"
                     placeholder="jane@example.com" required autocomplete="email">
                   <span class="form-error" id="err-email"></span>
                 </div>
   
                 <div class="form-group">
                   <label class="form-label" for="cf-phone">Phone Number</label>
                   <input class="form-input" type="tel" id="cf-phone" name="phone"
                     placeholder="(555) 000-0000" autocomplete="tel">
                 </div>
   
                 <div class="form-group">
                   <label class="form-label" for="cf-service">Service Interested In</label>
                   <div class="form-select-wrap">
                     <select class="form-input form-select" id="cf-service" name="service">
                       <option value="" disabled selected>Select a service…</option>
                       <option>Tax Management Services</option>
                       <option>Accounting Services</option>
                       <option>Assurance and Advisory Services</option>
                       <option>Audits, Reviews, and Compilation</option>
                       <option>Estate and Trust Planning and Tax Preparation</option>
                       <option>Litigation Support and Forensic Accounting</option>
                       <option>QuickBooks Accounting Help and Assistance</option>
                       <option>Bookkeeping/Write-up</option>
                       <option>Entity Selection and Restructuring</option>
                       <option>IRS Representation</option>
                       <option>Computer Consulting</option>
                       <option>Payroll Services</option>
                       <option>Cash Flow and Budgeting Analysis</option>
                       <option>Business Valuation</option>
                       <option>Mergers, Acquisitions, and Sales</option>
                       <option>Debt and Finance Advising</option>
                       <option>International Taxation</option>
                       <option>Other</option>
                     </select>
                     <svg class="form-select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                       <polyline points="6 9 12 15 18 9"/>
                     </svg>
                   </div>
                 </div>
   
                 <div class="form-group">
                   <label class="form-label" for="cf-message">Message <span class="form-required">*</span></label>
                   <textarea class="form-input form-textarea" id="cf-message" name="message"
                     placeholder="Tell us a little about what you need help with…"
                     rows="5" required></textarea>
                   <span class="form-error" id="err-message"></span>
                 </div>
   
                 <!-- Honeypot spam field — hidden from real users -->
                 <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
   
                 <button type="submit" class="btn btn-primary contact-submit" id="contact-submit">
                   <span class="submit-label">Send Message</span>
                   <svg class="submit-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                     <path d="M5 12h14M12 5l7 7-7 7"/>
                   </svg>
                   <svg class="submit-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                     <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                   </svg>
                 </button>
   
               </form>
   
               <!-- Success state -->
               <div class="contact-success" id="contact-success" hidden>
                 <div class="contact-success-icon">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                     <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>
                   </svg>
                 </div>
                 <h4>Message Sent!</h4>
                 <p>Thank you for reaching out. A member of our team will be in touch within one business day.</p>
                 <button class="btn btn-outline contact-reset" id="contact-reset">Send Another Message</button>
               </div>
   
               <!-- Error state -->
               <div class="contact-error-banner" id="contact-error-banner" hidden>
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                 </svg>
                 <span>Something went wrong. Please try again or call us directly.</span>
               </div>
   
             </div>
           </div>
   
         </div>
       </div>
     `;
   
     initContactForm(el, prefillService);
     return el;
   }
   
   function initContactForm(el, prefillService = null) {
     const form        = el.querySelector('#contact-form');
     const submitBtn   = el.querySelector('#contact-submit');
     const successEl   = el.querySelector('#contact-success');
     const errorBanner = el.querySelector('#contact-error-banner');
     const resetBtn    = el.querySelector('#contact-reset');
     const serviceSelect = el.querySelector('#cf-service');
   
     // Pre-select the service if one was passed in (e.g. from "Discuss This Service")
     if (prefillService) {
       const matchingOption = Array.from(serviceSelect.options)
         .find(opt => opt.value === prefillService || opt.textContent === prefillService);
   
       if (matchingOption) {
         serviceSelect.value = matchingOption.value || matchingOption.textContent;
       } else {
         // Service title not found in the list (e.g. came from elsewhere) — fall back to "Other"
         serviceSelect.value = 'Other';
       }
     }
   
     // ---- Client-side validation ----
     function validateField(input) {
       const errEl = el.querySelector(`#err-${input.id.replace('cf-', '')}`);
       if (!errEl) return true;
   
       if (input.required && !input.value.trim()) {
         errEl.textContent = 'This field is required.';
         input.classList.add('input-invalid');
         return false;
       }
       if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
         errEl.textContent = 'Please enter a valid email address.';
         input.classList.add('input-invalid');
         return false;
       }
       errEl.textContent = '';
       input.classList.remove('input-invalid');
       return true;
     }
   
     // Live validation on blur
     form.querySelectorAll('.form-input').forEach(input => {
       input.addEventListener('blur', () => validateField(input));
       input.addEventListener('input', () => validateField(input));
     });
   
     // ---- Submit via fetch (AJAX) ----
     form.addEventListener('submit', async e => {
       e.preventDefault();
   
       // Validate all required fields first
       const requiredFields = form.querySelectorAll('[required]');
       let valid = true;
       requiredFields.forEach(f => { if (!validateField(f)) valid = false; });
       if (!valid) return;
   
       // Loading state
       submitBtn.classList.add('loading');
       submitBtn.disabled = true;
       errorBanner.hidden = true;
   
       try {
         const response = await fetch(form.action, {
           method: 'POST',
           body: new FormData(form),
           headers: { Accept: 'application/json' }
         });
   
         if (response.ok) {
           form.hidden = true;
           successEl.hidden = false;
         } else {
           const data = await response.json();
           const msg = data?.errors?.map(e => e.message).join(', ') || 'Submission failed.';
           errorBanner.querySelector('span').textContent = msg;
           errorBanner.hidden = false;
         }
       } catch {
         errorBanner.querySelector('span').textContent =
           'Network error. Please check your connection and try again.';
         errorBanner.hidden = false;
       } finally {
         submitBtn.classList.remove('loading');
         submitBtn.disabled = false;
       }
     });
   
     // ---- Reset form ----
     resetBtn.addEventListener('click', () => {
       form.reset();
       form.hidden = false;
       successEl.hidden = true;
       errorBanner.hidden = true;
       form.querySelectorAll('.input-invalid').forEach(f => f.classList.remove('input-invalid'));
       form.querySelectorAll('.form-error').forEach(e => e.textContent = '');
     });
   }