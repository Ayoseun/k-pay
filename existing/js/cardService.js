



export function updateCardLogo(cardNumberInput,cardLogo) {
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
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/unionpay.svg'; // Maestro
  } else if (cardNumber.startsWith('36') || cardNumber.startsWith('38')) {
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/diners.svg'; // Maestro
  } else {
    cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/card.svg'; // Default
  }
}

export function formatExpiryDate(e) {
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
}

export function resetForm(document, cardNumberInput,
  cardHolderNameInput, cvcInput, expiryDateInput, inputs, cardLogo, country, cardCity, cardState
) {
  // Clear input fields
  cardNumberInput.value = '';
  cardHolderNameInput.value = '';
  cvcInput.value = '';
  expiryDateInput.value = '';
  inputs.forEach(input => input.value = '');
  // Reset the card logo
  cardLogo.src = 'https://ayoseun.github.io/k-pay/assets/card.svg'; // Default

  // Uncheck any checkboxes in dropdowns
  document.querySelectorAll('.payments-radio').forEach(checkbox => {
    checkbox.checked = false;
  });



  // Clear country, state, and city dropdowns
  country.selectedIndex = 0;
  cardState.innerHTML = '<option value="">Select State</option>';
  cardCity.innerHTML = '<option value="">Select City</option>';
}

