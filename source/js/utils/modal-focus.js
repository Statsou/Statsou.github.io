export const activeFocus = function () {
  const modal = document.querySelector('.modal');
  function modalFocus() {

    const startElement = modal.querySelector('[data-focus]');
    if (startElement) {
      startElement.focus();
    }
  };



  const buttonOpen = document.querySelector('.about__button');

  buttonOpen.addEventListener('click', () => {
    modalFocus();
  });
}
