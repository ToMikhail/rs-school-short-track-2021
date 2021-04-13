/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr =
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = [];
  const indxArr = [];
  let index = arr.indexOf(-1);
  while (index !== -1) {
    indxArr.push(index);
    index = arr.indexOf(-1, index + 1);
  }
  sortArr = arr.sort((a, b) => a - b);
  while (sortArr[0] === -1) {
    sortArr.shift();
  }
  for (let i = 0; i < indxArr.length; i++) {
    sortArr.splice(indxArr[i], 0, -1);
  }
  return sortArr;
}

module.exports = sortByHeight;
