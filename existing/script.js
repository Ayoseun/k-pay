import { APICall } from "./js/api.js";
import { formatExpiryDate, resetForm, updateCardLogo } from "./js/cardService.js";
import { updatePaymentOption } from "./js/payments.js";




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
  const pinBackBtn = document.getElementById('pin-back')
  const pinBtnContinue = document.getElementById('pin-continue')
  const inputs = document.querySelectorAll('.pin-inputs input');
  const payButton = document.getElementById('pay-button');
  const buttonText = document.getElementById('button-text');
  const cardState = document.getElementById('state');
  const cardCity = document.getElementById('city')
  const country = document.getElementById('country');

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



  //----SUMMARY ---EVENT
  summaryConfirmBtn.addEventListener('click', (event) => {
    successContainer.style.display = 'flex';
    middleContainer.style.display = 'none';
    bottomContainer.style.display = 'none';
  })
  summaryBackBtn.addEventListener('click', (event) => {
    summaryContainer.style.display = 'none';
    cardDetails.style.display = 'block';
  })
  //------------




  //----------------CARD EVENTS------------
 
  cardNumberInput.addEventListener('input', updateCardLogo(cardHolderNameInput, cardLogo));
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
  document.getElementById('country').addEventListener('change', (event) => {
    const countryName = event.target.value;
    console.log('Selected country:', countryName);

    if (!countryName) {
      console.log('No country selected, clearing state and city dropdowns');
      document.getElementById('state').innerHTML = '<option value="">Select State</option>';
      document.getElementById('city').innerHTML = '<option value="">Select City</option>';
      return;
    }

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
        const stateSelect = document.getElementById('state');
        stateSelect.innerHTML = '<option value="">Select State</option>';
        if (data.data && data.data.states) {
          console.log('Number of states:', data.data.states.length);
          data.data.states.forEach(state => {
            const option = document.createElement('option');
            option.value = state.name;
            option.textContent = state.name;
            stateSelect.appendChild(option);
          });
        } else {
          console.log('No states found in the response');
        }
        // Clear city dropdown when country changes
        document.getElementById('city').innerHTML = '<option value="">Select City</option>';
      })
      .catch(error => {
        console.error('Error fetching states:', error);
        alert('Error fetching states. Please check the console for details.');
      });
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

    APICall('https://countriesnow.space/api/v0.1/countries/state/cities', JSON.stringify({ country: countryName, state: stateName })
    )
      .then(data => {
        console.log('City data received:', data);
        const citySelect = document.getElementById('city');
        citySelect.innerHTML = '<option value="">Select City</option>';
        if (data.data) {
          console.log('Number of cities:', data.data.length);
          data.data.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
          });
        } else {
          console.log('No cities found in the response');
        }
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
        alert('Error fetching cities. Please check the console for details.');
      });
  });

  pinBtnContinue.addEventListener('click', (event) => {
    pinContainer.style.display = 'none';
    summaryContainer.style.display = 'block';

  })
  pinBackBtn.addEventListener('click', (event) => {
    pinContainer.style.display = 'none';
    cardDetails.style.display = 'block';
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
  window.submitForm = async function () {



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

    // Get the IP address
    const ipAddress = await APICall('https://api.ipify.org?format=json', 'GET', null)
      .then(response => response.json())
      .then(data => data.ip)
      .catch(() => '0.0.0.0');;

    if (!cvcInput.value || !cardHolderNameInput.value || !expiryDateInput.value || !cardNumberInput.value) {
      alert('Please fill in all required fields.');
      return;
    }


    buttonText.style.display = 'none'; // Hide button text
    spinner.style.display = 'flex'; // Show spinner
    payButton.style.backgroundColor = '#000';
    payButton.disabled = true; // Disable the button
    // Collect form data
    const formData = {
      amount: "200", // Fixed amount for example; adjust as needed
      currency: "USD",
      paymentOption: {
        card: {
          cardNumber: cardNumberInput.value.replace(/\s+/g, ''),
          cardHolderName: cardHolderNameInput.value,
          expirationMonth: month,
          expirationYear: `20${year}`, // Assuming the year is provided as YY
          CVV: cvcInput.value,
          threeD: {
            methodNotificationUrl: "<methodNotificationURL>" // Replace with actual URL
          }
        }
      },
      deviceDetails: {
        ipAddress: ipAddress // Use the fetched IP address
      }
    };
    console.log(formData)
    fetch('https://dumm.onrender.com/initiate-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Payment initiated successfully', data);
        payButton.disabled = false; // Re-enable the button
        buttonText.style.display = 'inline'; // Show button text
        spinner.style.display = 'none'; // Hide spinner
        payButton.style.backgroundColor = '#19624C';
        if (data.transactionStatus === "DECLINED" || data.status !== "SUCCESS") {
          if (data.transactionStatus !== undefined) {
            alert(`Card Declined. Reason: ${data.transactionStatus}`);
          } else {
            alert(`Card Declined. Reason: ${data.reason}`);
          }


        } else {
          if (data.paymentOption.card.threeD.version !== null) {
            cardDetails.style.display = 'none';
            // document.getElementById('middle-section').style.display = 'none';
            // document.getElementById('bottom-section').style.display = 'none';
            pinContainer.style.display = 'flex';
          } else {
            cardDetails.style.display = 'none';
            // document.getElementById('middle-section').style.display = 'none';
            // document.getElementById('bottom-section').style.display = 'none';
            summaryContainer.style.display = 'block';
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
      });
  };


});





 async function getCountry(country) {
// Fetch and populate countries
const data=await APICall('https://restcountries.com/v3.1/all','GET',null)


    console.log('Countries fetched:', data.length);

    country.innerHTML = '<option value="">Select Country</option>';
    // Sort the countries by their common names in ascending order
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));

    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name.common;
      option.textContent = country.name.common;
      country.appendChild(option);
    });
  
 
// Function to update content display

}