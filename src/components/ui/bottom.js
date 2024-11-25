

// Bottom Section HTML
export const getBottomSection = (amount) => `
 <div class="orokii-bottom-section" id="orokii-bottom-section">
                <div class="orokii-payments" id="orokii-payments-1">
                    <div class="orokii-payments-header">
                        <input type="radio" class="orokii-payments-checkbox">
                        <div class="orokii-payments-inner">
                            <div class="orokii-payments-text">Pay with Cards</div>
                            <div class="orokii-payments-inner-icons">
                                <img src="https://ayoseun.github.io/k-pay/assets/visa.svg" alt="Image 1"
                                    class="orokii-payments-image">
                                <img src="https://ayoseun.github.io/k-pay/assets/mastercard.svg" alt="Image 1"
                                    class="orokii-payments-image">
                                <img src="https://ayoseun.github.io/k-pay/assets/discover.svg" alt="Image 1"
                                    class="orokii-payments-image">
                                <img src="https://ayoseun.github.io/k-pay/assets/maestro.svg" alt="Image 1"
                                    class="orokii-payments-image">
                                <img src="https://ayoseun.github.io/k-pay/assets/americanExpress.svg" alt="Image 1"
                                    class="orokii-payments-image">
                            </div>
                        </div>
                    </div>
                    <div class="orokii-payments-content">
                        <div class="orokii-card-details" id="orokii-card-details">
                            <h2>Card Details</h2>
                            <div id="orokii-isTokenized">
                                <div class="orokii-form-field">
                                    <label for="cardholder-name">Cardholder's name</label>
                                    <div class="orokii-input-wrapper">
                                        <input type="text" id="orokii-cardholder-name"
                                            placeholder="As seen on your card">
                                    </div>
                                </div>
                                <div class="orokii-form-field">
                                    <label for="card-number">Enter Card Number</label>
                                    <div class="orokii-input-wrapper">
                                        <input type="text" id="orokii-card-number" placeholder="5078 0000 0000 0000"
                                            maxlength="19" required>
                                        <img src="https://ayoseun.github.io/k-pay/assets/card.svg" alt="Card Logo"
                                            class="orokii-card-logo" id="orokii-card-logo">
                                    </div>
                                </div>
                                <div class="orokii-form-field-group">
                                    <div class="orokii-form-field orokii-half">
                                        <label for="expiry-date">Expiry Date</label>
                                        <div class="orokii-input-wrapper">
                                            <input type="text" id="orokii-expiry-date" placeholder="MM/YY"
                                                pattern="^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$" required>
                                        </div>
                                    </div>
                                    <div class="orokii-form-field orokii-half">
                                        <label for="cvc">CVC</label>
                                        <div class="orokii-input-wrapper">
                                            <input type="number" id="orokii-cvc" placeholder="712" maxlength="3"
                                                required>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <p style="margin: 0%; font-size: 0.7rem; font-weight: 400; color: #000;">Billing Address</p>
                            <p>We only require this information once for this card</p>
                            <div class="orokii-form-field">
                                <label for="country">Country</label>
                                <div class="orokii-input-wrapper">
                                    <select id="orokii-country">
                                        <!-- Options will be populated dynamically -->
                                    </select>
                                </div>
                            </div>
                            <div class="orokii-form-field-group">
                                <div class="orokii-form-field orokii-half">
                                    <label for="orokii-state">State</label>
                                    <div class="orokii-input-wrapper">
                                        <select id="orokii-state">
                                            <!-- Options will be populated dynamically -->
                                        </select>
                                    </div>
                                </div>
                                <div class="orokii-form-field orokii-half">
                                    <label for="city">City</label>
                                    <div class="orokii-input-wrapper">
                                        <select id="orokii-city">

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="email">Email</label>
                                <div class="orokii-input-wrapper">
                                    <input type="email" id="orokii-email" placeholder="Enter your email">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="firstName">First Name</label>
                                <div class="orokii-input-wrapper">
                                    <input type="text" id="orokii-firstName" placeholder="Enter your first name">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="lastName">Last Name</label>
                                <div class="orokii-input-wrapper">
                                    <input type="text" id="orokii-lastName" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="address1">Address</label>
                                <div class="orokii-input-wrapper">
                                    <input type="text" id="orokii-address" placeholder="Input address">
                                </div>
                            </div>

                            <div class="orokii-form-field">
                                <label for="zip">Zip Code</label>
                                <div class="orokii-input-wrapper">
                                    <input type="number" id="orokii-zip" placeholder="Enter code here">
                                </div>
                            </div>

                            <button class="orokii-pay-button" id="orokii-card-pay-button">
                                Pay $${amount}

                            </button>
                        </div>
                        <div class="orokii-summary-container" id="orokii-summary-container-card">
                            <img src="https://ayoseun.github.io/k-pay/assets/checkout.svg" alt="Image 1"
                                style="width: 48px;height: 48px;">
                            <h4>payments Summary</h4>
                            <div class="orokii-amount-holder">
                                <p>Amount</p>
                                <h1>$${amount}</h1>
                            </div>
                            <div class="orokii-summary-details">

                                <div class="orokii-detail">
                                    <p>Subtotal</p><span>$4105.00</span>
                                </div>
                                <div class="orokii-detail">
                                    <p>Shipping Cost</p><span>$408.00</span>
                                </div>
                                <div class="orokii-detail">
                                    <p>Discount (10%)</p><span>-$13.00</span>
                                </div>
                                <hr class="orokii-summary-divider">
                                <div class="orokii-detail orokii-total"><span>Total</span><span>$${amount}</span></div>
                            </div>
                            <div class="orokii-summary-buttons">
                                <button class="orokii-summary-buttons-go-back" id="orokii-summary-buttons-go-back">Go
                                    Back</button>
                                <button class="orokii-summary-buttons-confirm" id="orokii-summary-buttons-confirm">
                                    <span id="orokii-card-pay-button-text">
                                        Confirm
                                        payments</span>

                                    <div id="orokii-loader"></div>
                                </button>
                            </div>
                        </div>
                        <!-- <div class="pin-container" id="pin-container">
                            <p>Please enter your 4-digit card pin to authorize this payments</p>
                            <div class="pin-inputs">
                                <input maxlength="1" pattern="[0-9]*" inputmode="numeric">
                                <input maxlength="1" pattern="[0-9]*" inputmode="numeric">
                                <input maxlength="1" pattern="[0-9]*" inputmode="numeric">
                                <input maxlength="1" pattern="[0-9]*" inputmode="numeric">
                            </div>
                            <div class="pin-buttons">
                                <button class="pin-back" id="pin-back">Go Back</button>
                                <button class="pin-continue" id="pin-continue">Continue</button>
                            </div>
                        </div> -->

                    </div>
                </div>
                <div class="orokii-payments" id="orokii-payments-2">
                    <div class="orokii-payments-header">
                        <input type="radio" class="orokii-payments-checkbox">
                        <div class="orokii-payments-inner">
                            <div class="orokii-payments-text">Pay with Crypto</div>
                            <div class="orokii-payments-inner-icons">
                                <img src="./assets/bitcoin.svg" alt="Bitcoin" class="orokii-payments-image-crypto">
                                <img src="./assets/ethereum.svg" alt="Ethereum" class="orokii-payments-image-crypto">
                                <img src="./assets/usdc.svg" alt="USDC" class="orokii-payments-image-crypto">
                                <img src="./assets/usdt.svg" alt="USDT" class="orokii-payments-image-crypto">
                                <img src="./assets/sol.png" alt="Solana" class="orokii-payments-image-crypto">
                            </div>
                        </div>
                    </div>
                    <div class="orokii-payments-content">
                        <div class="orokii-crypto-container">
                            <h2>Select Cryptocurrency</h2>
                            <div class="orokii-crypto-form-field">
                                <label for="tokens">Pay with</label>
                                <div class="orokii-crypto-input-wrapper">
                                    <select style="color: #9499A1; font-size: 8px;" id="orokii-tokens">

                                    </select>
                                </div>
                            </div>

                            <div class="orokii-exchange-rate">
                                <p>Exchange rates:</p>
                                <span> 1 - = 0.00 USD</span>
                            </div>
                            <div class="orokii-payments-details">
                                <p class="orokii-amount">Amount to due:</p>
                                <span> 0.00</span>
                            </div>
                            <div class="orokii-crypto-divider "></div>
                            <div class="orokii-payments-details">
                                <p>REF </p>
                                <span>REF23456</span>

                            </div>



                            <button class="orokii-pay-button" id="orokii-connect-wallet">
                                <span id="orokii-crypto-pay-button-text">

                                    Pay</span>

                                <div id="orokii-crypto-loader"></div>
                            </button>

                            <div class="orokii-crypto-divider"></div>
                        </div>

                    </div>
                </div>
                <div class="orokii-payments" id="orokii-payments-3">
                    <div class="orokii-payments-header">
                        <input type="radio" class="orokii-payments-checkbox">
                        <div class="orokii-payments-inner">
                            <div class="orokii-payments-text">Pay with Bank Account</div>
                        </div>
                    </div>
                    <div class="orokii-payments-content">
                        <div class="orokii-card-details" id="orokii-ach-details">
                            <h2>Banking Details</h2>
                            <div class="orokii-form-field">
                                <label for="cardholder-name">Account Number</label>
                                <div class="orokii-input-wrapper">
                                    <input type="number" id="account-number" placeholder="As seen on your cheque book">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="cardholder-name">Routing Number</label>
                                <div class="orokii-input-wrapper">
                                    <input type="number" id="routing-number" placeholder="As seen on your cheque book">
                                </div>
                            </div>


                            <h2>User Details</h2>
                            <p>We only require this information once for this card</p>
                            <div class="orokii-form-field">
                                <label for="country">Country</label>
                                <div class="orokii-input-wrapper">
                                    <select id="orokii-banking-country">
                                        <!-- Options will be populated dynamically -->
                                    </select>
                                </div>
                            </div>
                            <div class="orokii-form-field-group">
                                <div class="orokii-form-field half">
                                    <label for="state">State</label>
                                    <div class="orokii-input-wrapper">
                                        <select id="orokii-banking-state">
                                            <!-- Options will be populated dynamically -->
                                        </select>
                                    </div>
                                </div>
                                <div class="orokii-form-field orokii-half">
                                    <label for="city">City</label>
                                    <div class="orokii-input-wrapper">
                                        <select id="orokii-banking-city">

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="orokii-form-field">
                                <label for="firstName">First Name</label>
                                <div class="orokii-input-wrapper">
                                    <input type="text" id="orokii-banking-first-name"
                                        placeholder="Enter your first name">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="lastName">Last Name</label>
                                <div class="orokii-input-wrapper">
                                    <input type="text" id="orokii-banking-last-name" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="lastName">Phone</label>
                                <div class="orokii-input-wrapper">
                                    <input type="number" id="orokii-banking-phone" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="address2">Address</label>
                                <div class="orokii-input-wrapper">
                                    <input type="text" id="orokii-banking-address" placeholder="Input address">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="zip1">ZIP code</label>
                                <div class="orokii-input-wrapper">
                                    <input type="number" id="orokii-banking-zip" placeholder="Input ZIP code">
                                </div>
                            </div>


                            <h2>Billing Address</h2>
                            <p>We only require this information once for this card</p>
                            <div class="orokii-form-field">
                                <label for="country">Country</label>
                                <div class="input-wrapper">
                                    <select id="orokii-user-country">
                                        <!-- Options will be populated dynamically -->
                                    </select>
                                </div>
                            </div>
                            <div class="orokii-form-field-group">
                                <div class="orokii-form-field orokii-half">
                                    <label for="state">State</label>
                                    <div class="orokii-input-wrapper">
                                        <select id="orokii-user-state">
                                            <!-- Options will be populated dynamically -->
                                        </select>
                                    </div>
                                </div>
                                <div class="orokii-form-field orokii-half">
                                    <label for="city">City</label>
                                    <div class="orokii-input-wrapper">
                                        <select id="user-city">

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="orokii-form-field">
                                <label for="firstName">First Name</label>
                                <div class="orokii-input-wrapper">
                                    <input type="text" id="orokii-user-first-name" placeholder="Enter your first name">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="lastName">Last Name</label>
                                <div class="orokii-input-wrapper">
                                    <input type="text" id="orokii-user-last-name" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="lastName">Phone</label>
                                <div class="orokii-input-wrapper">
                                    <input type="number" id="orokii-user-phone" placeholder="Enter your phone">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="address2">Address</label>
                                <div class="orokii-input-wrapper">
                                    <input type="text" id="orokii-user-address" placeholder="Input address">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="zip1">ZIP code</label>
                                <div class="orokii-input-wrapper">
                                    <input type="number" id="orokii-user-zip" placeholder="Input ZIP code">
                                </div>
                            </div>
                            <div class="orokii-form-field">
                                <label for="zip1">Identification</label>
                                <div class="orokii-input-wrapper">
                                    <input type="number" id="orokii-identification"
                                        placeholder="Input Identification number">
                                </div>
                            </div>
                            <button class="orokii-pay-button" id="orokii-ach-pay-button">

                                pay $5000

                            </button>

                        </div>
                        <div class="orokii-summary-container" id="orokii-summary-container-ach">
                            <img src="https://ayoseun.github.io/k-pay/assets/checkout.svg" alt="Image 1"
                                style="width: 48px;height: 48px;">
                            <h4>payments Summary</h4>
                            <div class="orokii-amount-holder">
                                <p>Amount</p>
                                <h1>$${amount}</h1>
                            </div>
                            <div class="orokii-summary-details">

                                <div class="orokii-detail">
                                    <p>Subtotal</p><span>$4105.00</span>
                                </div>
                                <div class="orokii-detail">
                                    <p>Shipping Cost</p><span>$408.00</span>
                                </div>
                                <div class="orokii-detail">
                                    <p>Discount (10%)</p><span>-$13.00</span>
                                </div>
                                <hr class="orokii-summary-divider">
                                <div class="orokii-detail orokii-total"><span>Total</span><span>$${amount}</span></div>
                            </div>
                            <div class="orokii-summary-buttons">
                                <button class="orokii-summary-buttons-go-back"
                                    id="orokii-ach-summary-buttons-go-back">Go
                                    Back</button>
                                <button class="orokii-summary-buttons-confirm" id="orokii-ach-summary-buttons-confirm">
                                    <span id="orokii-ach-pay-button-text">
                                        Confirm
                                        payments</span>

                                    <div id="orokii-ach-loader"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="orokii-payments" id="orokii-payments-4">
                    <div class="orokii-payments-header">
                        <input type="radio" class="orokii-payments-checkbox">
                        <div class="orokii-payments-inner">
                            <div class="orokii-payments-text">Pay with</div>
                            <div class="orokii-payments-inner-icons">
                                <img src="https://ayoseun.github.io/k-pay/assets/applePay.svg" alt="Image 1"
                                    class="orokii-payments-image-others">
                                <img src="https://ayoseun.github.io/k-pay/assets/googlePay.svg" alt="Image 1"
                                    class="orokii-payments-image-others">
                                <img src="https://ayoseun.github.io/k-pay/assets/paypal.svg" alt="Image 1"
                                    class="orokii-payments-image-others">

                            </div>
                        </div>


                    </div>
                    <div class="orokii-payments-content">
                        <div class="orokiipay-apm-container">

                            <apple-pay-button buttonstyle="black" type="plain" locale="en">Check out</apple-pay-button>

                            <div class="orokiipay-google-pay" id="orokiipay-google-pay"></div>


                        </div>


                    </div>
                </div>
            </div>
`;

export const getBanner = () => `
  <div class="orokii-secure-payments-button">
            <span class="orokii-text">Secure payments</span>
            <span class="orokii-powered-by">Powered by</span>
        
        <div class="" style="display: flex;">
            <img src="./assets/logo-white.svg" alt="Orokiipay logo" class="orokii-secured-logo">
            <span class="orokii-orokiipay">OrokiiPay</span>
        </div>
        </div>
`