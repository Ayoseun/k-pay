// Get elements
const cardPaymentRadio = document.getElementById('card-payment');
const cryptoPaymentRadio = document.getElementById('crypto-payment');
const cryptocurrencySelect = document.getElementById('cryptocurrency-select');
const connectWalletButton = document.getElementById('connect-wallet-button');
const paymentAmountElement = document.getElementById('payment-amount h3');
const showWidgetButton = document.getElementById('show-widget-button');
const paymentWidget = document.getElementById('payment-widget');
// Payment method selection
cardPaymentRadio.addEventListener('change', () => {
  if (cardPaymentRadio.checked) {
    console.log('Card payment selected');
    cryptocurrencySelect.disabled = true; // Disable crypto selection
  }
});

cryptoPaymentRadio.addEventListener('change', () => {
  if (cryptoPaymentRadio.checked) {
    console.log('Crypto payment selected');
    cryptocurrencySelect.disabled = false; // Enable crypto selection
  }
});

// Cryptocurrency selection
cryptocurrencySelect.addEventListener('change', () => {
  const selectedCrypto = cryptocurrencySelect.value;
  const newAmount = convertToCrypto(selectedCrypto, 45000);
  paymentAmountElement.textContent = `$${newAmount.toFixed(2)}`;
});

// Wallet connection
connectWalletButton.addEventListener('click', () => {
  if (cryptoPaymentRadio.checked) {
    console.log('Connecting wallet...');
    // Replace with actual wallet connection code
  } else {
    alert('Please select the "Pay with Crypto" option and choose a cryptocurrency.');
  }
});
showWidgetButton.addEventListener('click', () => {
    paymentWidget.style.display = 'block';
    showWidgetButton.style.display = 'none';
  });
// Helper function for currency conversion (example)
function convertToCrypto(crypto, amount) {
  // Replace with actual conversion logic based on exchange rates
  if (crypto === 'bitcoin') {
    return amount * 0.000027; // Example conversion rate
  } else if (crypto === 'ethereum') {
    return amount * 0.00041; // Example conversion rate
  }
  return amount;
}
