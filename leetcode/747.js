/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var largest = Math.max(...nums);
    if (nums.every((num) => {return largest >= 2 * num || largest === num;})) {
        return nums.indexOf(largest);
    }
    return -1;
};

console.log(dominantIndex([0,0,0,1]));