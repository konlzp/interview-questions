/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var start = null, prev = null;
    nums.push('end');
    var result = [];

    nums.forEach((num) => {
        if (start === null) {
            start = num;
            prev = num;
            return;
        }

        if (num === prev + 1) {
            prev++;
        } else {
            if (prev === start) {
                result.push('' + start);
            } else {
                result.push(start + "->" + prev);
            }

            start = num;
            prev = num;
        }
    });

    return result;
};

console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));