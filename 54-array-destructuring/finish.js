/** ЗАДАЧА 54 - Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */

const processQuantities = (arr) => {
  const [minQty, maxQty, defQty = 0] = arr;
  console.log(minQty); // 8
  console.log(maxQty); // 29
  console.log(defQty); // 10 в первом вызове, 0 во втором вызове
  return defQty + maxQty - minQty;
};

const inputQuantities1 = [8, 29, 10];
console.log(processQuantities(inputQuantities1)); // 31

const inputQuantities2 = [8, 29];
console.log(processQuantities(inputQuantities2)); // 21
