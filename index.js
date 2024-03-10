const burgerIcon = document.querySelector('.burger-icon');
const menuItems = document.querySelector('.menu-items');

burgerIcon.addEventListener('click', () => {
    menuItems.classList.toggle('visible');
    burgerIcon.textContent = menuItems.classList.contains('visible') ? '❎' : '㊂'; 
});

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
