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

let arrayOne = [2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arrayOne.length; i++) {
  sum += arrayOne[i] * arrayOne[i];
}
console.log(sum);

/* ------- */

/* Дан массив с числами. Найдите сумму квадратных корней элементов этого массива. */

let arrayTwo = [4, 9, 16, 25, 36];
let sumTwo = 0;
for (let i = 0; i < arrayTwo.length; i++) {
  sumTwo += Math.sqrt(arrayTwo[i]);
}
console.log(sumTwo);

/* ------- */

/* Дан массив с числами. Найдите сумму положительных элементов этого массива. */

let arrayThree = [4, -9, 16, -25, 36];
let arrayFour = [1, -2, 3, -4, 5];

function array5(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      sum += arr1[i];
    }
  }
  console.log(sum);
}

array5(arrayThree);
array5(arrayFour);

/* ------- */

/* Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти. */

let arrayFive = [4, -9, 16, -25, 36];
let arraySix = [1, -2, 3, -4, 5];
function array5(arr2) {
  let sum3 = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 0 && arr2[i] < 10) {
      sum3 += arr2[i];
    }
  }
  console.log(sum3);
}
array5(arrayFive);
array5(arraySix);

/* ------- */

/* Получите массив букв этой строки. */

let string2 = "abcde";

function string3(arr1) {
  let str = [];
  Object.assign(str, arr1);
  console.log(str);
}

string3(string2);

/* ------- */

/* Получите массив цифр этого числа */
let numberForArray = 12345;

function array6(arr3) {
  let str;
  str = arr3.toString().split("");
  console.log(str);
}

array6(numberForArray);
// console.log(numberForArray);

/* ------- */

/* Дано некоторое число. Переверните его */

let numberForArray1 = 12345;

function array6(arr3) {
  //   let str;
  //   str = arr3.toString().split("");
  //   console.log(str.reverse());
  let str;
  str = arr3.toString().split("").reverse();
  console.log(str);
}

array6(numberForArray1);

/* ------- */

/* Дано некоторое число: 12345. Найдите сумму цифр этого числа. */

let numberForArray2 = 12345;

function array7(arr4) {
  let sum = 0;
  while (arr4 > 0) {
    sum += arr4 % 10;
    arr4 = Math.floor(arr4 / 10);
  }
  console.log(sum);
}

array7(numberForArray2);

/* ------- */

/* Заполните массив целыми числами от 1 до 10. */

let numberForArray3 = [];
function array8(arr5) {
  for (let i = 1; i <= 10; i++) {
    arr5.push(i);
  }
  console.log(arr5);
}

array8(numberForArray3);

/* ------- */

/* Заполните массив четными числами из промежутка от 1 до 100. */

let numberForArray4 = [];
function array9(arr6) {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      arr6.push(i);
    }
  }
  console.log(arr6);
}

array9(numberForArray4);

/* ------- */

/* Дан массив с дробями:v 1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части */

let numberForArray5 = [1.456, 2.125, 3.32, 4.1, 5.34];

function array10(arr7) {
  for (let i = 0; i < arr7.length; i++) {
    arr7[i] = arr7[i].toFixed(1);
  }
  console.log(arr7);
}

array10(numberForArray5);

/* ------- */

/* Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://. */

let arrHttps = [
  "https://www.google.com.ua/?hl=ru",
  "nvdlskvnlkdnvlzknk",
  "nvdlskvnlkdnvlzknk",
  "https://www.youtube.com/",
  "vmndfnbkdfnbklndfklbnd",
  "https://www.blogger.com/",
  "vndfkjbnkjdfnb",
  "vkdflnblknfbklnf",
];

/* ------- */

/* Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html. */

let arrHtml = [
  "https://www.google.com.ua/?hl=ru",
  "nvdlskvnlkdnvlzknk",
  "nvdlskvnlkdnvlzknk",
  "https://www.youtube.com/",
  "vmndfnbkdfnbklndfklbnd",
  "https://www.blogger.com/",
  "vndfkjbnkjdfnb",
  "vkdflnblknfbklnf",
];

/* ------- */

