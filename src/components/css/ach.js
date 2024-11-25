export const achStyles =`


@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


.orokii-banking-form-field{
    width: 92%;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 0px;
  
}
.orokii-banking-form-field label,
.orokii-banking-form-field-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    text-align: start;
    font-weight: 300;
}

/* Wrapper for form inputs and selects */
.orokii-banking-input-wrapper {
    border: 0.8px solid #E0E5F2;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 6px;
    display: flex;
    width: 107%;
    background-color: white;
}

.orokii-banking-input-wrapper input[type="text"],
.orokii-banking-input-wrapper input[type="number"],
.orokii-banking-input-wrapper select {
    width: 107%;
    border: none; /* Remove internal borders */
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: #253A48;
    outline: none; /* Remove default focus outline */
}

.orokii-banking-input-wrapper input[type="text"]::placeholder,
.orokii-banking-input-wrapper select option {
    font-size: 8px;
    font-weight: 100;
    color: #9A9AAA;
    width: 120%;
}
#orokii-ach-loader {
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