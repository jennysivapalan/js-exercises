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
  let countZeros = 0;
  let countOnes = 0;
  stringArr.map((character) => {
    if (character === "0") countZeros++;
    else if (character === "1") countOnes++;
  });
  return { 1: countOnes, 0: countZeros };
};

export const reverseNumber = (num) => {
  if (num === undefined) throw new Error("n is required");
  return parseInt(num.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
