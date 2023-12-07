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

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    const contactsContainer = document.querySelector("#contactActions");
    const toTopButton = document.querySelector("#toTopButton");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        contactsContainer.style.display = "block";
        toTopButton.style.display = "block";
    } else {
        contactsContainer.style.display = "none";
        toTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const delay = 3000; 

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
    if (next) {
    current += current > maxLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
    changeSlide();
    restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
    changeSlide(false);
    restart();
});
