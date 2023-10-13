import { sumDigits } from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("returns the sum of numbers of a digit", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(1000)).toBe(1);
  });
});
