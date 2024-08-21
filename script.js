// Get elements
const paymentAmountElement = document.querySelector('#payment-amount h3');
const showWidgetButton = document.getElementById('show-widget-button');
const initialContainer = document.querySelector('.initial-container');
const paymentWidget = document.getElementById('payment-widget');
const cardPaymentRadio = document.getElementById('card-payment');
const cryptoPaymentRadio = document.getElementById('crypto-payment');
const cryptocurrencySelect = document.getElementById('cryptocurrency-select');
const connectWalletButton = document.getElementById('connect-wallet-button');
const cardForm = document.getElementById('card-form');
const cryptoForm = document.getElementById('crypto-form');

// Payment method selection
// Get elements
const paymentOptions = document.querySelectorAll('.payment-option');

// Payment method selection
cardPaymentRadio.addEventListener('change', () => {
  if (cardPaymentRadio.checked) {
    console.log('Card payment selected');
    cardForm.classList.add('active');
    cryptoForm.classList.remove('active');
    cryptocurrencySelect.disabled = true;
    paymentOptions[0].classList.add('selected');
    paymentOptions[1].classList.remove('selected');
  }
});

cryptoPaymentRadio.addEventListener('change', () => {
  if (cryptoPaymentRadio.checked) {
    console.log('Crypto payment selected');
    cardForm.classList.remove('active');
    cryptoForm.classList.add('active');
    cryptocurrencySelect.disabled = false;
    paymentOptions[0].classList.remove('selected');
    paymentOptions[1].classList.add('selected');
  }
});

// Wallet connection
connectWalletButton.addEventListener('click', () => {
  if (cryptoPaymentRadio.checked) {
    console.log('Connecting wallet...');
    alert('Please call metamask');
    // Replace with actual wallet connection code
  } else {
    alert('Please select the "Pay with Crypto" option and choose a cryptocurrency.');
  }
});

// Show widget button click
showWidgetButton.addEventListener('click', () => {
    initialContainer.style.display = 'none';
    showWidgetButton.style.display = 'none';
  paymentWidget.style.display = 'block';

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