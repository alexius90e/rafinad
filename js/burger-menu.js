const burgerBtn = document.querySelector('.header__burger-button');

const header = document.querySelector('.header');

const menu = document.querySelector('.menu');

burgerBtn.addEventListener('click', () => header.classList.toggle('active'));

menu.addEventListener('click', (event) => {
  const isLink = event.target.classList.contains('menu__link');
  if (isLink) header.classList.remove('active')
});
