/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if (Math.abs(s.length - t.length) > 1) {
        return false;
    } else if (s.length - t.length === 1) {
        return isOneAdditionDistance(s, t);
    } else if (t.length - s.length === 1) {
        return isOneAdditionDistance(t, s);
    } else {
        var count = 0;
        for (var i = 0; i < t.length; ++i) {
            if (t[i] !== s[i]) {
                if (count > 0) {
                    return false;
                } else {
                    count ++;
                }
            }
        }
        return count === 1;
    }
};

function isOneAdditionDistance(s, t) {
    var count = 0;
    for (var i = 0; i < s.length; ++i) {
        if (s[i] !== t[i - count]) {
            if (count > 0) {
                return false;
            }
            count ++;
        }
    }
    return true;
}