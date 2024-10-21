export const getSuccessSection = (amount) => `
<div class="success-container" id="success-container">
                <h1>
                    Payment Completed
                </h1>
                <p>
                    The payment of $${amount} has been received successfully
                </p>
                <img src="https://ayoseun.github.io/k-pay/assets/success.svg" alt="Icon">
                <button id="close-payment">Close</button>
            </div>
`;