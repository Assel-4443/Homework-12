let currentShape = null;

function selectShape(shape) {
    console.log(`Форма выбрана: ${shape}`);
    const shapeContainer = document.getElementById('shapeContainer');
    shapeContainer.innerHTML = ''; // Очистить контейнер

    const newShape = document.createElement('div');
    newShape.classList.add('shape', shape);
    newShape.style.width = '150px';
    newShape.style.height = '150px';
    console.log(`Создан элемент: ${newShape.outerHTML}`);

    shapeContainer.appendChild(newShape);
    currentShape = newShape;
    console.log('Фигура добавлена в контейнер.');
}

function changeColor(color) {
    if (currentShape) {
        console.log(`Изменяем цвет на: ${color}`);
        currentShape.style.backgroundColor = color;
    } else {
        alert('Пожалуйста, сначала выберите фигуру.');
    }
}

function addText() {
    const text = document.getElementById('shapeText').value;
    console.log(`Добавляем текст: "${text}"`);
    if (currentShape) {
        if (text) {
            currentShape.textContent = text;
        } else {
            alert('Пожалуйста, введите текст.');
        }
    } else {
        alert('Пожалуйста, сначала выберите фигуру.');
    }
}

function clearShape() {
    console.log('Очищаем контейнер.');
    const shapeContainer = document.getElementById('shapeContainer');
    shapeContainer.innerHTML = '';
    currentShape = null;
}
