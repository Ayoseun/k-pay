

// Top Section HTML
export const getTopSection = (amount) => `
            <div class="top-section">
                <div class="top-left">
                    <img src="./assets/logo.svg" alt="Icon" class="icon">
                    <div class="text-row">
                        <div class="logo-text">Orokiipay</div>
                    </div>
                </div>
                <div class="top-right">
                    <div class="text-column">
                        <div class="text-item">Pay</div>
                        <div class="top-column-text-amount">${amount}</div>
                    </div>
                </div>
            </div>
            <hr class="divider">
`;