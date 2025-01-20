import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";

let orokiiSelectedCountry = "";
let orokiiSelectedCity = "";
let orokiiBTCCheckoutLink = "";
let orokiiSelectedTokenAddress = "";
let orokiiSelectedToken = "";
let orokiiAmountInCrypto;
const orokiiBaseURL = "https://orokii-ppg-gateway-api-730399970440.us-central1.run.app/api/v1"
const getIpAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return '0.0.0.0';
  }
};

const orokiiNetwork = [
  {
    chainId: "0x1", // 1 in decimal
    network: "Ethereum",
    token: "ETH",
    contract: null,
    rpc: "https://rpc.lokibuilder.xyz/wallet", // Replace with your RPC
    symbol: "ETH",
    decimal: 18
  },
  {
    chainId: "0x1",
    network: "Ethereum",
    token: "USDC",
    rpc: "https://rpc.lokibuilder.xyz/wallet",
    symbol: "USDC",
    decimal: 6
  },
  {
    chainId: "0x1",
    network: "Ethereum",
    token: "USDT",
    rpc: "https://rpc.lokibuilder.xyz/wallet",
    symbol: "USDT",
    decimal: 6
  },
  {
    chainId: "0x1",
    network: "Ethereum",
    token: "DAI",
    rpc: "https://rpc.lokibuilder.xyz/wallet",
    symbol: "DAI",
    decimal: 18
  },
  {
    chainId: "0x89", // 137 in decimal
    network: "Polygon",
    token: "MATIC",
    rpc: "https://polygon-rpc.com",
    symbol: "MATIC",
    contract: null,
    decimal: 18
  },
  {
    chainId: "0x89",
    network: "Polygon",
    token: "USDC",
    rpc: "https://polygon-rpc.com",
    symbol: "USDC",
    decimal: 6
  },
  {
    chainId: "0x89",
    network: "Polygon",
    token: "USDT",
    rpc: "https://polygon-rpc.com",
    symbol: "USDT",
    decimal: 6
  },
  {
    chainId: "0x89",
    network: "Polygon",
    token: "DAI",
    rpc: "https://polygon-rpc.com",
    symbol: "DAI",
    decimal: 18
  },
  {
    chainId: "0xa", // 10 in decimal
    network: "Optimism",
    token: "ETH",
    rpc: "https://mainnet.optimism.io",
    symbol: "ETH",
    contract: null,
    decimal: 18
  },
  {
    chainId: "0xa",
    network: "Optimism",
    token: "USDC",
    rpc: "https://mainnet.optimism.io",
    symbol: "USDC",
    contract: "0x7f5c764cbc14f9669b88837ca1490cca17c31607", // USDC contract on Optimism

    decimal: 6
  },
  {
    chainId: "0xa",
    network: "Optimism",
    token: "USDT",
    rpc: "https://mainnet.optimism.io",
    symbol: "USDT",
    decimal: 6
  },
  {
    chainId: "0xa",
    network: "Optimism",
    token: "DAI",
    contract: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // DAI contract on Optimism

    rpc: "https://mainnet.optimism.io",
    symbol: "DAI",
    decimal: 18
  },
  {
    chainId: "0xa4b1",
    chain: "42161",
    network: "Arbitrum",
    token: "ETH",
    contract: null,
    rpc: "https://arbitrum.llamarpc.com	",
    symbol: "ETH",
    decimal: 18
  },
  {
    chainId: "0xa4b1",
    chain: "42161",
    network: "Arbitrum",
    token: "USDC",
    contract: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8", // USDC contract on Arbitrum

    rpc: "https://arbitrum.llamarpc.com	",
    symbol: "USDC",
    decimal: 6
  },
  {
    chainId: "0xa4b1",
    chain: "42161",
    network: "Arbitrum",
    token: "USDT",
    rpc: "https://arbitrum.llamarpc.com	",
    symbol: "USDT",
    decimal: 6
  },
  {
    chainId: "0xa4b1",
    chain: "42161",
    network: "Arbitrum",
    token: "DAI",
    contract: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // DAI contract on Arbitrum

    rpc: "https://arbitrum.llamarpc.com	",
    symbol: "DAI",
    decimal: 18
  },
  {
    chainId: "0x2105", // 8453 in decimal
    network: "Base",
    token: "ETH",
    contract: null,
    rpc: "https://mainnet.base.org",
    symbol: "ETH",
    decimal: 18
  },
  {
    chainId: "0x2105",
    network: "Base",
    token: "USDC",

    rpc: "https://mainnet.base.org",
    symbol: "USDC",
    decimal: 6
  },
  {
    chainId: "0xa4ec", // 42220 in decimal
    network: "Celo",
    token: "CELO",
    contract: null,
    rpc: "https://forno.celo.org",
    symbol: "CELO",
    decimal: 18
  },
  {
    chainId: "0xa4ec",
    network: "Celo",
    token: "cUSD",
    contract: "0x765de816845861e75a25fca122bb6898b8b1282a", // cUSD contract on Celo

    rpc: "https://forno.celo.org",
    symbol: "cUSD",
    decimal: 18
  },
  {
    chainId: "0xa4ec",
    network: "Celo",
    token: "USDC",
    contract: "0x37f750b7cc259a2f741af45294f6a16572cf5cad", // USDC contract on Celo

    rpc: "https://forno.celo.org",
    symbol: "USDC",
    decimal: 6
  }
];
const orokiiTestnetNetworks = [
  {
    chainId: "", // 5 in decimal
    chain: "",
    network: "Bitcoin",
    token: "BTC",
    contract: null,
    rpc: "",
    symbol: "",
    decimal: 0
  },
  {
    chainId: "", // 5 in decimal
    chain: "",
    network: "Solana",
    token: "SOL",
    contract: null,
    rpc: "",
    symbol: "",
    decimal: 0
  },
  {
    chainId: "0x18fe", // 5 in decimal
    chain: "6398",
    network: "Sepolia",
    token: "ETH",
    contract: null,
    rpc: "https://rpc.connext-sepolia.gelato.digital",
    symbol: "ETH",
    decimal: 18
  },
  {
    chainId: "0x18fe",
    chain: "6398",
    network: "Sepolia",
    token: "USDC",
    rpc: "https://rpc.connext-sepolia.gelato.digital",
    symbol: "USDC",
    decimal: 6,
    contract: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F" // Sepolia USDC
  },
  {
    chainId: "0x18fe",
    chain: "6398",
    network: "Sepolia",
    token: "USDT",
    rpc: "https://rpc.connext-sepolia.gelato.digital",
    symbol: "USDT",
    decimal: 6,
    contract: "0x18fe09Ee0d083DdF8AC028f2a56731412edD63223B9" // Sepolia USDT
  },
  {
    chainId: "0x18fe",
    chain: "6398",
    network: "Sepolia",
    token: "DAI",
    rpc: "https://rpc.connext-sepolia.gelato.digital",
    symbol: "DAI",
    decimal: 18,
    contract: "0x73967c6a0904aA032C103b4104747E88c566B1A2" // Sepolia DAI
  },
  {
    chainId: "0x13882", // 80002 in decimal
    chain: "80002",
    network: "Amoy",
    token: "POL",
    rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
    symbol: "POL",
    contract: null,
    decimal: 18
  },
  {
    chainId: "0x13882",
    chain: "80002",
    network: "Amoy",
    token: "OPY",
    rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
    symbol: "OPY",
    decimal: 18,
    contract: "0xF235fCA1026202D6d497d00d7fc812060f70286d" // Amoy OPY
  },
  {
    chainId: "0x13882",
    chain: "80002",
    network: "Amoy",
    token: "USDC",
    rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
    symbol: "USDC",
    decimal: 6,
    contract: "0x0FA8781a83E46826621b3BC094Ea2A0212e71B23" // Amoy USDC
  },
  {
    chainId: "0x13882",
    chain: "80002",
    network: "Amoy",
    token: "USDT",
    rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
    symbol: "USDT",
    decimal: 6,
    contract: "0x3813e82e6f7098b9583FC0F33a962D02018B6803" // Amoy USDT
  },
  {
    chainId: "0x13882",
    chain: "80002",
    network: "Amoy",
    token: "DAI",
    rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
    symbol: "DAI",
    decimal: 18,
    contract: "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F" // Amoy DAI
  },
  {
    chainId: "0x1a4", // 420 in decimal
    chain: "420",
    network: "Optimism Sepolia",
    token: "ETH",
    rpc: "https://Sepolia.optimism.io",
    symbol: "ETH",
    contract: null,
    decimal: 18
  },
  {
    chainId: "0x1a4",
    chain: "420",
    network: "Optimism Sepolia",
    token: "USDC",
    rpc: "https://Sepolia.optimism.io",
    symbol: "USDC",
    contract: "0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E", // USDC on Optimism Sepolia
    decimal: 6
  },
  {
    chainId: "0x66eed", // 421613 in decimal
    chain: "421613",
    network: "Arbitrum Sepolia",
    token: "ETH",
    contract: null,
    rpc: "https://Sepolia-rollup.arbitrum.io/rpc",
    symbol: "ETH",
    decimal: 18
  },
  {
    chainId: "0x66eed",
    chain: "421613",
    network: "Arbitrum Sepolia",
    token: "USDC",
    contract: "0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892", // USDC on Arbitrum Sepolia
    rpc: "https://Sepolia-rollup.arbitrum.io/rpc",
    symbol: "USDC",
    decimal: 6
  },
  {
    chainId: "0x14a33", // 84531 in decimal
    chain: "84531",
    network: "Base Sepolia",
    token: "ETH",
    contract: null,
    rpc: "https://Sepolia.base.org",
    symbol: "ETH",
    decimal: 18
  },
  {
    chainId: "0x14a33",
    chain: "84531",
    network: "Base Sepolia",
    token: "USDC",
    rpc: "https://Sepolia.base.org",
    symbol: "USDC",
    contract: "0x2e9F75DF8839ff192Da27e977CD154FD1EAE03cf", // USDC on Base Sepolia
    decimal: 6
  },
  {
    chainId: "0x1389", // 5001 in decimal
    chain: "5001",
    network: "Mantle Testnet",
    token: "MNT",
    contract: null,
    rpc: "https://rpc.testnet.mantle.xyz",
    symbol: "MNT",
    decimal: 18
  },
  {
    chainId: "0xaef3", // 44787 in decimal
    chain: "44787",
    network: "Celo Alfajores",
    token: "CELO",
    contract: null,
    rpc: "https://alfajores-forno.celo-testnet.org",
    symbol: "CELO",
    decimal: 18
  },
  {
    chainId: "0xaef3",
    chain: "44787",
    network: "Celo Alfajores",
    token: "cUSD",
    contract: "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1", // cUSD on Celo Alfajores
    rpc: "https://alfajores-forno.celo-testnet.org",
    symbol: "cUSD",
    decimal: 18
  }
];
let orokiiPaymentType = 0;
let TARGET_CHAIN_ID = "0x13882";
let orokiiTokenPrice = "";
document.addEventListener('DOMContentLoaded', () => {


  //HOME ELEMENTS
  const middleContainer = document.getElementById('orokii-middle-section')
  const bottomContainer = document.getElementById('orokii-bottom-section')

  //PAYMENT OPTION ELEMENTS

  const spinner = document.getElementById('orokii-loader');
  const cryptoSpinner = document.getElementById('orokii-crypto-loader');
  const achSpinner = document.getElementById('orokii-ach-loader');
  const closeBtn = document.getElementById('orokii-close-payment')
  //CARD-INPUT
  const cardNumberInput = document.getElementById('orokii-card-number');
  const cardHolderNameInput = document.getElementById('orokii-cardholder-name')
  const cvcInput = document.getElementById('orokii-cvc');
  const cardLogo = document.getElementById('orokii-card-logo');
  const expiryDateInput = window.document.getElementById('orokii-expiry-date');
  const pinContainer = document.getElementById('orokii-pin-container')
  const cardDetails = document.getElementById('orokii-card-details')
  const achDetails = document.getElementById('orokii-ach-details')
  const inputs = document.querySelectorAll('.orokii-pin-inputs input');
  const cardPayButton = document.getElementById('orokii-card-pay-button');
  const cardPayButtonText = document.getElementById('orokii-card-pay-button-text');
  const cryptoPayButtonText = document.getElementById('orokii-crypto-pay-button-text');
  const achPayButtonText = document.getElementById('orokii-ach-pay-button-text');
  const isTokenized = document.getElementById('orokii-isTokenized');
  const country = document.getElementById('orokii-country');
  const state = document.getElementById('orokii-state');
  const city = document.getElementById('orokii-city')

  const emailInput = document.getElementById('orokii-email');
  const firstNameInput = document.getElementById('orokii-first-name');
  const lastNameInput = document.getElementById('orokii-last-name');
  const addressInput = document.getElementById('orokii-address');
  const phoneInput = document.getElementById('orokii-phone');
  const zipInput = document.getElementById('orokii-zip');

  const bankingEmailInput = document.getElementById('orokii-banking-email');
  const bankingFirstNameInput = document.getElementById('orokii-banking-first-name');
  const bankingLastNameInput = document.getElementById('orokii-banking-last-name');
  const bankingAddressInput = document.getElementById('orokii-banking-address');
  const bankingPhoneInput = document.getElementById('orokii-banking-phone');
  const bankingZipInput = document.getElementById('orokii-banking-zip');
  const bankingCountry = document.getElementById('orokii-banking-country');
  const bankingState = document.getElementById('orokii-banking-state');
  const bankingCity = document.getElementById('orokii-banking-city')

  const identificationInput = document.getElementById('orokii-identification');
  const userFirstNameInput = document.getElementById('orokii-user-first-name');
  const userLastNameInput = document.getElementById('orokii-user-last-name');
  const userAddressInput = document.getElementById('orokii-user-address');
  const userZipInput = document.getElementById('orokii-user-zip');
  const userPhoneInput = document.getElementById('orokii-user-phone');
  const userCountry = document.getElementById('orokii-user-country');
  const userState = document.getElementById('orokii-user-state');
  const userCity = document.getElementById('orokii-user-city')
  const achShippingcheckbox = document.getElementById("orokii-is-shipping-data-needed");
  const tokens = document.getElementById('orokii-tokens');
  const achPayButton = document.getElementById('orokii-ach-pay-button');
  const routingNumberInput = document.getElementById('orokii-routing-number');
  const accountNumberInput = document.getElementById('orokii-account-number');

  //CRYPTO
  const connectWalletButton = document.getElementById('orokii-connect-wallet');
  const exchangeRateSpan = document.querySelector('.orokii-exchange-rate span');
  const cryptoAmountSpan = document.querySelector('.orokii-payments-details span');

  //SUCCESS ELEMENT
  const successContainer = document.getElementById('orokii-success-container')

  //SUMMARY ELEMENTS
  const summaryContainerCard = document.getElementById('orokii-summary-container-card')
  const summaryContainerAch = document.getElementById('orokii-summary-container-ach')
  const summaryConfirmBtn = document.getElementById('orokii-summary-buttons-confirm')
  const summaryBackBtn = document.getElementById('orokii-summary-buttons-go-back')
  const achSummaryConfirmBtn = document.getElementById('orokii-ach-summary-buttons-confirm')
  const achSummaryBackBtn = document.getElementById('orokii-ach-summary-buttons-go-back')
  const iframeCloseBtn = document.getElementById('orokii-iframe-close-btn')
  const orokiipayGooglePay = document.getElementById('orokiipay-google-pay')


  getCountry(country)
  getCountry(userCountry)
  getCountry(bankingCountry)
  getCrypto(orokiiTestnetNetworks, tokens, connectWalletButton)

  //--------EVENT----------
  document.querySelectorAll('.orokii-payments-header').forEach(header => {
    header.addEventListener('click', function () {
      const dropdown = this.parentElement;

      // Close all other dropdowns
      document.querySelectorAll('.orokii-payments').forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('open');
          d.querySelector('.orokii-payments-checkbox').checked = false;
        }
      });

      if (!y) {
        isTokenized.style.display = 'none'
      }

      // Toggle the clicked dropdown
      dropdown.classList.toggle('open');
      dropdown.querySelector('.orokii-payments-checkbox').checked = dropdown.classList.contains('open');
    });
  });



  // Add an event listener to monitor changes
  achShippingcheckbox.addEventListener("change", () => {
    const shippingFields = document.getElementById('orokii-shipping-data')
    if (achShippingcheckbox.checked) {
      shippingFields.style.display = 'none'
      userLastNameInput.value = bankingLastNameInput.value;
      userFirstNameInput.value = bankingFirstNameInput.value;
      userAddressInput.value = bankingAddressInput.value;
      userPhoneInput.value = bankingPhoneInput.value;
    } else {
      shippingFields.style.display = 'block'

    }
  });
  // Handle the click event for the close button
  closeBtn.addEventListener('click', (event) => {
    // Hide the success container and show the other containers
    successContainer.style.display = 'none';
    cardDetails.style.display = 'block';
    achDetails.style.display = 'block';
    middleContainer.style.display = 'block';
    bottomContainer.style.display = 'block';
    summaryContainerCard.style.display = 'none';
    summaryContainerAch.style.display = 'none';

    resetForm(document, cardNumberInput,
      cardHolderNameInput, cvcInput, expiryDateInput, inputs,
      cardLogo, country, city, state,
      emailInput, firstNameInput,
      lastNameInput, addressInput,
      accountNumberInput, routingNumberInput,
      bankingLastNameInput, bankingFirstNameInput,
      bankingPhoneInput, bankingAddressInput,
      bankingZipInput,
      userLastNameInput, userFirstNameInput, userAddressInput, userPhoneInput,
      userZipInput, identificationInput, bankingCountry, bankingState, bankingCity,
      userCountry, userState, userCity
    )
  });
  //-----------

  //-----ACH----

  achPayButton.addEventListener('click', (event) => {
    orokiiPaymentType = 2;

    achDetails.style.display = 'none';
    summaryContainerAch.style.display = 'block';
  })
  // Define payment handler functions
  const paymentHandlers = {
    0: () => cardSubmit(expiryDateInput, cvcInput,
      cardHolderNameInput, cardNumberInput, spinner,
      summaryConfirmBtn, summaryBackBtn, cardDetails, summaryContainerCard,
      cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, successContainer, middleContainer, bottomContainer),
    1: () => tokenizeCardSubmit(spinner,
      summaryConfirmBtn, summaryBackBtn, cardDetails, summaryContainerCard,
      cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, successContainer, middleContainer, bottomContainer
    ),
    2: () => achSubmit("100", accountNumberInput.value, routingNumberInput.value,
      achSpinner,
      achSummaryConfirmBtn, achSummaryBackBtn, achDetails, summaryContainerAch,
      achPayButtonText,
      bankingLastNameInput.value,
      bankingFirstNameInput.value,
      bankingPhoneInput.value,
      bankingAddressInput.value,
      bankingZipInput.value,
      userLastNameInput.value, userFirstNameInput.value, userAddressInput.value, userPhoneInput.value, userZipInput.value,
      identificationInput.value,
      successContainer,
      middleContainer, bottomContainer
    ),
    default: () => console.log("Unknown payment type")
  };


  //----SUMMARY ---EVENT
  summaryConfirmBtn.addEventListener('click', (event) => {
    console.log("here")
    // Get the appropriate handler function or use the default
    const handler = paymentHandlers[orokiiPaymentType] || paymentHandlers.default;

    // Call the handler function
    handler();
  });
  achSummaryConfirmBtn.addEventListener('click', (event) => {
    console.log("here")
    // Get the appropriate handler function or use the default
    const handler = paymentHandlers[orokiiPaymentType] || paymentHandlers.default;

    // Call the handler function
    handler();
  });
  achSummaryBackBtn.addEventListener('click', (event) => {

    summaryContainerAch.style.display = 'none';
    achDetails.style.display = 'block';
  })
  summaryBackBtn.addEventListener('click', (event) => {
    summaryContainerCard.style.display = 'none';
    cardDetails.style.display = 'block';
  })
  //------------




  //----------------CARD EVENTS------------
  cardNumberInput.addEventListener('input', () => {
    updateCardLogo(cardNumberInput, cardLogo)
  });
  expiryDateInput.addEventListener('input', formatExpiryDate); // Attach the event listener and pass the event to the function
  inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === 1 && index < inputs.length - 1) {
        // Move to the next input
        inputs[index + 1].focus();
      }
    });

    // Optionally handle the backspace to move to the previous input
    input.addEventListener('keydown', (e) => {
      if (e.key === "Backspace" && input.value === "" && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });

  cvcInput.addEventListener('input', () => {
    if (cvcInput.value.length > 3) {
      cvcInput.value = cvcInput.value.slice(0, 3);
    }
  });

  // Fetch and populate states based on selected country
  country.addEventListener('change', (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const countryName = selectedOption.value;
    const cca2Code = selectedOption.dataset.cca2; // Retrieve the CCA2 code

    console.log('Selected country:', countryName);
    console.log('Selected country CCA2 code:', cca2Code);

    if (!countryName) {
      console.log('No country selected, clearing state and city dropdowns');
      document.getElementById('state').innerHTML = '<option value="">Select State</option>';
      document.getElementById('city').innerHTML = '<option value="">Select City</option>';
      return;
    }
    orokiiSelectedCountry = cca2Code
    getState(countryName, state, city);
  });

  // Fetch and populate cities based on selected state
  state.addEventListener('change', (event) => {
    const countryName = document.getElementById('orokii-country').value;
    const stateName = event.target.value;
    console.log('Selected country for city fetch:', countryName);
    console.log('Selected state for city fetch:', stateName);

    if (!stateName) {
      console.log('No state selected, clearing city dropdown');
      city.innerHTML = '<option value="">Select City</option>';
      return;
    }
    getCity(countryName, stateName, city)
  });

  city.addEventListener('change', (event) => {

    orokiiSelectedCity = event.target.value;

  });

  bankingCountry.addEventListener('change', (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const countryName = selectedOption.value;
    const cca2Code = selectedOption.dataset.cca2; // Retrieve the CCA2 code

    console.log('Selected country:', countryName);
    console.log('Selected country CCA2 code:', cca2Code);

    if (!countryName) {
      console.log('No country selected, clearing state and city dropdowns');
      document.getElementById('state').innerHTML = '<option value="">Select State</option>';
      document.getElementById('city').innerHTML = '<option value="">Select City</option>';
      return;
    }
    orokiiSelectedCountry = cca2Code
    getState(countryName, bankingState, bankingCity);
  });

  // Fetch and populate cities based on selected state
  bankingState.addEventListener('change', (event) => {
    const countryName = bankingCountry.value;
    const stateName = event.target.value;
    console.log('Selected country for city fetch:', countryName);
    console.log('Selected state for city fetch:', stateName);

    if (!stateName) {
      console.log('No state selected, clearing city dropdown');
      city.innerHTML = '<option value="">Select City</option>';
      return;
    }
    getCity(countryName, stateName, bankingCity)
  });

  bankingCity.addEventListener('change', (event) => {

    orokiiSelectedCity = event.target.value;

  });

  // pinBtnContinue.addEventListener('click', (event) => {
  //   pinContainer.style.display = 'none';
  //   summaryContainerCard.style.display = 'block';


  // })
  // pinBackBtn.addEventListener('click', (event) => {
  //   pinContainer.style.display = 'none';
  //   cardDetails.style.display = 'block';
  // })
  const y = true;
  cardPayButton.addEventListener('click', (event) => {
    if (!y) {
      const isValid = validateForm(expiryDateInput, cvcInput,
        cardHolderNameInput, cardNumberInput, cardDetails,
        summaryContainerCard, spinner,
        cardPayButton,
        cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, pinContainer)
      if (!isValid) {

      } else {
        orokiiPaymentType = 0;
        //console.log(paymentType)
        cardDetails.style.display = 'none';
        // document.getElementById('middle-section').style.display = 'none';
        // document.getElementById('bottom-section').style.display = 'none';
        summaryContainerCard.style.display = 'block';
      }
    } else {
      orokiiPaymentType = 1;
      //console.log(paymentType)
      cardDetails.style.display = 'none';
      // document.getElementById('middle-section').style.display = 'none';
      // document.getElementById('bottom-section').style.display = 'none';
      summaryContainerCard.style.display = 'block';
    }

  })
  //------------------


  //-------CRYPTO ELEMENT---------
  tokens.addEventListener('change', (event) => {

    console.log('Selected token:', event.target.value);
    const jsonData = JSON.parse(event.target.value)
    connectWallet(jsonData, exchangeRateSpan, cryptoAmountSpan, connectWalletButton)

  });
  //--------------

  //----- CRYPTO EVENTS------
  connectWalletButton.addEventListener('click', (e) => {
    // const chain = JSON.parse(e.target.value)

    if (orokiiSelectedTokenAddress) {
      interactWithContract(window)
    } else if (orokiiSelectedToken == 'BTC') {
      btcPayments("0.006")

    } else if (orokiiSelectedToken == 'SOL') {
     // btcPayments("0.006")
console.log("paying Solana")
    } else {
      transferETH(
        "0.005", window, connectWalletButton, cryptoSpinner,
        cryptoPayButtonText,
        successContainer, middleContainer, bottomContainer)
    }

  })
  //-----------


  iframeCloseBtn.addEventListener('click', (event) => {
    closeModal(orokiiBTCCheckoutLink)
  })













  // Form submission



});


