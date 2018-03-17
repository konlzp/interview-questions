/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var map = {};
    var length = s.length;
    for (var i = 0; i < length; ++i) {
        if (!map[s[i]]) {
            map[s[i]] = 0;
        }
        map[s[i]] ++;
    }

    var gcd = gcdForN(Object.values(map));
    console.log(gcd);
    var divisors = getDivisors(gcd);
    console.log(divisors);
    return divisors.some((divisor) => {
        if (length % divisor !== 0 || divisor === 1) {
            return false;
        }

        var subStrLen = length / divisor;
        var target = s.slice(0, subStrLen);
        for (var i = subStrLen; i < length; i += subStrLen) {
            if (target !== s.slice(i, i + subStrLen)) {
                return false;
            }
        }
        return true;
    });
};

/**
 * 
 * @param {number} num 
 */
function getDivisors(num) {
    var divisors = [];
    for (var i = 1; i <= num; ++i) {
        if (num % i === 0){
            divisors.push(i);
        }
    }
    return divisors;
}

/**
 * @param {array} arr 
 */
function gcdForN(arr) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    var gcd = gcdFor2(arr[0], arr[1]);
    for (var i = 2; i < arr.length; ++i) {
        gcd = gcdFor2(gcd, arr[i]);
    }
    return gcd;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function gcdFor2(a, b) {
    while (b) {
        var t = b;
        b = a % b;
        a = t;
    }

    return a;
}

console.log(repeatedSubstringPattern("abcabcabcabc"));
console.log(repeatedSubstringPattern("abvvba"));