const filterToggler = document.querySelector('.apartments__filter-button');

const filterLayout = document.querySelector('.apartments__layout');

const apartments = document.querySelector('.apartments');

filterToggler.addEventListener('click', () => {
  apartments.classList.toggle('active');
});

filterLayout.addEventListener('click', () => {
  apartments.classList.remove('active');
});
