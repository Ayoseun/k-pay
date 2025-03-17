import { createWidget } from './components/ui/widgetManager';
import { initializePaymentListeners } from './listeners/mainListeners';
import { setupGlobalConfig } from './config/constants';

export function initOrokiiWidget(paymentData) {
  setupGlobalConfig(paymentData);
  const widget = createWidget(paymentData);
  initializePaymentListeners(widget);
  return widget;
}

export { statusResult } from './utils/paymentEvents';