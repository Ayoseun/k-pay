var OrokiipayWidget = (function (exports) {
   'use strict';

   // Inline CSS styles
   const homeStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');




.card {
width: 37%;
background-color: white;
border-radius: 2%;
box-shadow: 0 4px 8px rgba(40, 41, 41, 0.1);
height: auto; 
box-sizing: border-box;
}

.top-section {
display: flex;
padding: 20px;
justify-content: space-between;
margin: 0px 0px 0px 0px;
padding: 20px 16px 5px 16px;
}

.top-left {
display: flex;
margin: 0px 0px 0px 0px;
align-items: center;
}

.icon {
width: 24px;
height: 24px;
margin-right: 10px;
}

.logo-text {
font-size: 14px;
color: #000;
font-family: 'Poppins'; sans-serif;
font-weight: 400;
}

.text-row {
display: flex;
flex-direction: column;
}

.text-item {
font-size: 12px;
color: #000;
font-family: 'Inter'; sans-serif;
font-weight: 600;
}

.top-column-text-amount {
font-size: 20px;
color: #16A34A;
font-family: 'Inter'; sans-serif;
margin: 10px 0px 0px 20px;
font-weight: 500;
}

.top-right {
display: flex;
margin: 0px;
flex-direction: column;
align-items: flex-end;
}

.text-column {
display: flex;
flex-direction: column;
align-items: flex-end;
}

.subtitle {
margin-top: 5px;
}

.divider {
margin: 0px;
border: 0;
border-top: 0.5px solid #ddd;
}

.middle-section {
display: block;
text-align: center;
font-family: 'Poppins', sans-serif;
font-size: 12px;
margin: 20px 0px 20px 0px;
}

.bottom-section {
display: block;
margin: 10px 70px 70px 70px;
}

.dropdown {

margin-bottom: 2px;
overflow: hidden;
}

.dropdown-header {
display: flex;
border: 0.5px solid #D0D5DD;
border-radius: 5px;
align-items: center;
padding: 10px;
cursor: pointer;
}

.dropdown-checkbox {
appearance: none;
-webkit-appearance: none;
margin-right: 10px;
border: 0.5px solid #D0D5DD;
border-radius: 2px;
width: 12px;
height: 12px;
background-color: #FFFFFF;
cursor: pointer;
position: relative; /* Add this for positioning the checkmark */
}

/* Style for when the checkbox is checked */
.dropdown-checkbox:checked {
border: 1.1px solid #6cf1ce;

}

/* To add a checkmark when checked */
.dropdown-checkbox:checked:after {
content: '\u2714'; /* Unicode character for a checkmark */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: #19624C;
font-size: 10px; /* Adjust size as needed */
line-height: 1;
}

.dropdown-inner {
display: flex;
align-items: center;
}

.dropdown-image {
width: 24px;
height: 24px;
margin-right: 10px;
}

.dropdown-image-crypto {
width: 16px;
height: 16px;
margin-right: 10px;
}

.dropdown-image-others {
width: 38px;
height: 38px;

}

.dropdown-text {
flex: 1;
margin-right: 15px;
font-family: 'Poppins', sans-serif;
font-size: x-small;
}

.dropdown-chevron {
width: 8px;
height: 8px;
}

.dropdown-chevron {
margin-left: auto;
font-size: 16px;
}

.dropdown-content {
display: none;
width: 100%;
box-sizing: border-box;
max-height: 350px;
overflow-y: auto;
scrollbar-width: none; /* For Firefox */
-ms-overflow-style: none; /* For Internet Explorer and Edge */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.dropdown-content::-webkit-scrollbar {
display: none;
}

/* Optional: Custom scrollbar styling */
.dropdown-content {
/* Ensure the content has some padding on the right to avoid overlap */
padding-right: 20px;
}

/* Create a custom scrollbar effect */
.dropdown-content::after {
content: "";
position: absolute;
top: 0;
right: 0;
width: 8px;
height: 100%;
background: rgba(0, 0, 0, 0.1);
border-radius: 4px;
}

/* Optional: Style the "thumb" of the scrollbar */
.dropdown-content::before {
content: "";
position: absolute;
top: 0;
right: 0;
width: 8px;
height: 30%; /* Adjust based on content */
background: rgba(0, 0, 0, 0.3);
border-radius: 4px;
opacity: 0;
transition: opacity 0.2s;
}

.dropdown-content:hover::before {
opacity: 1;
}
.dropdown.open .dropdown-content {
display: block;
}

`;
   const successStyles=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.success-container {
    display: none;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    margin: 20px 0px 20px 0px;
}

.success-container h1 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
}

.success-container p {
    color: #79747E;
    font-size: 10px;
}

.success-container img {
    margin-bottom: 10px;
    width: 48px;
    height: 48px;
}

.success-container button {
    width: 60%;
    padding: 10px;
    background-color: #19624C;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 10px;
    cursor: pointer;
    padding-left: 15px;
    margin-bottom: 20px;
    padding-right: 15px;

}`;

   const cardFormStyles=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.card-details {
    background-color: white;
    font-family: 'Poppins', sans-serif;
    display: block;

    width: 100%;
}

.card-details h2 {
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0px 15px 0px;
}

.card-details p {
    color: #0D8D67;
    font-size: 8px;
    font-weight: 300;
    margin: 5px 0px 15px 0px;

}

.card-logo {
    width: 24px;
    /* Adjust size as needed */
    height: auto;

}


/* Form field and form field group styling */
.form-field {
    margin-bottom: 5px;
    margin-right: 25px;

}

.form-field-group {
    margin: 0px 35px 10px 5px;

}

.form-field label,
.form-field-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 300;
}

/* Wrapper for form inputs and selects */
.input-wrapper {
    border: 0.8px solid #E0E5F2;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 6px;
    display: flex;
    width: 107%;
    background-color: white;
}

.input-wrapper input[type="text"],
.input-wrapper input[type="number"],
.input-wrapper select {
    width: 107%;
    border: none;
    /* Remove internal borders */
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: #253A48;
    outline: none;
    /* Remove default focus outline */
}

.input-wrapper input[type="text"]::placeholder,
.input-wrapper select option {
    font-size: 10px;
    font-weight: 100;
    color: #9A9AAA;
    width: 120%;
}

/* Form field group specific styles */
.form-field-group {
    display: flex;
    width: 107%;
    justify-content: space-between;
}

.form-field-group .half {
    width: 100%;
}

.form-field-group .half .input-wrapper {
    width: 100%;
}

/* Button styling */
.pay-button {
    width: 27vw;
    padding: 10px;
    background-color: #19624C;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;
    margin-top: 20px;
    display: block;
}

/* Specific styles for state and city selects */
#state::placeholder,
#city::placeholder {
    font-size: 12px;
    font-weight: 100;
    color: #253A48;
}`;

   const cardPaymentSummaryStyles=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;600;700&display=swap');
.summary-container {
    background: #fff;
    padding: 20px;

display: none;
    width: auto;
    text-align: center;
}

.amount-holder {
    display: block;
    flex-direction: column;
    align-items: center;
    font-family:'Inter'; sans-serif;
    border: 0.8px solid #E0E5F2;
    border-radius: 8px;
   margin: 0px 50px 0px 50px;
    padding: 12px;
 
}

.amount-holder h1 {
    font-size: 18px;
    color: #19624C;
     font-family:'Inter'; sans-serif;
    margin: 5px 0px 0px 0px;
}

.amount-holder p {
    font-size: 10px;
    color: #677489;
    margin: 0px;
     font-family:'Inter'; sans-serif;
}

h4 {
    color: #000;
    font-size: 12px;
    font-weight: 500;
     font-family:'Inter'; sans-serif;
}

.summary-details .detail {
    display: flex;
    justify-content: space-between;
    margin: 10px 50px 0px 50px;
     font-family:'Inter'; sans-serif;
}
.summary-details{
    margin-bottom: 20px;
}

.detail.total {
    font-weight: bold;
 font-family:'Inter'; sans-serif;
}

.detail span {
    font-size: 10px;
    color: #000;
    margin: 0px;
     font-family:'Inter'; sans-serif;
}


.detail p {
    font-size: 10px;
    color: #677489;
    margin: 0px;
     font-family:'Inter'; sans-serif;
}
.summary-divider {
    margin: 30px 50px 0px 50px;
    border: 0;
    border-top: 0.5px solid #ddd;
}

.summary-buttons {
    display: flex;
   justify-content: center;
    margin-top: 30px;
    gap: 5px;
    margin-bottom: 30px;
}

.summary-buttons-confirm {
    padding: 5px 10px;
    border: none;
    background-color: #19624C;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    font-size: 8px;
   font-family:'Poppins'; sans-serif;
    padding: 5px 40px 5px 40px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
}

.summary-buttons-go-back {
    color: #19624C;
    font-size: 8px;
    border: none;
    cursor: pointer;
    padding: 5px 40px 5px 40px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    background-color: #CFF1E6;
}`;

   const todo=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.todo{
font-size:0.5rem;
    color: #677489;
font-family:'Poppins'; sans-serif;
}
`;

   const pinStyles=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


.pin-container  {
    background: #fff;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    margin-top: 30px;
    
   
    
}
.pin-container  p{
    color: #000;
    width: 70%;
 font-family:'Inter'; sans-serif;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
}
.pin-inputs input {
    width: 30px;
    height:30px;
    margin: 10px;
    font-size: 24px;
text-align: center;
    border-radius: 5px;
    border: 0.5px solid #4750B2;
}
/* Remove the spinner arrows from the number inputs for Chrome, Safari, Edge, and Opera */
.pin-inputs input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;

}

/* Remove the spinner arrows for Firefox */
.pin-inputs input[type="number"] {
    -moz-appearance: textfield;
    outline: none;
}

.pin-buttons {
    display: flex;
   justify-content: center;
    margin-top: 30px;
    gap: 5px;
    margin-bottom: 30px;
}

.pin-continue {
    padding: 5px 10px;
    border: none;
    background-color: #19624C;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    font-size: 10px;
    padding: 5px 50px 5px 50px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
}

.pin-back {
    color: #19624C;
    font-size: 10px;
    padding: 5px 50px 5px 50px;
    font-weight: 300;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    background-color: #CFF1E6;
}

`;

   function initializeEventListeners() {
       document.querySelectorAll('.dropdown-header').forEach(header => {
           header.addEventListener('click', function () {
               const dropdown = this.parentElement;

               // Close all other dropdowns
               document.querySelectorAll('.dropdown').forEach(d => {
                   if (d !== dropdown) {
                       d.classList.remove('open');
                       d.querySelector('.dropdown-checkbox').checked = false;
                   }
               });

               // Toggle the clicked dropdown
               dropdown.classList.toggle('open');
               dropdown.querySelector('.dropdown-checkbox').checked = dropdown.classList.contains('open');
           });
       });

       const inputs = document.querySelectorAll('.pin-inputs input');

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


       //Cards

       document.addEventListener('DOMContentLoaded', () => {
           const cardNumberInput = document.getElementById('card-number');
           const cardHolderNameInput = document.getElementById('cardholder-name');
           const cvcInput = document.getElementById('cvc');
           const cardLogo = document.getElementById('card-logo');
           const expiryDateInput = document.getElementById('expiry-date');
           const pinContainer = document.getElementById('pin-container');
           const cardDetails = document.getElementById('card-details');
           const summaryContainer = document.getElementById('summary-container');
           const successContainer = document.getElementById('success-container');
           const middleContainer = document.getElementById('middle-section');
           const bottomContainer = document.getElementById('bottom-section');
           const summaryConfirmBtn = document.getElementById('summary-buttons-confirm');
           const summaryBackBtn = document.getElementById('summary-buttons-go-back');
           const pinBackBtn = document.getElementById('pin-back');
           const pinBtnContinue = document.getElementById('pin-continue');
           const closeBtn = document.getElementById('close-payment');
           // Format Expiry Date to MM/YY as user types
           expiryDateInput.addEventListener('input', (e) => {
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

           });
           // Function to update card logo based on card number
           function updateCardLogo() {
               const cardNumber = cardNumberInput.value.replace(/\s+/g, '');
               if (cardNumber.startsWith('47') || cardNumber.startsWith('44') || cardNumber.startsWith('41') || cardNumber.startsWith('40')) {
                   cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/visa.svg'; // Visa
               } else if (cardNumber.startsWith('51') || cardNumber.startsWith('53') || cardNumber.startsWith('55') || cardNumber.startsWith('22')) {
                   cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/mastercard.svg'; // MasterCard
               } else if (cardNumber.startsWith('622126') || cardNumber.startsWith('65') || cardNumber.startsWith('60')) {
                   cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/discover.svg'; // Discover
               } else if (cardNumber.startsWith('37')) {

                   cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/americanExpress.svg'; // Maestro
               } else if (cardNumber.startsWith('623')||cardNumber.startsWith('622127')) {
                   cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/unionpay.svg'; // Maestro
               }else if (cardNumber.startsWith('36')||cardNumber.startsWith('38')) {
                   cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/diners.svg'; // Maestro
               }  else {
                   cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/card.svg'; // Default
               }
           }


           // Add event listener to card number input
           cardNumberInput.addEventListener('input', updateCardLogo);

           // Restrict CVV input to exactly 3 digits
           cvcInput.addEventListener('input', () => {
               if (cvcInput.value.length > 3) {
                   cvcInput.value = cvcInput.value.slice(0, 3);
               }
           });

           // Fetch and populate countries
           fetch('https://restcountries.com/v3.1/all')
               .then(response => response.json())
               .then(data => {
                   console.log('Countries fetched:', data.length);
                   const countrySelect = document.getElementById('country');
                   countrySelect.innerHTML = '<option value="">Select Country</option>';
                   // Sort the countries by their common names in ascending order
                   data.sort((a, b) => a.name.common.localeCompare(b.name.common));

                   data.forEach(country => {
                       const option = document.createElement('option');
                       option.value = country.name.common;
                       option.textContent = country.name.common;
                       countrySelect.appendChild(option);
                   });
               })
               .catch(error => console.error('Error fetching countries:', error));

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
           document.getElementById('state').addEventListener('change', (event) => {
               const countryName = document.getElementById('country').value;
               const stateName = event.target.value;
               console.log('Selected country for city fetch:', countryName);
               console.log('Selected state for city fetch:', stateName);

               if (!stateName) {
                   console.log('No state selected, clearing city dropdown');
                   document.getElementById('city').innerHTML = '<option value="">Select City</option>';
                   return;
               }

               fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({ country: countryName, state: stateName })
               })
                   .then(response => {
                       console.log('City API response status:', response.status);
                       return response.json();
                   })
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

           summaryConfirmBtn.addEventListener('click', (event) => {
               successContainer.style.display = 'flex';
               summaryContainer.style.display = 'none';
               middleContainer.style.display = 'none';
               bottomContainer.style.display = 'none';
           });
   // Add this function to reset the form and revert to the default state
   function resetForm() {
       // Clear input fields
       cardNumberInput.value = '';
       cardHolderNameInput.value = '';
       cvcInput.value = '';
       expiryDateInput.value = '';

       // Reset the card logo
       cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/card.svg'; // Default

       // Uncheck any checkboxes in dropdowns
       document.querySelectorAll('.dropdown-checkbox').forEach(checkbox => {
           checkbox.checked = false;
       });

       // Close all dropdowns
       document.querySelectorAll('.dropdown').forEach(dropdown => {
           dropdown.classList.remove('open');
       });

       // Clear country, state, and city dropdowns
       document.getElementById('country').selectedIndex = 0;
       document.getElementById('state').innerHTML = '<option value="">Select State</option>';
       document.getElementById('city').innerHTML = '<option value="">Select City</option>';
   }

   // Handle the click event for the close button
   closeBtn.addEventListener('click', (event) => {
       // Hide the success container and show the other containers
       successContainer.style.display = 'none';
       cardDetails.style.display = 'block';
       middleContainer.style.display = 'block';
       bottomContainer.style.display = 'block';
       summaryContainer.style.display = 'none';
       // Call the resetForm function to clear values and revert to default state
       resetForm();
   });

           summaryBackBtn.addEventListener('click', (event) => {
               summaryContainer.style.display = 'none';
               cardDetails.style.display = 'block';
           });
           pinBtnContinue.addEventListener('click', (event) => {
               pinContainer.style.display = 'none';
               summaryContainer.style.display = 'block';

           });
           pinBackBtn.addEventListener('click', (event) => {
               pinContainer.style.display = 'none';
               cardDetails.style.display = 'block';
           });
           // Function to get IP address
           function getIpAddress() {
               return fetch('https://api.ipify.org?format=json')
                   .then(response => response.json())
                   .then(data => data.ip)
                   .catch(() => '0.0.0.0'); // Default IP if unable to fetch
           }

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
               const ipAddress = await getIpAddress();

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

                       if (data.transactionStatus === "DECLINED") {
                           alert(`Card declined. Reason: ${data.transactionStatus}`);
                      

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
   }

   // Top Section HTML
   const getTopSection = (amount) => `
  <div class="top-section">
    <div class="top-left">
      <img src="https://ayoseun.github.io/k-pay/assets/logo.svg" alt="Logo Head" class="icon">
      <div class="text-row">
        <div class="logo-text">Orokiipay</div>
      </div>
    </div>
    <div class="top-right">
      <div class="text-column">
        <div class="text-item">Pay</div>
        <div class="top-column-text-amount" id="amount-to-pay">$${amount}</div>
      </div>
    </div>
  </div>
  <hr class="divider">
`;

   // Middle Section HTML
   const getMiddleSection = () => `
  <div class="middle-section" id="middle-section">Choose Payment Method</div>
`;

   // Bottom Section HTML
   const getBottomSection = (amount) => `

  <div class="bottom-section" id="bottom-section">
            <div class="dropdown" id="dropdown-1">
                <div class="dropdown-header">
                    <input type="checkbox" class="dropdown-checkbox">
                    <div class="dropdown-inner">
                        <div class="dropdown-text">Pay with Cards</div>
                        <img src="https://ayoseun.github.io/k-pay/assets/visa.svg" alt="Image 1" class="dropdown-image">
                        <img src="https://ayoseun.github.io/k-pay/assets/mastercard.svg" alt="Image 1" class="dropdown-image">
                        <img src="https://ayoseun.github.io/k-pay/assets/discover.svg" alt="Image 1" class="dropdown-image">
                        <img src="https://ayoseun.github.io/k-pay/assets/maestro.svg" alt="Image 1" class="dropdown-image">
                        <img src="https://ayoseun.github.io/k-pay/assets/americanExpress.svg" alt="Image 1" class="dropdown-image">
                    </div>


                    <img src="https://ayoseun.github.io/k-pay/assets/chev.svg" alt="Image 1" class="dropdown-chevron">
                </div>
                <div class="dropdown-content">


                    <div class="card-details" id="card-details">
                        <h2>Card Details</h2>
                        <div class="form-field">
                            <label for="cardholder-name">Cardholder's name</label>
                            <div class="input-wrapper">
                                <input type="text" id="cardholder-name" placeholder="As seen on your card">
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="card-number">Enter Card Number</label>
                            <div class="input-wrapper">
                                <input type="text" id="card-number" placeholder="5078 0000 0000 0000" maxlength="19"
                                    required>
                                <img src="https://ayoseun.github.io/k-pay/assets/card.svg" alt="Card Logo" class="card-logo" id="card-logo">
                            </div>
                        </div>
                        <div class="form-field-group">
                            <div class="form-field half">
                                <label for="expiry-date">Expiry Date</label>
                                <div class="input-wrapper">
                                    <input type="text" id="expiry-date" placeholder="MM/YY"
                                        pattern="^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$" required>
                                </div>
                            </div>
                            <div class="form-field half">
                                <label for="cvc">CVC</label>
                                <div class="input-wrapper">
                                    <input type="number" id="cvc" placeholder="712" maxlength="3" required>
                                </div>
                            </div>
                        </div>

                        <h2>Billing Address</h2>
                        <p>We only require this information once for this card</p>
                        <div class="form-field">
                            <label for="country">Country</label>
                            <div class="input-wrapper">
                                <select id="country">
                                    <!-- Options will be populated dynamically -->
                                </select>
                            </div>
                        </div>
                        <div class="form-field-group">
                            <div class="form-field half">
                                <label for="state">State</label>
                                <div class="input-wrapper">
                                    <select id="state">
                                        <!-- Options will be populated dynamically -->
                                    </select>
                                </div>
                            </div>
                            <div class="form-field half">
                                <label for="city">City</label>
                                <div class="input-wrapper">
                                    <select id="city">

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="address1">Address 1</label>
                            <div class="input-wrapper">
                                <input type="text" id="address1" placeholder="Input address">
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="address2">Address 2 (optional)</label>
                            <div class="input-wrapper">
                                <input type="text" id="address2" placeholder="Input address (optional)">
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="zip">Zip Code</label>
                            <div class="input-wrapper">
                                <input type="number" id="zip" placeholder="Enter code here">
                            </div>
                        </div>
                        <button class="pay-button" onclick="submitForm(amount)">Pay $${amount}</button>
                    </div>

                    <div class="pin-container" id="pin-container">
                        <p>Please enter your 4-digit card pin to authorize this payment</p>
                        <div class="pin-inputs">
                            <input  maxlength="1" pattern="[0-9]*" inputmode="numeric">
                            <input  maxlength="1" pattern="[0-9]*" inputmode="numeric">
                            <input  maxlength="1" pattern="[0-9]*" inputmode="numeric">
                            <input  maxlength="1" pattern="[0-9]*" inputmode="numeric">
                        </div>
                        <div class="pin-buttons">
                            <button class="pin-back" id="pin-back">Go Back</button>
                            <button class="pin-continue" id="pin-continue">Continue</button>
                        </div>
                    </div>
                    <div class="summary-container" id="summary-container">
                        <img src="https://ayoseun.github.io/k-pay/assets/checkout.svg" alt="Image 1" style="width: 48px;height: 48px;">
                        <h4>Payment Summary</h4>
                        <div class="amount-holder">
                            <p>Amount</p>
                            <h1>$${amount}</h1>
                        </div>
                        <div class="summary-details">

                            <div class="detail">
                                <p>Subtotal</p><span>$4105.00</span>
                            </div>
                            <div class="detail">
                                <p>Shipping Cost</p><span>$408.00</span>
                            </div>
                            <div class="detail">
                                <p>Discount (10%)</p><span>-$13.00</span>
                            </div>
                            <hr class="summary-divider">
                            <div class="detail total"><span>Total</span><span>$${amount}</span></div>
                        </div>
                        <div class="summary-buttons">
                            <button class="summary-buttons-go-back" id="summary-buttons-go-back">Go Back</button>
                            <button class="summary-buttons-confirm" id="summary-buttons-confirm">Confirm
                                Payment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown" id="dropdown-2">
                <div class="dropdown-header">
                    <input type="checkbox" class="dropdown-checkbox">
                    <div class="dropdown-inner">
                        <div class="dropdown-text">Pay with Crypto</div>
                        <img src="https://ayoseun.github.io/k-pay/assets/bitcoin.svg" alt="Image 1" class="dropdown-image-crypto">
                        <img src="https://ayoseun.github.io/k-pay/assets/ethereum.svg" alt="Image 1" class="dropdown-image-crypto">
                        <img src="https://ayoseun.github.io/k-pay/assets/usdc.svg" alt="Image 1" class="dropdown-image-crypto">
                        <img src="https://ayoseun.github.io/k-pay/assets/usdt.svg" alt="Image 1" class="dropdown-image-crypto">
                        <img src="https://ayoseun.github.io/k-pay/assets/sol.svg" alt="Image 1" class="dropdown-image-crypto">
                    </div>


                    <img src="https://ayoseun.github.io/k-pay/assets/chev.svg" alt="Image 1" class="dropdown-chevron">
                </div>
                 <div class="dropdown-content"><p class="todo">In progress</p></div>
            </div>
            <div class="dropdown" id="dropdown-3">
                <div class="dropdown-header">
                    <input type="checkbox" class="dropdown-checkbox">

                    <div class="dropdown-text">Pay with Bank Account</div>
                    <img src="https://ayoseun.github.io/k-pay/assets/chev.svg" alt="Image 1" class="dropdown-chevron">
                </div>
                <div class="dropdown-content"><p class="todo">In progress</p></div>
            </div>
            <div class="dropdown" id="dropdown-4">
                <div class="dropdown-header">
                    <input type="checkbox" class="dropdown-checkbox">
                    <div class="dropdown-inner">
                        <div class="dropdown-text">Pay with</div>
                        <img src="https://ayoseun.github.io/k-pay/assets/applePay.svg" alt="Image 1" class="dropdown-image-others">
                        <img src="https://ayoseun.github.io/k-pay/assets/googlePay.svg" alt="Image 1" class="dropdown-image-others">
                        <img src="https://ayoseun.github.io/k-pay/assets/paypal.svg" alt="Image 1" class="dropdown-image-others">

                    </div>


                    <img src="https://ayoseun.github.io/k-pay/assets/chev.svg" alt="Image 1" class="dropdown-chevron">
                </div>
                <div class="dropdown-content"><p class="todo">In progress</p></div>
            </div>
        </div>


`;

   // Success Section HTML
   const getSuccessSection = (amount) => `
  <div class="success-container" id="success-container">
    <h1>Payment Completed</h1>
    <p>The payment of $${amount} has been received successfully</p>
    <img src="https://ayoseun.github.io/k-pay/assets/success.svg" alt="Icon">
    <button id="close-payment">Go back to platform</button>
  </div>
`;

   // Main Widget Creation Function
   function createWidget(amount) {
       const widget = document.createElement('div');
       widget.classList.add('widget-container', 'card');

       

       // Create and append styles
       const styles = [
           homeStyles,
           successStyles,
           cardFormStyles,
           cardPaymentSummaryStyles,
           pinStyles,
           todo
       ];

       styles.forEach((styleContent, index) => {
           const style = document.createElement('style');
           style.appendChild(document.createTextNode(styleContent));
           document.head.appendChild(style);
       });
       if (amount==null) {
           amount="0.0";
       }
       // Append each section to the widget container
       widget.innerHTML = `
    ${getTopSection(amount)}
    ${getMiddleSection()}
    ${getBottomSection(amount)}
    ${getSuccessSection(amount)}
  `;

       // Add event listeners or other interactions here

       // Append the widget to the body (or any other target container)
       document.body.appendChild(widget);
       initializeEventListeners();
       return widget
   }

   exports.createWidget = createWidget;

   Object.defineProperty(exports, '__esModule', { value: true });

   return exports;

})({});
