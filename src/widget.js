
import { getBottomSection, secured } from './components/bottom.js';
import { banner } from './components/css/banner.js';
import { cardFormStyles } from './components/css/card.js';
import { homeStyles } from './components/css/home.js';
import { pinStyles, popupStyles, todo } from './components/css/others.js';
import { successStyles } from './components/css/success.js';
import { cardPaymentSummaryStyles } from './components/css/summary.js';
import { getMiddleSection } from './components/middle.js';
import { getSuccessSection } from './components/success.js';
import { getTopSection } from './components/top.js';
import { initializeEventListeners } from './widgetListeners.js';  // Import the event listeners logic






// Main Widget Creation Function
export function createWidget(amount) {
    const widget = document.createElement('div');
    widget.classList.add('widget-container', 'card');

    // Create and append styles
    const styles = [
        homeStyles,
        successStyles,
        cardFormStyles,
        cardPaymentSummaryStyles,
        pinStyles,
        todo,
        popupStyles,banner
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
     <div class="card">
    ${getTopSection(amount)}
    ${getMiddleSection()}
    ${getBottomSection(amount)}
   
    ${getSuccessSection(amount)}
   </div>
    ${secured(amount)}
  `;
    // Append the widget to the body (or any other target container)
    document.body.appendChild(widget);
    initializeEventListeners()
    return widget
}
