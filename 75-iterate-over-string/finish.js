/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life";

const check = (str) => {
  str.forEach(elem);
};

str.split("").forEach((char) => {
  if (vowels.includes(char)) {
    vowelsCount += 1;
  }
});

console.log(vowelsCount);
// 9
