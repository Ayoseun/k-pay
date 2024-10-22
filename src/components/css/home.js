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
.holder {
 display: flex;
    width: 75%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

.payments {

    margin-bottom: 2px;
    overflow: hidden;
}

.payments-header {
    display: flex;
    border: 0.5px solid #D0D5DD;
    border-radius: 5px;
    align-items: center;
    padding: 10px;
    cursor: pointer;
}

input[type="radio"] {
    width: 4%;
    border: #16A34A;
    border-width: 0.1%;
    accent-color: #16A34A;
}

.payments-inner {
    display: flex;
    align-items: center;
}

.payments-image {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.payments-image-crypto {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

.payments-image-others {
    width: 38px;
    height: 38px;

}

.payments-text {
    flex: 1;
    margin-right: 15px;
    font-family: 'Poppins', sans-serif;
    font-size: x-small;
}




.payments-content {
    display: none;
    width: 100%;
    box-sizing: border-box;
    max-height: 350px;
    overflow-y: auto;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.payments-content::-webkit-scrollbar {
    display: none;
}

/* Optional: Custom scrollbar styling */
.payments-content {
    /* Ensure the content has some padding on the right to avoid overlap */
    padding-right: 20px;
}

/* Create a custom scrollbar effect */
.payments-content::after {
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
.payments-content::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 30%;
    /* Adjust based on content */
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.2s;
}

.payments-content:hover::before {
    opacity: 1;
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

    .payment-header {
        display: flex;
        border: 0.5px solid #D0D5DD;
        border-radius: 5px;
        height: 1.95vh;
        align-items: center;
        padding: 10px;
        cursor: pointer;
    }

    .payment-checkbox {
        appearance: none;
        -webkit-appearance: none;
        margin-right: 10px;
        border: 0.5px solid #D0D5DD;
        border-radius: 2px;
        width: 8px;
        height: 8px;
        background-color: #FFFFFF;
        cursor: pointer;
        position: relative;
        /* Add this for positioning the checkmark */
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







.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
    margin: 0 auto;
}
.clickable-div {
    background-color: #f0f0f0;
    padding: 10px;
    cursor: pointer;
}
.content {
    background-color: #e0e0e0;
    padding: 10px;
    margin-top: 10px;
    display: none;
}`