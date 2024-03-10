const burgerIcon = document.querySelector('.burger-icon');
const menuItems = document.querySelector('.menu-items');

burgerIcon.addEventListener('click', () => {
    menuItems.classList.toggle('visible');
    burgerIcon.textContent = menuItems.classList.contains('visible') ? '❎' : '㊂'; // Зміна тексту іконки при відкритті/закритті меню
});

//////////////
const modeToggle = document.getElementById('mode-toggle');

// Перевіряємо, чи є попередній стан кнопки в localStorage
if (localStorage.getItem('backgroundChanged') === 'true') {
    modeToggle.style.backgroundColor = 'black'; // Змінити фон кнопки на чорний колір
}
//////////////
modeToggle.addEventListener('click', function() {
    if (modeToggle.textContent === '🅞🅝') {
        modeToggle.textContent = '🅞🅕🅕';
        modeToggle.style.backgroundColor = 'black'; // Змінити фон кнопки на чорний колір
        localStorage.setItem('backgroundChanged', 'true'); // Зберігаємо стан фону в localStorage
    } else {
        modeToggle.textContent = '🅞🅝';
        modeToggle.style.backgroundColor = '#f73636'; // Повернути початковий фон кнопки
        localStorage.setItem('backgroundChanged', 'false'); // Зберігаємо стан фону в localStorage
    }
});
