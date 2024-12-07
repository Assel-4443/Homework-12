// 1 задание Добавить список в раздел info
const infoSection = document.getElementById('content'); // Предположим, что ID `info` — это `content`
if (infoSection) {
  // Создаем элемент списка
  const ul = document.createElement('ul');

  // Добавляем три элемента списка
  const items = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"];
  items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  });

  // Добавляем список в конец раздела
  infoSection.appendChild(ul);
}

// 2 задание Добавить ссылку в header
const header = document.getElementById('header');
if (header) {
  // Создаем элемент ссылки
  const link = document.createElement('a');
  link.textContent = "Мой профиль в Linkedin";
  link.href = "https://www.linkedin.com/in/your-profile"; // Укажите вашу реальную ссылку
  link.target = "_blank";

  // Добавляем ссылку в конец `header`
  header.appendChild(link);
}

// 3 задание Создать сложный элемент 
const main = document.getElementById('main');
if (main) {
  // Создаем новый `section` с классом `dynamic`
  const dynamicSection = document.createElement('section');
  dynamicSection.className = "dynamic";

  // Добавляем заголовок
  const h2 = document.createElement('h2');
  h2.textContent = "Обучение JavaScript";
  dynamicSection.appendChild(h2);

  // Добавляем абзац
  const p = document.createElement('p');
  p.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";
  dynamicSection.appendChild(p);

  // Вставляем `section` в начало `main`
  main.prepend(dynamicSection);
}

// 4 задание Удалить первый абзац в info, оставив только заголовок, используя метод removeChild
if (infoSection) {
  const firstParagraph = infoSection.querySelector('p'); // Предположим, это первый абзац
  if (firstParagraph) {
    infoSection.removeChild(firstParagraph);
  }
}

// 5 задание Полностью очистить содержимое элемента <footer>
const footer = document.getElementById('footer');
if (footer) {
  footer.innerHTML = ""; // Очистка содержимого
}
