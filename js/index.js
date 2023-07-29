const firstScreenThumbs = new Swiper('#firstScreenThumbs', {
  loop: true,
  spaceBetween: 8,
  freeMode: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,

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
});

const firstScreenSwiper = new Swiper('#firstScreenSlider', {
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: '#firstScreenSlider .swiper-pagination',
  },
  navigation: {
    nextEl: '.first-screen .swiper-button-next',
    prevEl: '.first-screen .swiper-button-prev',
  },
  thumbs: {
    swiper: firstScreenThumbs,
  },
});

const firstScreen = document.querySelector('.first-screen');

firstScreen.addEventListener('pointermove', (event) => {
  const firstScreenSlides = event.currentTarget.querySelectorAll('.first-screen__slide');

  const activeSlide = firstScreenSlides[firstScreenSwiper.activeIndex];

  const bg = activeSlide.querySelector('.first-screen-bg');
  const primaryLayer = activeSlide.querySelector('.first-screen-primary');
  const secondaryLayer = activeSlide.querySelector('.first-screen-secondary');

  const layers = [
    { element: bg, speed: 0.01 },
    { element: primaryLayer, speed: 0.06 },
    { element: secondaryLayer, speed: 0.03 },
  ];

  const parallaxLeftOffset = activeSlide.getBoundingClientRect().left;
  const parallaxTopOffset = activeSlide.getBoundingClientRect().top;

  const coordX = event.clientX - parallaxLeftOffset - 0.5 * activeSlide.offsetWidth;
  const coordY = event.clientY - parallaxTopOffset - 0.5 * activeSlide.offsetHeight;

  layers.forEach((layer) => {
    if (layer.element) {
      const layerSpeed = layer.speed;
      const x = -(coordX * layerSpeed).toFixed(2);
      const y = -(coordY * layerSpeed).toFixed(2);
      layer.element.setAttribute('style', `transform: translate(${x}px, ${y}px) scale(1.08);`);
    }
  });
});
