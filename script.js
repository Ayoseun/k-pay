// Get elements
const paymentAmountElement = document.querySelector('#payment-amount h3');
const showWidgetButton = document.getElementById('show-widget-button');
const goToOTPButton = document.getElementById('gtb');
const closeButton = document.getElementById('close-button');
const otpButton = document.getElementById('otp-button');
const cardOTP = document.getElementById('card-otp');
const initialContainer = document.querySelector('.initial-container');
const paymentWidget = document.getElementById('payment-widget');
const cardPaymentRadio = document.getElementById('card-payment');
const cryptoPaymentRadio = document.getElementById('crypto-payment');
const cryptocurrencySelect = document.getElementById('cryptocurrency-select');
const connectWalletButton = document.getElementById('connect-wallet-button');
const cardForm = document.getElementById('card-form');
const cryptoForm = document.getElementById('crypto-form');
const paymentForm = document.getElementById('payment-forms');
const paymentOptions = document.querySelectorAll('.payment-option');
const paymentCompletedUI=document.getElementById('paymentCompletedUI');
// Disable the connect wallet button initially
connectWalletButton.disabled = true;
// Payment method selection
cardPaymentRadio.addEventListener('change', () => {
  if (cardPaymentRadio.checked) {
    console.log('Card payment selected');
    cardForm.style.display = 'block';
    cryptoForm.style.display = 'none';


    cryptocurrencySelect.disabled = true;
    paymentOptions[0].classList.add('selected');
    paymentOptions[1].classList.remove('selected');
  }
});
// Add event listener to the cryptocurrency select
cryptocurrencySelect.addEventListener('change', () => {
  // Enable the connect wallet button when a cryptocurrency is selected
  connectWalletButton.disabled = false;
});
cryptoPaymentRadio.addEventListener('change', () => {
  if (cryptoPaymentRadio.checked) {
    console.log('Crypto payment selected');
    cryptoForm.style.display = 'block';
    cardForm.style.display = 'none';
    cryptocurrencySelect.disabled = false;
    paymentOptions[0].classList.remove('selected');
    paymentOptions[1].classList.add('selected');
  }
});
goToOTPButton.addEventListener('click', () => {
  console.log("yes")
  paymentForm.style.display = 'none';
  cardOTP.style.display = 'block';
});
otpButton.addEventListener('click', () => {
  cardOTP.style.display = 'none';
  paymentWidget.style.display = 'none';
  paymentCompletedUI.style.display='block';
});

closeButton.addEventListener('click',()=>{
  initialContainer.style.display = 'block';
  showWidgetButton.style.display = 'block';
  paymentCompletedUI.style.display='none';
  
})
// Wallet connection
// connectWalletButton.addEventListener('click', () => {
//   if (cryptoPaymentRadio.checked) {
//     console.log('Connecting wallet...');
//     alert('Please call metamask');
//     // Replace with actual wallet connection code
//   } else {
//     alert('Please select the "Pay with Crypto" option and choose a cryptocurrency.');
//   }
// });

// Show widget button click
showWidgetButton.addEventListener('click', () => {
  initialContainer.style.display = 'none';
  showWidgetButton.style.display = 'none';
  paymentWidget.style.display = 'block';

});


// import MetaMaskOnboarding from "@metamask/onboarding";


// const onboarding = new MetaMaskOnboarding();


// const isMetaMaskInstalled = () => {
//   const { ethereum } = window;
//   return Boolean(ethereum && ethereum.isMetaMask);
// };

// let connected = (accounts) => {

// console.log(accounts[0])
// };

// async function connectWallet() {
//   return await ethereum.request({ method: "eth_accounts" });
// }

// const onClickInstallMetaMask = () => {
//   onboarding.startOnboarding();

// };

// connectWalletButton.addEventListener("click", async () => {

//   try {
//     const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//     connected(accounts);
//   } catch (error) {
//     console.error(error);
//   }
// });

// const MetaMaskClientCheck = () => {
//   if (!isMetaMaskInstalled()) {
//     alert('Please call metamask');
//   } else {
//     connectWallet().then((accounts) => {
//       if (accounts && accounts[0] > 0) {
//         connected(accounts);
//       } else {
//         alert('Please call metamask');
//       }
//     });
//   }
// };

// MetaMaskClientCheck();