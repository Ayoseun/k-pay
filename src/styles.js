// Inline CSS styles
export const homeStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.card {
    width: 100%;
    max-width: 65%;
    background-color: white;
    border-radius: 2%;
    box-shadow: 0 4px 8px rgba(40, 41, 41, 0.1);
    height: auto; 
    box-sizing: border-box;
    padding-bottom: 3%;
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
    font-size: 0.7rem;
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

.text-row {
    display: flex;
    flex-direction: column;
}

.text-item {
    font-size: 12px;
    color: #000;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
}

.top-column-text-amount {
    font-size: 20px;
    color: #16A34A;
    font-family: 'Inter', sans-serif;
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
    margin: 10px 70px 0px 70px;
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

@media screen and (max-width: 436px) {

    .icon {
        width: 12px;
        height: 12px;
        margin-right: 10px;
    }
    
    .logo-text {
        font-size: 0.5rem;
        color: #000;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .text-item {
        font-size: 0.4rem;
        color: #000;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
    }

    .top-column-text-amount {
        font-size: 0.6rem;
        color: #16A34A;
        font-family: 'Inter', sans-serif;
        margin: 10px 0px 0px 20px;
        font-weight: 500;
    }
    .middle-section {
        display: block;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 0.5rem;
        margin: 20px 0px 20px 0px;
    }
    .bottom-section {
        display: block;
        margin: 10px 20px 0px 20px;
    }

    .dropdown-header {
        display: flex;
        border: 0.5px solid #D0D5DD;
        border-radius: 5px;
        height: 1.95vh;
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
        width: 8px;
        height: 8px;
        background-color: #FFFFFF;
        cursor: pointer;
        position: relative; /* Add this for positioning the checkmark */
    }
    .dropdown-text {
        flex: 1;
        margin-right: 15px;
        font-family: 'Poppins', sans-serif;
        font-size: 0.2rem;
    }

    .dropdown-image {
        width: 10px;
        height: 10px;
        margin-right: 10px;
    }
    
    .dropdown-image-crypto {
        width: 10px;
        height: 10px;
        margin-right: 10px;
    }
    
    .dropdown-image-others {
        width: 15px;
        height: 15px;
        
    }
}
`
export const successStyles = `
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
    font-family: 'Inter', sans-serif;
    font-weight: 400;
}

.success-container p {
    color: #79747E;
    font-family: 'Inter', sans-serif;
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
    font-family: 'Inter', sans-serif;
    border-radius: 5px;
    font-size: 10px;
    cursor: pointer;
    padding-left: 15px;
    margin-bottom: 20px;
    padding-right: 15px;

}
@media screen and (max-width:436px) {
    .success-container {
        display: none;
        flex-direction: column;
        align-items: center;
        font-family: 'Inter', sans-serif;
        font-size: 0.4rem;
        margin: 20px 0px 20px 0px;
    }
    .success-container h1 {
        color: #000;
        font-family: 'Inter', sans-serif;
        font-size: 0.5rem;
        font-weight: 400;
    }
    
    .success-container p {
        color: #79747E;
        font-family: 'Inter', sans-serif;
        font-size: 0.35rem;
    }
    
    .success-container img {
        margin-bottom: 10px;
        width: 30px;
        height: 30px;
    }

    .success-container button {
        width: 60%;
        padding: 8px;
        background-color: #19624C;
        color: white;
        border: none;
        font-family: 'Inter', sans-serif;
        border-radius: 3px;
        font-size: 0.5rem;
        cursor: pointer;
        padding-left: 15px;
        margin-bottom: 20px;
        padding-right: 15px;
    
    }
}
`

export const cardFormStyles = `
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
    width: 50px;
    /* Adjust size as needed */
    height: auto;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
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



/* Specific styles for state and city selects */
#state::placeholder,
#city::placeholder {
    font-size: 12px;
    font-weight: 100;
    color: #253A48;
}


.pay-button {
    width: 100%;
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
    justify-content: center;
    /* Centers content horizontally */
    align-items: center;
    /* Centers content vertically */
    position: relative;
}

/* Text styling */
#button-text {
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    margin-right: 10px;
    /* Adds space between text and loader */
}

/* Loader styling */
#loader {
    border: 1px solid #f3f3f3;
    /* Light grey */
    border-top: 1px solid #000000;
    /* Black */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    display: none;
    /* Initially hidden */
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

