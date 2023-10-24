import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
} from "../challenges/exercise6-optional";

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
describe("getScreentimeAlertList", () => {
  test("returns the user who has more than 100 minutes of screentime for a given day", () => {});
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        {
          date: "2019-05-01",
          usage: { twitter: 34, instagram: 22, facebook: 40 },
        },
        {
          date: "2019-05-02",
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: "2019-05-03",
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        {
          date: "2019-06-11",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safarai: 10 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safarai: 16 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safarai: 31 },
        },
      ],
    },
  ];
  expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
});
