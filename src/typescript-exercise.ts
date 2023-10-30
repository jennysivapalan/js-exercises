export function logDNA(a: string, b: string): string {
  console.log(a, b);
  return `${a}:${b}`;
}

export function findSmallNums(nums: number[]) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (num) {
    return num < 1;
  });
}
