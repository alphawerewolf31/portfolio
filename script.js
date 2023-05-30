const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.talk-btn');
const iconClose = document.querySelector('.icon-close');


btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});



// const images = document.querySelectorAll('.showcase');

// images.forEach(image => {
//   image.addEventListener('mouseenter', () => {
//     image.style.opacity = '0.2';
//   });

//   image.addEventListener('mouseleave', () => {
//     image.style.opacity = '1';
//   });
// });

// const images = document.querySelectorAll('.showcase');

// images.forEach(image => {
//   let timeout;

//   image.addEventListener('mouseenter', () => {
//     timeout = setTimeout(() => {
//       image.style.opacity = '0.7';
//     }, 1000); // Delay in milliseconds (adjust as needed)
//   });

//   image.addEventListener('mouseleave', () => {
//     clearTimeout(timeout);
//     image.style.opacity = '1';
//   });
// });