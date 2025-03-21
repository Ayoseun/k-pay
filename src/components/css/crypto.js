export const cryptoStyles=`
.orokii-crypto-container {
    background-color: white;
    font-family: 'Poppins', sans-serif;
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 20px;
}


.orokii-crypto-container h2 {
    font-size: 16px;

    font-weight: 400;
    margin: 10px 0px 15px 0px;
}

/* Form field and form field group styling */
.orokii-crypto-form-field{
    margin-bottom: 5px;
    margin-right: 25px;
    margin-left: 10px;
  
}

.orokii-crypto-form-field-group {
    margin: 0px 3px 10px 5px;

}

.orokii-crypto-form-field label,
.orokii-crypto-form-field-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    text-align: start;
    font-weight: 300;
}

/* Wrapper for form inputs and selects */
.orokii-crypto-input-wrapper {
    border: 0.8px solid #E0E5F2;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 6px;
    display: flex;
    width: 107%;
    background-color: white;
}

.orokii-crypto-input-wrapper input[type="text"],
.orokii-crypto-input-wrapper input[type="number"],
.orokii-crypto-input-wrapper select {
    width: 107%;
    border: none; /* Remove internal borders */
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: #253A48;
    outline: none; /* Remove default focus outline */
}

.orokii-crypto-input-wrapper input[type="text"]::placeholder,
.orokii-crypto-input-wrapper select option {
    font-size: 8px;
    font-weight: 100;
    color: #9A9AAA;
    width: 120%;
}

.orokii-select-option{
    font-size: 8px;
    font-weight: 100;
    color: #9A9AAA;
}

.orokii-exchange-rate {
    display: flex;
    width: 100%;
    flex-direction: row;
    background-color: #F1F4EF;
    margin-right: 0px;
    margin-left: 10px;
    box-sizing: content-box;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 5px;
    gap: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.orokii-exchange-rate p{
  color:  #9B9B9B;
  font-size: 12px;
  margin-left: 15px;
  text-align: center;
  font-weight: 500;
}
.orokii-exchange-rate span{
    color:  #000;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
  }
.orokii-payments-details {
    width: 100%;
  margin-left: 10px;
   margin-right: 10px;
    display: inline-flex;
    flex-direction:row;
    justify-content: space-between;
    box-sizing: content-box;
    align-items: center;

    color: #888;
}
.orokii-payments-details p {
  font-weight: 300;
  font-size: 12px;
    color: #888;
}
.orokii-payments-details span {
    font-weight: 300;
    font-size: 12px;
    color: #79747E;
}


.orokii-qr-code {
    text-align: center;
    margin: 20px 0;
}
.orokii-qr-code img {
    width: 200px;
    height: 200px;
}
.orokii-address {
    word-break: break-all;
    margin-bottom: 20px;
}
.orokii-warning {
    font-size: 14px;
    color: #555;
}
.orokii-timer {
    font-weight: bold;
}

.orokii-crypto-divider {
    margin-left: 5px;
    border: 0;
    width: 100%;
    border-top: 0.5px solid #ddd;
}
/* Loader styling */
#orokii-crypto-loader {
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
.orokii-pay-button .loading #orokii-crypto-loader {
    display: inline-block;
}
@media screen and (max-width: 844px) {

    .orokii-crypto-container {
        background-color: white;
        font-family: 'Poppins', sans-serif;
        display: block;
        text-align: center;
        width: 100%;
        margin-top: 20px;
    }
    
    
    .orokii-crypto-container h2 {
        font-size: 0.5rem;
    
        font-weight: 400;
        margin: 8px 0px 10px 0px;
    }
    
    /* Form field and form field group styling */
    .orokii-crypto-form-field{
        margin-bottom: 5px;
        margin-right: 25px;
        margin-left: 10px;
      
    }
    
    .orokii-crypto-form-field-group {
        margin: 0px 3px 10px 5px;
    
    }
    
    .orokii-crypto-form-field label,
    .orokii-crypto-form-field-group label {
        display: block;
        margin-bottom: 5px;
        font-size: 0.4rem;
        text-align: start;
        font-weight: 300;
    }
    
    /* Wrapper for form inputs and selects */
    .orokii-crypto-input-wrapper {
        border: 0.8px solid #E0E5F2;
        border-radius: 8px;
        margin-bottom: 10px;
        padding: 6px;
        display: flex;
        width: 107%;
        background-color: white;
    }
    
    .orokii-crypto-input-wrapper input[type="text"],
    .orokii-crypto-input-wrapper input[type="number"],
    .orokii-crypto-input-wrapper select {
        width: 107%;
        border: none; /* Remove internal borders */
        font-family: 'Poppins', sans-serif;
        font-size: 0.4rem;
        font-weight: 100;
        color: #253A48;
        outline: none; /* Remove default focus outline */
    }
    
    .orokii-crypto-input-wrapper input[type="text"]::placeholder,
    .orokii-crypto-input-wrapper select option {
        font-size: 0.4rem;
        font-weight: 100;
        color: #9A9AAA;
        width: 120%;
    }
    
    .orokii-select-option{
        font-size: 0.4rem;
        font-weight: 100;
        color: #9A9AAA;
    }
    
    .orokii-exchange-rate {
        display: flex;
        width: 100%;
        flex-direction: row;
        background-color: #F1F4EF;
        margin-right: 0px;
        margin-left: 10px;
        box-sizing: content-box;
        align-items: center;
        margin-bottom: 20px;
        border-radius: 5px;
        gap: 8px;
        padding-top: 3px;
        padding-bottom: 3px;
    }
    .orokii-exchange-rate p{
      color:  #9B9B9B;
      font-size: 0.4rem;
      margin-left: 15px;
      text-align: center;
      font-weight: 500;
    }
    .orokii-exchange-rate span{
        color:  #000;
        text-align: center;
        font-size: 0.4rem;;
        font-weight: 500;
      }
    .orokii-payments-details {
        width: 100%;
      margin-left: 10px;
       margin-right: 10px;
        display: inline-flex;
        flex-direction:row;
        justify-content: space-between;
        box-sizing: content-box;
        align-items: center;
    
        color: #888;
    }
    .orokii-payments-details p {
      font-weight: 300;
      font-size: 0.4rem;
        color: #888;
    }
    .orokii-payments-details span {
        font-weight: 300;
        font-size: 0.4rem;
        color: #79747E;
    }
    
    
    .orokii-qr-code {
        text-align: center;
        margin: 20px 0;
    }
    .orokii-qr-code img {
        width: 200px;
        height: 200px;
    }
    .orokii-address {
        word-break: break-all;
        margin-bottom: 20px;
    }
    .orokii-warning {
        font-size: 0.4rem;
        color: #555;
    }
    .orokii-timer {
        font-weight: bold;
    }
    
    .orokii-crypto-divider {
        margin-left: 5px;
        border: 0;
        width: 100%;
        border-top: 0.5px solid #ddd;
    }
    /* Loader styling */
#orokii-crypto-loader {
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
.orokii-pay-button .loading #orokii-crypto-loader {
    display: inline-block;
}
}



`