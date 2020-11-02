// 字母异位词分组

var groupAnagrams = function(strs) {
  const cache = new Map();
  const result = [];
  for (let str of strs) {
    const tempStr = str.split('').sort().join('');
    if (cache.has(tempStr)) {
      cache.get(tempStr).push(str)
    } else {
      cache.set(tempStr, [str])
    }
  }
  for (let key of cache.keys()) {
    result.push(cache.get(key));
  }
  return result;
};