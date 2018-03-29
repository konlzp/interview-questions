/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a.start - b.start;
    });

    console.log(intervals);

    var newIntervals = [];
    var curInterval = {};
    intervals.forEach((interval) => {
        if (typeof curInterval.start === 'undefined') {
            curInterval.start = interval.start;
            curInterval.end = interval.end;
            return ;
        }

        if (curInterval.end >= interval.start) {
            curInterval.end = interval.end > curInterval.end ? interval.end : curInterval.end;
        } else {
            newIntervals.push([curInterval.start, curInterval.end]);
            curInterval.start = interval.start;
            curInterval.end = interval.end;
        }
    });

    if (typeof curInterval.start !== "undefined") {
        newIntervals.push([curInterval.start, curInterval.end]);
    }

    return newIntervals;
};

function makeInterval(arr) {
    return {
        start: arr[0],
        end: arr[1]
    };
}

console.log(merge([[1, 4], [2, 3]].map(makeInterval)));