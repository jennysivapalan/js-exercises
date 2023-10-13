import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

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
    expect(isValidDNA("gTaC")).toBe(true);
  });

  test("returns false if the string is a not a valid DNA string", () => {
    expect(isValidDNA("CB")).toBe(false);
    expect(isValidDNA("H$G")).toBe(false);
    expect(isValidDNA("BVF")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("returns the complementary DNA", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("TA")).toBe("AT");
    expect(getComplementaryDNA("G")).toBe("C");
    expect(getComplementaryDNA("tGAc")).toBe("ACTG");
  });
});

describe("isItPrime", () => {
  test("returns true if the number is prime", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(42299)).toBe(true);
  });
  test("returns false if the number is not prime", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(45)).toBe(false);
    expect(isItPrime(100)).toBe(false);
    expect(isItPrime(200000000002)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns matrix of the filler value foo", () => {
    expect(createMatrix(3, "foo")).toStrictEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });
  test("returns matrix of the filler value 3", () => {
    expect(createMatrix(2, 3)).toStrictEqual([
      [3, 3],
      [3, 3],
    ]);
  });
});

describe("areWeCovered", () => {
  test("returns true if enough staff are scheduled to work on a given day", () => {
    const staff = [
      {
        name: "Sally",
        rota: ["Monday", "Tuesday", "Friday"],
      },
      {
        name: "Pedro",
        rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
      },
      { name: "Shelia", rota: ["Saturday", "Monday", "Wednesday", "Tuesday"] },
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
  });
  test("returns false if not enough staff are scheduled to work on a given day", () => {
    const staff = [
      {
        name: "Sally",
        rota: ["Monday", "Tuesday", "Friday", "Monday", "Monday"],
      },
      {
        name: "Pedro",
        rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
      },
    ];
    expect(areWeCovered(staff, "Friday")).toBe(false);
    expect(areWeCovered(staff, "Monday")).toBe(false);
  });
});