// Function to open the modal and set the URL
function openModal(src) {
  const modal = document.getElementById('orokii-myModal');
  const iframe = document.getElementById('orokii-modalIframe');
  iframe.src = src; // Set your URL here
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal(src) {
  const modal = document.getElementById('orokii-myModal');
  const iframe = document.getElementById('orokii-modalIframe');
  iframe.src = src; // Clear iframe source for cleanup
  modal.style.display = 'none';
}

function getCountry(country) {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      console.log('Countries fetched:', data.length);

      country.innerHTML = '<option value="">Select Country</option>';

      // Sort the countries by their common names in ascending order
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));

      data.forEach(c => {
        const option = document.createElement('option');
        option.value = c.name.common;
        option.textContent = c.name.common;
        option.dataset.cca2 = c.cca2; // Store the CCA2 code in a data attribute
        country.appendChild(option);

      });
    })
    .catch(error => console.error('Error fetching countries:', error));
}

function btcPayments(amount) {

  const url = 'https://btcpay516690.lndyn.com/api/v1/stores/HadUh2T9WnCeTab4ahKSSqdpjkKVktsjVR8MipQfZTAW/invoices';
  const headers = {
    'Authorization': 'token 6bf7ed255cba58f9697436cdf6f3b4e58318833a',
    'Content-Type': 'application/json'
  };

  const body = JSON.stringify({
    amount: amount,
    currency: 'USD'
  });

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: body
  })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
      // Extract checkoutLink and expirationTime
      const orokiiBTCCheckoutLink = data.checkoutLink;
      const expirationTime = data.expirationTime;

      // Log the extracted values
      console.log('Checkout Link:', orokiiBTCCheckoutLink);
      if (orokiiBTCCheckoutLink) {
        openModal(orokiiBTCCheckoutLink)
      } else {

      }
      // Convert expirationTime to a human-readable date
      const expirationDate = new Date(expirationTime * 1000); // Convert from Unix timestamp (seconds) to milliseconds
      console.log('Expiration Date:', expirationDate);
    })
    .catch(error => {
      console.error('Error:', error);
    });

}


