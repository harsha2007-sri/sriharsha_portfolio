// ======================================
// 1. PORTFOLIO SLIDE NAVIGATION
// ======================================

const slides = document.querySelectorAll(".slide");
const navButtons = document.querySelectorAll(".nav-btn");

// Function to switch between slides
function showSlide(index) {

    // Check whether the slide exists
    if (index < 0 || index >= slides.length) {
        return;
    }

    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    // Remove active class from all navigation buttons
    navButtons.forEach(button => {
        button.classList.remove("active");
    });

    // Activate selected slide
    slides[index].classList.add("active");

    // Activate corresponding navigation button
    const activeButton = document.querySelector(
        `.nav-btn[data-slide="${index}"]`
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }
}


// ======================================
// 2. NAVIGATION BUTTON CLICK EVENTS
// ======================================

navButtons.forEach(button => {

    button.addEventListener("click", function () {

        const slideIndex = Number(this.dataset.slide);

        showSlide(slideIndex);

    });

});


// ======================================
// 3. EXPLORE MY WORK BUTTON
// ======================================

const exploreButton = document.querySelector(".primary-btn");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        showSlide(3);

    });

}


// ======================================
// 4. INITIALIZE PORTFOLIO
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    showSlide(0);

});


// ======================================
// 5. KEYBOARD NAVIGATION
// ======================================

document.addEventListener("keydown", function (event) {

    const currentIndex = Array.from(slides).findIndex(
        slide => slide.classList.contains("active")
    );

    if (event.key === "ArrowRight") {

        showSlide(Math.min(currentIndex + 1, slides.length - 1));

    }

    if (event.key === "ArrowLeft") {

        showSlide(Math.max(currentIndex - 1, 0));

    }

});