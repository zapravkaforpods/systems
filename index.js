

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
myList.innerHTML = `
<a href="ELIX 30ML БЛАК.МАЛ.М'ЯТА.html">
                
                    <li>Elix 30ML БЛАК.МАЛ.М'ЯТА</li>
                </a>
                    <a href="watermelon.html">
                    <li>Кавун & Диня 30 ML(50 mg)</li>
                </a>
                    <a href="ELIX 30ML Банан.html">
                    <li>ELIX 30ML Банан</li>
                </a>
                <a href="30 ML MANGO&PEACH (50 mg).html">
                    <li>30 ML Манго & Персик (50 mg)</li>
                </a>
                <a href="ELIX 30ML Червона малина.html"> 
                    <li>ELIX 30ML Червона малина</li>
                </a>
                <a href="ELIX 30ML ЛІЧІ.HTML"> 
                    <li>ELIX 30ML Лічі</li>
                </a>
                <a href="ELIX 30ML Кавун & М'ята.html"> 
                    <li>ELIX 30ML Кавун & М'ята</li>
                </a>
                <a href="30 ML HONEYDEW PAPAYA (50 mg).html">
                    <li>30 ML Папая медова (50 mg)</li>
                </a>
                <a href="30 ML COLA LEMON (50 mg).html"> 
                    <li>30 ML Кола & Лемон (50 mg)</li>
                </a>
                <a href="PINEAPPLE LEMONADE (50mg).html">
                    <li>Ананас & Лемонад 30ml</li>
                </a>
                <a href="BLACKCURRANT GRAPE.html">
                    <li>Виноград & Смородина 30ml</li>
                </a>
                <a href="ELIX 30ML ЧЕРЕШНЯ.html">
                    <li>ELIX 30ML ЧЕРЕШНЯ</li>
                </a>
                <a href="ELIX 30ML ГРЕЙПФРУТ.html">
                    <li>ELIX 30ML ГРЕЙПФРУТ </li>
                </a>
                <a href="ELIX 30ML ДИНЯ.html">
                    <li>ELIX 30ML ДИНЯ </li>
                </a>
                <a href="ELIX 10 ML Диня.html">
                    <li>ELIX 10ML ДИНЯ </li>
                </a>
                <a href="ELIX 10ML Грейпфрут.html">
                    <li>ELIX 10ML Грейпфрут </li>
                </a>
                <a href="10ml Манго Персик.html">
                    <li>Манго & Персик 10ml </li>
                </a>
                <a href="Папая медова.html">
                    <li>Папая медова 10ml </li>
                </a>
                <a href="Кола & Лемон.html">
                    <li>Кола & Лемон 10ml </li>
                </a>
                     <a href="Ананасовий лемонад 10ml.html">
                        <li>Ананас & Лемонад 10ml</li>
                </a>
                     <a href="Червона малина 10ml.html">
                    <li>ELIX Червона малина 10ml</li>
                </a>
                <a href="index.html">
                    <li>Chiser 30ml</li>
                </a>
                <a href="elix.html">
                    <li>Elix 30ml</li>
                </a>
               <a href="rozluv.html">
                    <li>Elix 10ml, chaiser 10ml</li>
                </a>
                <a href="index.html">
                    <li>Чейзер</li>
                </a>
                <a href="podsystem.html">
                    <li>POD SYSTEMS</li>
                </a><a href="iiii.html">
                    <li>Vaporesso Xros Mini Neon </li>
                </a>
                <a href="Vaporesso Xros mini Orange Red.html">
                    <li>Vaporesso Xros mini Orange Red</li>
                </a>
                <a href="Vaporesso Xros mini Violet.html">
                    <li>Vaporesso Xros mini Violet</li>
                </a>
                <a href="Vaporesso Xros mini Vitalyti.html">
                    <li>Vaporesso Xros mini Vitality</li>
                </a>
                <a href="картриджі.html">
                    <li>Картридж VAPARESSO на 0,6 OM</li>
                </a>
                <a href="Chaser Кавун 30ml (50mg).html">
                    <li>Chaser Кавун 30ml (50mg)</li>
                </a><a href="Chaser Вишня ментол 30ml (50mg).html">
                    <li>Chaser Вишня & Ментол 30ml (50mg)</li>
                </a><a href="Chaser Полуниця  30ml (50mg).html">
                    <li>Chaser Полуниця 30ml (50mg)</li>
                </a><a href="Chaser Смородина & Ментол 30ml (50mg).html">
                    <li>Chaser Банан 30ml (50mg)</li>
                </a><a href="chaser 30ml ківі.html">
                    <li>Chaser Ківі 30ml (50mg)</li>
                </a>
                    <a href="Chaser Ягоди 30ml (50mg).html">
                    <li>Chaser Ягоди 30ml (50mg)</li>
                </a>
                     <a href="Chaser блакитна малина 10ml.html">
                    <li>Chaser Блакитна Малина 10ml (50mg)</li>
                </a>
                   <a href="вишня&ментол.html">
                    <li>Chaser Вишня&Ментол 10ml (50mg)</li>
                </a>  
                  <a href="Elix 30ml груша.html">
                <li>Elix 30ml Груша (50mg)</li>
            </a>
            <a href="Elix 30ml зелене яблуко.html">
                <li>Elix 30ml Зелене яблуко (50mg)</li>
            </a>
            <a href="Elix 30ml лісові ягоди.html">
                <li>Elix 30ml Лісові ягоди (50mg)</li>
            </a>
            <a href="Elix 30ml мʼята.html">
                <li>Elix 30ml Мʼята (50mg)</li>
            </a>
            <a href="Elix 30ml суниця.html">
                <li>Elix 30ml Суниця (50mg)</li>
            </a>
            <a href="Elix М'ята 10ml.html">
            <li>Elix М'ята 10ml</li>
            </a>
            <a href="chaser 30ml peach.html">
            <li>Chaser 30ml Персик</li>
            </a>
            <a href="chaser ананас 30ml.html">
            <li>Chaser 30ml Ананас</li>
            </a>
            <a href="chaser 30ml Блакитна малина2.html">
            <li>Chaser Блакитна малина 30ml</li>
            </a>
            <a href="chaser 30ml гранат.html">
            <li>Chaser Гранат 30ml</li>
            </a>
             <a href="chaser 30ml м'ята.html">
            <li>Chaser М'ята 30ml</li>
            </a>
            <a href="Chaser Дмня 30ml (50mg).html>
            <li>Chaser Диня 30ml</li>
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