function getState(countryName, state, city) {
  fetch('https://countriesnow.space/api/v0.1/countries/states', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ country: countryName })
  })
    .then(response => {
      console.log('State API response status:', response.status);
      return response.json();
    })
    .then(data => {
      console.log('State data received:', data);

      state.innerHTML = '<option value="">Select State</option>';
      if (data.data && data.data.states) {
        console.log('Number of states:', data.data.states.length);
        data.data.states.forEach(s => {
          const option = document.createElement('option');
          option.value = s.name;
          option.textContent = s.name;
          state.appendChild(option);
        });
      } else {
        console.log('No states found in the response');
      }
      // Clear city dropdown when country changes
      city.innerHTML = '<option value="">Select City</option>';
    })
    .catch(error => {
      console.error('Error fetching states:', error);
      alert('Error fetching states. Please check the console for details.');
    });
}

function getCity(countryName, stateName, city) {
  fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ country: countryName, state: stateName })
  })
    .then(response => {
      console.log('State API response status:', response.status);
      return response.json();
    })
    .then(data => {

      console.log('City data received:', data);

      city.innerHTML = '<option value="">Select City</option>';
      if (data.data) {
        console.log('Number of cities:', data.data.length);
        data.data.forEach(c => {
          const option = document.createElement('option');
          option.value = c;
          option.textContent = c;
          city.appendChild(option);

        });
      } else {
        console.log('No states found in the response');
      }

    })
    .catch(error => {
      console.error('Error fetching states:', error);
      alert('Error fetching states. Please check the console for details.');
    });
}



