/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const myArray = [
  (car = {
    carBrand: "audi",
    price: "1000",
    isAvailableForSale: true,
  }),
  (car = {
    carBrand: "bmw",
    price: "1000",
    isAvailableForSale: false,
  }),
  (car = {
    carBrand: "benz",
    price: "1000",
    isAvailableForSale: true,
  }),
];
myArray[3] = car = {
  carBrand: "fiat",
  price: "1000",
  isAvailableForSale: false,
};
console.log(myArray);
