// modal variables
const modal = document.querySelector('[data-model]');
const modalCloseBtn = document.querySelector('[data-model-close]');
const modalOverlay = document.querySelector('[data-model-overlay]');

// modal open function
const modalCloseFunc = function () {
    modal.classList.add('closed');
}
// add event listener 
modalOverlay.addEventListener('click',modalCloseFunc);
modalCloseBtn.addEventListener('click',modalCloseFunc);