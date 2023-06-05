const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.talk-btn');
const iconClose = document.querySelector('.icon-close');


btnPopup.addEventListener('click', () => {
    wrapper.classList.toggle('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

window.onload = function() {
    var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.transitionDelay = i * 0.5 + 's';
        boxes[i].style.opacity = 1;
    }
}
