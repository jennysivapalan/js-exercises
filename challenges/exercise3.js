export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const numsLessThan1 = [];
  nums.forEach((nums) => {
    if (nums < 1) numsLessThan1.push(nums);
  });
  return numsLessThan1;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const namesStartingWithChar = [];
  names.forEach((name) => {
    if (name.startsWith(char)) namesStartingWithChar.push(name);
  });
  return namesStartingWithChar;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbWords = [];
  words.forEach((word) => {
    if (word.startsWith("to ")) verbWords.push(word);
  });
  return verbWords;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integerNumbers = [];
  nums.forEach((num) => {
    if (Number.isInteger(num)) integerNumbers.push(num);
  });
  return integerNumbers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  users.forEach((user) => {
    cities.push(user.data.city.displayName);
  });
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRootNums = [];
  nums.forEach((num) => {
    const sqRootNum = Math.sqrt(num);
    if (sqRootNum - Math.floor(sqRootNum) === 0) squareRootNums.push(sqRootNum);
    else squareRootNums.push(parseFloat(sqRootNum.toFixed(2)));
  });
  return squareRootNums;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const senstancesContainingStr = [];
  sentences.forEach((sentence) => {
    if (sentence.toLowerCase().includes(str.toLowerCase()))
      senstancesContainingStr.push(sentence);
  });
  return senstancesContainingStr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSide = [];
  triangles.forEach((triangle) => {
    longestSide.push(Math.max(...triangle));
  });
  return longestSide;
}
