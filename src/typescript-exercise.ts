export function findSmallNums(nums: number[]) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (num) {
    return num < 1;
  });
}
