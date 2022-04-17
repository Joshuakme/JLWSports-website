// Variables & Constants
    const body = document.getElementsByTagName('body');
    const footer = document.getElementsByTagName('footer');

    // Footer Register Newsletter section
    const emailSubWrapper = document.getElementById('newsletter-subscribe-wrapper');
    const regEmailForm = document.getElementById('email-sub-form');
    const registerNewsEmail = document.getElementById('subscribe-email');
    const registerNewsBtn = document.getElementById('subscribe-btn');
    // Email Loading Modal
    const emailModalDiv = document.createElement('div');
    const modalLoadingSpan = document.createElement('span');
    const loadingText = document.createElement('p');
    const loadingSpinner = document.createElement('div');
    // Nav Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const hamburgerBar = hamburger.childNodes;
    const navMenu = document.querySelector(".navLink-wrapper");

    // Variables
    let emailSubList = [];
    let currentEmailSub = '';

    


    // Event Listeners
    regEmailForm.addEventListener('submit', loadLoadingModal);

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
    });

    if(registerNewsEmail.value != '' && registerNewsEmail.value != null) {
        registerNewsBtn.removeAttribute('disabled');
        registerNewsBtn.style.backgroundColor = "#c30032";
        registerNewsBtn.style.color = "white";
        registerNewsBtn.style.border = "2px solid transparent";
    };

    registerNewsEmail.addEventListener('change', (e) => {
        currentEmailSub = e.target.value;
        emailSubList = [...emailSubList, currentEmailSub];     // Will add the new EmailSub to the list
    });
    
    hamburger.addEventListener('click', (e) => {
        // First Hamburger Bar
        hamburgerBar[1].classList.toggle('btn1-triggered');
        // Second Hamburger Bar
        hamburgerBar[3].classList.toggle('btn2-triggered');
        // Third Hamburger Bar
        hamburgerBar[5].classList.toggle('btn3-triggered');
        // Move the menu from right to left
        navMenu.classList.toggle("menu-triggered");

        body[0].classList.toggle("overflow-hidden");
    });


// Handle Email Subscription Fuction
function loadLoadingModal(e) {
    // Prevent the form from refreshing when submit form
    e.preventDefault();

    // Add Loading Modal to let user indicate the process is still going
        // Create Modal div <div class="modal" id="email-sub-modal"></div>
    emailModalDiv.classList.add("modal");
    emailModalDiv.id = "email-sub-modal";
    emailSubWrapper.appendChild(emailModalDiv);

    const emailSubModal = document.getElementById('email-sub-modal');

    // Create Modal span <span class="loadingBox" id="email-sub-modal-loading"></span>
    modalLoadingSpan.classList.add("loadingBox");
    modalLoadingSpan.id = "email-sub-modal-loading";
    emailSubModal.appendChild(modalLoadingSpan);

    // Create Modal paragraph <p class="loadingText">Loading...</p>
    loadingText.classList.add("loadingText");
    loadingText.innerText = "Loading..."
    modalLoadingSpan.appendChild(loadingText);

    // Create Modal Loading Spinner
    loadingSpinner.classList.add("loadingSpinner");
    modalLoadingSpan.appendChild(loadingSpinner);

    // Save to LocalStorage
    localStorage.setItem("email_sub_list", JSON.parse(emailSubList))

    setTimeout(closeLoadingModal, 1500);    
}


function closeLoadingModal() {
    emailModalDiv.remove();
    modalLoadingSpan.remove();
    loadingText.remove();

    // Display Success Message
    alert(`Subscribed Successfully! Your email is: ${currentEmailSub}`);

    // Clear the email form input
    registerNewsEmail.value = '';
}