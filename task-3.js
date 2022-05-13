/* Task 3

Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
Например, "Hello" -> "olleH". */

let string = "Hello";
let stringRevers = "";

for (let i = string.length - 1; i >= 0; i--) {
  stringRevers += string.charAt(i);
  console.log(string.charAt(i));
}
console.log(stringRevers);
