export const firstScreenParalax = document.querySelector('.first-screen');

firstScreenParalax.addEventListener('pointermove', (event) => {
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
