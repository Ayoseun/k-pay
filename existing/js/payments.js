function updateContentDisplay(document,currentlyDisplayedContent,contentDisplay,paymentDiv) {
    const content = paymentDiv.querySelector('.payment-content');
  
    // If there's currently displayed content, move it back to its original payment div
    if (currentlyDisplayedContent) {
      const originalPaymentDiv = document.querySelector(`.payments[data-id="${currentlyDisplayedContent.getAttribute('data-id')}"]`);
      if (originalPaymentDiv) {
        originalPaymentDiv.appendChild(currentlyDisplayedContent);
      }
      currentlyDisplayedContent.style.display = 'none';
    }
  
    if (content) {
      content.style.display = 'block';
      contentDisplay.appendChild(content);
      contentDisplay.style.display = 'block';
      currentlyDisplayedContent = content;
    } else {
      contentDisplay.style.display = 'none';
      currentlyDisplayedContent = null;
    }
  }
  
  // Function to update radio button and content
  export function updatePaymentOption(document,contentDisplay,paymentDiv) {
    let currentlyDisplayedContent = null;
    // Uncheck all radio buttons
    document.querySelectorAll('.payments-radio').forEach(radio => {
      radio.checked = false;
    });
  
    // Check the radio button in the clicked payment div
    const radio = paymentDiv.querySelector('.payments-radio');
    if (radio) {
      radio.checked = true;
    }
  
    updateContentDisplay(document,currentlyDisplayedContent,contentDisplay,paymentDiv);
  }