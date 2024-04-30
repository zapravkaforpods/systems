const loginForm = document.getElementById('loginForm');
const adminPanel = document.getElementById('adminPanel');
const textForm = document.getElementById('textForm');
const logoutButton = document.getElementById('logoutButton');
const savedTextKey = 'adminText';

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Pseudo login check
    if (username === 'zapravka2024' && password === '10377710') {
        adminPanel.style.display = 'block';
        loginForm.style.display = 'none';

        // Load saved text if exists
        const savedText = localStorage.getItem(savedTextKey);
        if (savedText) {
            document.getElementById('text').value = savedText;
        }
    } else {
        alert('Неправильний логін або пароль.');
    }
});

textForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = document.getElementById('text').value;

    // Save text to local storage
    localStorage.setItem(savedTextKey, text);

    alert('Текст успішно збережено.');
});

// logoutButton.addEventListener('click', () => {
//     adminPanel.style.display = 'none';
//     loginForm.style.display = 'block';

//     // Clear local storage when logging out
//     localStorage.removeItem(savedTextKey);
// });
