// 有效的字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) {
      return false;
  }
  const cache = [];
  for (let i = 0; i < s.length; i++) {
      if (!cache[s[i]]) cache[s[i]] = 0;
      if (!cache[t[i]]) cache[t[i]] = 0;
      cache[s[i]]++;
      cache[t[i]]--;
  }
  for (let i = 0; i < s.length; i++) {
      if (cache[s[i]] !== 0) {
          return false;
      }
  }
  return true;
};