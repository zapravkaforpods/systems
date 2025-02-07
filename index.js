

const burgerIcon = document.querySelector('.burger-icon');
const menuItems = document.querySelector('.bukm');
burgerIcon.addEventListener('click', () => {
    menuItems.classList.toggle('visible');
    burgerIcon.innerHTML = menuItems.classList.contains('visible') ? '✗' : '㊂';
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
//////////////

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.order-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
//////////////

function copyToClipboard() {
    const contentToCopy = document.getElementById('content');
    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(contentToCopy);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    alert('Контент скопійовано: ' + contentToCopy.innerText);
    selection.removeAllRanges();
}
/////


document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо всі <li> елементи для подальшого пошуку
    var items = document.querySelectorAll('ul.elastic li');
    
    // Вішаємо подію на пошукове поле для реагування на введення користувача
    document.getElementById('elastic').addEventListener('input', function() {
        var input = this.value.toLowerCase().trim(); // Перетворюємо введене значення в нижній регістр і видаляємо зайві пробіли
        
        // Перебираємо всі <li> елементи
        items.forEach(function(item) {
            // Порівнюємо текст кожного елемента з введеним текстом без врахування регістру
            if (item.textContent.toLowerCase().includes(input)) {
                item.style.display = 'block'; // Показуємо елемент, якщо він підходить для пошуку
            } else {
                item.style.display = 'none'; // Ховаємо елемент, якщо він не підходить
            }
        });
    });

    let tagListVisible = false;
    const tagList = document.getElementById('tagList');

    document.getElementById('elastic').oninput = function() {
        let val = this.value.trim();
        let elasticItems = document.querySelectorAll('.elastic li');

        if (val !== '') {
            tagList.style.display = 'block';
            elasticItems.forEach(function(elem) {
                if (elem.innerText.toLowerCase().search(val) === -1) {
                    elem.classList.add('hide');
                    elem.innerHTML = elem.innerText;
                } else {
                    elem.classList.remove('hide');
                    let str = elem.innerText;
                    elem.innerHTML = insertMark(str, elem.innerText.toLowerCase().search(val), val.length);
                }
            });
        } else {
            tagList.style.display = 'none';
            elasticItems.forEach(function(elem) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            });
        }
    };

    function insertMark(string, pos, len) {
        return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
    } 

   
});


document.addEventListener("DOMContentLoaded", function() {
const elasticInput = document.getElementById('elastic');
const tagList = document.getElementById('tagList');
const items = document.querySelectorAll('.elastic li');

elasticInput.addEventListener('input', function() {
const input = this.value.toLowerCase().trim();

let bestMatch = { item: null, matchLength: 0 };

items.forEach(item => {
const text = item.textContent.toLowerCase();
if (text.includes(input) && input.length > bestMatch.matchLength) {
    bestMatch = { item: item, matchLength: input.length };
}
});

items.forEach(item => {
if (item === bestMatch.item) {
    item.style.backgroundColor = 'lightblue'; // Змінюємо фон на голубий для найкращого підходящого елементу
} else {
    item.style.backgroundColor = 'transparent'; // Повертаємо прозорий фон для інших елементів
}
});
});
});




////////
const myList = document.getElementById('myList');

// Додайте елементи до списку
myList.innerHTML = 
`

<a href="chaser mix блакитна малина&лимоеад.html">
    <li>Chaser блакитна малина & лимонад 30ml</li>
</a>
<a href="chaser mix кавун&яблуко.html">
    <li>Chaser кавун & яблуко 30ml</li>
</a>
<a href="chaser mix кола.html">
    <li>Chaser кола 30ml</li>
</a>
<a href="chaser mix ожиновий джем.html">
    <li>Chaser ожиновий джем 30ml</li>
</a>
<a href="chaser mix орбіт.html">
    <li>Chaser мʼятний орбіт 30ml</li>
</a>
<a href="chaser mix полуниця&виноград.html">
    <li>Chaser полуниця & виноград 30ml</li>
</a>
<a href="chaser mix полуниця&квас.html">
    <li>Chaser полуниця & квас 30ml</li>
</a>
<a href="chaser mix смузі.html">
    <li>Chaser смузі 30ml</li>
</a>
<a href="chaser mix фанта.html">
    <li>Chaser фанта 30ml</li>
</a>
<a href="podsystem.html">
    <li>Под-системи</li>
</a>
                   
`;

// Функція для додавання елемента до списку
function addListItem(itemText) {
  const newListItem = document.createElement('li');
  newListItem.textContent = itemText;
  myList.appendChild(newListItem);
}

// Приклад використання функції
addListItem('Новий елемент');

// const burgerIcons = document.querySelectorAll('.burger-icon');

// burgerIcons.forEach(icon => {
//     icon.innerHTML  = '';
// });
