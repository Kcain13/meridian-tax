/* ============================================================
   PAGE: PaymentPage
   Assembles the payment page view.
   ============================================================ */

function renderPaymentPage() {
  const page = document.createElement('div');
  page.className = 'page';
  page.appendChild(createPaymentForm());
  page.appendChild(createFooter());
  return page;
}