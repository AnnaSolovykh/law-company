//Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    let cards = document.querySelectorAll('.card');
    const leftArrow = document.querySelector('.slide-left');
    const rightArrow = document.querySelector('.slide-right');
    let currentSlide = 0; 

    const updateSlider = () => {
        cards.forEach((card, index) => {
            const position = index - currentSlide;
            card.style.transform = `translateX(${30 * position}%)`;
        });
    };
    

    const moveToNextSlide = () => {
        if (currentSlide === cards.length - 1) {
            currentSlide = 0; 
        } else {
            currentSlide++;
        }
        updateSlider();
    };
    
    const moveToPrevSlide = () => {
        if (currentSlide === 0) {
            currentSlide = cards.length - 1; 
        } else {
            currentSlide--; 
        }
        updateSlider();
    };

    const pauseAutoplay = () => {
        clearInterval(autoplayInterval);
        setTimeout(resetAutoplay, 3000);
    };
    
    leftArrow.addEventListener('click', () => {
        moveToPrevSlide();
        pauseAutoplay();
    });

    rightArrow.addEventListener('click', () => {
        moveToNextSlide();
        pauseAutoplay();
    });

    let autoplayInterval = setInterval(moveToNextSlide, 3000);

    const resetAutoplay = () => {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(moveToNextSlide, 3000);
    };
    
    slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    slider.addEventListener('mouseleave', resetAutoplay);

    updateSlider();
});
