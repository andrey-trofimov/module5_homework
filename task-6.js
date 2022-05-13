/*  Task 6

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести
результат true или false в консоль. Речь идёт не о двух рядом
стоящих одинаковых элементах, а обо всех.
Проверить, все ли элементы в массиве одинаковые. */

let arr = [2, 2, 2, 2, 6, 2];
let result = true;

arr.forEach(function (value, index, array) {
  result &&= arr[0] === value ? true : false;
});
console.log(result);
