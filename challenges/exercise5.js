/* 
⚠️
⚠️ See exercise5.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} array
 * @returns {Number}
 */
export const sumMultiples = (array) => {
  if (array === undefined) throw new Error("arr is required");
  const sumOfArray = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sumOfArray % 5 === 0 || sumOfArray % 3 === 0 ? sumOfArray : null;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  const ALLOWED_CHARACTERS = ["C", "G", "T", "A"];
  const checkedForDNA = str
    .toUpperCase()
    .split("")
    .filter((character) => ALLOWED_CHARACTERS.includes(character));
  return checkedForDNA.length === str.length;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} dnaString
 * @returns {String}
 */
export const getComplementaryDNA = (dnaString) => {
  if (dnaString === undefined) throw new Error("dnaString is required");
  const PAIRS = { A: "T", T: "A", G: "C", C: "G" };

  return dnaString
    .toUpperCase()
    .split("")
    .map((character) => PAIRS[character])
    .join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (n === 2) return true;
  else if (n === 0 || n === 1 || n % 2 === 0) return false;
  else {
    for (let i = 3; i < n / 2; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} num
 * @param {Any} fillParam
 * @returns {Array}
 */
export const createMatrix = (num, fillParam) => {
  if (num === undefined) throw new Error("n is required");
  if (fillParam === undefined) throw new Error("fill is required");
  const matrix = [];

  for (let i = 0; i < num; i++) {
    const newArray = new Array(num);
    newArray.fill(fillParam, 0, num);
    matrix.push(newArray);
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  const staffWorkingOnGivenDay = staff.filter((person) =>
    person.rota.includes(day)
  );
  return staffWorkingOnGivenDay.length >= 3;
};
