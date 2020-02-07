const countingValleys = (n, s) => {
  let level = 0;
  let steps = s.split('');
  let maybeValley = false;
  let count = 0;

  for (let step of steps) {
    if (step === 'U') level++;
    if (step === 'D') level--;

    if (!maybeValley && level === -1) maybeValley = true;

    if (maybeValley && level === 0) {
      maybeValley = false;
      count++;
    }
  }

  return count;
};
