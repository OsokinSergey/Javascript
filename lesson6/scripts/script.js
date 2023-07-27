
//Задание 1

// const cubed=(num)=> num**3;
// console.log(`Сумма двойки в кубе и тройки в кубе равна ${cubed(2)+cubed(3)}`);

//Задание 2
// const calculatePercentage=(num)=> num * 0.87;
// let userInput = prompt("Введите число:");
// if (isNaN(userInput)) {
//   console.log("Значение задано неверно");
// } else {
//   let number = parseFloat(userInput);
//   let result = calculatePercentage(number);
//   console.log(`Размер заработной платы за вычетом налогов равен: ${result}`);
// }
//Задание 3
// const findMax=(a, b, c) => Math.max(a, b, c);
// let num1 = parseInt(prompt("Введите первое число:"));
// let num2 = parseInt(prompt("Введите второе число:"));
// let num3 = parseInt(prompt("Введите третье число:"));

// console.log(`Максимальное значение: ${findMax(num1, num2, num3)}`);
//Задание 4
function addition(num1, num2) {
    return num1 + num2;
  }
  
  function subtraction(num1, num2) {
    if (num1 > num2) {
      return num1 - num2;
    } else if (num1 < num2) {
      return num2 - num1;
    } else {
      return 0;
    }
  }
  
  function multiplication(num1, num2) {
    return num1 * num2;
  }
  
  function division(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Деление на ноль невозможно";
    }
  }
  
let num1=10;
let num2=4;

console.log(`Сумма ${num1} и ${num2} равна ${addition(num1,num2)}`);
console.log(`Разность ${num1} и ${num2} равна ${subtraction(num1,num2)}`);
console.log(`Разность ${num2} и ${num1} равна ${subtraction(num2,num1)}`);
console.log(`Разность ${num2} и ${num2} равна ${subtraction(num2,num2)}`);
console.log(`Произведение ${num1} и ${num2} равно ${multiplication(num1,num2)}`);
console.log(`Частное ${num1} и ${num2} равно ${division(num1,num2)}`);
console.log(`Частное ${num1} и 0 равно ${division(num1,0)}`);