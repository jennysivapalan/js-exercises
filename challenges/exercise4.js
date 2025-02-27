export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const indexOfN = nums.indexOf(n);
  if (indexOfN === -1 || indexOfN === nums.length - 1) return null;
  return nums[indexOfN + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const stringArr = str.split("");
  const countZeros = stringArr.filter((character) => character === "0").length;
  const countOnes = stringArr.filter((character) => character === "1").length;

  return { 1: countOnes, 0: countZeros };
};

export const reverseNumber = (num) => {
  if (num === undefined) throw new Error("n is required");
  return parseInt(num.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  const sumsInArray = arrs.map((array) =>
    array.reduce((accumulator, num) => accumulator + num, 0)
  );
  return sumsInArray.reduce((accumulator, num) => accumulator + num, 0);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  const tempFirst = arr[0];
  const lastIndex = arr.length - 1;
  const tempLast = arr[lastIndex];
  arr[0] = tempLast;
  arr[arr.length - 1] = tempFirst;
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let foundTerm = false;

  for (let key in haystack) {
    const term = haystack[key];
    if (
      term === searchTerm ||
      (typeof term === "string" &&
        String(term).toLowerCase().includes(searchTerm.toLowerCase()))
    )
      return (foundTerm = true);
  }
  return foundTerm;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const frequencies = {};
  str.split(" ").map((str) => {
    const lowerCaseString = String(str)
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .toLowerCase();
    if (frequencies[lowerCaseString] === undefined) {
      frequencies[lowerCaseString] = 1;
    } else {
      frequencies[lowerCaseString]++;
    }
  });
  return frequencies;
};
