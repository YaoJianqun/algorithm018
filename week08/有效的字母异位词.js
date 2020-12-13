var isAnagram = function(s, t) {
    const hash = {};
    let length = Math.max(s.length, t.length);
    for (let i = 0; i < length; i++) {
        if (!hash[s[i]]) hash[s[i]] = 0;
        if (!hash[t[i]]) hash[t[i]] = 0;
        hash[s[i]]++;
        hash[t[i]]--;
    }
    for (const item of Object.keys(hash)) {
        if (hash[item] !== 0) {
            return false;
        }
    }
    return true;
};