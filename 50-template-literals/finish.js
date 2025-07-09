/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

// ТЕСТ 1

const myNumber = 9;
console.log(templateLiteral(myNumber));
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/
function templateLiteral(num) {
  const sqrt = Math.sqrt(num);
  const minusNum = num + 1;
  if (num >= 10) {
    return `Число ${num}. \nЭто число больше или равно 10. \nКвадратный корень этого числа - ${sqrt} `;
  } else {
    return `Число ${num}. \nЭто число меньше ${minusNum}. \nКвадратный корень этого числа - ${sqrt} `;
  }
}
// ТЕСТ 2
const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/
