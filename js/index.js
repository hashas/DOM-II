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

// stop nav items from refreshing page using preventDefault()

myNav.forEach(element => {
    element.addEventListener('click', (event) => {
        alert('Cannot refresh!')
        event.preventDefault();
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

const contentSection = document.querySelectorAll('.content-section');

contentSection.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        event.target.style.border = '10px solid orange';
    });
});

// mouseleave

contentSection.forEach(element => {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.border = 'none';
    });
});

// drag

const dragelement = document.querySelectorAll('img');

dragelement.forEach(element => {
    element.addEventListener('drag', (event) => {
        alert('STOP! Leave me in my place');
    });
});

// stop propagation example

const dest1 = document.querySelector('.destination');

dest1.addEventListener('click', () => {
    alert('DIV: We are still under construction')
});

const button1 = document.querySelector('.btn');

button1.addEventListener('click', () => {
    alert('BUTTON: We are still under construction')
    event.stopPropagation();
});

// load
window.addEventListener('load', () => {
    alert('This alert showed up on loading the window')
});

// double click

bodyEvent.addEventListener('dblclick', () => {
    alert('Secret click at ' + `${event.timeStamp}`);
});