@media screen and (max-width: 436px) {
    .card-details h2 {
        font-size: 0.5rem;
        font-weight: 500;
        margin: 10px 0px 15px 0px;
    }

    .card-details p {
        color: #0D8D67;
        font-size: 0.3rem;
        font-weight: 300;
        margin: 5px 0px 15px 0px;

    }

    .card-logo {
        width: 20px;
        /* Adjust size as needed */
        height: auto;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    .form-field label,
    .form-field-group label {
        display: block;
        margin-bottom: 5px;
        font-size: 0.4rem;
        font-weight: 300;
    }

    /* Wrapper for form inputs and selects */
    .input-wrapper {
        border: 0.8px solid #E0E5F2;
        border-radius: 4px;
        margin-bottom: 10px;
        padding: 4px;
        display: flex;
        height: 2vh;
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
        font-size: 0.6rem;
        font-weight: 100;
        color: #253A48;
        outline: none;
        /* Remove default focus outline */
    }
    .input-wrapper input[type="text"]::placeholder,
    .input-wrapper select option {
        font-size: 0.4rem;
        font-weight: 100;
        color: #9A9AAA;
        width: 120%;
    }


    /* Specific styles for state and city selects */
    #state::placeholder,
    #city::placeholder {
        font-size: 0.4rem;
        font-weight: 100;
        color: #253A48;
    }


    /* Button styling */
    .pay-button {
        width: 100%;
        padding: 8px;
        background-color: #19624C;
        color: white;
        border: none;
        border-radius: 3px;
        font-size: 0.2rem;
        cursor: pointer;
        margin-bottom: 20px;
        margin-top: 20px;
        display: flex;

        justify-content: center;
        /* Centers content horizontally */
        align-items: center;
        /* Centers content vertically */
        position: relative;
    }

    /* Text styling */
    #button-text {
        font-size: 0.6rem;
        font-family: 'Poppins', sans-serif;
        margin-right: 10px;
        /* Adds space between text and loader */
    }

    #loader {
        border: 1px solid #f3f3f3;
        /* Light grey */
        border-top: 1px solid #000000;
        /* Black */
        border-radius: 50%;
        width: 12px;
        height: 12px;
        animation: spin 1s linear infinite;
        display: none;
        /* Initially hidden */
    }

}`;

export const cardPaymentSummaryStyles = `
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
    border: 0.8px solid #E0E5F2;
    border-radius: 8px;
    margin: 0px 50px 0px 50px;
    padding: 12px;

}

.amount-holder h1 {
    font-size: 18px;
    color: #19624C;
    font-family: 'Poppins', sans-serif;
    margin: 5px 0px 0px 0px;
}

.amount-holder p {
    font-size: 10px;
    color: #677489;
    margin: 0px;
    font-family: 'Poppins', sans-serif;
}

h4 {
    color: #000;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

.summary-details .detail {
    display: flex;
    justify-content: space-between;
    margin: 10px 50px 0px 50px;
}

.summary-details {
    margin-bottom: 20px;
}

.detail.total {
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
}

.detail span {
    font-size: 10px;
    color: #000;
    font-family: 'Poppins', sans-serif;
    margin: 0px;
}


.detail p {
    font-size: 10px;
    color: #677489;
    margin: 0px;
    font-family: 'Poppins', sans-serif;
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
}

@media screen and (max-width:540px) {
    .summary-container {
        background: #fff;
        padding: 10px;
        display: none;
        width: auto;
        text-align: center;
    }

    .amount-holder {
        display: block;
        font-family: 'Poppins', sans-serif;
        flex-direction: column;
        align-items: center;
        border: 0.8px solid #E0E5F2;
        border-radius: 8px;
        margin: 0px 20px 0px 20px;
        padding: 8px;

    }

    .amount-holder h1 {
        font-size: 0.8rem;
        font-family: 'Poppins', sans-serif;
        color: #19624C;
        margin: 5px 0px 0px 0px;
    }

    .amount-holder p {
        font-size: 0.5rem;
        font-family: 'Poppins', sans-serif;
        color: #677489;
        margin: 0px;
    }

    h4 {
        color: #000;
        font-size: 0.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    .summary-details .detail {
        display: flex;
        justify-content: space-between;
        margin: 10px 10px 0px 10px;
    }

    .summary-details {
        margin-bottom: 20px;
    }

    .detail.total {
        font-weight: bold;

        font-family: 'Poppins', sans-serif;

    }

    .detail span {
        font-size: 0.5rem;
        color: #000;
        font-family: 'Poppins', sans-serif;
        margin: 0px;
    }


    .detail p {
        font-size: 0.5rem;
        color: #677489;
        font-family: 'Poppins', sans-serif;
        margin: 0px;
    }

    .summary-divider {
        margin: 30px 10px 0px 10px;
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
        border-radius: 1px;
        font-size: 0.45rem;
        padding: 5px 10px 5px 10px;
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
    }

    .summary-buttons-go-back {
        color: #19624C;
        font-size: 0.45rem;
        border: none;
        cursor: pointer;
        padding: 2px 25px 2px 25px;
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
        background-color: #CFF1E6;
    }
}
    `

export const todo = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.todo{
font-size:0.5rem;
    color: #677489;
font-family:'Poppins'; sans-serif;
}
`

export const pinStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
.pin-container {
    background: #fff;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    margin-top: 30px;



}

.pin-container p {
    color: #000;
    width: 70%;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
}

.pin-inputs input {
    width: 30px;
    height: 30px;
    margin: 10px;
    font-size: 24px;
    font-family: 'Inter', sans-serif;
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

@media screen and (max-width: 436px) {
    .pin-container {
        background: #fff;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 8px;
        margin-top: 30px;
    
    
    
    }
    .pin-container  p{
        color: #000;
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-size: 0.5rem;
        text-align: center;
        font-weight: 400;
    }
    .pin-inputs input {
        width: 13%;
        height:3vh;
        margin: 5px;
        font-size: 0.5rem;
        font-family: 'Inter', sans-serif;
    text-align: center;
        border-radius: 2px;
        border: 0.5px solid #4750B2;
    }
    .pin-buttons {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        gap: 7px;
        margin-bottom: 30px;
    }

    .pin-continue {
        padding: 5px 10px;
        border: none;
        background-color: #19624C;
        color: white;
        cursor: pointer;
        border-radius: 2px;
        font-size: 0.45rem;
        padding: 5px 20px 5px 20px;
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
    }

    .pin-back {
        color: #19624C;
        font-size: 0.45rem;
        padding: 5px 20px 5px 20px;
        font-weight: 300;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        background-color: #CFF1E6;
    }
}`