const burgerIcon = document.querySelector('.burger-icon');
const menuItems = document.querySelector('.menu-items');
burgerIcon.addEventListener('click', () => {
    menuItems.classList.toggle('visible');
    burgerIcon.textContent = menuItems.classList.contains('visible') ? '❎' : '㊂'; 
});
///////////////
const modeToggle = document.getElementById('mode-toggle');
if (localStorage.getItem('backgroundChanged') === 'true') {
    modeToggle.style.backgroundColor = 'black'; 
}

modeToggle.addEventListener('click', function() {
    if (modeToggle.textContent === '🅞🅝') {
        modeToggle.textContent = '🅞🅕🅕';
        modeToggle.style.backgroundColor = 'black'; 
        localStorage.setItem('backgroundChanged', 'true'); 
    } else {
        modeToggle.textContent = '🅞🅝';
        modeToggle.style.backgroundColor = '#f73636'; 
        localStorage.setItem('backgroundChanged', 'false'); 
    }
});
///////////////

const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

if (localStorage.getItem('modeEnabled') === 'true') {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('modeEnabled', 'true'); 
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('modeEnabled', 'false'); 
    }
});
///////////////

const image = document.querySelector('.image');

window.addEventListener('resize', () => {
  image.width = window.innerWidth;
});


