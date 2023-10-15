export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((number) => Math.pow(number, 2));
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const wordsAfterFirstWord = words.slice(1);
  const capitaliseWords = wordsAfterFirstWord.map(
    (word) => word[0].toUpperCase() + word.substring(1)
  );
  return words[0] + capitaliseWords.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce(
    (accumalator, person) => accumalator + person.subjects.length,
    0
  );
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  const menuItemsWithIngredient = menu.filter((menuItems) =>
    menuItems.ingredients.includes(ingredient)
  );
  return menuItemsWithIngredient.length > 0;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  const duplicateNumbers = arr1.filter((element) => arr2.includes(element));
  return [...new Set(duplicateNumbers.sort())];
}
