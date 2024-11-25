// Inline CSS styles
export const widgetStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.orokii-home {
 display: flex;
    width: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.orokii-card {
    width: 70%;
    max-width: auto;
    background-color: white;
    border-radius: 2%;
    box-shadow: 0 4px 8px rgba(40, 41, 41, 0.1);
    height: auto;
    box-sizing: border-box;
    padding-bottom: 3%;
}

.orokii-top-section {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    margin: 0px 0px 0px 0px;
    padding: 20px 16px 5px 16px;
}

.orokii-top-left {
    display: flex;
    margin: 0px 0px 0px 0px;
    align-items: center;
}

.orokii-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.orokii-logo-text {
    font-size: 0.7rem;
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

.orokii-text-row {
    display: flex;
    flex-direction: column;
}

.orokii-text-item {
    font-size: 12px;
    color: #000;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
}

.orokii-top-column-text-amount {
    font-size: 20px;
    color: #16A34A;
    font-family: 'Inter', sans-serif;
    margin: 10px 0px 0px 20px;
    font-weight: 500;
}

.orokii-top-right {
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

.orokii-subtitle {
    margin-top: 5px;
}

.orokii-divider {
    margin: 0px;
    border: 0;
    border-top: 0.5px solid #ddd;
}

.orokii-middle-section {
    display: block;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    margin: 20px 0px 20px 0px;
}

.orokii-bottom-section {
    display: block;
    margin: 10px 70px 0px 70px;
}

.orokii-payments {

    margin-bottom: 2px;
    overflow: hidden;
}

.orokii-payments-header {
    display: flex;
    border: 0.5px solid #D0D5DD;
    border-radius: 5px;
    align-items: center;
    padding: 10px;
    cursor: pointer;
}

.orokii-payments-checkbox {
    appearance: none;
    -webkit-appearance: none;
    margin-right: 10px;
    border: 0.5px solid #D0D5DD;
    border-radius: 2px;
    width: 12px;
    height: 12px;
    background-color: #FFFFFF;
    cursor: pointer;
    position: relative;
    /* Add this for positioning the checkmark */
}


.orokii-payments-checkbox:checked {
    border: 1.1px solid #6cf1ce;
  


}

/* To add a checkmark when checked */
.orokii-payments-checkbox:checked:after {
    content: '✔';
    /* Unicode character for a checkmark */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #19624C;
   
    font-size: 10px;
    /* Adjust size as needed */
    line-height: 1;
}

.orokii-payments-inner {
    display: flex;
    align-items: center;
}

.orokii-payments-image {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.orokii-payments-image-crypto {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

.orokii-payments-image-others {
    width: 38px;
    height: 38px;

}

.orokii-payments-text {
    flex: 1;
    margin-right: 15px;
    font-family: 'Poppins', sans-serif;
    font-size: x-small;
}

.orokii-payments-chevron {
    width: 8px;
    height: 8px;
}

.orokii-payments-chevron {
    margin-left: auto;
    font-size: 16px;
}

.orokii-payments-content {
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
.orokii-payments-content::-webkit-scrollbar {
    display: none;
}

/* Optional: Custom scrollbar styling */
.orokii-payments-content {
    /* Ensure the content has some padding on the right to avoid overlap */
    padding-right: 20px;
}

/* Create a custom scrollbar effect */
.orokii-payments-content::after {
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
.orokii-payments-content::before {
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

.orokii-payments-content:hover::before {
    opacity: 1;
}

.orokii-payments.open .orokii-payments-content {
    display: block;
}

.orokii-payments-image {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.orokii-payments-image-crypto {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

/* Modal container */
.orokii-modal {
    display: none; /* Hidden by default */
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
    z-index: 1000;
    overflow: hidden; /* Prevent scrollbars on the modal container */
  }

  /* Modal content */
  .orokii-modal-content {
    background: white;
    width: 50%;
    height: 95%;
    max-height: 90%; /* Ensure it doesn't exceed the viewport */
    border-radius: 10px;

    position:relative;
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Close button */
  .orokii-iframe-close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff5c5c;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .orokii-iframe-close-btn:hover {
    background: #ff3232;
  }

  /* Iframe styling */
  iframe {
    flex-grow: 1;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    border: none;
  }

  /* Button to trigger modal */
  .orokii-open-modal-btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .orokii-open-modal-btn:hover {
    background-color: #0056b3;
  }

  @media screen and (min-width: 240px) and (max-width: 480px) {
    .orokii-card {
        width: 100%;
        max-width: 100%;
        background-color: white;
        border-radius: 2%;
        box-shadow: 0 4px 8px rgba(40, 41, 41, 0.1);
        height: auto;
        box-sizing: border-box;
        padding-bottom: 3%;
    }

    .orokii-top-section {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        margin: 0px 0px 0px 0px;
        padding: 20px 16px 5px 16px;
    }

    .orokii-top-left {
        display: flex;
        margin: 0px 0px 0px 0px;
        align-items: center;
    }

    .orokii-icon {
        width: 14px;
        height: 14px;
        margin-right: 10px;
    }

    .orokii-logo-text {
        font-size: 0.4rem;
        color: #000;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .orokii-text-row {
        display: flex;
        flex-direction: column;
    }

    .orokii-text-item {
        font-size: 0.6rem;
        color: #000;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
    }

    .orokii-top-column-text-amount {
        font-size: 0.8rem;
        color: #16A34A;
        font-family: 'Inter', sans-serif;
        margin: 10px 0px 0px 20px;
        font-weight: 500;
    }

    .orokii-top-right {
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

    .orokii-subtitle {
        margin-top: 5px;
    }

    .orokii-divider {
        margin: 0px;
        border: 0;
        border-top: 0.5px solid #ddd;
    }

    .orokii-middle-section {
        display: block;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 0.6rem;
        margin: 15px 0px 15px 0px;
    }

    .orokii-bottom-section {
        display: block;
        margin: 10px 20px 0px 20px;
    }

    .orokii-payments {

        margin-bottom: 2px;
        overflow: hidden;
    }

    .orokii-payments-header {
        display: flex;
        border: 0.5px solid #D0D5DD;
        border-radius: 5px;
        align-items: center;
        padding: 10px;
        cursor: pointer;
    }

    .orokii-payments-checkbox {
        appearance: none;
        -webkit-appearance: none;
        margin-right: 10px;
        border: 0.2px solid #D0D5DD;
        border-radius: 2px;
        width: 8px;
        height: 8px;
        background-color: #FFFFFF;
        cursor: pointer;
        position: relative;
        /* Add this for positioning the checkmark */
    }


    .orokii-payments-checkbox:checked {
        border: 1.1px solid #6cf1ce;

    }

    /* To add a checkmark when checked */
    .orokii-payments-checkbox:checked:after {
        content: '✔';
        /* Unicode character for a checkmark */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #19624C;
        font-size: 10px;
        /* Adjust size as needed */
        line-height: 1;
    }

    .orokii-payments-inner {
        display: flex;
        margin-left: 8px;
        flex-direction: column;
        align-items: start;
    }

    .orokii-payments-inner-icons {
        display: flex;
        margin-top: 8px;
        align-items: start;
    }

    .orokii-payments-image {
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }

    .orokii-payments-image-crypto {
        width: 12px;
        height: 12px;
        margin-right: 10px;
    }

    .orokii-payments-image-others {
        width: 26px;
        height: 26px;

    }

    .orokii-payments-text {
        flex: 1;
        margin-right: 15px;
        font-family: 'Poppins', sans-serif;
        font-size: 0.45rem;
    }


    .orokii-payments-content {
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
    .orokii-payments-content::-webkit-scrollbar {
        display: none;
    }

    /* Optional: Custom scrollbar styling */
    .orokii-payments-content {
        /* Ensure the content has some padding on the right to avoid overlap */
        padding-right: 20px;
    }

    /* Create a custom scrollbar effect */
    .orokii-payments-content::after {
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
    .orokii-payments-content::before {
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

    .orokii-payments-content:hover::before {
        opacity: 1;
    }

    .orokii-payments.open .orokii-payments-content {
        display: block;
    }

    .orokii-payments-image {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }

    .orokii-payments-image-crypto {
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }


}`