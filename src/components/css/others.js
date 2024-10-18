export const todo = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.todo{
font-size:0.5rem;
    color: #677489;
font-family:'Poppins'; sans-serif;
}
`

export const pinStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
.pin-container {
    background: #fff;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    margin-top: 30px;



}

.pin-container p {
    color: #000;
    width: 70%;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
}

.pin-inputs input {
    width: 30px;
    height: 30px;
    margin: 10px;
    font-size: 24px;
    font-family: 'Inter', sans-serif;
    text-align: center;
    border-radius: 5px;
    border: 0.5px solid #4750B2;
}

/* Remove the spinner arrows from the number inputs for Chrome, Safari, Edge, and Opera */
.pin-inputs input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;

}

/* Remove the spinner arrows for Firefox */
.pin-inputs input[type="number"] {
    -moz-appearance: textfield;
    outline: none;
}

.pin-buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 5px;
    margin-bottom: 30px;
}

.pin-continue {
    padding: 5px 10px;
    border: none;
    background-color: #19624C;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    font-size: 10px;
    padding: 5px 50px 5px 50px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
}

.pin-back {
    color: #19624C;
    font-size: 10px;
    padding: 5px 50px 5px 50px;
    font-weight: 300;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    background-color: #CFF1E6;
}

@media screen and (max-width: 436px) {
    .pin-container {
        background: #fff;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 8px;
        margin-top: 30px;
    
    
    
    }
    .pin-container  p{
        color: #000;
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-size: 0.5rem;
        text-align: center;
        font-weight: 400;
    }
    .pin-inputs input {
        width: 13%;
        height:3vh;
        margin: 5px;
        font-size: 0.5rem;
        font-family: 'Inter', sans-serif;
    text-align: center;
        border-radius: 2px;
        border: 0.5px solid #4750B2;
    }
    .pin-buttons {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        gap: 7px;
        margin-bottom: 30px;
    }

    .pin-continue {
        padding: 5px 10px;
        border: none;
        background-color: #19624C;
        color: white;
        cursor: pointer;
        border-radius: 2px;
        font-size: 0.45rem;
        padding: 5px 20px 5px 20px;
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
    }

    .pin-back {
        color: #19624C;
        font-size: 0.45rem;
        padding: 5px 20px 5px 20px;
        font-weight: 300;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        background-color: #CFF1E6;
    }
}`

export const popupStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* Popup container */
.popup {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Black background with transparency */
  justify-content: center;
  align-items: center;
}

/* Popup content */
.popup-content {
  background-color: #fff;
  padding: 20px;
  flex-direction: column;

  font-family: 'Inter', sans-serif;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  max-width: 400px;
  width: 100%;
}

/* Close button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-family: 'Inter', sans-serif;
  font-size: 0.5rem;
  font-weight: bold;
  cursor: pointer;
}

.error-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-content p {
  font-family: 'Inter', sans-serif;
  font-size: 0.5rem;
}

.error-content img {
  width: 48px;
  height: 48px;
}

.error-content h2 {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
}

.close-btn:hover {
  color: red;
}
`