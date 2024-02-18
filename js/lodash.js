
// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;


// function onMouseMove(event) {
// mouseMoveCbInvocationCounter += 1;

// coordsOutputRef.textContent = `
//   Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//   X: ${event.clientX},
//   Y:${event.clientY}
// `;
// }

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 500));
// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `
//     Кількість викликів onInputChange: ${inputCbInvocationCounter},
//     Значення: ${event.target.value}
//   `;
// }

// 1
// Потрібно затримати виконання функції при введенні тексту в поле input, щоб не перевантажувати сервер.
// Використовуйте метод throttle з бібліотеки lodash.
// Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно виконати при введенні тексту.

// 2
// Потрібно забезпечити виклик функції при завершенні введення тексту в поле input.
// Використовуйте метод debounce з бібліотеки lodash.
// Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно викликати при завершенні введення тексту.

// 3
// Потрібно забезпечити виклик функції при завершенні переміщення мишкою.
// Використовуйте метод debounce з бібліотеки lodash.
// Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яку потрібно викликати при завершенні переміщення мишкою.

// 4
// Потрібно забезпечити виклик функції при введенні тексту в поле input з певною затримкою.
// Використовуйте метод throttle з бібліотеки lodash.
// Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно викликати при введенні тексту.




// 1

// const firstInput = document.querySelector(".first-ex");
// console.log(firstInput)

// firstInput.addEventListener("input", _.debounce(writeInputFunction, 500));

// function writeInputFunction(event) {
//     return console.log(event.target.value)
// }

// alert("!")


// 2






