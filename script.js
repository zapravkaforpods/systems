const loginForm = document.getElementById('loginForm');
const adminPanel = document.getElementById('adminPanel');
const textForm = document.getElementById('textForm');
const logoutButton = document.getElementById('logoutButton');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Перевірка логіну та пароля (замініть на вашу логіку)
    if (username === 'zapravka2024' && password === '10377710') {
        adminPanel.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        alert('Неправильний логін або пароль.');
    }
});

textForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = document.getElementById('text').value;

    // Збереження тексту (замініть на вашу логіку)
    localStorage.setItem('adminText', text);

    alert('Текст успішно збережено.');
});

// logoutButton.addEventListener('click', () => {
//     adminPanel.style.display = 'none';
//     loginForm.style.display = 'block';

//     // Очищення локального сховища (якщо потрібно)
//     localStorage.removeItem('adminText');
// });

// Завантаження тексту з локального сховища при завантаженні сторінки
const savedText = localStorage.getItem('adminText');
if (savedText) {
    document.getElementById('text').value = savedText;
}

