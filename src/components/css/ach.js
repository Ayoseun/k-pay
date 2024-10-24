const ach =`


.banking-form-field{
    width: 92%;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 0px;
  
}
.banking-form-field label,
.banking-form-field-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    text-align: start;
    font-weight: 300;
}

/* Wrapper for form inputs and selects */
.banking-input-wrapper {
    border: 0.8px solid #E0E5F2;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 6px;
    display: flex;
    width: 107%;
    background-color: white;
}

.banking-input-wrapper input[type="text"],
.banking-input-wrapper input[type="number"],
.banking-input-wrapper select {
    width: 107%;
    border: none; /* Remove internal borders */
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: #253A48;
    outline: none; /* Remove default focus outline */
}

.banking-input-wrapper input[type="text"]::placeholder,
.banking-input-wrapper select option {
    font-size: 8px;
    font-weight: 100;
    color: #9A9AAA;
    width: 120%;
}
#ach-loader {
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
`