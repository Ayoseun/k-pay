
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

