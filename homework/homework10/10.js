// 1 задание Переписать код, используя цикл while.

const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`); // 253

// 2 задание Скопировать приведенный ниже массив books в свой код и напишите код (желательно, используя цикл for), который выводит информацию о книгах, включая их награды, каждая награда на отдельной строке:

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];
  
  // Проходим по каждому элементу массива книг
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
    console.log(`Number of Pages: ${book.numberOfPages}`);
    console.log("Awards:");
    
    // Проходим по массиву наград каждой книги
    for (let j = 0; j < book.awards.length; j++) {
      console.log(`  - ${book.awards[j]}`);
    }
  
    console.log(""); // Печатаем пустую строку между книгами для удобства
  }

  
  // 3 задание Написать  функцию calculateAveragePages, которая принимает массив books из прошлой задачи и возвращает среднее количество страниц.

  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];
  
  // Функция для расчета среднего количества страниц
  function calculateAveragePages(books) {
    let totalPages = 0;
  
    // Суммируем количество страниц всех книг
    for (let i = 0; i < books.length; i++) {
      totalPages += books[i].numberOfPages;
    }
  
    // Возвращаем среднее количество страниц
    return totalPages / books.length;
  }
  
  const averagePages = calculateAveragePages(books);
  console.log(`Среднее количество страниц: ${averagePages.toFixed(2)}`); // Результат с двумя знаками после запятой

  
  // 4 задание 4. Написать функцию **`repeatString`**, которая принимает строку `str` и число **`n`** и возвращает строку `str`, повторённую **`n`** раз


  function repeatString(str, n) {
    let result = '';
    
    for (let i = 0; i < n; i++) {
      result += str;
    }
    
    return result;
  }
  
 // 5 задание Написать функцию calculateAverage, которая принимает массив чисел и возвращает их среднее значение.

 function calculateAverage(numbers) {
    let sum = 0;
  
    // Суммируем все числа в массиве
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    // Возвращаем среднее значение
    return sum / numbers.length;
  }
  
// 6 задание Написать функцию countEvenNumbers, которая принимает массив чисел и возвращает количество чётных чисел.

function countEvenNumbers(numbers) {
    let count = 0;
  
    // Проходим по массиву чисел
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        count++; // Увеличиваем счётчик, если число чётное
      }
    }
  
    return count; // Возвращаем количество чётных чисел
  }
  
  
  