function validateForm(expiryDateInput, cvcInput,
  cardHolderNameInput, cardNumberInput,
) {

  const expiryPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$/; // MM/YY format
  const isValidExpiry = expiryPattern.test(expiryDateInput.value);

  if (!isValidExpiry) {
    alert('Invalid expiry date format. Use MM/YY.');
    return;
  }

  const [month, year] = expiryDateInput.value.split('/');
  const expiryMonth = parseInt(month, 10);
  const expiryYear = parseInt(year, 10);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Last two digits of the current year (YY format)
  const currentMonth = currentDate.getMonth() + 1; // Current month (1-12)

  // Check if the year is in the past
  if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
    alert('The expiry date must be later than the current date.');
    return;
  }

  if (!cvcInput.value || !cardHolderNameInput.value || !expiryDateInput.value || !cardNumberInput.value) {
    alert('Please fill in all required fields.');
    return;
  }

  return true
}

async function cardSubmit(expiryDateInput, cvcInput,
  cardHolderNameInput, cardNumberInput, spinner,
  summaryConfirmBtn, summaryBackBtn, cardDetails, summaryContainer,
  cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, successContainer, middleContainer, bottomContainer
) {



  const expiryPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$/; // MM/YY format
  const isValidExpiry = expiryPattern.test(expiryDateInput.value);

  if (!isValidExpiry) {
    alert('Invalid expiry date format. Use MM/YY.');
    return;
  }

  const [month, year] = expiryDateInput.value.split('/');
  const expiryMonth = parseInt(month, 10);
  const expiryYear = parseInt(year, 10);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Last two digits of the current year (YY format)
  const currentMonth = currentDate.getMonth() + 1; // Current month (1-12)

  // Check if the year is in the past
  if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
    alert('The expiry date must be later than the current date.');
    return;
  }

  if (!cvcInput.value || !cardHolderNameInput.value || !expiryDateInput.value || !cardNumberInput.value) {
    alert('Please fill in all required fields.');
    return;
  }


  cardPayButtonText.style.display = 'none'; // Hide button text
  spinner.style.display = 'flex'; // Show spinner
  summaryConfirmBtn.style.backgroundColor = '#000';
  summaryConfirmBtn.disabled = true; // Disable the button
  summaryBackBtn.style.display = 'none';
  const formData = {
    currency: "EUR",
    amount: "100",
    transactionType: "Sale",
    paymentOption: {
      card: {
        cardNumber: cardNumberInput.value.replace(/\s+/g, ''),
        cardHolderName: cardHolderNameInput.value,
        expirationMonth: month,
        expirationYear: `20${year}`,
        CVV: cvcInput.value
      }
    },
    billingAddress: {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      address: addressInput.value,
      city: selectedCity,
      country: selectedCountry,
      email: emailInput.value,
    },
    deviceDetails: {
      ipAddress: await getIpAddress()
    }
  };
  console.log(formData)
  fetch(orokiiBaseURL + "/payment/simple-card-tokenized", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Payment initiated successfully', data.data);
      if (data.status !== "FAILED") {
        summaryConfirmBtn.disabled = false; // Re-enable the button
        cardPayButtonText.style.display = 'inline'; // Show button text
        spinner.style.display = 'none'; // Hide spinner
        summaryConfirmBtn.style.backgroundColor = '#19624C';
        if (data.data.transactionStatus !== "APPROVED") {
          if (data.data.reason !== undefined) {
            alert(`Card Declined. Reason: ${data.reason}`);

          } else {
            alert(`Card Declined. Reason: ${data.transactionStatus}`);
          }


        } else {
          if (data.transactionId !== null) {
            successContainer.style.display = 'flex';
            middleContainer.style.display = 'none';
            bottomContainer.style.display = 'none';
          } else {
            // cardDetails.style.display = 'none';
            // // document.getElementById('middle-section').style.display = 'none';
            // // document.getElementById('bottom-section').style.display = 'none';
            // summaryContainer.style.display = 'block';
          }
        }
      } else {
        alert(`Invalid card details`);
        summaryContainer.style.display = 'none';
        cardDetails.style.display = 'block';
      }

    })
    .catch(error => {
      console.error('Error:', error);

    });
};

