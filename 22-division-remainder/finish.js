/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3;

const division = (a, b) => {
  return a % b;
};
console.log(division(myNumber1, myNumber2));
