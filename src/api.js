export function fetchCountries() {
    return fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      });
  }
  
  export function fetchStates(countryName) {
    return fetch('https://countriesnow.space/api/v0.1/countries/states', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ country: countryName })
    })
      .then(response => response.json())
      .then(data => data.data.states);
  }
  
  export function fetchCities(countryName, stateName) {
    return fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ country: countryName, state: stateName })
    })
      .then(response => response.json())
      .then(data => data.data);
  }
  
  export function getIpAddress() {
    return fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => data.ip)
      .catch(() => '0.0.0.0');
  }
  
  export function initiatePayment(formData) {
    return fetch('https://dumm.onrender.com/initiate-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json());
  }