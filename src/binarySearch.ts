function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;

  do {
    const midpoint = Math.floor(low + (high - low) / 2);

    const middleValue = haystack[midpoint];

    if (middleValue == needle) {
      return true;
    } else if (middleValue > needle) {
      high = midpoint;
    } else {
      low = midpoint + 1;
    }
  } while (low < high);

  return false;
}

console.log(bs_list([1, 2, 3, 4, 5], 2));
