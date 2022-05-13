/* Task 7

Дан массив. Нужно вывести в консоль количество чётных и нечётных
элементов в массиве. Если в массиве есть нулевой элемент,
то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может
содержать не только числа, но и, например, знаки, null и так далее. */

let arr = [
  0,
  1,
  2,
  3,
  4,
  5,
  NaN,
  "er4",
  Infinity,
  null,
  undefined,
  "string",
  "&",
  -Infinity,
  0,
  false,
  true,
];
let oodNum = 0;
let evenNum = 0;
let zeroNum = 0;

arr.forEach(function (value) {
  if (
    typeof value === "number" &&
    !isNaN(value) &&
    value !== Infinity &&
    value !== -Infinity
  ) {
    oodNum += value % 2 !== 0 ? 1 : 0;
    evenNum += value % 2 === 0 ? 1 : 0;
    zeroNum += value == 0 ? 1 : 0;
  }
  zeroNum += value === null ? 1 : 0;
});
console.log(`Чётных.............${evenNum}
Нечётных...........${oodNum}
Нулевых элементов..${zeroNum}`);
