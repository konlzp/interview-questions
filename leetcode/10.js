/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var ismatch = function(s, p) {
    // initialize dp matrix
    var dp = [];
    for (var i = 0; i < s.length; ++i) {
        dp.push(Array(p.length).fill(false));
    }

    // initialize base cases
    dp[0][0] = true;
    for (var i = 1; i < p.length; ++i) {
        dp[0][i] = false;
    }
    for (var i = 1; i < s.length; ++i) {
        dp[i][0] = p[0] === '*' || 
    }

    // expand
}

// var isMatch = function(s, p) {
//     if (p.length === 0) {
//         return s.length === 0;
//     }

//     if (p[1] === '*') {
//         return isMatch(s, p.slice(2)) || (s.length !== 0 && (s[0] === p[0] || p[0] === '.') && isMatch(s.slice(1), p));
//     } else {
//         return s.length !== 0 && (s[0] === p[0] || p[0] === '.') && isMatch(s.slice(1), p.slice(1));
//     }
// };

// function match(s, p, sInd, pInd) {
//     if (sInd === s.length || pInd === p.length) {
//         if (sInd === s.length && pInd === p.length) {
//             return true;
//         }
//     }

//     if (p[pInd + 1] === '*') {
//         if (p[pInd] === '.') {
//             for (var i = sInd; i <= s.length; ++i) {
//                 if (match(s, p, i, pInd + 2)) {
//                     return true;
//                 }
//             }
//             return false;
//         } else {
//             while (s[sInd] === p[pInd]) {
//                 if (match(s, p, sInd,pInd + 2)) {
//                     return true;
//                 }
//                 sInd ++;
//             }
//             return match(s, p, sInd, pInd + 2);
//         }
//     }
//     if (s[sInd] && (s[sInd] === p[pInd] || p[pInd] === '.')) {
//         return match(s, p, sInd + 1, pInd + 1);
//     }
//     return false;
// }

/**
//  * 
//  * @param {string} s 
//  * @param {string} p 
//  * @param {number} sInd 
//  * @param {number} pInd 
//  */
// function match(s, p, sInd, pInd) {
//     if (sInd === s.length || pInd === p.length) {
//         if (sInd === s.length && pInd === p.length) {
//             return true;
//         }
//         return false;
//     }

//     if (s[sInd] === p[pInd] || p[pInd] === '.') {
//         return match(s, p, ++sInd, ++pInd);
//     }
//     if (p[pInd] === '*') {
//         for (var i = sInd; i <= s.length; ++i) {
//             if (match(s, p, i, pInd + 1)) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     return false;
// }

console.log(isMatch("a", ".*..a*"));