// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (cache.has(nums[i])) {
          return [cache.get(nums[i]), i]
      }
      cache.set(target - nums[i], i);
  }
  return [];
};