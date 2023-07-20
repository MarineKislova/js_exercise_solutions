"use strict";

/*Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль*/
let a = 5;
let b = -10;
function number(num) {
  if (num < 0) {
    console.log("Число отрицательное");
  } else {
    console.log("Число положительное");
  }
  return num;
}

number(a);
number(b);

/* ------- */

/* Дана строка. Выведите в консоль длину этой строки. */

let stringOne = "hello world";
console.log(stringOne.length);

/* ------- */

/* Дана строка. Выведите в консоль последний символ строки. */

let stringTwo = "hello world";
console.log(stringTwo.slice(-1));

/* ------- */

/* Дано число. Проверьте, четное оно или нет. */

let numberThree = 5;
function number(num) {
  if (num % 2 === 0) {
    console.log("Число четное");
  } else {
    console.log("Число нечетное");
  }
  return num;
}
number(numberThree);

/* ------- */

/* Даны два слова. Проверьте, что первые буквы этих слов совпадают. */

let wordOne = "hello";
let wordTwo = "world";
function word(wordOne, wordTwo) {
  if (wordOne[0] === wordTwo[0]) {
    console.log("Слова совпадают");
  } else {
    console.log("Слова не совпадают");
  }
  return wordOne;
}
word(wordOne, wordTwo);

/* ------- */

/* Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву. */

let wordThree = "Боль";
let wordFour = "print";
function wordMore(wordAnother) {
  if (wordAnother[wordAnother.length - 1] === "ь") {
    console.log(wordAnother[wordAnother.length - 2]);
  } else {
    console.log(wordAnother[wordAnother.length - 1]);
  }
  return wordAnother;
}
wordMore(wordThree);
wordMore(wordFour);

/* ------- */

/* Дано число. Выведите в консоль первую цифру этого числа. */

let numberFive = 1500;

function number1(num1) {
  let str = num1.toString();
  console.log(str[0]);
  return str[0];
}
number1(numberFive);

/* ------- */

/* Дано число. Выведите в консоль последнюю цифру этого числа. */

let numberSix = 1560;
function number2(num2) {
  let str2 = num2.toString();
  console.log(str2.slice(-1));
  return str2;
}
number2(numberSix);

/* Дано число. Выведите в консоль сумму первой и последней цифры этого числа. */

let numberSeven = 1560;
function number3(num3) {
  let str3 = num3.toString();
  console.log(str3.slice(0, 1) + str3.slice(-1));
  return str3;
}
number3(numberSeven);

/* Дано число. Выведите количество цифр в этом числе. */

let numberEight = 151610;
function number4(num4) {
  let str4 = num4.toString();
  console.log(str4.length);
}

number4(numberEight);

/* ------- */

/* Даны два числа. Проверьте, что первые цифры этих чисел совпадают. */

let numberNine = 1560;
let numberTen = 2560;
function number5(num5, num6) {
  if (num5.toString()[0] === num6.toString()[0]) {
    console.log("Числа совпадают");
  } else {
    console.log("Числа не совпадают");
  }
  return num5;
}

number5(numberNine, numberTen);

/* ------- */

/* Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки. */

let stringThree = "hello world";

function string1(str1) {
  if (str1.length > 0) {
    console.log(str1.slice(-2, -1));
  }
  return str1;
}

string1(stringThree);
console.log(stringThree);

/* ------- */

/* Даны два целых числа. Проверьте, что первое число без остатка делится на второе. */

let numberEleven = 8;
let numberTwelve = 4;

function number6(num7, num8) {
  if (num7 % num8 === 0) {
    console.log("Число a делится на число b без остатка");
  } else {
    console.log("Число a делится на число b c остатком");
  }
  return num7;
}

number6(numberEleven, numberTwelve);

/* ------- */

/* Выведите в консоль все целые числа от 1 до 100. */

let x1 = 1;
while (x1 <= 100) {
  console.log(x1);
  x1++;
  //   break;
}

/* ------- */

/* Выведите в консоль все целые числа от -100 до 0. */

let x2 = -100;
while (x2 <= 0) {
  console.log(x2);
  x2++;
}

/* ------- */

/* Выведите в консоль все целые числа от 100 до 1. */

let x3 = 100;
while (x3 >= 1) {
  console.log(x3);
  x3--;
}

/* ------- */

/* Выведите в консоль все четные числа из промежутка от 1 до 100. */

let x4 = 1;
while (x4 <= 100) {
  if (x4 % 2 === 0) {
    console.log(x4);
  }
  x4++;
}

/* ------- */

/* Выведите в консоль все числа кратные трем в промежутке от 1 до 100. */

let x5 = 1;

while (x5 <= 100) {
  if (x5 % 3 === 0) {
    console.log(x5);
  }
  x5++;
}

/* ------- */

/* Дан массив с числами. Найдите сумму квадратов элементов этого массива. */

let arrayOne = [2, 3, 4];
let sum = 0;
for (let i = 0; i < arrayOne.length; i++) {
  sum += arrayOne[i] * arrayOne[i];
}
console.log(sum);
