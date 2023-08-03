export const specificationThumbs = new Swiper('#specificationThumbs', {
  loop: true,
  spaceBetween: 8,
  freeMode: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 4.5,
    },
    768: {
      slidesPerView: 5.5,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,
    },
    1400: {
      slidesPerView: 8,
    },
  },
});

export const specificationSwiper = new Swiper('#specificationSlider', {
  loop: true,
  pagination: {
    el: '#specificationSlider .swiper-pagination',
  },
  navigation: {
    nextEl: '.specification .swiper-button-next',
    prevEl: '.specification .swiper-button-prev',
  },
  thumbs: {
    swiper: specificationThumbs,
  },
});
