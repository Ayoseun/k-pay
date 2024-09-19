import { cardFormStyles, cardPaymentSummaryStyles, homeStyles, pinStyles, successStyles, todo } from './styles.js';
import { initializeEventListeners } from './widgetListeners.js';  // Import the event listeners logic


// Top Section HTML
const getTopSection = (amount) => `
  <div class="top-section">
    <div class="top-left">
      <img src="https://ayoseun.github.io/k-pay/assets/logo.svg" alt="Logo Head" class="icon">
      <div class="text-row">
        <div class="logo-text">Orokiipay</div>
      </div>
    </div>
    <div class="top-right">
      <div class="text-column">
        <div class="text-item">Pay</div>
        <div class="top-column-text-amount" id="amount-to-pay">$${amount}</div>
      </div>
    </div>
  </div>
  <hr class="divider">
`;

// Middle Section HTML
const getMiddleSection = () => `
  <div class="middle-section" id="middle-section">Choose Payment Method</div>
`;

// Bottom Section HTML
const getBottomSection = () => `

  <div class="bottom-section" id="bottom-section">
            <div class="dropdown" id="dropdown-1">
                <div class="dropdown-header">
                    <input type="checkbox" class="dropdown-checkbox">
                    <div class="dropdown-inner">
                        <div class="dropdown-text">Pay with Cards</div>
                        <img src="https://ayoseun.github.io/k-pay/assets/visa.svg" alt="Image 1" class="dropdown-image">
                        <img src="https://ayoseun.github.io/k-pay/assets/mastercard.svg" alt="Image 1" class="dropdown-image">
                        <img src="https://ayoseun.github.io/k-pay/assets/discover.svg" alt="Image 1" class="dropdown-image">
                        <img src="https://ayoseun.github.io/k-pay/assets/maestro.svg" alt="Image 1" class="dropdown-image">
                        <img src="https://ayoseun.github.io/k-pay/assets/americanExpress.svg" alt="Image 1" class="dropdown-image">
                    </div>


                    <img src="https://ayoseun.github.io/k-pay/assets/chev.svg" alt="Image 1" class="dropdown-chevron">
                </div>
                <div class="dropdown-content">


                    <div class="card-details" id="card-details">
                        <h2>Card Details</h2>
                        <div class="form-field">
                            <label for="cardholder-name">Cardholder's name</label>
                            <div class="input-wrapper">
                                <input type="text" id="cardholder-name" placeholder="As seen on your card">
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="card-number">Enter Card Number</label>
                            <div class="input-wrapper">
                                <input type="text" id="card-number" placeholder="5078 0000 0000 0000" maxlength="19"
                                    required>
                                <img src="https://ayoseun.github.io/k-pay/assets/card.svg" alt="Card Logo" class="card-logo" id="card-logo">
                            </div>
                        </div>
                        <div class="form-field-group">
                            <div class="form-field half">
                                <label for="expiry-date">Expiry Date</label>
                                <div class="input-wrapper">
                                    <input type="text" id="expiry-date" placeholder="MM/YY"
                                        pattern="^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$" required>
                                </div>
                            </div>
                            <div class="form-field half">
                                <label for="cvc">CVC</label>
                                <div class="input-wrapper">
                                    <input type="number" id="cvc" placeholder="712" maxlength="3" required>
                                </div>
                            </div>
                        </div>

                        <h2>Billing Address</h2>
                        <p>We only require this information once for this card</p>
                        <div class="form-field">
                            <label for="country">Country</label>
                            <div class="input-wrapper">
                                <select id="country">
                                    <!-- Options will be populated dynamically -->
                                </select>
                            </div>
                        </div>
                        <div class="form-field-group">
                            <div class="form-field half">
                                <label for="state">State</label>
                                <div class="input-wrapper">
                                    <select id="state">
                                        <!-- Options will be populated dynamically -->
                                    </select>
                                </div>
                            </div>
                            <div class="form-field half">
                                <label for="city">City</label>
                                <div class="input-wrapper">
                                    <select id="city">

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="address1">Address 1</label>
                            <div class="input-wrapper">
                                <input type="text" id="address1" placeholder="Input address">
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="address2">Address 2 (optional)</label>
                            <div class="input-wrapper">
                                <input type="text" id="address2" placeholder="Input address (optional)">
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="zip">Zip Code</label>
                            <div class="input-wrapper">
                                <input type="number" id="zip" placeholder="Enter code here">
                            </div>
                        </div>
                        <button class="pay-button" onclick="submitForm()">Pay $45000</button>
                    </div>

                    <div class="pin-container" id="pin-container">
                        <p>Please enter your 4-digit card pin to authorize this payment</p>
                        <div class="pin-inputs">
                            <input type="number" maxlength="1" pattern="[0-9]*" inputmode="numeric">
                            <input type="number" maxlength="1" pattern="[0-9]*" inputmode="numeric">
                            <input type="number" maxlength="1" pattern="[0-9]*" inputmode="numeric">
                            <input type="number" maxlength="1" pattern="[0-9]*" inputmode="numeric">
                        </div>
                        <div class="pin-buttons">
                            <button class="pin-back" id="pin-back">Go Back</button>
                            <button class="pin-continue" id="pin-continue">Continue</button>
                        </div>
                    </div>
                    <div class="summary-container" id="summary-container">
                        <img src="https://ayoseun.github.io/k-pay/assets/checkout.svg" alt="Image 1" style="width: 48px;height: 48px;">
                        <h4>Payment Summary</h4>
                        <div class="amount-holder">
                            <p>Amount</p>
                            <h1>$4500.00</h1>
                        </div>
                        <div class="summary-details">

                            <div class="detail">
                                <p>Subtotal</p><span>$4105.00</span>
                            </div>
                            <div class="detail">
                                <p>Shipping Cost</p><span>$408.00</span>
                            </div>
                            <div class="detail">
                                <p>Discount (10%)</p><span>-$13.00</span>
                            </div>
                            <hr class="summary-divider">
                            <div class="detail total"><span>Total</span><span>$4500.00</span></div>
                        </div>
                        <div class="summary-buttons">
                            <button class="summary-buttons-go-back" id="summary-buttons-go-back">Go Back</button>
                            <button class="summary-buttons-confirm" id="summary-buttons-confirm">Confirm
                                Payment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown" id="dropdown-2">
                <div class="dropdown-header">
                    <input type="checkbox" class="dropdown-checkbox">
                    <div class="dropdown-inner">
                        <div class="dropdown-text">Pay with Crypto</div>
                        <img src="https://ayoseun.github.io/k-pay/assets/bitcoin.svg" alt="Image 1" class="dropdown-image-crypto">
                        <img src="https://ayoseun.github.io/k-pay/assets/ethereum.svg" alt="Image 1" class="dropdown-image-crypto">
                        <img src="https://ayoseun.github.io/k-pay/assets/usdc.svg" alt="Image 1" class="dropdown-image-crypto">
                        <img src="https://ayoseun.github.io/k-pay/assets/usdt.svg" alt="Image 1" class="dropdown-image-crypto">
                        <img src="https://ayoseun.github.io/k-pay/assets/sol.svg" alt="Image 1" class="dropdown-image-crypto">
                    </div>


                    <img src="https://ayoseun.github.io/k-pay/assets/chev.svg" alt="Image 1" class="dropdown-chevron">
                </div>
                 <div class="dropdown-content"><p class="todo">In progress</p></div>
            </div>
            <div class="dropdown" id="dropdown-3">
                <div class="dropdown-header">
                    <input type="checkbox" class="dropdown-checkbox">

                    <div class="dropdown-text">Pay with Bank Account</div>
                    <img src="https://ayoseun.github.io/k-pay/assets/chev.svg" alt="Image 1" class="dropdown-chevron">
                </div>
                <div class="dropdown-content"><p class="todo">In progress</p></div>
            </div>
            <div class="dropdown" id="dropdown-4">
                <div class="dropdown-header">
                    <input type="checkbox" class="dropdown-checkbox">
                    <div class="dropdown-inner">
                        <div class="dropdown-text">Pay with</div>
                        <img src="https://ayoseun.github.io/k-pay/assets/applePay.svg" alt="Image 1" class="dropdown-image-others">
                        <img src="https://ayoseun.github.io/k-pay/assets/googlePay.svg" alt="Image 1" class="dropdown-image-others">
                        <img src="https://ayoseun.github.io/k-pay/assets/paypal.svg" alt="Image 1" class="dropdown-image-others">

                    </div>


                    <img src="https://ayoseun.github.io/k-pay/assets/chev.svg" alt="Image 1" class="dropdown-chevron">
                </div>
                <div class="dropdown-content"><p class="todo">In progress</p></div>
            </div>
        </div>


`;

// Success Section HTML
const getSuccessSection = () => `
  <div class="success-container" id="success-container">
    <h1>Payment Completed</h1>
    <p>The payment of $45,000 has been received successfully</p>
    <img src="https://ayoseun.github.io/k-pay/assets/success.svg" alt="Icon">
    <button>Go back to platform</button>
  </div>
`;

// Main Widget Creation Function
export function createWidget(amount) {
    const widget = document.createElement('div');
    widget.classList.add('widget-container', 'card');

    

    // Create and append styles
    const styles = [
        homeStyles,
        successStyles,
        cardFormStyles,
        cardPaymentSummaryStyles,
        pinStyles,
        todo
    ];

    styles.forEach((styleContent, index) => {
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(styleContent));
        document.head.appendChild(style);
    });
    if (amount==null) {
        amount="0.0"
    } else {
        
    }
    // Append each section to the widget container
    widget.innerHTML = `
    ${getTopSection(amount)}
    ${getMiddleSection()}
    ${getBottomSection()}
    ${getSuccessSection()}
  `;

    // Add event listeners or other interactions here

    // Append the widget to the body (or any other target container)
    document.body.appendChild(widget);
    initializeEventListeners()
    return widget
}
