const sockMerchant = (n, xs) => {
  let map = {};
  let count = 0;
  for (let x of xs) {
    if (map[x]) {
      count++;
      map[x] = false;
    } else {
      map[x] = true;
    }
  }

  return count;
};
