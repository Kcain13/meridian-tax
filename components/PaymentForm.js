/* ============================================================
   COMPONENT: PaymentForm
   Uses 8am (AffiniPay) Hosted Fields for PCI-compliant card
   and eCheck payments.

   SETUP REQUIRED:
   1. Replace PUBLIC_KEY below with your merchant public key
      from the 8am developer/merchant portal.
   2. Build a backend endpoint (e.g. POST /api/charge) that
      receives the payment token from getPaymentToken() and
      uses your SECRET key to call 8am's Create Charge API:
      https://developers.8am.com/charge/create-charge
      Never put your secret key in frontend code.
   3. Update CHARGE_ENDPOINT below to point at that backend route.
   ============================================================ */

   const PAYMENT_PUBLIC_KEY = 'm_YOUR_PUBLIC_KEY';   // safe to expose client-side
   const CHARGE_ENDPOINT     = '/api/charge';        // your backend route
   
   function createPaymentForm() {
     const el = document.createElement('section');
     el.className = 'payment section';
     el.id = 'payment';
   
     el.innerHTML = `
       <div class="container">
         <div class="payment-header text-center">
           <p class="section-label">Secure Payment</p>
           <h2 class="section-title">Make a <span>Payment</span></h2>
           <p class="section-subtitle" style="margin: 0 auto;">
             Pay your invoice securely online. All transactions are encrypted and
             PCI-compliant — we never see or store your card details.
           </p>
           <div class="divider divider-center mt-24"></div>
         </div>
   
         <div class="payment-card-wrap mt-48">
           <div class="payment-card">
   
             <!-- Payment method toggle -->
             <div class="payment-method-toggle" role="tablist">
               <button type="button" class="payment-method-btn active" id="pm-card-btn" data-method="card">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
                 </svg>
                 Credit Card
               </button>
               <button type="button" class="payment-method-btn" id="pm-bank-btn" data-method="bank">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
                 </svg>
                 eCheck (ACH)
               </button>
             </div>
   
             <!-- ===== Shared amount + reference ===== -->
             <div class="payment-amount-row">
               <div class="form-group">
                 <label class="form-label" for="pay-amount">Amount (USD) <span class="form-required">*</span></label>
                 <div class="payment-amount-input-wrap">
                   <span class="payment-amount-prefix">$</span>
                   <input class="form-input payment-amount-input" type="number" id="pay-amount"
                     min="1" step="0.01" placeholder="0.00" required>
                 </div>
               </div>
               <div class="form-group">
                 <label class="form-label" for="pay-reference">Invoice / Reference #</label>
                 <input class="form-input" type="text" id="pay-reference" placeholder="INV-1234">
               </div>
             </div>
   
             <!-- ===== Credit Card Form ===== -->
             <form id="card-payment-form" class="payment-form" novalidate>
               <div class="form-group">
                 <label class="form-label" for="cc-name">Cardholder Name <span class="form-required">*</span></label>
                 <input class="form-input" type="text" id="cc-name" placeholder="Jane Smith" required>
               </div>
   
               <div class="form-group">
                 <label class="form-label">Card Number <span class="form-required">*</span></label>
                 <div id="hosted-field-card-number" class="hosted-field"></div>
               </div>
   
               <div class="form-row form-row-3">
                 <div class="form-group">
                   <label class="form-label" for="cc-exp-month">Exp. Month <span class="form-required">*</span></label>
                   <input class="form-input" type="text" id="cc-exp-month" placeholder="MM" maxlength="2" required>
                 </div>
                 <div class="form-group">
                   <label class="form-label" for="cc-exp-year">Exp. Year <span class="form-required">*</span></label>
                   <input class="form-input" type="text" id="cc-exp-year" placeholder="YYYY" maxlength="4" required>
                 </div>
                 <div class="form-group">
                   <label class="form-label">CVV <span class="form-required">*</span></label>
                   <div id="hosted-field-cvv" class="hosted-field"></div>
                 </div>
               </div>
   
               <div class="form-group">
                 <label class="form-label" for="cc-postal">Billing Zip Code <span class="form-required">*</span></label>
                 <input class="form-input" type="text" id="cc-postal" placeholder="12345" required>
               </div>
   
               <button type="submit" class="btn btn-primary payment-submit" id="card-submit">
                 <span class="submit-label">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                     <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                   </svg>
                   Pay Securely
                 </span>
                 <svg class="submit-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                   <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                 </svg>
               </button>
             </form>
   
             <!-- ===== eCheck (ACH) Form ===== -->
             <form id="bank-payment-form" class="payment-form" novalidate hidden>
               <div class="payment-account-type-toggle">
                 <label class="radio-pill">
                   <input type="radio" name="account_holder_type" value="personal" checked>
                   <span>Personal</span>
                 </label>
                 <label class="radio-pill">
                   <input type="radio" name="account_holder_type" value="business">
                   <span>Business</span>
                 </label>
               </div>
   
               <div class="form-row" id="bank-personal-fields">
                 <div class="form-group">
                   <label class="form-label" for="ach-given-name">First Name <span class="form-required">*</span></label>
                   <input class="form-input" type="text" id="ach-given-name" placeholder="Jane" required>
                 </div>
                 <div class="form-group">
                   <label class="form-label" for="ach-surname">Last Name <span class="form-required">*</span></label>
                   <input class="form-input" type="text" id="ach-surname" placeholder="Smith" required>
                 </div>
               </div>
   
               <div class="form-group" id="bank-business-field" hidden>
                 <label class="form-label" for="ach-business-name">Business Name <span class="form-required">*</span></label>
                 <input class="form-input" type="text" id="ach-business-name" placeholder="Acme LLC">
               </div>
   
               <div class="form-group">
                 <label class="form-label">Routing Number <span class="form-required">*</span></label>
                 <div id="hosted-field-routing" class="hosted-field"></div>
               </div>
   
               <div class="form-group">
                 <label class="form-label">Account Number <span class="form-required">*</span></label>
                 <div id="hosted-field-account" class="hosted-field"></div>
               </div>
   
               <div class="payment-account-type-toggle">
                 <label class="radio-pill">
                   <input type="radio" name="account_type" value="checking" checked>
                   <span>Checking</span>
                 </label>
                 <label class="radio-pill">
                   <input type="radio" name="account_type" value="savings">
                   <span>Savings</span>
                 </label>
               </div>
   
               <button type="submit" class="btn btn-primary payment-submit" id="bank-submit">
                 <span class="submit-label">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                     <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                   </svg>
                   Pay via eCheck
                 </span>
                 <svg class="submit-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                   <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                 </svg>
               </button>
             </form>
   
             <p class="payment-disclaimer">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
               Payments are processed securely by 8am. Meridian Tax Advisory never stores your card or bank details.
             </p>
   
             <!-- Success state -->
             <div class="payment-success" id="payment-success" hidden>
               <div class="payment-success-icon">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                   <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>
                 </svg>
               </div>
               <h4>Payment Successful</h4>
               <p id="payment-success-detail">Thank you — your payment has been received.</p>
               <button class="btn btn-outline" id="payment-reset">Make Another Payment</button>
             </div>
   
             <!-- Error banner -->
             <div class="payment-error-banner" id="payment-error-banner" hidden>
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
               </svg>
               <span id="payment-error-text">Something went wrong. Please try again.</span>
             </div>
   
           </div>
         </div>
       </div>
     `;
   
     initPaymentForm(el);
     return el;
   }
   
   /* ============================================================
      Hosted Fields shared styling
      (controls the look of the <input> INSIDE the iframes —
      must be set in JS per the 8am Hosted Fields API; cannot be
      styled from an external stylesheet because of iframe isolation)
      ============================================================ */
   const HOSTED_FIELD_STYLE = {
     'font-family': 'Oxanium, sans-serif',
     'font-size': '15px',
     'font-weight': '500',
     'color': '#0B2D72',
     'padding': '0',
     'width': '100%',
     '::placeholder': { color: '#9aaac4' },
     ':focus': { color: '#0B2D72' },
     ':invalid': { color: '#e05252' }
   };
   
   let cardHostedFields = null;
   let bankHostedFields = null;
   
   function initPaymentForm(root) {
     loadHostedFieldsScript(() => {
       initCardHostedFields(root);
       initBankHostedFields(root);
     });
   
     initPaymentMethodToggle(root);
     initAccountHolderToggle(root);
     initCardFormSubmit(root);
     initBankFormSubmit(root);
     initPaymentReset(root);
   }
   
   /* ---- Load the 8am Hosted Fields script once ---- */
   function loadHostedFieldsScript(callback) {
     if (window.AffiniPay && window.AffiniPay.HostedFields) {
       callback();
       return;
     }
     const existing = document.getElementById('affinipay-hosted-fields-script');
     if (existing) {
       existing.addEventListener('load', callback);
       return;
     }
     const script = document.createElement('script');
     script.id = 'affinipay-hosted-fields-script';
     script.src = 'https://cdn.affinipay.com/hostedfields/1.5.3/fieldGen_1.5.3.js';
     script.integrity = 'sha384-OInNoiApwwsc6xI2N+o4KHZ522+EmLGDTJFLwDEmuUum73mVEuytiQgy1/xpoEJO';
     script.crossOrigin = 'anonymous';
     script.onload = callback;
     document.head.appendChild(script);
   }
   
   /* ---- Card hosted fields ---- */
   function initCardHostedFields(root) {
     const config = {
       publicKey: PAYMENT_PUBLIC_KEY,
       fields: [
         {
           selector: '#hosted-field-card-number',
           input: { type: 'credit_card_number', placeholder: '1234 1234 1234 1234', css: HOSTED_FIELD_STYLE }
         },
         {
           selector: '#hosted-field-cvv',
           input: { type: 'cvv', placeholder: 'CVV', css: HOSTED_FIELD_STYLE }
         }
       ]
     };
   
     cardHostedFields = window.AffiniPay.HostedFields.initializeFields(config, () => {});
   }
   
   /* ---- Bank (eCheck) hosted fields ---- */
   function initBankHostedFields(root) {
     const config = {
       publicKey: PAYMENT_PUBLIC_KEY,
       fields: [
         {
           selector: '#hosted-field-routing',
           input: { type: 'routing_number', placeholder: 'Routing Number', css: HOSTED_FIELD_STYLE }
         },
         {
           selector: '#hosted-field-account',
           input: { type: 'bank_account_number', placeholder: 'Account Number', css: HOSTED_FIELD_STYLE }
         }
       ]
     };
   
     bankHostedFields = window.AffiniPay.HostedFields.initializeFields(config, () => {});
   }
   
   /* ---- Toggle: Card vs eCheck ---- */
   function initPaymentMethodToggle(root) {
     const cardBtn  = root.querySelector('#pm-card-btn');
     const bankBtn  = root.querySelector('#pm-bank-btn');
     const cardForm = root.querySelector('#card-payment-form');
     const bankForm = root.querySelector('#bank-payment-form');
   
     cardBtn.addEventListener('click', () => {
       cardBtn.classList.add('active');
       bankBtn.classList.remove('active');
       cardForm.hidden = false;
       bankForm.hidden = true;
     });
   
     bankBtn.addEventListener('click', () => {
       bankBtn.classList.add('active');
       cardBtn.classList.remove('active');
       bankForm.hidden = false;
       cardForm.hidden = true;
     });
   }
   
   /* ---- Toggle: Personal vs Business (ACH) ---- */
   function initAccountHolderToggle(root) {
     const radios         = root.querySelectorAll('input[name="account_holder_type"]');
     const personalFields = root.querySelector('#bank-personal-fields');
     const businessField  = root.querySelector('#bank-business-field');
   
     radios.forEach(radio => {
       radio.addEventListener('change', () => {
         const isBusiness = radio.value === 'business' && radio.checked;
         personalFields.hidden = isBusiness;
         businessField.hidden = !isBusiness;
       });
     });
   }
   
   /* ---- Shared helpers ---- */
   function getAmountInCents(root) {
     const raw = root.querySelector('#pay-amount').value;
     const dollars = parseFloat(raw);
     if (isNaN(dollars) || dollars <= 0) return null;
     return Math.round(dollars * 100);
   }
   
   function setLoading(button, loading) {
     button.classList.toggle('loading', loading);
     button.disabled = loading;
   }
   
   function showError(root, message) {
     const banner = root.querySelector('#payment-error-banner');
     root.querySelector('#payment-error-text').textContent = message;
     banner.hidden = false;
     banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
   }
   
   function showSuccess(root, message) {
     root.querySelector('#card-payment-form').hidden = true;
     root.querySelector('#bank-payment-form').hidden = true;
     root.querySelector('.payment-method-toggle').hidden = true;
     root.querySelector('.payment-amount-row').hidden = true;
     root.querySelector('#payment-error-banner').hidden = true;
     root.querySelector('#payment-success-detail').textContent = message;
     root.querySelector('#payment-success').hidden = false;
   }
   
   /* Sends the 8am payment token to YOUR backend, which holds the secret
      key and actually creates the charge. See create-charge docs:
      https://developers.8am.com/charge/create-charge */
   async function chargeOnBackend(paymentToken, amountCents, reference) {
     const response = await fetch(CHARGE_ENDPOINT, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         payment_token: paymentToken,
         amount: amountCents,
         reference: reference || undefined
       })
     });
   
     if (!response.ok) {
       const errBody = await response.json().catch(() => ({}));
       throw new Error(errBody.message || 'The payment could not be processed.');
     }
     return response.json();
   }
   
   /* ---- Credit card submit ---- */
   function initCardFormSubmit(root) {
     const form = root.querySelector('#card-payment-form');
     const submitBtn = root.querySelector('#card-submit');
   
     form.addEventListener('submit', async e => {
       e.preventDefault();
       root.querySelector('#payment-error-banner').hidden = true;
   
       if (!cardHostedFields) {
         showError(root, 'Payment form is still loading. Please wait a moment and try again.');
         return;
       }
   
       const amountCents = getAmountInCents(root);
       if (!amountCents) {
         showError(root, 'Please enter a valid payment amount.');
         return;
       }
   
       const name      = root.querySelector('#cc-name').value.trim();
       const expMonth  = root.querySelector('#cc-exp-month').value.trim();
       const expYear   = root.querySelector('#cc-exp-year').value.trim();
       const postal    = root.querySelector('#cc-postal').value.trim();
       const reference = root.querySelector('#pay-reference').value.trim();
   
       if (!name || !expMonth || !expYear || !postal) {
         showError(root, 'Please fill in all required card details.');
         return;
       }
   
       const state = cardHostedFields.getState();
       if (!state) {
         showError(root, 'Please check your card number and CVV and try again.');
         return;
       }
   
       setLoading(submitBtn, true);
   
       try {
         const tokenResult = await cardHostedFields.getPaymentToken({
           name,
           exp_month: expMonth,
           exp_year: expYear,
           postal_code: postal
         });
   
         const charge = await chargeOnBackend(tokenResult.id, amountCents, reference);
         showSuccess(root, `Your payment of $${(amountCents / 100).toFixed(2)} was successful. Confirmation #${charge.id || ''}`);
       } catch (err) {
         showError(root, err.message || 'We could not process your card. Please check your details and try again.');
       } finally {
         setLoading(submitBtn, false);
       }
     });
   }
   
   /* ---- eCheck submit ---- */
   function initBankFormSubmit(root) {
     const form = root.querySelector('#bank-payment-form');
     const submitBtn = root.querySelector('#bank-submit');
   
     form.addEventListener('submit', async e => {
       e.preventDefault();
       root.querySelector('#payment-error-banner').hidden = true;
   
       if (!bankHostedFields) {
         showError(root, 'Payment form is still loading. Please wait a moment and try again.');
         return;
       }
   
       const amountCents = getAmountInCents(root);
       if (!amountCents) {
         showError(root, 'Please enter a valid payment amount.');
         return;
       }
   
       const isBusiness = root.querySelector('input[name="account_holder_type"][value="business"]').checked;
       const isSavings  = root.querySelector('input[name="account_type"][value="savings"]').checked;
       const reference  = root.querySelector('#pay-reference').value.trim();
   
       const extraFields = {
         account_holder_type: isBusiness ? 'business' : 'individual',
         account_type: isSavings ? 'savings' : 'checking'
       };
   
       if (isBusiness) {
         const businessName = root.querySelector('#ach-business-name').value.trim();
         if (!businessName) {
           showError(root, 'Please enter the business name.');
           return;
         }
         extraFields.name = businessName;
       } else {
         const given  = root.querySelector('#ach-given-name').value.trim();
         const surname = root.querySelector('#ach-surname').value.trim();
         if (!given || !surname) {
           showError(root, 'Please enter your first and last name.');
           return;
         }
         extraFields.given_name = given;
         extraFields.surname = surname;
       }
   
       const state = bankHostedFields.getState();
       if (!state) {
         showError(root, 'Please check your routing and account numbers and try again.');
         return;
       }
   
       setLoading(submitBtn, true);
   
       try {
         const tokenResult = await bankHostedFields.getPaymentToken(extraFields);
         const charge = await chargeOnBackend(tokenResult.id, amountCents, reference);
         showSuccess(root, `Your eCheck payment of $${(amountCents / 100).toFixed(2)} was submitted. Confirmation #${charge.id || ''}`);
       } catch (err) {
         showError(root, err.message || 'We could not process your eCheck. Please check your details and try again.');
       } finally {
         setLoading(submitBtn, false);
       }
     });
   }
   
   /* ---- Reset after success ---- */
   function initPaymentReset(root) {
     root.querySelector('#payment-reset').addEventListener('click', () => {
       root.querySelector('#card-payment-form').reset();
       root.querySelector('#bank-payment-form').reset();
       root.querySelector('#pay-amount').value = '';
       root.querySelector('#pay-reference').value = '';
   
       if (cardHostedFields) cardHostedFields.clearIframeInput();
       if (bankHostedFields) bankHostedFields.clearIframeInput();
   
       root.querySelector('.payment-method-toggle').hidden = false;
       root.querySelector('.payment-amount-row').hidden = false;
       root.querySelector('#card-payment-form').hidden = false;
       root.querySelector('#bank-payment-form').hidden = true;
       root.querySelector('#pm-card-btn').classList.add('active');
       root.querySelector('#pm-bank-btn').classList.remove('active');
       root.querySelector('#payment-success').hidden = true;
     });
   }