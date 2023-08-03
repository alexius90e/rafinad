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
