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
    width: 24px;
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
    width: 104%;
    background-color: white;
}

.input-wrapper input[type="text"],
.input-wrapper input[type="number"],
.input-wrapper input[type="email"],
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
.input-wrapper img {
width: 24px;
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
    width: 90%;
}



/* Specific styles for state and city selects */
#state::placeholder,
#city::placeholder {
    font-size: 12px;
    font-weight: 100;
    color: #253A48;
}


/* Button styling */
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
        height: auto;

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

}
`;