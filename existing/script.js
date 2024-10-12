
let selectedCountry = "";
let selectedCity = "";
const baseURL = "https://e360-102-88-71-133.ngrok-free.app"
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

let paymentType = 0;
document.addEventListener('DOMContentLoaded', () => {



  //HOME ELEMENTS
  const middleContainer = document.getElementById('middle-section')
  const bottomContainer = document.getElementById('bottom-section')

  //PAYMENT OPTION ELEMENTS
  const contentDisplay = document.getElementById('payments-display');
  const spinner = document.getElementById('loader');
  const closeBtn = document.getElementById('close-payment')
  //CARD-INPUT
  const cardNumberInput = document.getElementById('card-number');
  const cardHolderNameInput = document.getElementById('cardholder-name')
  const cvcInput = document.getElementById('cvc');
  const cardLogo = document.getElementById('card-logo');
  const expiryDateInput = window.document.getElementById('expiry-date');
  const pinContainer = document.getElementById('pin-container')
  const cardDetails = document.getElementById('card-details')
  const achDetails = document.getElementById('ach-details')
  const pinBackBtn = document.getElementById('pin-back')
  const pinBtnContinue = document.getElementById('pin-continue')
  const inputs = document.querySelectorAll('.pin-inputs input');
  const cardPayButton = document.getElementById('card-pay-button');
  const cardPayButtonText = document.getElementById('card-pay-button-text');
  const cardState = document.getElementById('state');
  const cardCity = document.getElementById('city')
  const emailInput = document.getElementById('email');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const addressInput = document.getElementById('address');
  const country = document.getElementById('country');
  const achPayButton = document.getElementById('ach-pay-button');

  getCountry(country)
  //SUCCESS ELEMENT
  const successContainer = document.getElementById('success-container')

  //SUMMARY ELEMENTS
  const summaryContainer = document.getElementById('summary-container')
  const summaryConfirmBtn = document.getElementById('summary-buttons-confirm')
  const summaryBackBtn = document.getElementById('summary-buttons-go-back')

  //--------EVENT----------
  document.querySelectorAll('.payments').forEach(paymentDiv => {
    paymentDiv.addEventListener('click', (event) => {
      updatePaymentOption(document, contentDisplay, paymentDiv);
    });
  });

  // Handle the click event for the close button
  closeBtn.addEventListener('click', (event) => {
    // Hide the success container and show the other containers
    successContainer.style.display = 'none';
    cardDetails.style.display = 'block';
    middleContainer.style.display = 'block';
    bottomContainer.style.display = 'block';
    summaryContainer.style.display = 'none';
    // Call the resetForm function to clear values and revert to default state
    resetForm(document, cardNumberInput,
      cardHolderNameInput, cvcInput, expiryDateInput, inputs, cardLogo, country, cardCity, cardState
    )
  });
  //-----------

  //-----ACH----

  achPayButton.addEventListener('click', (event) => {
    paymentType = 2;
    achDetails.style.display = 'none';

    contentDisplay.append(summaryContainer)
    summaryContainer.style.display = 'block'

    console.log(paymentType)
  })
// Define payment handler functions
const paymentHandlers = {
  0: () =>         cardSubmit(expiryDateInput, cvcInput,
    cardHolderNameInput, cardNumberInput, spinner,
    summaryConfirmBtn, summaryBackBtn, cardDetails, summaryContainer,
    cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, successContainer, middleContainer, bottomContainer),
  1: () => console.log("Payment type 1 not implemented yet"),
  2: () => achSubmit(expiryDateInput, cvcInput,
    cardHolderNameInput, cardNumberInput, spinner,
    summaryConfirmBtn, summaryBackBtn, cardDetails, summaryContainer,
    cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, successContainer, middleContainer, bottomContainer),
  default: () => console.log("Unknown payment type")
};

summaryConfirmBtn.addEventListener('click', (event) => {
  console.log(paymentType);
  
  // Get the appropriate handler function or use the default
  const handler = paymentHandlers[paymentType] || paymentHandlers.default;
  
  // Call the handler function
  handler();
});


  summaryConfirmBtn.addEventListener('click', (event) => {
    console.log(paymentType)
    switch (paymentType) {
      case 0:

        break;
      case 1:
        // code block
        break;
      case 2:
        achSubmit(expiryDateInput, cvcInput,
          cardHolderNameInput, cardNumberInput, spinner,
          summaryConfirmBtn, summaryBackBtn, cardDetails, summaryContainer,
          cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, successContainer, middleContainer, bottomContainer)
        break;
      default:
      // code block
    }

  })

  //----SUMMARY ---EVENT

  summaryBackBtn.addEventListener('click', (event) => {
    summaryContainer.style.display = 'none';
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
    selectedCountry = cca2Code
    getState(countryName, cardState, cardCity);
  });

  // Fetch and populate cities based on selected state
  cardState.addEventListener('change', (event) => {
    const countryName = document.getElementById('country').value;
    const stateName = event.target.value;
    console.log('Selected country for city fetch:', countryName);
    console.log('Selected state for city fetch:', stateName);

    if (!stateName) {
      console.log('No state selected, clearing city dropdown');
      cardCity.innerHTML = '<option value="">Select City</option>';
      return;
    }
    getCity(countryName, stateName, cardCity)
  });

  cardCity.addEventListener('change', (event) => {

    selectedCity = event.target.value;

  });

  pinBtnContinue.addEventListener('click', (event) => {
    pinContainer.style.display = 'none';
    summaryContainer.style.display = 'block';

  })
  pinBackBtn.addEventListener('click', (event) => {
    pinContainer.style.display = 'none';
    cardDetails.style.display = 'block';
  })

  cardPayButton.addEventListener('click', (event) => {
    const isValid = validateForm(expiryDateInput, cvcInput,
      cardHolderNameInput, cardNumberInput, cardDetails,
      summaryContainer, spinner,
      cardPayButton,
      cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, pinContainer)
    if (!isValid) {

    } else {
      cardDetails.style.display = 'none';
      // document.getElementById('middle-section').style.display = 'none';
      // document.getElementById('bottom-section').style.display = 'none';
      summaryContainer.style.display = 'block';
    }
  })
  //------------------


  //-------CRYPTO ELEMENT---------
  const connectWallet = document.getElementById('qr-code');
  //--------------

  //----- CRYPTO EVENTS------
  connectWallet.addEventListener('click', (event) => {
    connectWallet()
  })
  //-----------
















  // Form submission



});




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

