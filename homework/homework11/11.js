// 1 задание Изменить заголовок страницы (document.title) на ваши имя и фамилию"
// Меняем заголовок страницы
document.title = "Асель Хасенова";

// 2 задание Найти элемент <h1> внутри элемента с ID header"
// Получаем элемент с ID "header"
const header = document.getElementById('header');

// Находим элемент <h1> внутри "header"
const h1 = header.querySelector('h1');

// Меняем текст внутри элемента <h1>
h1.textContent = "Изучение JavaScript";

// 3 задание Получить все элементы списка с классом menu-link и вывести текстовое содержимое каждого из них в консоль"
// Получаем все элементы с классом "menu-link"
const menuLinks = document.querySelectorAll('.menu-link');

// Перебираем элементы и выводим их текст в консоль
menuLinks.forEach(link => {
  console.log(link.textContent);
});


// 4 задание Получить все элементы списка внутри features-list и замените содержимое второго элемента на "Поддержка API" (слово API должно быть жирным)"
// Получаем все элементы списка внутри "features-list"
const featuresItems = document.querySelectorAll('.features-list li');

// Проверяем, что второй элемент существует
if (featuresItems[1]) {
  // Меняем содержимое второго элемента
  featuresItems[1].innerHTML = "Поддержка <strong>API</strong>";
}

