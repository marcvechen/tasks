/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

const inputProducts = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories",
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones",
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories",
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches",
  },
];
function quantitiesByCategories(products) {
  const counter = products.reduce((acc, product) => {
    const category = product.category;
    if (acc[category]) {
      acc[category] += product.quantity;
    } else {
      acc[category] = product.quantity;
    }
    return acc;
  }, {});
  return counter;
}
console.log(quantitiesByCategories(inputProducts));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
