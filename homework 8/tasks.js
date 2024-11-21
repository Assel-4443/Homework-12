// 1 задание - Создание переменных firstName и LastName, а также age
let firstName = "Асель";  // Имя
let lastName = "Хасенова";  // Фамилия
let age = 31;  // Возраст

// Вывод сообщения 
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} год.`);




// 2 задание - Создание переменной city
let city = "Астана";  // Название города

// Вывод сообщения 
console.log("Я родом из города " + city);




// 3 задание - Создание переменных password и hasAccess
let password = "04041993";  // Присваиваем произвольное значение переменной password
let hasAccess = password !== "";  // Проверяем, непуста ли строка password

// Вывод сообщения 
console.log("Password: " + password);  // значение переменной password
console.log("Has access: " + hasAccess);  // значение переменной hasAccess




// 4 задание - Создание переменной isMember
let isMember = false;  // Создаем переменную со значением false
isMember = isMember.toString();  // Преобразуем значение в строку

// Вывод сообщения 
console.log("Value: " + isMember);  // значение переменной
console.log("Type: " + typeof isMember);  // тип данных переменной




// 5 задание - Создание переменной cartItems
let cartItems = 0;  // Инициализируем переменную cartItems значением 0
let isEmpty = Boolean(cartItems);  // Преобразуем значение в логическое (Boolean)

// Вывод сообщения 
console.log(isEmpty);  // результат




// 6 задание - Создание переменной averageScore
let averageScore = 89.75695;  // Изначальное значение
averageScore = averageScore.toFixed(1);  // Округляем до одного знака после запятой

// Вывод сообщения 
console.log(averageScore);  // результат





// 7 задание - Создание переменной cartItems
let greetingMessage = "      Приветствуем вас в мире программирования!        ";

// 1. Удаляем пробелы в начале и в конце строки
let trimmedMessage = greetingMessage.trim();
console.log(trimmedMessage);  // Выводим результат после удаления пробелов

// 2. Преобразуем строку в верхний регистр
let upperCaseMessage = trimmedMessage.toUpperCase();
console.log(upperCaseMessage);  // Выводим результат в верхнем регистре

// 3. Проверяем, содержит ли строка слово "программирования"
let containsProgramming = trimmedMessage.includes("программирования");
console.log(containsProgramming);  // Выводим результат проверки


