const burgerIcon = document.querySelector('.burger-icon');
const menuItems = document.querySelector('.menu-items');

burgerIcon.addEventListener('click', () => {
    menuItems.classList.toggle('visible');
    burgerIcon.textContent = menuItems.classList.contains('visible') ? '❎' : '㊂'; // Зміна тексту іконки при відкритті/закритті меню
});

const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
body.classList.add('light-mode');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});


const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', function() {
    if (modeToggle.textContent === '🅞🅝') {
        modeToggle.textContent = '🅞🅕🅕'; 
    }
     else {
        modeToggle.textContent = '🅞🅝'; 
    }
});


