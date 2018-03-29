/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var res = Number.MAX_VALUE;
    var lowIndex = 0;

    var tMap = {};
    for (var i = 0; i < t.length; ++i) {
        if (typeof tMap[t[i]] === 'undefined') {
            tMap[t[i]] = 0;
        }
        tMap[t[i]]++;
    }

    var count = t.length;
    var head = -1, end = 0;
    while (head < s.length) {
        if (count) {
            head ++;
            if (t.indexOf(s[head]) !== -1) {
                tMap[s[head]] --;
                if (tMap[s[head]] >= 0) {
                    count --;
                }
            }
        } else {
            if (res > head - end + 1) {
                res = head - end + 1;
                lowIndex = end;
            }
            if (t.indexOf(s[end]) !== -1) {
                tMap[s[end]] ++;
                if (tMap[s[end]] > 0) {
                    count ++;
                }
            }
            end ++;
        }
    }
    return res === Number.MAX_VALUE ? "" : s.slice(lowIndex, lowIndex + res); 
};

console.log(minWindow("ADOBECODEBANC", "ABC"));