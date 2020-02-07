/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = str =>
  str.split('').reduce((longest, curr, i, chars) => {
    let tmp = curr;

    for (let char of chars.slice(i + 1)) {
      if (tmp.includes(char)) break;
      tmp += char;
      longest = tmp.length > longest ? tmp.length : longest;
    }

    return longest;
  }, str.length ? 1 : 0);
