//Задание 1
console.log('Задание 1');
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      console.log(i + " – это ноль");
    } else if (i % 2 === 0) {
      console.log(i + " – четное число");
    } else {
      console.log(i + " – нечетное число");
    }
  }

 //Задание 2
 console.log('Задание 2');
 const arr = [1, 2, 3, 4, 5, 6, 7];
 const filteredArray = [];
 
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === 1 || arr[i] === 2 || arr[i] === 3 || arr[i] === 6 || arr[i] === 7) {
     filteredArray.push(arr[i]);
   }
 }
 console.log(filteredArray);

//Задание 3
console.log('Задание 3');
const array = [];
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 10);
  array.push(randomNumber);
}
console.log(array); 

// Рассчитать сумму элементов этого массива
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(sum); 

// Найти минимальное число
let min = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log(min);

// Найти есть ли в этом массиве число 3
let hasThree = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 3) {
    hasThree = true;
    break;
  }
}

console.log(hasThree);

//Задание 4
console.log('Задание 4');

let row = 'x';
for (let index = 0; index < 20; index++) {
    console.log(row);
    row=row+'x';
}