export const successStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.success-container {
    display: none;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    margin: 20px 0px 20px 0px;
}

.success-container h1 {
    color: #000;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
}

.success-container p {
    color: #79747E;
    font-family: 'Inter', sans-serif;
    font-size: 10px;
}

.success-container img {
    margin-bottom: 10px;
    width: 48px;
    height: 48px;
}

.success-container button {
    width: 60%;
    padding: 10px;
    background-color: #19624C;
    color: white;
    border: none;
    font-family: 'Inter', sans-serif;
    border-radius: 5px;
    font-size: 10px;
    cursor: pointer;
    padding-left: 15px;
    margin-bottom: 20px;
    padding-right: 15px;

}
@media screen and (max-width:436px) {
    .success-container {
        display: none;
        flex-direction: column;
        align-items: center;
        font-family: 'Inter', sans-serif;
        font-size: 0.4rem;
        margin: 20px 0px 20px 0px;
    }
    .success-container h1 {
        color: #000;
        font-family: 'Inter', sans-serif;
        font-size: 0.5rem;
        font-weight: 400;
    }
    
    .success-container p {
        color: #79747E;
        font-family: 'Inter', sans-serif;
        font-size: 0.35rem;
    }
    
    .success-container img {
        margin-bottom: 10px;
        width: 30px;
        height: 30px;
    }

    .success-container button {
        width: 60%;
        padding: 8px;
        background-color: #19624C;
        color: white;
        border: none;
        font-family: 'Inter', sans-serif;
        border-radius: 3px;
        font-size: 0.5rem;
        cursor: pointer;
        padding-left: 15px;
        margin-bottom: 20px;
        padding-right: 15px;
    
    }
}
`