import { sumMultiples, isValidDNA } from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("returns the sum of numbers if they are a multiple of 5 in the array", () => {
    expect(sumMultiples([5, 13, 17])).toBe(35);
    expect(sumMultiples([5])).toBe(5);
    expect(sumMultiples([5, -10])).toBe(-5);
  });

  test("if the sum of the numbers in the array is not a multiple of 5 returns null", () => {
    expect(sumMultiples([5, 1, 23, 15])).toBe(null);
  });

  test("returns the sum of numbers if they are a multiple of 3 in the array", () => {
    expect(sumMultiples([3, 8, 1])).toBe(12);
    expect(sumMultiples([5, -8])).toBe(-3);
  });

  test("if the sum of the numbers in the array is not a multiple of 3 returns null", () => {
    expect(sumMultiples([5, 1, 23, 15])).toBe(null);
    expect(sumMultiples([7, 7])).toBe(null);
  });
});

describe("isValidDNA", () => {
  test("returns true if the string is a valid DNA string", () => {
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("G")).toBe(true);
    expect(isValidDNA("T")).toBe(true);
    expect(isValidDNA("A")).toBe(true);
    expect(isValidDNA("CA")).toBe(true);
    expect(isValidDNA("GTAC")).toBe(true);
  });

  test("returns false if the string is a not a valid DNA string", () => {
    expect(isValidDNA("CB")).toBe(false);
    expect(isValidDNA("H$G")).toBe(false);
    expect(isValidDNA("BVF")).toBe(false);
  });
});
