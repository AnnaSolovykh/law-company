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
  
    breakpoints: {
      357: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      560: {
        slidesPerView: 1.75,
        spaceBetween: 20
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      710: {
        slidesPerView: 2.25,
        spaceBetween: 10
      },
      820: {
        slidesPerView: 2.35,
        spaceBetween: 10
      },
      880: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      950: {
        slidesPerView: 2.75,
        spaceBetween: 10
      },
      1010: {
        slidesPerView: 2.9,
        spaceBetween: 15
      },
      1090: {
        slidesPerView: 3,
        spaceBetween: 37
      },
      1211: {
        slidesPerView: 3.25,
        spaceBetween: 40
      },
      1300: {
        slidesPerView: 3.75,
        spaceBetween: 10
      },
      1390: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 4.25,
        spaceBetween: 10
      },
      1610: {
        slidesPerView: 4.6,
        spaceBetween: 5
      },
      1800: {
        slidesPerView: 5,
        spaceBetween: 10
      },
    }
  });
