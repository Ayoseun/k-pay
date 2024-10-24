export const cryptoStyles=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.crypto-container {
    background-color: white;
    font-family: 'Poppins', sans-serif;
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 20px;
}


.crypto-container h2 {
    font-size: 16px;

    font-weight: 400;
    margin: 10px 0px 15px 0px;
}

/* Form field and form field group styling */
.crypto-form-field{
    margin-bottom: 5px;
    margin-right: 25px;
    margin-left: 10px;
  
}

.crypto-form-field-group {
    margin: 0px 3px 10px 5px;

}

.crypto-form-field label,
.crypto-form-field-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    text-align: start;
    font-weight: 300;
}

/* Wrapper for form inputs and selects */
.crypto-input-wrapper {
    border: 0.8px solid #E0E5F2;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 6px;
    display: flex;
    width: 107%;
    background-color: white;
}

.crypto-input-wrapper input[type="text"],
.crypto-input-wrapper input[type="number"],
.crypto-input-wrapper select {
    width: 107%;
    border: none; /* Remove internal borders */
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: #253A48;
    outline: none; /* Remove default focus outline */
}

.crypto-input-wrapper input[type="text"]::placeholder,
.crypto-input-wrapper select option {
    font-size: 8px;
    font-weight: 100;
    color: #9A9AAA;
    width: 120%;
}

.select-option{
    font-size: 8px;
    font-weight: 100;
    color: #9A9AAA;
}

.exchange-rate {
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
.exchange-rate p{
  color:  #9B9B9B;
  font-size: 12px;
  margin-left: 15px;
  text-align: center;
  font-weight: 500;
}
.exchange-rate span{
    color:  #000;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
  }
.payment-details {
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
.payment-details p {
  font-weight: 300;
  font-size: 12px;
    color: #888;
}
.payment-details span {
    font-weight: 300;
    font-size: 12px;
    color: #79747E;
}


.qr-code {
    text-align: center;
    margin: 20px 0;
}
.qr-code img {
    width: 200px;
    height: 200px;
}
.address {
    word-break: break-all;
    margin-bottom: 20px;
}
.warning {
    font-size: 14px;
    color: #555;
}
.timer {
    font-weight: bold;
}

.crypto-divider {
    margin-left: 5px;
    border: 0;
    width: 100%;
    border-top: 0.5px solid #ddd;
}
`