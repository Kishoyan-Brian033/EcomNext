'use strict';
// modal variables
const modal = document.querySelector('[data-model]');
const modelCloseBtn = document.querySelector('[data-model-close-btn]');
const modelCloseOverlay = document.querySelector('[data-model-overlay]');
// model functions
const modelCloseFunc = function () {
    modal.classList.add('closed');
}
// add eventlistener
modelCloseOverlay.addEventListener('click', modelCloseFunc);
modelCloseBtn.addEventListener('click', modelCloseFunc);




// notification variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[ data-toast-close]');

// adding event listener
toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
})