// Inline CSS styles
export const homeStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');



.card {
width: 37%;
background-color: white;
border-radius: 2%;
max-width: 65%;
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

`
export const successStyles=`
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

}`

export const cardFormStyles=`
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
    display: flex;
    justify-content: center; /* Centers content horizontally */
    align-items: center; /* Centers content vertically */
    position: relative;
}

/* Text styling */
#button-text {
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    margin-right: 10px; /* Adds space between text and loader */
}

/* Loader styling */
#loader {
    border: 1px solid #f3f3f3; /* Light grey */
    border-top: 1px solid #000000; /* Black */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    display: none; /* Initially hidden */
}

/* Show loader */
.pay-button.loading #loader {
    display: inline-block;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Specific styles for state and city selects */
#state::placeholder,
#city::placeholder {
    font-size: 12px;
    font-weight: 100;
    color: #253A48;
}`;

export const cardPaymentSummaryStyles=`
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
}`

export const todo=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.todo{
font-size:0.5rem;
    color: #677489;
font-family:'Poppins'; sans-serif;
}
`

export const pinStyles=`
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

`