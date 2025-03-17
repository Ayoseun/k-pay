
import { getBottomSection } from '../components/ui/bottom.js';
import { cryptoStyles } from '../components/css/crypto.js';
import { cardsStyles } from '../components/css/cards.js';
import { successStyles } from '../components/css/success.js';
import { paymentsSummaryStyles } from '../components/css/summary.js';
import { getMiddleSection } from '../components/ui/middle.js';
import { getSuccessSection } from '../components/ui/success.js';
import { getTopSection } from '../components/ui/top.js';
import { initializeEventListeners } from './widgetListeners.js';
import { widgetStyles } from '../components/css/widget.js';
import { poweredByStyles } from '../components/css/poweredBy.js';
import { getPoweredBy } from '../components/ui/poweredBy.js';
import { achStyles } from '../components/css/ach.js';
import { apmStyles } from '../components/css/apm.js';
import { getModal } from '../components/ui/modal.js';
import { cleanNumber } from './util.js';



// Main Widget Creation Function
export function createWidget(paymentData) {
  let amount = cleanNumber(paymentData["totalAmount"])

  const widget = document.createElement('div');
  widget.classList.add('widget-container', 'holder');

  // Create and append styles
  const orokiiWidgetStyles = [
    cardsStyles,

    widgetStyles,
    successStyles,
    cryptoStyles,
    achStyles,
    apmStyles,
    paymentsSummaryStyles,
    poweredByStyles
  ];

  orokiiWidgetStyles.forEach((orokiiWidgetStylesContent, index) => {
    const orokiiWidgetStyle = document.createElement('style');
    orokiiWidgetStyle.appendChild(document.createTextNode(orokiiWidgetStylesContent));
    document.head.appendChild(orokiiWidgetStyle);
  });
  if (amount == null) {
    amount = "0.0"
  } else {

  }
  // Append each section to the widget container
  widget.innerHTML = `
    <div class="orokii-home">
    <div class="orokii-card">
    ${getTopSection(amount)}
    ${getMiddleSection()}
    ${getBottomSection(amount)}

    ${getSuccessSection(amount)}
     
    </div>
    ${getPoweredBy()}
      ${getModal()}
    </div>
  `;
  // Append the widget to the body (or any other target container)
  document.body.appendChild(widget);
  // initializeEventListeners()
  initializeEventListeners(paymentData)

  return widget
}

export function statusResult() {
  console.log(localStorage.getItem("orokiiPayPaymentResult"))
  return localStorage.getItem("orokiiPayPaymentResult");
}