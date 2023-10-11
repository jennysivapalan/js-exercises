export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (num) {
    return num < 1;
  });
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(function (name) {
    return name.startsWith(char);
  });
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(function (word) {
    return word.startsWith("to ");
  });
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (num) {
    return Number.isInteger(num);
  });
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
  return sentences.filter(function (sentence) {
    return sentence.toLowerCase().includes(str.toLowerCase());
  });
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSide = [];
  triangles.forEach((triangle) => {
    longestSide.push(Math.max(...triangle));
  });
  return longestSide;
}
