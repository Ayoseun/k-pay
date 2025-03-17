export function formatExpiryDate(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      let month = value.slice(0, 2);
      if (parseInt(month, 10) > 12) {
        month = '12';
      }
      value = month + '/' + value.slice(2, 4);
    }
    e.target.value = value.slice(0, 5);
  }
  