

// Bottom Section HTML
export const getBottomSection = (amount) => `

<div class="bottom-section" id="bottom-section">
                <div class="dropdown" id="dropdown-1">
                    <div class="dropdown-header">
                        <input type="radio" class="payment-checkbox">
                        <div class="dropdown-inner">
                            <div class="dropdown-text">Pay with Cards</div>
                            <img src="https://ayoseun.github.io/k-pay/assets/visa.svg" alt="Image 1"
                                class="dropdown-image">
                            <img src="https://ayoseun.github.io/k-pay/assets/mastercard.svg" alt="Image 1"
                                class="dropdown-image">
                            <img src="https://ayoseun.github.io/k-pay/assets/discover.svg" alt="Image 1"
                                class="dropdown-image">
                            <img src="https://ayoseun.github.io/k-pay/assets/maestro.svg" alt="Image 1"
                                class="dropdown-image">
                            <img src="https://ayoseun.github.io/k-pay/assets/americanExpress.svg" alt="Image 1"
                                class="dropdown-image">
                        </div>

                    </div>
                    <div class="dropdown-content">
                        <div class="card-details" id="card-details">
                            <h2>Card Details</h2>
                            <div id="isTokenized">
                                <div class="form-field">
                                    <label for="cardholder-name">Cardholder's name</label>
                                    <div class="input-wrapper">
                                        <input type="text" id="cardholder-name" placeholder="As seen on your card">
                                    </div>
                                </div>
                                <div class="form-field">
                                    <label for="card-number">Enter Card Number</label>
                                    <div class="input-wrapper">
                                        <input type="text" id="card-number" placeholder="5078 0000 0000 0000"
                                            maxlength="19" required>
                                        <img src="https://ayoseun.github.io/k-pay/assets/card.svg" alt="Card Logo"
                                            class="card-logo" id="card-logo">
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
                            </div>


                            <p style="margin: 0%; font-size: 0.7rem; font-weight: 400; color: #000;">Billing Address</p>
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
                                <label for="email">Email</label>
                                <div class="input-wrapper">
                                    <input type="email" id="email" placeholder="Enter your email">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="firstName">First Name</label>
                                <div class="input-wrapper">
                                    <input type="text" id="firstName" placeholder="Enter your first name">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="lastName">Last Name</label>
                                <div class="input-wrapper">
                                    <input type="text" id="lastName" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="address1">Address</label>
                                <div class="input-wrapper">
                                    <input type="text" id="address" placeholder="Input address">
                                </div>
                            </div>

                            <div class="form-field">
                                <label for="zip">Zip Code</label>
                                <div class="input-wrapper">
                                    <input type="number" id="zip" placeholder="Enter code here">
                                </div>
                            </div>

                            <button class="pay-button" id="card-pay-button">
                                Pay $${amount}

                            </button>
                        </div>
                        <div class="summary-container" id="summary-container-card">
                            <img src="https://ayoseun.github.io/k-pay/assets/checkout.svg" alt="Image 1"
                                style="width: 48px;height: 48px;">
                            <h4>Payment Summary</h4>
                            <div class="amount-holder">
                                <p>Amount</p>
                                <h1>$${amount}</h1>
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
                                <div class="detail total"><span>Total</span><span>$${amount}</span></div>
                            </div>
                            <div class="summary-buttons">
                                <button class="summary-buttons-go-back" id="summary-buttons-go-back">Go Back</button>
                                <button class="summary-buttons-confirm" id="summary-buttons-confirm">
                                    <span id="card-pay-button-text">
                                        Confirm
                                        Payment</span>

                                    <div id="loader"></div>
                                </button>
                            </div>
                        </div>
                        <!-- <div class="pin-container" id="pin-container">
                            <p>Please enter your 4-digit card pin to authorize this payment</p>
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
                <div class="dropdown" id="dropdown-2">
                    <div class="dropdown-header">
                        <input type="radio" class="payment-checkbox">
                        <div class="dropdown-inner">
                            <div class="dropdown-text">Pay with Crypto</div>
                            <img src="./assets/bitcoin.svg" alt="Bitcoin" class="payments-image-crypto">
                            <img src="./assets/ethereum.svg" alt="Ethereum" class="payments-image-crypto">
                            <img src="./assets/usdc.svg" alt="USDC" class="payments-image-crypto">
                            <img src="./assets/usdt.svg" alt="USDT" class="payments-image-crypto">
                            <img src="./assets/sol.png" alt="Solana" class="payments-image-crypto">
                        </div>
                    </div>
                    <div class="dropdown-content">
                        <div class="crypto-container">
                            <h2>Select Cryptocurrency</h2>
                            <div class="crypto-form-field">
                                <label for="tokens">Pay with</label>
                                <div class="crypto-input-wrapper">
                                    <select style="color: #9499A1; font-size: 8px;" id="tokens">

                                    </select>
                                </div>
                            </div>

                            <div class="exchange-rate">
                                <p>Exchange rates:</p>
                                <span> 1 - = 0.00 USD</span>
                            </div>
                            <div class="payment-details">
                                <p class="amount">Amount to due:</p>
                                <span> 0.00</span>
                            </div>
                            <div class="crypto-divider "></div>
                            <div class="payment-details">
                                <p>REF </p>
                                <span>REF23456</span>

                            </div>



                            <button class="pay-button" id="connect-wallet">Pay</button>

                            <div class="crypto-divider "></div>
                        </div>

                    </div>
                </div>
                <div class="dropdown" id="dropdown-3">
                    <div class="dropdown-header">
                        <input type="radio" class="payment-checkbox">

                        <div class="dropdown-text">Pay with Bank Account</div>

                    </div>
                    <div class="dropdown-content">
                        <div class="card-details" id="ach-details">
                            <h2>Banking Details</h2>
                            <div class="form-field">
                                <label for="cardholder-name">Account Number</label>
                                <div class="input-wrapper">
                                    <input type="number" id="account-number" placeholder="As seen on your cheque book">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="cardholder-name">Routing Number</label>
                                <div class="input-wrapper">
                                    <input type="number" id="routing-number" placeholder="As seen on your cheque book">
                                </div>
                            </div>


                            <h2>User Details</h2>
                            <p>We only require this information once for this card</p>
                            <div class="form-field">
                                <label for="country">Country</label>
                                <div class="input-wrapper">
                                    <select id="banking-country">
                                        <!-- Options will be populated dynamically -->
                                    </select>
                                </div>
                            </div>
                            <div class="form-field-group">
                                <div class="form-field half">
                                    <label for="state">State</label>
                                    <div class="input-wrapper">
                                        <select id="banking-state">
                                            <!-- Options will be populated dynamically -->
                                        </select>
                                    </div>
                                </div>
                                <div class="form-field half">
                                    <label for="city">City</label>
                                    <div class="input-wrapper">
                                        <select id="banking-city">

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="form-field">
                                <label for="firstName">First Name</label>
                                <div class="input-wrapper">
                                    <input type="text" id="banking-first-name" placeholder="Enter your first name">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="lastName">Last Name</label>
                                <div class="input-wrapper">
                                    <input type="text" id="banking-last-name" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="lastName">Phone</label>
                                <div class="input-wrapper">
                                    <input type="number" id="banking-phone" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="address2">Address</label>
                                <div class="input-wrapper">
                                    <input type="text" id="banking-address" placeholder="Input address">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="zip1">ZIP code</label>
                                <div class="input-wrapper">
                                    <input type="number" id="banking-zip" placeholder="Input ZIP code">
                                </div>
                            </div>


                            <h2>Billing Address</h2>
                            <p>We only require this information once for this card</p>
                            <div class="form-field">
                                <label for="country">Country</label>
                                <div class="input-wrapper">
                                    <select id="user-country">
                                        <!-- Options will be populated dynamically -->
                                    </select>
                                </div>
                            </div>
                            <div class="form-field-group">
                                <div class="form-field half">
                                    <label for="state">State</label>
                                    <div class="input-wrapper">
                                        <select id="user-state">
                                            <!-- Options will be populated dynamically -->
                                        </select>
                                    </div>
                                </div>
                                <div class="form-field half">
                                    <label for="city">City</label>
                                    <div class="input-wrapper">
                                        <select id="user-city">

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="form-field">
                                <label for="firstName">First Name</label>
                                <div class="input-wrapper">
                                    <input type="text" id="user-first-name" placeholder="Enter your first name">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="lastName">Last Name</label>
                                <div class="input-wrapper">
                                    <input type="text" id="user-last-name" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="lastName">Phone</label>
                                <div class="input-wrapper">
                                    <input type="number" id="user-phone" placeholder="Enter your phone">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="address2">Address</label>
                                <div class="input-wrapper">
                                    <input type="text" id="user-address" placeholder="Input address">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="zip1">ZIP code</label>
                                <div class="input-wrapper">
                                    <input type="number" id="user-zip" placeholder="Input ZIP code">
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="zip1">Identification</label>
                                <div class="input-wrapper">
                                    <input type="number" id="identification" placeholder="Input Identification number">
                                </div>
                            </div>
                            <button class="pay-button" id="ach-pay-button">

                                pay $5000

                            </button>

                        </div>
                        <div class="summary-container" id="summary-container-ach">
                            <img src="https://ayoseun.github.io/k-pay/assets/checkout.svg" alt="Image 1"
                                style="width: 48px;height: 48px;">
                            <h4>Payment Summary</h4>
                            <div class="amount-holder">
                                <p>Amount</p>
                                <h1>$${amount}</h1>
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
                                <div class="detail total"><span>Total</span><span>$${amount}</span></div>
                            </div>
                            <div class="summary-buttons">
                                <button class="summary-buttons-go-back" id="ach-summary-buttons-go-back">Go
                                    Back</button>
                                <button class="summary-buttons-confirm" id="ach-summary-buttons-confirm">
                                    <span id="ach-pay-button-text">
                                        Confirm
                                        Payment</span>

                                    <div id="ach-loader"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="dropdown" id="dropdown-4">
                    <div class="dropdown-header">
                        <input type="radio" class="payment-checkbox">
                        <div class="dropdown-inner">
                            <div class="dropdown-text">Pay with</div>
                            <img src="https://ayoseun.github.io/k-pay/assets/applePay.svg" alt="Image 1"
                                class="dropdown-image-others">
                            <img src="https://ayoseun.github.io/k-pay/assets/googlePay.svg" alt="Image 1"
                                class="dropdown-image-others">
                            <img src="https://ayoseun.github.io/k-pay/assets/paypal.svg" alt="Image 1"
                                class="dropdown-image-others">

                        </div>


                        <img src="https://ayoseun.github.io/k-pay/assets/chev.svg" alt="Image 1"
                            class="dropdown-chevron">
                    </div>
                    <div class="dropdown-content">
                        <p class="todo">In progress</p>
                    </div>
                </div>
            </div>


`;

export const secured=()=>`
 <div class="secure-payments-button">
            <span class="text">Secure payments</span>
            <span class="powered-by">Powered by</span>
            <img src="https://ayoseun.github.io/k-pay/assets/logo-white.svg" alt="Orokiipay logo" class="secured-logo">
            <span class="orokiipay">Orokiipay</span>
        </div>
`