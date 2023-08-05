const modalTogglers = document.querySelectorAll('.modal-toggler');

const modal = document.querySelector('.modal');

modalTogglers.forEach((button) =>
  button.addEventListener('click', () => modal.classList.add('active'))
);

modal.addEventListener('click', ({ target }) => {
  if (target.classList.contains('modal__layout')) modal.classList.remove('active');
  if (target.classList.contains('modal__close-button')) modal.classList.remove('active');
});
