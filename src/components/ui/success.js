export const getSuccessSection = (amount) => `
<div class="orokii-success-container" id="orokii-success-container">
                <h1>
                    Payment Completed
                </h1>
                <p>
                    The payment of $${amount} has been received successfully
                </p>
                <img src="./assets/success.svg" alt="Icon">
                <button id="orokii-close-payment">Close</button>
            </div>
`;