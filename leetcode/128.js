/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var longest = 0;
    var numSet = {};
    nums.forEach(num => {
        numSet[num] = true;
    })

    nums.forEach(num => {
        if (!numSet[num - 1]) {
            var endSeq = num;
            while (numSet[endSeq]) {
                endSeq ++;
            }
            longest = Math.max(longest, endSeq - num);
        }
    });

    return longest;
};