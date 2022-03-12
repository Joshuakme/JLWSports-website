// Variables & Constants
const registerNewsEmail = document.getElementById('subscribe-email');
const registerNewsBtn = document.getElementById('subscribe-btn');

// Event Listeners
registerNewsEmail.addEventListener('keyup', (e) => {
    if (e.target.value != '' && e.target.value != null) {
        registerNewsBtn.removeAttribute('disabled');
        registerNewsBtn.style.backgroundColor = "#c30032";
        registerNewsBtn.style.color = "white";
        registerNewsBtn.style.border = "2px solid transparent";
    }

    if(e.target.value == '') {
        registerNewsBtn.setAttribute('disabled', true);
        registerNewsBtn.style.backgroundColor = "rgba(239, 239, 239, 0.3)";
        registerNewsBtn.style.color = "rgba(16, 16, 16, 0.3)";
        registerNewsBtn.style.border = "2px solid rgb(235, 235, 235)";
    }
})