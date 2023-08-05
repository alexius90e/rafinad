export const firstScreenSlider = new Swiper('#firstScreenSlider', {
  loop: true,
  spaceBetween: 15,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5.5,
    },
    1200: {
      slidesPerView: 6.2,
    },
  },
  navigation: {
    nextEl: '#firstScreenSlider .swiper-button-next',
    prevEl: '#firstScreenSlider .swiper-button-prev',
  },
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    type: 'classic',
  },
});
