type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const res = [];

  function helper(arr, depth) {
    for (const val of arr) {
      if (typeof val === "object" && depth < n) {
        helper(val, depth + 1);
      } else {
        res.push(val);
      }
    }
    return res;
  }
  return helper(arr, 0);
};
