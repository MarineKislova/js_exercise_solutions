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
    if (array4[i].indexOf(".html")!== -1) {
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