async function tokenizeCardSubmit(spinner,
  summaryConfirmBtn, summaryBackBtn, cardDetails, summaryContainer,
  cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, successContainer, middleContainer, bottomContainer
) {






  cardPayButtonText.style.display = 'none'; // Hide button text
  spinner.style.display = 'flex'; // Show spinner
  summaryConfirmBtn.style.backgroundColor = '#000';
  summaryConfirmBtn.disabled = true; // Disable the button
  summaryBackBtn.style.display = 'none';
  const formData = {
    currency: "EUR",
    amount: "100",
    transactionType: "Sale",
    userTokenId: "74f71adc-8dc5-420a-8609-e80c2e7e8858",
    paymentOption: {
      userPaymentOptionId: "130417918"
    },
    billingAddress: {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      address: addressInput.value,
      city: selectedCity,
      country: selectedCountry,
      email: emailInput.value,
    },
    deviceDetails: {
      ipAddress: await getIpAddress()
    }
  };
  console.log(formData)
  fetch(baseURL + "/payment/tokenized-payment", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Payment initiated successfully', data.data);
      if (data.status !== "FAILED") {
        summaryConfirmBtn.disabled = false; // Re-enable the button
        cardPayButtonText.style.display = 'inline'; // Show button text
        spinner.style.display = 'none'; // Hide spinner
        summaryConfirmBtn.style.backgroundColor = '#19624C';
        if (data.data.transactionStatus !== "APPROVED") {
          if (data.data.reason !== undefined) {
            alert(`Card Declined. Reason: ${data.reason}`);

          } else {
            alert(`Card Declined. Reason: ${data.transactionStatus}`);
          }


        } else {
          if (data.transactionId !== null) {
            successContainer.style.display = 'flex';
            middleContainer.style.display = 'none';
            bottomContainer.style.display = 'none';
          } else {
            // cardDetails.style.display = 'none';
            // // document.getElementById('middle-section').style.display = 'none';
            // // document.getElementById('bottom-section').style.display = 'none';
            // summaryContainer.style.display = 'block';
          }
        }
      } else {
        alert(`Invalid card details`);
        summaryContainer.style.display = 'none';
        cardDetails.style.display = 'block';
      }

    })
    .catch(error => {
      console.error('Error:', error);

    });
};


