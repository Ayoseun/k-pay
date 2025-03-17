import { connectWallet, transferETH, interactWithContract } from '../services/paymentHandlers/cryptoHandler';

export function initializeCryptoListeners(paymentData) {
  const connectWalletButton = document.getElementById('orokii-connect-wallet');
  const exchangeRateSpan = document.querySelector('.orokii-exchange-rate span');
  const cryptoAmountSpan = document.querySelector('.orokii-payments-details span');

  connectWalletButton.addEventListener('click', (e) => {
    const jsonData = JSON.parse(e.target.value);
    connectWallet(jsonData, exchangeRateSpan, cryptoAmountSpan, connectWalletButton);
  });

  // Add more crypto-specific event listeners here
}
