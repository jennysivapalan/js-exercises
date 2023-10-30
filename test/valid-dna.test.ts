import { logDNA } from "../src/valid-dna";

describe("test logDNA", () => {
  it("should return a b for logDNA(a,b)", () => {
    expect(logDNA("a", "b")).toBe("a:b");
  });
});
