"use strict";

/* Найдите сумму цифр этого числа */

let numberForArray2 = 158952635163546;

let sum = 0;

while (numberForArray2 > 0) {
  sum += numberForArray2 % 10;
  numberForArray2 = Math.floor(numberForArray2 / 10);
}

console.log(sum);

/* Заполните массив целыми числами от 1 до 10. */

let array = [];

for (let i = 1; i <= 10; i++) {
  array.push(i);
}

/* Заполните массив четными числами из промежутка от 1 до 100. */

let array2 = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    array2.push(i);
  }
}

/* Дан массив с дробями:

[1.456, 2.125, 3.32, 4.1, 5.34]
Округлите эти дроби до одного знака в дробной части */

let array3 = [1.456, 2.125, 3.32, 4.1, 5.34];

for (let i = 0; i < array3.length; i++) {
  array3[i] = Math.round(array3[i] * 10) / 10;
}
console.log(array3);
/* Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html. */

let array4 = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < array4.length; i++) {
  if (array4[i].indexOf(".html") !== -1) {
    array4.splice(i, 1);
    i--;
  }
}
console.log(array4);

/* Дан массив с числами. Увеличьте каждое число из массива на 10 процентов. */

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array5.length; i++) {
  array5[i] *= 1.1;
}
console.log(array5.toFixed(2));

/* Заполните массив случайными числами из промежутка от 1 до 100. */

let array6 = [];

for (let i = 1; i <= 100; i++) {
  array6.push(Math.floor(Math.random() * 100));
}
console.log(array6);

/* Дано некоторое число: 12345
Выведите в консоль все его символы с конца. */

let numberForArray7 = 12345;

let str;
str = numberForArray7.toString().split("");
for (let i = str.length; i >= 0; i--) {
  console.log(str[i]);
}

/* Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:

[1, 2]
[3, 4]
[5, 6] */

let array7 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array7.length; i += 2) {
  console.log(array7.slice(i, i + 2));
}

/* Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив:

[1, 2, 3, 4, 5, 6] */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [];

/* Дана некоторая строка. Найдите позицию первого нуля в строке. */

let stringForArray8 = "1023456789";

for (let i = 0; i < stringForArray8.length; i++) {
  if (stringForArray8[i] === "0") {
    console.log(i);
  }
}

/* Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти. */

for (let i = 1; i <= 1000; i++) {
  if (i % 5 === 0 && i % 7 === 0) {
    console.log(i);
  }
}

/* Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
Найдите сумму первой половины элементов этого массива. */

let array8 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array8.length; i++) {
  if (i % 2 === 0) {
    console.log(array8[i]);
  }
}

/*  */

let array9 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array9.length; i++) {
  if (i % 2 === 0) {
    array9[i] *= 2;
  }
}
console.log(array9);

/* */
/* Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения. */

let objectForArray10 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

let array10 = [];

for (let key in objectForArray10) {
  array10.push(key);
}
console.log(array10);

/* Дана дата в следующем формате:

'2025-12-31'
Преобразуйте эту дату в следующий объект:

{
	year: '2025',
	month: '12',
	day: '31',
} */

let dateForArray11 = "2025-12-31";

let objectForArray11 = {
  year: dateForArray11.slice(0, 4),
  month: dateForArray11.slice(5, 7),
  day: dateForArray11.slice(8, 10),
};

console.log(objectForArray11);

/* Дано число. Выведите в консоль количество четных цифр в этом числе */

let num = 123456789;
let count = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    
    console.log(num);
    num++;
  }
}
