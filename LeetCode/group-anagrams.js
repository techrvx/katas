/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const sort = str => str.split('').sort().join('');
  return Object.values(
    strs.reduce((map, str) => {
      const sorted = sort(str);
      if (map[sorted]) {
        map[sorted].push(str)
      } else {
        map[sorted] = [str];
      }
      return map;
    }, {})
  );
};
