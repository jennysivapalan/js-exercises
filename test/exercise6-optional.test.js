import { sumDigits, createRange } from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("returns the sum of numbers of a digit", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(1000)).toBe(1);
  });
});

describe("createRange", () => {
  test("returns the range of numbers as an array with increments of a defined step value", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(-3, 11, 2)).toEqual([-3, -1, 1, 3, 5, 7, 9, 11]);
  });
  test("returns the range with a step value not provided and assumed to be 1", () => {
    expect(createRange(2, 6)).toEqual([2, 3, 4, 5, 6]);
  });
});
