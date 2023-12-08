
//Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    const enFlag = document.getElementById('enFlag');
    const ruFlag = document.getElementById('ruFlag');
    
    const currentLanguage = window.location.pathname.includes('/ru') ? 'ru' : 'en';
    
    if (currentLanguage === 'en') {
        ruFlag.style.display = 'block';
        enFlag.style.display = 'none';
    } else {
        enFlag.style.display = 'block';
        ruFlag.style.display = 'none';
    }

    enFlag.addEventListener('click', function() {
        window.location.href = window.location.pathname.replace(/^\/ru/, '/en');
    });

    ruFlag.addEventListener('click', function() {
        window.location.href = window.location.pathname.replace(/^\/en/, '/ru');
    });
});



//Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    let cards = document.querySelectorAll('.card');
    const leftArrow = document.querySelector('.slide-left');
    const rightArrow = document.querySelector('.slide-right');
    let currentSlide = 0;

    const updateSlider = () => {
        const visibleRange = 3;
        cards.forEach((card, index) => {
            const position = index - currentSlide;
    
            if (position >= -visibleRange && position <= visibleRange) {
                card.style.opacity = 1;
                card.style.transform = `translateX(${100 * position}%)`;
            } else {
                card.style.opacity = 0;
            }
        });
    };

    const moveToNextSlide = () => {
        currentSlide = (currentSlide + 1) % cards.length;
        updateSlider();
    };

    const moveToPrevSlide = () => {
        currentSlide = (currentSlide - 1 + cards.length) % cards.length;
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