async function achSubmit(amount, accountNumberInput, routingNumberInput,
  spinner,
  summaryConfirmBtn, summaryBackBtn, achDetails, summaryContainer,
  achPayButtonText, lastNameInput, firstNameInput, phoneInput, addressInput, zip,
  userLastNameInput, userFirstNameInput, userAddressInput, userPhoneInput, userZipInput, identificationInput, successContainer,
  middleContainer, bottomContainer
) {



  achPayButtonText.style.display = 'none'; // Hide button text
  spinner.style.display = 'flex'; // Show spinner
  summaryConfirmBtn.style.backgroundColor = '#000';
  summaryConfirmBtn.disabled = true; // Disable the button
  summaryBackBtn.style.display = 'none';
  const formData = {
    "currency": "USD",
    "amount": amount,
    "paymentOption": {
      "alternativePaymentMethod": {
        "paymentMethod": "apmgw_ACH",
        "AccountNumber": accountNumberInput,
        "RoutingNumber": routingNumberInput,
        "SECCode": "CCD"
      }
    },
    "deviceDetails": {
      "ipAddress": await getIpAddress()
    },
    "billingAddress": {
      "firstName": firstNameInput,
      "lastName": lastNameInput,
      "phone": phoneInput,
      "address": addressInput,
      "city": selectedCity,
      "zip": zip,
      // "state": ,
      "country": selectedCountry
    },
    "userDetails": {
      "firstName": userFirstNameInput,
      "lastName": userLastNameInput,
      "phone": userPhoneInput,
      "address": userAddressInput,
      "city": selectedCity,
      "zip": userZipInput,
      //"state": state,
      "country": selectedCountry,
      "identification": identificationInput
    }
  };
  console.log(formData)
  fetch(baseURL + "/payment/payment-ach", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Payment initiated successfully', data);

      summaryConfirmBtn.disabled = false; // Re-enable the button
      achPayButtonText.style.display = 'inline'; // Show button text
      spinner.style.display = 'none'; // Hide spinner
      summaryConfirmBtn.style.backgroundColor = '#19624C';
      if (data.data.transactionStatus !== "PENDING") {
        if (data.reason !== "") {
          alert(`Payment failed with reason: ${data.reason}`);

        } else {
          alert(`Payment failed with reason: ${data.data.transactionStatus}`);
        }


      } else {
        if (data.transactionId !== null) {
          successContainer.style.display = 'flex';
          middleContainer.style.display = 'none';
          bottomContainer.style.display = 'none';
        } else {
          summaryContainer.style.display = 'none';
          achDetails.style.display = 'block';
        }
      }




    })
    .catch(error => {
      console.error('Error:', error);

    });
};


function getCrypto(networks, tokens, connectWalletButton) {
  tokens.innerHTML = '<option value="">Select Cryptocurrency</option>';
  networks.sort((a, b) => a.network.localeCompare(b.network));

  networks.forEach(t => {
    const option = document.createElement('option');
    option.value = JSON.stringify({
      chain: t.chain, chainId: t.chainId, network: t.network,
      token: t.token, rpc: t.rpc, contract: t.contract,
      symbol: t.symbol, decimal: t.decimal
    });

    const iconElement = document.createElement('img');
    iconElement.src = `./assets/bitcoin.svg`;
    iconElement.alt = t.token;
    iconElement.className = 'orokii-token-icon';

    const nameElement = document.createElement('span');
    nameElement.textContent = `${t.network} - ${t.token}`;
    nameElement.className = 'orokii-token-name';

    const optionContent = document.createElement('div');
    optionContent.className = 'orokii-token-option-content';
    optionContent.appendChild(iconElement);
    optionContent.appendChild(nameElement);

    option.appendChild(optionContent);
    tokens.appendChild(option);
  });

  connectWalletButton.disabled = true;
  connectWalletButton.style.backgroundColor = '#808080';
}

