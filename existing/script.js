
document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', function () {
        const dropdown = this.parentElement;

        // Close all other dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('open');
                d.querySelector('.dropdown-checkbox').checked = false;
            }
        });

        // Toggle the clicked dropdown
        dropdown.classList.toggle('open');
        dropdown.querySelector('.dropdown-checkbox').checked = dropdown.classList.contains('open');
    });
});

//pi9ns
const inputs = document.querySelectorAll('.pin-inputs input');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            // Move to the next input
            inputs[index + 1].focus();
        }
    });

    // Optionally handle the backspace to move to the previous input
    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });
});


//Cards

document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderNameInput = document.getElementById('cardholder-name')
    const cvcInput = document.getElementById('cvc');
    const cardLogo = document.getElementById('card-logo');
    const expiryDateInput = document.getElementById('expiry-date');
    const pinContainer = document.getElementById('pin-container')
    const cardDetails = document.getElementById('card-details')
    const summaryContainer = document.getElementById('summary-container')
    const successContainer = document.getElementById('success-container')
    const middleContainer = document.getElementById('middle-section')
    const bottomContainer = document.getElementById('bottom-section')
    const summaryConfirmBtn = document.getElementById('summary-buttons-confirm')
    const summaryBackBtn = document.getElementById('summary-buttons-go-back')
    const pinBackBtn = document.getElementById('pin-back')
    const pinBtnContinue = document.getElementById('pin-continue')
    // Format Expiry Date to MM/YY as user types
    expiryDateInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Only allow digits

        if (value.length >= 2) {
            let month = value.slice(0, 2);

            // Validate the month part (01-12)
            if (parseInt(month, 10) > 12) {
                month = '12'; // If invalid month, set it to 12
            }
            value = month + '/' + value.slice(2, 4); // Insert slash for MM/YY
        }

        e.target.value = value.slice(0, 5); // Max length: 5 (MM/YY)

    });
    // Function to update card logo based on card number
    function updateCardLogo() {
        const cardNumber = cardNumberInput.value.replace(/\s+/g, '');
        if (cardNumber.startsWith('47') || cardNumber.startsWith('44') || cardNumber.startsWith('41') || cardNumber.startsWith('40')) {
            cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/visa.svg'; // Visa
        } else if (cardNumber.startsWith('51') || cardNumber.startsWith('53') || cardNumber.startsWith('55') || cardNumber.startsWith('22')) {
            cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/mastercard.svg'; // MasterCard
        } else if (cardNumber.startsWith('62') || cardNumber.startsWith('65') || cardNumber.startsWith('60')) {
            cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/discover.svg'; // Discover
        } else if (cardNumber.startsWith('37')) {
            cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/americanExpress.svg'; // Maestro
        } else if (cardNumber.startsWith('623')) {
            cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/unionPay.svg'; // Maestro
        }else if (cardNumber.startsWith('36')||cardNumber.startsWith('38')) {
            cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/diners.svg'; // Maestro
        }  else {
            cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/card.svg'; // Default
        }
    }

    // Add event listener to card number input
    cardNumberInput.addEventListener('input', updateCardLogo);

    // Restrict CVV input to exactly 3 digits
    cvcInput.addEventListener('input', () => {
        if (cvcInput.value.length > 3) {
            cvcInput.value = cvcInput.value.slice(0, 3);
        }
    });

    // Fetch and populate countries
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            console.log('Countries fetched:', data.length);
            const countrySelect = document.getElementById('country');
            countrySelect.innerHTML = '<option value="">Select Country</option>';
            // Sort the countries by their common names in ascending order
            data.sort((a, b) => a.name.common.localeCompare(b.name.common));

            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));

    // Fetch and populate states based on selected country
    document.getElementById('country').addEventListener('change', (event) => {
        const countryName = event.target.value;
        console.log('Selected country:', countryName);

        if (!countryName) {
            console.log('No country selected, clearing state and city dropdowns');
            document.getElementById('state').innerHTML = '<option value="">Select State</option>';
            document.getElementById('city').innerHTML = '<option value="">Select City</option>';
            return;
        }

        fetch('https://countriesnow.space/api/v0.1/countries/states', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ country: countryName })
        })
            .then(response => {
                console.log('State API response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('State data received:', data);
                const stateSelect = document.getElementById('state');
                stateSelect.innerHTML = '<option value="">Select State</option>';
                if (data.data && data.data.states) {
                    console.log('Number of states:', data.data.states.length);
                    data.data.states.forEach(state => {
                        const option = document.createElement('option');
                        option.value = state.name;
                        option.textContent = state.name;
                        stateSelect.appendChild(option);
                    });
                } else {
                    console.log('No states found in the response');
                }
                // Clear city dropdown when country changes
                document.getElementById('city').innerHTML = '<option value="">Select City</option>';
            })
            .catch(error => {
                console.error('Error fetching states:', error);
                alert('Error fetching states. Please check the console for details.');
            });
    });

    // Fetch and populate cities based on selected state
    document.getElementById('state').addEventListener('change', (event) => {
        const countryName = document.getElementById('country').value;
        const stateName = event.target.value;
        console.log('Selected country for city fetch:', countryName);
        console.log('Selected state for city fetch:', stateName);

        if (!stateName) {
            console.log('No state selected, clearing city dropdown');
            document.getElementById('city').innerHTML = '<option value="">Select City</option>';
            return;
        }

        fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ country: countryName, state: stateName })
        })
            .then(response => {
                console.log('City API response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('City data received:', data);
                const citySelect = document.getElementById('city');
                citySelect.innerHTML = '<option value="">Select City</option>';
                if (data.data) {
                    console.log('Number of cities:', data.data.length);
                    data.data.forEach(city => {
                        const option = document.createElement('option');
                        option.value = city;
                        option.textContent = city;
                        citySelect.appendChild(option);
                    });
                } else {
                    console.log('No cities found in the response');
                }
            })
            .catch(error => {
                console.error('Error fetching cities:', error);
                alert('Error fetching cities. Please check the console for details.');
            });
    });

    summaryConfirmBtn.addEventListener('click', (event) => {
        successContainer.style.display = 'flex';
        middleContainer.style.display = 'none';
        bottomContainer.style.display = 'none';
    })
    summaryBackBtn.addEventListener('click', (event) => {
        summaryContainer.style.display = 'none';
        cardDetails.style.display = 'block';
    })
    pinBtnContinue.addEventListener('click', (event) => {
        pinContainer.style.display = 'none';
        summaryContainer.style.display = 'block';

    })
    pinBackBtn.addEventListener('click', (event) => {
        pinContainer.style.display = 'none';
        cardDetails.style.display = 'block';
    })
    // Function to get IP address
    function getIpAddress() {
        return fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => data.ip)
            .catch(() => '0.0.0.0'); // Default IP if unable to fetch
    }

    // Form submission
    window.submitForm = async function () {

        const expiryPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$/; // MM/YY format
        const isValidExpiry = expiryPattern.test(expiryDateInput.value);

        if (!isValidExpiry) {
            alert('Invalid expiry date format. Use MM/YY.');
            return;
        }

        const [month, year] = expiryDateInput.value.split('/');
        const expiryMonth = parseInt(month, 10);
        const expiryYear = parseInt(year, 10);

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; // Last two digits of the current year (YY format)
        const currentMonth = currentDate.getMonth() + 1; // Current month (1-12)

        // Check if the year is in the past
        if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
            alert('The expiry date must be later than the current date.');
            return;
        }

        // Get the IP address
        const ipAddress = await getIpAddress();

        // Collect form data
        const formData = {
            amount: "200", // Fixed amount for example; adjust as needed
            currency: "USD",
            paymentOption: {
                card: {
                    cardNumber: cardNumberInput.value.replace(/\s+/g, ''),
                    cardHolderName: cardHolderNameInput.value,
                    expirationMonth: month,
                    expirationYear: `20${year}`, // Assuming the year is provided as YY
                    CVV: cvcInput.value,
                    threeD: {
                        methodNotificationUrl: "<methodNotificationURL>" // Replace with actual URL
                    }
                }
            },
            deviceDetails: {
                ipAddress: ipAddress // Use the fetched IP address
            }
        };
        console.log(formData)
        fetch('https://dumm.onrender.com/initiate-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Payment initiated successfully', data);

                if (data.status === "SUCCESS") {
                    if (data.paymentOption.card.threeD.version !== null) {
                        cardDetails.style.display = 'none';
                        // document.getElementById('middle-section').style.display = 'none';
                        // document.getElementById('bottom-section').style.display = 'none';
                        pinContainer.style.display = 'flex';
                    } else {
                        cardDetails.style.display = 'none';
                        // document.getElementById('middle-section').style.display = 'none';
                        // document.getElementById('bottom-section').style.display = 'none';
                        summaryContainer.style.display = 'block';
                    }

                } else {

                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error (e.g., show an error message)
            });
    };


});
