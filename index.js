const burgerIcon = document.querySelector('.burger-icon');
const menuItems = document.querySelector('.menu-items');

burgerIcon.addEventListener('click', () => {
    menuItems.classList.toggle('visible');
    burgerIcon.textContent = menuItems.classList.contains('visible') ? '❎' : '㊂'; // Зміна тексту іконки при відкритті/закритті меню
});
