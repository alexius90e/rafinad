export const firstScreen = document.querySelector('.first-screen');

firstScreen.addEventListener('pointermove', (event) => {
  const firstScreenParalax = event.currentTarget.querySelector('.first-screen__paralax');
  const bg = firstScreenParalax.querySelector('.first-screen-bg');
  const primaryLayer = firstScreenParalax.querySelector('.first-screen-primary');
  const secondaryLayer = firstScreenParalax.querySelector('.first-screen-secondary');

  const layers = [
    { element: bg, speed: 0.01 },
    { element: primaryLayer, speed: 0.06 },
    { element: secondaryLayer, speed: 0.03 },
  ];

  const parallaxLeftOffset = firstScreenParalax.getBoundingClientRect().left;
  const parallaxTopOffset = firstScreenParalax.getBoundingClientRect().top;

  const coordX = event.clientX - parallaxLeftOffset - 0.5 * firstScreenParalax.offsetWidth;
  const coordY = event.clientY - parallaxTopOffset - 0.5 * firstScreenParalax.offsetHeight;

  layers.forEach((layer) => {
    if (layer.element) {
      const layerSpeed = layer.speed;
      const x = -(coordX * layerSpeed).toFixed(2);
      const y = -(coordY * layerSpeed).toFixed(2);
      layer.element.setAttribute('style', `transform: translate(${x}px, ${y}px) scale(1.08);`);
    }
  });
});

export const firstScreenSlider = new Swiper('#firstScreenSlider', {
  loop: true,
  spaceBetween: 11,
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
      slidesPerView: 6.5,
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

const carButton = document.querySelector('.maps__descripion_car .button');

const transportButton = document.querySelector('.maps__descripion_transport .button');

const buttons = [carButton, transportButton];

const carMap = document.querySelector('.maps__map_car');

const transportMap = document.querySelector('.maps__map_transport');

const maps = [carMap, transportMap];

carButton.addEventListener('click', (event) => {
  buttons.forEach((button) => {
    button.classList.toggle('button_light');
    button.classList.toggle('button_dark');
  });

  maps.forEach((map) => map.classList.toggle('active'));
});

transportButton.addEventListener('click', (event) => {
  buttons.forEach((button) => {
    button.classList.toggle('button_light');
    button.classList.toggle('button_dark');
  });

  maps.forEach((map) => map.classList.toggle('active'));
});

// apartments

const filterToggler = document.querySelector('.apartments__filter-button');

const filterLayout = document.querySelector('.apartments__layout');

const apartments = document.querySelector('.apartments');

const filter = document.querySelector('.apartments__filter');

filterToggler.addEventListener('click', () => {
  apartments.classList.toggle('active');
});

filterLayout.addEventListener('click', () => {
  apartments.classList.remove('active');
});
