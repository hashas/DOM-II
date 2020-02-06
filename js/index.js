// Your code goes here

// mouseover

const myNav = document.querySelectorAll('.nav-link');
// myNav[1].addEventListener('mouseover', (event) => {
//     event.target.style.color = 'yellow';
// });

myNav.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.color = 'yellow';
    });
});

// keydown

const bodyEvent = document.querySelector('body');

bodyEvent.addEventListener('keydown', (event) => {
    alert('You pressed the secret key!');
});

// resize

window.addEventListener('resize', (event) => {
    alert('The window has been resized');
})

// mouseenter

const contentSection = document.querySelector('.content-section');

contentSection.addEventListener('mouseenter', (event) => {
    event.target.style.border = '10px solid orange';
});
// contentSection.forEach(element => {
//     element.addEventListener('mouseenter', (event) => {
//         event.target.style.border = '10px solid orange';
//     });
// });