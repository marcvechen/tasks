/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
};
const mult = (obj) => {
  const { x, y, z } = obj;
  const result = x * y * z;
  return result;
};
// Создайте функцию здесь

const result = mult(objectWithNumbers);
console.log(result);
// 300
