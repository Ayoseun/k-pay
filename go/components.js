import { fetchCountries, fetchStates, fetchCities } from './api.js';

export function initializeDropdowns(widget) {
  const bottomSection = widget.querySelector('#bottom-section');
  const dropdownsHTML = `
    <div class="dropdown" id="dropdown-1">
      <!-- Card payment dropdown content -->
    </div>
    <div class="dropdown" id="dropdown-2">
      <!-- Crypto payment dropdown content -->
    </div>
    <div class="dropdown" id="dropdown-3">
      <!-- Bank account dropdown content -->
    </div>
    <div class="dropdown" id="dropdown-4">
      <!-- Other payment methods dropdown content -->
    </div>
  `;
  bottomSection.innerHTML = dropdownsHTML;

  widget.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', function () {
      const dropdown = this.parentElement;
      widget.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('open');
          d.querySelector('.dropdown-checkbox').checked = false;
        }
      });
      dropdown.classList.toggle('open');
      dropdown.querySelector('.dropdown-checkbox').checked = dropdown.classList.contains('open');
    });
  });
}

export function initializeCardForm(widget) {
  const cardForm = widget.querySelector('#card-details');
  if (!cardForm) return;

  const cardNumberInput = cardForm.querySelector('#card-number');
  const cardHolderNameInput = cardForm.querySelector('#cardholder-name');
  const cvcInput = cardForm.querySelector('#cvc');
  const cardLogo = cardForm.querySelector('#card-logo');
  const expiryDateInput = cardForm.querySelector('#expiry-date');

  // Initialize card form event listeners and logic
  // ...

  fetchCountries().then(countries => {
    const countrySelect = cardForm.querySelector('#country');
    // Populate country dropdown
    // ...
  });

  // Add event listeners for country and state changes
  // ...
}

export function initializePinForm(widget) {
  const pinForm = widget.querySelector('#pin-container');
  if (!pinForm) return;

  // Initialize pin form event listeners and logic
  // ...
}

export function initializeSummary(widget) {
  const summaryContainer = widget.querySelector('#summary-container');
  if (!summaryContainer) return;

  // Initialize summary container event listeners and logic
  // ...
}

export function initializeSuccess(widget) {
  const successContainer = widget.querySelector('#success-container');
  if (!successContainer) return;

  // Initialize success container event listeners and logic
  // ...
}