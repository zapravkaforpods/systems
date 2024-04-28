const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const profile = document.getElementById('profile');
const profileUsername = document.getElementById('profileUsername');
const logoutButton = document.getElementById('logoutButton');

// Створення локального сховища для зберігання даних користувачів
const users = JSON.parse(localStorage.getItem('users')) || [];

// Функція реєстрації користувача
function registerUser(username, password) {
    // Перевірка, чи існує вже користувач з таким логіном
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('Цей логін вже використовується!');
        return;
    }

    // Додавання нового користувача до масиву
    users.push({ username, password });

    // Оновлення локального сховища
    localStorage.setItem('users', JSON.stringify(users));

    // Відображення особистого кабінету
    profile.style.display = 'block';
    profileUsername.textContent = username;
    container3.style.display = 'none';
    // Сховати форми реєстрації та входу
    registrationForm.style.display = 'none';
    loginForm.style.display = 'none';
}

// Функція входу користувача
function loginUser(username, password) {
    // Перевірка даних користувача
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        alert('Неправильний логін або пароль!');
        return;
    }

    // Відображення особистого кабінету
    profile.style.display = 'block';
    profileUsername.textContent = username;
    container3.style.display = 'none';
    // Сховати форми реєстрації та входу
    registrationForm.style.display = 'none';
    loginForm.style.display = 'none';
}

// Обробка події реєстрації

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    registerUser(username, password);
});

// Обробка події входу
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    loginUser(username, password);
});




