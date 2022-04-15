// Define DOM Constants
const carousel = document.getElementById("carousel");
const slider = document.getElementById("slider");
const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");


// Event Listeners
slider.addEventListener("transitionend", handleSliderTransitionEnd)
slider.addEventListener("mouseenter", pauseSlider)
slider.addEventListener("mouseleave", startSlider)
prev[0].addEventListener("click", handlePrev)
next[0].addEventListener("click", handleNext)


//  IMAGE CAROUSEL PART
let slideInterval;
let direction = -1;

function handlePrev() {
    if(direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
    
    }
    
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = "translate(33.33%)";
}

function handleNext() {
    direction = -1;

    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = "translate(-33.33%)";
}

function handleSliderTransitionEnd() {
    if(direction === -1) {
      slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
      slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(() => {
      slider.style.transition = "all 0.5s";
    }, false) 
}

function startSlider() {
    slideInterval = setInterval(() => {
        handleNext();
    }, 4000);
};

function pauseSlider() {
    clearInterval(slideInterval);
};

window.onload = (e) => {
    startSlider();
}