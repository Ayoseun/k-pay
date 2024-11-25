export const paymentsSummaryStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;600;700&display=swap');
.orokii-summary-container {
    background: #fff;
    padding: 20px;

    display: none;
    width: auto;
    text-align: center;
}

.orokii-amount-holder {
    display: block;
    flex-direction: column;
    align-items: center;
    border: 0.8px solid #E0E5F2;
    border-radius: 8px;
    margin: 0px 50px 0px 50px;
    padding: 12px;

}

.orokii-amount-holder h1 {
    font-size: 18px;
    color: #19624C;
    font-family: 'Poppins', sans-serif;
    margin: 5px 0px 0px 0px;
}

.orokii-amount-holder p {
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

.orokii-summary-details .orokii-detail {
    display: flex;
    justify-content: space-between;
    margin: 10px 50px 0px 50px;
}

.orokii-summary-details {
    margin-bottom: 20px;
}

.orokii-detail .orokii-total {
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
}

.orokii-detail span {
    font-size: 10px;
    color: #000;
    font-family: 'Poppins', sans-serif;
    margin: 0px;
}


.orokii-detail p {
    font-size: 10px;
    color: #677489;
    margin: 0px;
    font-family: 'Poppins', sans-serif;
}

.orokii-summary-divider {
    margin: 30px 50px 0px 50px;
    border: 0;
    border-top: 0.5px solid #ddd;
}

.orokii-summary-buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 5px;
    margin-bottom: 30px;
}

.orokii-summary-buttons-confirm {
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

.orokii-summary-buttons-go-back {
    color: #19624C;
    font-size: 8px;
    border: none;
    cursor: pointer;
    padding: 5px 40px 5px 40px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    background-color: #CFF1E6;
}

@media screen and (max-width: 844px) {
    .orokii-summary-container {
        background: #fff;
        padding: 20px;
        display: block;
        width: auto;
        text-align: center;
    }
    
    .orokii-amount-holder {
        display: block;
        flex-direction: column;
        align-items: center;
        border: 0.8px solid #E0E5F2;
        border-radius: 8px;
        margin: 0px 50px 0px 50px;
        padding: 12px;
    
    }
    
    .orokii-amount-holder h1 {
        font-size: 0.5rem;
        color: #19624C;
        font-family: 'Poppins', sans-serif;
        margin: 5px 0px 0px 0px;
    }
    
    .orokii-amount-holder p {
        font-size: 0.35rem;
        color: #677489;
        margin: 0px;
        font-family: 'Poppins', sans-serif;
    }
    
    h4 {
        color: #000;
        font-size: 0.45rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }
    
    .orokii-summary-details .orokii-detail {
        display: flex;
        justify-content: space-between;
        margin: 10px 50px 0px 50px;
    }
    
    .orokii-summary-details {
        margin-bottom: 20px;
    }
    
    .orokii-detail .orokii-total {
        font-weight: bold;
        font-size: 0.65rem;
        font-family: 'Poppins', sans-serif;
    }
    
    .orokii-detail span {
        font-size: 0.35rem;
        color: #000;
        font-family: 'Poppins', sans-serif;
        margin: 0px;
    }
    
    
    .orokii-detail p {
        font-size: 0.35rem;
        color: #677489;
        margin: 0px;
        font-family: 'Poppins', sans-serif;
    }
    
    .orokii-summary-divider {
        margin: 10px 50px 10px 50px;
        border: 0;
        border-top: 0.5px solid #ddd;
    }
    
    .orokii-summary-buttons {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        gap: 5px;
        margin-bottom: 30px;
    }
    
    .orokii-summary-buttons-confirm {
        padding: 5px 10px;
        border: none;
        background-color: #19624C;
        color: white;
        cursor: pointer;
        border-radius: 3px;
        font-size: 0.35rem;
        padding: 5px 20px 5px 20px;
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
    }
    
    .orokii-summary-buttons-go-back {
        color: #19624C;
        font-size: 0.35rem;
        border: none;
        cursor: pointer;
        padding: 5px 30px 5px 30px;
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
        background-color: #CFF1E6;
    }
} `