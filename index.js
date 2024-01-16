const swiper = new Swiper(".swiper-slider", {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
      enabled: true
    },
  
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    },
  
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    breakpoints: {
      357: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1350: {
        slidesPerView: 3.5,
        spaceBetween: 20
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
