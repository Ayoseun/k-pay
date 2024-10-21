
import { getBanner, getBottomSection } from '../components/ui/bottom.js';
import { banner } from '../components/css/banner.js';
import { cardFormStyles } from '../components/css/card.js';
import { cryptoStyles } from '../components/css/crypto.js';
import { homeStyles } from '../components/css/home.js';
import { pinStyles, popupStyles, todo } from '../components/css/others.js';
import { successStyles } from '../components/css/success.js';
import { cardPaymentSummaryStyles } from '../components/css/summary.js';
import { getMiddleSection } from '../components/ui/middle.js';
import { getSuccessSection } from '../components/ui/success.js';
import { getTopSection } from '../components/ui/top.js';
import { initializeEventListeners } from './widgetListeners.js';






// Main Widget Creation Function
export function createWidget(paymentData) {
    let amount = paymentData["totalAmount"]
    const widget = document.createElement('div');
    widget.classList.add('widget-container', 'holder');

    // Create and append styles
    const styles = [
        banner,
        homeStyles,
        successStyles,
        cryptoStyles,
        cardFormStyles,
        cardPaymentSummaryStyles,
        pinStyles,
        todo,
        popupStyles,

    ];

    styles.forEach((styleContent, index) => {
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(styleContent));
        document.head.appendChild(style);
    });
    if (amount == null) {
        amount = "0.0"
    } else {

    }
    // Append each section to the widget container
    widget.innerHTML = `
    
    ${getTopSection(amount)}
    ${getMiddleSection()}
    ${getBottomSection(amount)}
    ${getSuccessSection(amount)}
    ${getBanner()}
  `;
    // Append the widget to the body (or any other target container)
    document.body.appendChild(widget);
    // initializeEventListeners()
    initializeEventListeners(paymentData)

    return widget
}

