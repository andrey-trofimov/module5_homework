/* Task 2

Дана переменная Х, которая может принимать любое значение. Написать
программу, которая в зависимости от типа данных Х выводит в консоль
сообщение вида: «X — число».
Опишите три случая: когда х = числу, строке или логическому типу.
В других случаях выводите сообщение: «Тип x не определён». */

let userX = null;

if (typeof userX === "number" && !isNaN(userX)) {
  console.log(userX + " — число");
} else if (typeof userX === "boolean") {
  console.log(userX + " — логический тип");
} else if (typeof userX === "string") {
  console.log(userX + " — строка");
} else {
  console.log("Тип x не определён.");
}
