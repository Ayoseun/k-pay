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