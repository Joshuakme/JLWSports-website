// Variables & Constants
    const body = document.getElementsByTagName('body');
    console.log(body)
    // Footer Register Newsletter section
    const registerNewsEmail = document.getElementById('subscribe-email');
    const registerNewsBtn = document.getElementById('subscribe-btn');
        // Nav Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const hamburgerBar = hamburger.childNodes;
    const navMenu = document.querySelector(".navLink-wrapper");

    
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
    
    hamburger.addEventListener('click', (e) => {
        // First Hamburger Bar
        hamburgerBar[1].classList.toggle('btn1-triggered');
        // Second Hamburger Bar
        hamburgerBar[3].classList.toggle('btn2-triggered');
        // Third Hamburger Bar
        hamburgerBar[5].classList.toggle('btn3-triggered');
        // Move the menu from right to left
        navMenu.classList.toggle("menu-triggered");

        body[0].classList.toggle = "overflow-hidden";
    })