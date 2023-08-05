import './burger-menu.js';
import './modal.js';

export const detailsSliderThumbs = new Swiper('#detailsSliderThumbs', {
  spaceBetween: 15,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    320: {
      direction: 'horizontal',
      slidesPerView: 3,
    },
    576: {
      direction: 'vertical',
      slidesPerView: 5,
    },
  },
});

const detailsSlider = new Swiper('#detailsSlider', {
  loop: true,
  navigation: {
    nextEl: '.details__slider .swiper-button-next',
    prevEl: '.details__slider .swiper-button-prev',
  },
  pagination: {
    el: '#detailsSlider .swiper-pagination',
  },
  thumbs: {
    swiper: detailsSliderThumbs,
  },
});
