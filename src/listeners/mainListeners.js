
import { initializeCardListeners } from './cardListeners';
import { initializeACHListeners } from './achListeners';
import { initializeCryptoListeners } from './cryptoListeners';

export const initializePaymentListeners = (widget) => {
  initializeCardListeners(widget);
  initializeACHListeners(widget);
  initializeCryptoListeners(widget);
};