function initOrokiipayWidget(container) {
    // Initialize widget UI inside the container
    container.innerHTML = `
      <div id="payment-form">
        <div class="dropdown-header">Payment Methods</div>
        <div class="dropdown">
          <input type="checkbox" class="dropdown-checkbox">
          <div class="dropdown-content">Card Payment Form Goes Here</div>
        </div>
        <!-- Card details and form elements -->
        <input type="text" id="card-number" placeholder="Card Number">
        <input type="text" id="cardholder-name" placeholder="Cardholder Name">
        <input type="text" id="expiry-date" placeholder="MM/YY">
        <input type="text" id="cvc" placeholder="CVC">
        <button id="submit-payment">Submit Payment</button>
      </div>
    `;
  
    console.log("Orokiipay Widget Initialized");
  
    // Now attach the dropdown and form handlers inside this function
  
    // Dropdown handler
    document.querySelectorAll('.dropdown-header').forEach(header => {
      header.addEventListener('click', function () {
        const dropdown = this.parentElement;
  
        // Close other dropdowns
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
  
    // Attach card form logic (card logo, validation, etc.)
    const cardNumberInput = document.getElementById('card-number');
    const cardLogo = document.getElementById('card-logo'); // Assuming you have a card logo somewhere
    const cvcInput = document.getElementById('cvc');
    const expiryDateInput = document.getElementById('expiry-date');
  
    // Format Expiry Date
    expiryDateInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, ''); // Only digits allowed
      if (value.length >= 2) {
        let month = value.slice(0, 2);
        if (parseInt(month, 10) > 12) month = '12'; // Max month is 12
        value = month + '/' + value.slice(2, 4); // Format MM/YY
      }
      e.target.value = value.slice(0, 5); // Limit length
    });
  
    // Card logo based on card number
    cardNumberInput.addEventListener('input', () => {
      const cardNumber = cardNumberInput.value.replace(/\s+/g, '');
      if (cardNumber.startsWith('4')) {
        cardLogo.src = './assets/visa.svg'; // Visa
      } else if (cardNumber.startsWith('5')) {
        cardLogo.src = './assets/mastercard.svg'; // MasterCard
      } else {
        cardLogo.src = './assets/visa.svg'; // Default
      }
    });
  
    // CVC Input length restriction
    cvcInput.addEventListener('input', () => {
      if (cvcInput.value.length > 3) {
        cvcInput.value = cvcInput.value.slice(0, 3);
      }
    });
  
    // Form submission
    document.getElementById('submit-payment').addEventListener('click', submitForm);
  }
  
  window.Orokiipay = { initOrokiipayWidget };
  
  // Submit form logic
  async function submitForm() {
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderNameInput = document.getElementById('cardholder-name');
    const expiryDateInput = document.getElementById('expiry-date');
    const cvcInput = document.getElementById('cvc');
    
    const expiryPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$/;
    const isValidExpiry = expiryPattern.test(expiryDateInput.value);
    
    if (!isValidExpiry) {
      alert('Invalid expiry date. Please use MM/YY format.');
      return;
    }
    
    const [month, year] = expiryDateInput.value.split('/');
    const expiryMonth = parseInt(month, 10);
    const expiryYear = parseInt(year, 10) + 2000;
  
    const ipAddress = await getIpAddress(); // Function to get IP address
    
    const formData = {
      cardNumber: cardNumberInput.value,
      cardHolderName: cardHolderNameInput.value,
      expirationMonth: expiryMonth,
      expirationYear: expiryYear,
      cvc: cvcInput.value,
      ipAddress: ipAddress
    };
  
    console.log('Form data:', formData);
    
    // Submit form data to the API
    fetch('https://example.com/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log('Payment success:', data))
      .catch(error => console.error('Payment failed:', error));
  }
  
  // Function to get the user's IP address
  async function getIpAddress() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Failed to get IP address', error);
      return '0.0.0.0';
    }
  }
  