const connectWallet = async (targetChain, exchangeRateSpan, cryptoAmountSpan, connectWalletButton) => {

  if (typeof window.ethereum !== 'undefined') {

    if (targetChain.token == "BTC") {
      orokiiSelectedToken = "BTC"
      getCryptoPrice(targetChain.token, exchangeRateSpan, cryptoAmountSpan, connectWalletButton)
    } else if(targetChain.token == "SOL"){
      orokiiSelectedToken = "SOL";
      connectSolanaWallet();
      getCryptoPrice(targetChain.token, exchangeRateSpan, cryptoAmountSpan, connectWalletButton)
    } else {

      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts[0]);


        // Check the current network chain ID
        const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });

        if (currentChainId !== targetChain.chainId) {
          try {
            // Switch to the target chain
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: targetChain.chainId }],
            });


          } catch (switchError) {
            // This error occurs if the target chain is not added in MetaMask
            if (switchError.code === 4902) {
              try {

                if (targetChain.contract === null) {
                  addCoinToMetamask(targetChain)
                } else {
                  addTokenToMetaMask(targetChain)

                }

              } catch (addError) {
                console.error("Error adding the network: ", addError);
              }
            }
          }
        } else {
          console.log('Already connected to the correct network.');
        }
        getCryptoPrice(targetChain.token, exchangeRateSpan, cryptoAmountSpan, connectWalletButton)
      } catch (error) {
        console.error("Error connecting to wallet: ", error);
      }
    }

  } else {
    alert('MetaMask is not installed. Please install it to use this feature.');
  }


};

async function addCoinToMetamask(targetChain) {
  // Add the target chain to MetaMask
  try {
    const wasAdded = await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: targetChain.chainId,
        chainName: targetChain.network,
        rpcUrls: [targetChain.rpc], // Add the RPC URL here
        nativeCurrency: {
          name: targetChain.token,
          symbol: targetChain.symbol, // Replace with the symbol for your currency
          decimals: targetChain.decimal,
        },
        blockExplorerUrls: [''], // Optional
      }],
    });

    if (wasAdded) {
      console.log(`${symbol} has been added to MetaMask`);
    } else {
      console.log('Token addition was rejected.');
    }
  } catch (error) {
    console.error('Failed to add token:', error);
  }
}

async function addTokenToMetaMask(targetChain) {


  try {
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // The token type; for now, ERC20 is supported.
        options: {
          address: targetChain.contract, // The contract address of the token.
          symbol: targetChain.symbol, // A ticker symbol or shorthand for the token.
          decimals: targetChain.decimal, // The number of decimals in the token.
          image: "", // A string URL of the token logo image.
        },
      },
    });

    if (wasAdded) {
      orokiiSelectedTokenAddress = targetChain.contract;

      console.log(`${symbol} has been added to MetaMask`);
    } else {
      console.log('Token addition was rejected.');
    }
  } catch (error) {
    console.error('Failed to add token:', error);
  }
}

async function transferETH(
  amount, window, connectWalletButton, cryptospinner,
  cryptoPayButtonText,
  successContainer, middleContainer, bottomContainer) {
  cryptoPayButtonText.style.display = 'none'; // Hide button text
  cryptospinner.style.display = 'flex'; // Show spinner
  connectWalletButton.style.backgroundColor = '#000';
  connectWalletButton.disabled = true; // Disable the button
  try {
    // Get provider and signer
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    // Define the recipient address and amount in ETH
    const recipientAddress = "0xB948b2C9716F7e441FA3808761428f07205060e4"; // Replace with the recipient's address
    const amountInETH = amount; // Replace with the amount of ETH to send

    // Convert ETH to Wei (smallest unit of ETH)
    const amountInWei = ethers.parseEther(amountInETH);

    // Send the transaction
    const tx = await signer.sendTransaction({
      to: recipientAddress,
      value: amountInWei,
    });

    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log("Transaction successful:", receipt);
    cryptoPayButtonText.style.display = 'inline'; // Show button text
    spinner.style.display = 'none'; // Hide spinner
    connectWalletButton.style.backgroundColor = '#808080'
    if (receipt != null) {
      successContainer.style.display = 'flex';
      middleContainer.style.display = 'none';
      bottomContainer.style.display = 'none';
    } else {
      cryptoPayButtonText.style.display = 'inline'; // Hide button text
      spinner.style.display = 'none'; // Show spinner
      connectWalletButton.style.backgroundColor = '#19624C';
      connectWalletButton.disabled = false; // Disable the button
    }
  } catch (error) {
    console.error("Error transferring ETH:", error);
    cryptoPayButtonText.style.display = 'inline'; // Hide button text
    spinner.style.display = 'none'; // Show spinner
    connectWalletButton.style.backgroundColor = '#19624C';
    connectWalletButton.disabled = false; // Disable the button
  }
}

async function interactWithContract(window) {
  try {
    // Get provider and signer
    const provider = new ethers.BrowserProvider(window.ethereum);
    // Need to await the signer
    const signer = await provider.getSigner();

    // Create contract instance
    const contract = new ethers.Contract(
      "0xbF5095D72CD859c637cAD3bFFdC613B7341f6f27",
      contractABI,
      signer
    );

    const merchantId = ethers.encodeBytes32String("merchant ayo");

    // Call the view function
    const tx = await contract.addMerchantBalance(
      merchantId,
      orokiiSelectedTokenAddress,
      orokiiAmountInCrypto
    )

    tx.wait()
    console.log('Merchant data:', tx.hash());
    // Note: .wait() is only needed for transactions that modify state
    // For view/read functions, we don't need to wait for a receipt
    // successContainer.style.display = 'flex';
    // middleContainer.style.display = 'none';
    // bottomContainer.style.display = 'none';

  } catch (error) {
    console.error('Error interacting with the smart contract: ', error);
  }
}

function updateCardLogo(cardNumberInput, cardLogo) {
  const cardNumber = cardNumberInput.value.replace(/\s+/g, '');
  if (cardNumber.startsWith('47') || cardNumber.startsWith('44') || cardNumber.startsWith('41') || cardNumber.startsWith('40')) {
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/visa.svg'; // Visa
  } else if (cardNumber.startsWith('51') || cardNumber.startsWith('53') || cardNumber.startsWith('55') || cardNumber.startsWith('22')) {
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/mastercard.svg'; // MasterCard
  } else if (cardNumber.startsWith('62') || cardNumber.startsWith('65') || cardNumber.startsWith('60')) {
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/discover.svg'; // Discover
  } else if (cardNumber.startsWith('37')) {
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/americanExpress.svg'; // Maestro
  } else if (cardNumber.startsWith('623')) {
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/unionpay.svg'; // Maestro
  } else if (cardNumber.startsWith('36') || cardNumber.startsWith('38')) {
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/diners.svg'; // Maestro
  } else {
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/card.svg'; // Default
  }
}

function formatExpiryDate(e) {
  let value = e.target.value.replace(/\D/g, ''); // Only allow digits

  if (value.length >= 2) {
    let month = value.slice(0, 2);

    // Validate the month part (01-12)
    if (parseInt(month, 10) > 12) {
      month = '12'; // If invalid month, set it to 12
    }

    value = month + '/' + value.slice(2, 4); // Insert slash for MM/YY
  }

  e.target.value = value.slice(0, 5); // Max length: 5 (MM/YY)
}

