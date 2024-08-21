// Get elements
const cardPaymentButton = document.getElementById('card-payment-button');
const cryptoPaymentButton = document.getElementById('crypto-payment-button');
const cryptocurrencySelect = document.getElementById('cryptocurrency-select');
const connectWalletButton = document.getElementById('connect-wallet-button');
const paymentAmountElement = document.getElementById('payment-amount');

// Payment method selection
cardPaymentButton.addEventListener('click', () => {
  // Handle card payment logic (e.g., redirect to payment gateway)
  console.log('Card payment selected');
});

cryptoPaymentButton.addEventListener('click', () => {
  // Handle cryptocurrency payment logic (e.g., connect wallet, submit transaction)
  console.log('Crypto payment selected');
});

// Cryptocurrency selection
cryptocurrencySelect.addEventListener('change', () => {
  // Update payment amount based on selected cryptocurrency (if applicable)
  const selectedCrypto = cryptocurrencySelect.value;
  // Replace with actual conversion logic
  const newAmount = convertToCrypto(selectedCrypto, 45000);
  paymentAmountElement.textContent = `$${newAmount}`;
});

// Wallet connection
connectWalletButton.addEventListener('click', () => {
  // Handle wallet connection logic (e.g., using Web3.js)
  console.log('Connecting wallet...');
  // Replace with actual wallet connection code
});

// Helper function for currency conversion (example)
function convertToCrypto(crypto, amount) {
  // Replace with actual conversion logic based on exchange rates
  if (crypto === 'bitcoin') {
    return amount * 0.0001; // Example conversion rate
  } else if (crypto === 'ethereum') {
    return amount * 0.0002; // Example conversion rate
  }
  return amount;
}