function updateContentDisplay(document, currentlyDisplayedContent, contentDisplay, paymentDiv) {
  const content = paymentDiv.querySelector('.payment-content');

  // If there's currently displayed content, move it back to its original payment div
  if (currentlyDisplayedContent) {
    const originalPaymentDiv = document.querySelector(`.payments[data-id="${currentlyDisplayedContent.getAttribute('data-id')}"]`);
    if (originalPaymentDiv) {
      originalPaymentDiv.appendChild(currentlyDisplayedContent);
    }
    currentlyDisplayedContent.style.display = 'none';
  }

  if (content) {
    content.style.display = 'block';
    contentDisplay.appendChild(content);
    contentDisplay.style.display = 'block';
    currentlyDisplayedContent = content;
  } else {
    contentDisplay.style.display = 'none';
    currentlyDisplayedContent = null;
  }
}

// Function to update radio button and content
function updatePaymentOption(document, contentDisplay, paymentDiv) {

  let currentlyDisplayedContent = null;
  // Uncheck all radio buttons
  document.querySelectorAll('.payments-radio').forEach(radio => {
    radio.checked = false;
  });

  // Check the radio button in the clicked payment div
  const radio = paymentDiv.querySelector('.payments-radio');
  if (radio) {
    radio.checked = true;
  }

  updateContentDisplay(document, currentlyDisplayedContent, contentDisplay, paymentDiv);
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
  fetch(baseURL + "/payment/simple-card-tokenized", {
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


async function achSubmit(expiryDateInput, cvcInput,
  cardHolderNameInput, cardNumberInput, spinner,
  summaryConfirmBtn, summaryBackBtn, cardDetails, summaryContainer,
  cardPayButtonText, emailInput, lastNameInput, firstNameInput, addressInput, successContainer, middleContainer, bottomContainer
) {






  cardPayButtonText.style.display = 'none'; // Hide button text
  spinner.style.display = 'flex'; // Show spinner
  summaryConfirmBtn.style.backgroundColor = '#000';
  summaryConfirmBtn.disabled = true; // Disable the button
  summaryBackBtn.style.display = 'none';
  const formData = {
    "currency": "USD",
    "amount": "100",
    "paymentOption": {
      "alternativePaymentMethod": {
        "paymentMethod": "apmgw_ACH",
        "AccountNumber": "111111111",
        "RoutingNumber": "999999992",
        "SECCode": "CCD"
      }
    },
    "deviceDetails": {
      "ipAddress": "93.146.254.172"
    },
    "billingAddress": {
      "firstName": "John",
      "lastName": "Smith",
      "phone": "6175551414",
      "address": "22 Main Street",
      "city": "Boston",
      "zip": "02460",
      "state": "MA",
      "country": "US"
    },
    "userDetails": {
      "firstName": "John",
      "lastName": "Smith",
      "phone": "6175551414",
      "address": "22 Main Street",
      "city": "Boston",
      "zip": "02460",
      "state": "MA",
      "country": "US",
      "identification": "123456789"
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
      console.log('Payment initiated successfully', data.data);
      if (data.status !== "FAILED") {
        summaryConfirmBtn.disabled = false; // Re-enable the button
        cardPayButtonText.style.display = 'inline'; // Show button text
        spinner.style.display = 'none'; // Hide spinner
        summaryConfirmBtn.style.backgroundColor = '#19624C';
        if (data.data.transactionStatus !== "PENDING") {
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

const TARGET_CHAIN_ID = 0x13882;
const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts[0]);
      alert(accounts[0])
      // Check the network chain ID
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      if (chainId !== TARGET_CHAIN_ID) {
        alert('Please switch to the correct network (chainId: 84532).');

      } else {


        console.log(accounts[0]); // Fetch ENS name after successful connection
      }
    } catch (error) {
      console.error("Error connecting to wallet: ", error);
    }
  } else {
    alert('MetaMask is not installed. Please install it to use this feature.');
  }
};


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
  cardHolderNameInput, cvcInput, expiryDateInput, inputs, cardLogo, country, cardCity, cardState
) {
  // Clear input fields
  cardNumberInput.value = '';
  cardHolderNameInput.value = '';
  cvcInput.value = '';
  expiryDateInput.value = '';
  inputs.forEach(input => input.value = '');
  // Reset the card logo
  cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/card.svg'; // Default

  // Uncheck any checkboxes in dropdowns
  document.querySelectorAll('.payments-radio').forEach(checkbox => {
    checkbox.checked = false;
  });



  // Clear country, state, and city dropdowns
  country.selectedIndex = 0;
  cardState.innerHTML = '<option value="">Select State</option>';
  cardCity.innerHTML = '<option value="">Select City</option>';
}



