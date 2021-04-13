/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(n.toString());
  let min = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
      index = i;
    }
  }
  arr.splice(index, 1);
  const str = arr.join('');
  return Number(str);
}

module.exports = deleteDigit;