function resetForm(document, cardNumberInput,
  cardHolderNameInput, cvcInput, expiryDateInput, inputs,
  cardLogo, country, city, state,
  emailInput, firstNameInput,
  lastNameInput, addressInput,
  accountNumberInput, routingNumberInput,
  bankingLastNameInput, bankingFirstNameInput,
  bankingPhoneInput, bankingAddressInput,
  bankingZipInput,
  userLastNameInput, userFirstNameInput, userAddressInput, userPhoneInput,
  userZipInput, identificationInput, bankingCountry, bankingState, bankingCity,
  userCountry, userState, userCity
) {
  // Clear input fields (check for null or undefined before accessing)
  if (cardNumberInput) cardNumberInput.value = '';
  if (cardHolderNameInput) cardHolderNameInput.value = '';
  if (cvcInput) cvcInput.value = '';
  if (expiryDateInput) expiryDateInput.value = '';
  if (inputs && Array.isArray(inputs)) {
    inputs.forEach(input => {
      if (input) input.value = '';
    });
  }

  if (emailInput) emailInput.value = '';
  if (firstNameInput) firstNameInput.value = '';
  if (lastNameInput) lastNameInput.value = '';
  if (addressInput) addressInput.value = '';
  if (identificationInput) identificationInput.value = '';

  if (userAddressInput) userAddressInput.value = '';
  if (userFirstNameInput) userFirstNameInput.value = '';
  if (userLastNameInput) userLastNameInput.value = '';
  if (userPhoneInput) userPhoneInput.value = '';
  if (userZipInput) userZipInput.value = '';

  if (accountNumberInput) accountNumberInput.value = '';
  if (routingNumberInput) routingNumberInput.value = '';
  if (bankingAddressInput) bankingAddressInput.value = '';
  if (bankingFirstNameInput) bankingFirstNameInput.value = '';
  if (bankingLastNameInput) bankingLastNameInput.value = '';
  if (bankingPhoneInput) bankingPhoneInput.value = '';
  if (bankingZipInput) bankingZipInput.value = '';

  // Reset the card logo (check if cardLogo exists)
  if (cardLogo) cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/card.svg'; // Default

  // Uncheck any checkboxes in dropdowns
  const checkboxes = document.querySelectorAll('.payments-radio');
  if (checkboxes) {
    checkboxes.forEach(checkbox => {
      if (checkbox) checkbox.checked = false;
    });
  }

  // Clear country, state, and city dropdowns (check for existence)
  if (country) country.selectedIndex = 0;
  if (state) state.innerHTML = '<option value="">Select State</option>';
  if (city) city.innerHTML = '<option value="">Select City</option>';

  if (bankingCountry) bankingCountry.selectedIndex = 0;
  if (bankingState) bankingState.innerHTML = '<option value="">Select State</option>';
  if (bankingCity) bankingCity.innerHTML = '<option value="">Select City</option>';
  if (userCountry) userCountry.selectedIndex = 0;
  if (userState) userState.innerHTML = '<option value="">Select State</option>';
  if (userCity) userCity.innerHTML = '<option value="">Select City</option>';
}

function getCryptoPrice(token, exchangeRateSpan, cryptoAmountSpan, connectWalletButton) {
  fetch(`https://rest.coinapi.io/v1/exchangerate/${token}/USD`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json', // Change to 'application/json'
      'X-CoinAPI-Key': '779E21CE-DE48-4788-A42A-F5060CD4DA6F'
    }
  })
    .then(response => {
      if (!response.ok) {
        // throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse as JSON
    })
    .then(data => {
      connectWalletButton.disabled = false;
      connectWalletButton.style.backgroundColor = '#19624C'
      console.log(data); // Log the entire data object for debugging
      let USDPrice = data.rate; // Access the rate property directly
      console.log(USDPrice); // Correct variable name
      exchangeRateSpan.textContent = `1 ${token} = ${USDPrice.toFixed(3)} USD`; // Use toFixed for 3 decimal places
      orokiiAmountInCrypto = 4000 / USDPrice
      cryptoAmountSpan.textContent = `${orokiiAmountInCrypto.toFixed(3)} ${token}`
    })
    .catch(error => {
      connectWalletButton.disabled = true;
      connectWalletButton.style.backgroundColor = '#808080'
      orokiiAmountInCrypto = 3.000;
      cryptoAmountSpan.textContent = `${orokiiAmountInCrypto.toFixed(3)}`
      console.error('Error:', error)
    });
}

const isPhantomInstalled = () => {
  return window.solana && window.solana.isPhantom;
};

// Function to connect to the wallet
const connectSolanaWallet = async () => {

  try {
    if (isPhantomInstalled()) {
      // Request wallet connection
      const response = await window.solana.connect();
      const walletAddress = response.publicKey.toString();
    console.log(walletAddress)
    } else {

    }
  } catch (error) {
    console.error('Error connecting to wallet:', error);

  }
};


const contractABI =
  [
    {
      "inputs": [],
      "name": "AccessControlBadConfirmation",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "neededRole",
          "type": "bytes32"
        }
      ],
      "name": "AccessControlUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "AddressEmptyCode",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "AddressInsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EnforcedPause",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpectedPause",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FailedInnerCall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidInitialization",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotInitializing",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "SafeERC20FailedOperation",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "BalanceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "version",
          "type": "uint64"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_wallet",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "createdAt",
          "type": "uint256"
        }
      ],
      "name": "MerchantAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "MerchantDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fees",
          "type": "uint256"
        }
      ],
      "name": "PlatformFeeUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Received",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "SupportedTokenAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "SupportedTokenDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_tokenIdToUpdate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_newName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_newAddress",
          "type": "address"
        }
      ],
      "name": "TokenUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_wallet",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addMerchant",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "addMerchantBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_tokenName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "addSupportedToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "deleteMerchant",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "deleteSupportedToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllMerchants",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        },
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "getOneMerchant",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "getOneMerchantBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantAdminRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "merchantIds",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "merchants",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "wallet",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "createdAt",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "platformFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "callerConfirmation",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeAdminRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_fees",
          "type": "uint256"
        }
      ],
      "name": "setPlatformFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "supportedTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_tokenName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "updateSupportedToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ];




  // Set your Google Pay API version and merchant ID
  const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
      merchantId: '427583496191624621',
      merchantName: 'YOUR_MERCHANT_NAME',
    },
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
          },
        },
      },
    ],
  };
  
  // Create a Google Pay client object
  const googlePayClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });
  
  // Add a click event listener to the button
  orokiipayGooglePay.addEventListener('click', () => {
    // Call the payment method to display the Google Pay payment sheet
    googlePayClient.loadPaymentData(baseRequest).then(paymentData => {
      // Send the payment token to your server to process the payment
      console.log(paymentData);
    }).catch(error => {
      console.error(error);
    });
  });
