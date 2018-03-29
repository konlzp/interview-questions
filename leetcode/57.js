/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * existing intervals are sorted based on its start time
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var results = [];
    var inserted = false;
    intervals.forEach((interval) => {
        if (interval.start > newInterval.end) {
            // {} [     ]
            if (!inserted) {
                results.push(newInterval);
                inserted = true;
            }
            results.push(interval);
        } else if (interval.end < newInterval.start) {
            // [  ] {  }
            results.push(interval);
        } else if (interval.end >= newInterval.end && interval.start > newInterval.start) {
            // { [ } ]
            newInterval.end = interval.end;
            inserted = true;
            results.push(newInterval);
        } else if (interval.end >= newInterval.end && interval.start <= newInterval.start) {
            // [  { }  ]
            inserted = true;
            results.push(interval);
        } else if (interval.end < newInterval.end && interval.start <= newInterval.start) {
            // [  { ] }
            newInterval.start = interval.start;
        } else if (interval.end < newInterval.end && interval.start > newInterval.start) {
            // {     [   ]    }
        }
    })

    if (!inserted) {
        results.push(newInterval);
    }

    return results;
};

function makeInterval(arr) {
    return {
        start: arr[0],
        end: arr[1]
    };
}

console.log(insert([[1,2],[8,10],[12,16]].map(makeInterval), makeInterval([4,9])));