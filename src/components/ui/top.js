

// Top Section HTML
export const getTopSection = (amount) => `
    <div class="orokii-top-section">
                <div class="orokii-top-left">
                    <img src="./assets/logo.svg" alt="Icon" class="orokii-icon">
                    <div class="orokii-text-row">
                        <div class="orokii-logo-text">OrokiiPay</div>
                    </div>
                </div>
                <div class="orokii-top-right">
                    <div class="orokii-text-column">
                        <div class="orokii-text-item">Pay</div>
                        <div class="orokii-top-column-text-amount">$${amount}</div>
                    </div>
                </div>
            </div>
`;