
export const apmStyles =`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.orokii-apm-container {
    width: auto;
    height: 2.5rem;
    padding: 5%;
    display: flex;
    flex-direction: row;
    gap: 50px; /* Adds space between items */
    justify-content: space-between; /* Distributes space evenly */
}

apple-pay-button {
    flex: 1; /* Makes items take equal width */
    --apple-pay-button-width: 100%; /* Takes full width of its flex container */
    --apple-pay-button-height: 20px;
    --apple-pay-button-border-radius: 5px;
    --apple-pay-button-padding: 5px;
    display: block;
}

.orokii-google-pay {
    color: black;
    flex: 1; /* Makes items take equal width */
    width: 100%; /* Takes full width of its flex container */
}`