/* Дан массив с числами. Увеличьте каждое число из массива на 10 процентов. */
let numberForArray6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function array11(arr8) {
  let result;
  for (let i = 0; i < arr8.length; i++) {
    arr8[i] *= 1.1;
  }
  console.log(arr8);
}

array11(numberForArray6);

/* ------- */

/* Заполните массив случайными числами из промежутка от 1 до 100. */

// let array12 = [];

// for (let i = 1; i <= 100; i++) {
//   array6.push(Math.floor(Math.random() * 100));
// }
// console.log(array6);

/* ------- */

/* Дано некоторое число: 12345
Выведите в консоль все его символы с конца. */
let number7 = 12345;

function numberReversed(numReverse) {
  let str;
  str = numReverse.toString().split("").reverse();
  console.log(str);
}

numberReversed(number7);

/* ------- */
let str;
str = number7.toString().split("");
for (let i = str.length; i >= 0; i--) {
  console.log(str[i]);
}

/* ------- */

/* Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:

[1, 2]
[3, 4]
[5, 6] */

let arraySeven = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arraySeven.length; i += 2) {
  console.log(arraySeven.slice(i, i + 2));
}

/* ------- */

/* Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив:
[1, 2, 3, 4, 5, 6 */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function arrUnite(united1, united2) {
  let united3 = united1.concat(united2);
  console.log(united3);
}

arrUnite(arr1, arr2);

/* ------- */

/* Дана некоторая строка. Найдите позицию первого нуля в строке. */

let strZero = "Find position of 0 in a string";

for (let i = 0; i < strZero.length; i++) {
  if (strZero[i] === "0") {
    console.log(i);
  }
}

/* ------- */

/* Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти. */

/* ------- */

/* Дан массив. Удалите из него элементы с заданным значением */

let arrDel = ["a", "b", "c", "d", "e"];

let arrDelNew = arrDel.filter(function (del) {
  return del !== "a" && del !== "c";
});

console.log(arrDelNew);

/* ------- */

/*  Дан некоторый массив, например, вот такой:
[1, 2, 3, 4, 5, 6]
Найдите сумму первой половины элементов этого массива. */

let arrHalfSum = [1, 2, 3, 4, 5, 6];
let halfSum = arrHalfSum.slice(0, 3);
function arrSum(arraySum) {
  let result = 0;
  for (let i = 0; i < arraySum.length; i++) {
    result += arraySum[i];
  }
  console.log(result);
}

arrSum(halfSum);

/* ------- */

/* Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве. */
let arrNegCount = [1, -2, 3, 4, -5, 6];

function arrNeg(negCount) {
  let negative = negCount.filter((elem) => elem < 0);
  console.log(negative.length);
  let possitive = negCount.filter((elem) => elem > 0);
  console.log(possitive.length);
}

arrNeg(arrNegCount);

/* ------- */

/* Дан массив с числами. Оставьте в нем только положительные числа. */

let arrPossitiveNum = [1, -2, 3, 4, -5, 6];

function arrPossitive(possitiveNum) {
  let negative = possitiveNum.filter((elem) => elem < 0);
  console.log(negative);
  let possitive = possitiveNum.filter((elem) => elem > 0);
  console.log(possitive);
}

arrPossitive(arrPossitiveNum);

/* ------- */

/* Дана строка. Удалите предпоследний символ из этой строки */

let strLastSymbol = "abcdef";

function lastSymbol(strLastSymbol) {
  let strOne = strLastSymbol.slice(0, -2);
  let strTwo = strLastSymbol.slice(5);
  console.log(strOne.concat(strTwo));
}
lastSymbol(strLastSymbol);

/* ------- */

/*  */

let arrSum = [1, 2, 3, 4, 5, 6];

function arrSumm(halfSumm) {
  let halfOne = halfSumm.slice(0, 3);
  let halfTwo = halfSumm.slice(3);
  let one = 0;
  let two = 0;
  let result = 0;
  for (let i = 0; i < halfOne.length; i++) {
    one += halfOne[i];
  }
  for (let i = 0; i < halfTwo.length; i++) {
    two += halfTwo[i];
  }
  result = one / two;
  console.log(result);
}

arrSumm(arrSum);
