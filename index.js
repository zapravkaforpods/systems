const menu = document.querySelector('.menu');

const menuItems = menu.querySelectorAll('li');

menuItems.forEach(menuItem => {
  const subMenu = menuItem.querySelector('ul');
  const menuLink = menuItem.querySelector('a');

  menuLink.addEventListener('mouseenter', () => {
    subMenu.style.display = 'block';
  });

  menuLink.addEventListener('mouseleave', () => {
    subMenu.style.display = 'none';
  });
});