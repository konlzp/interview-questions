/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var curr = null;

    var i, j;
    for (i = 0, j = 0; j < nums.length;) {
        if (curr === null || curr !== nums[j]) {
            nums[i++] = nums[j];
            curr = nums[j];
        } else {
            j++;
        }
    }
    return i;
};

var nums = [1,1,2,2,3,3];
console.log(nums.slice(0, removeDuplicates(nums)));
