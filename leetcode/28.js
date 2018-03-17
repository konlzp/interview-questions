/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var aux = generateKMPAux(needle);

    console.log(aux);

    var j = 0;
    for (var i = 0; i < haystack.length;) {
        if (haystack[i] === needle[j]) {
            j++;
            i++;
            if (j == needle.length) {
                return i - needle.length;
            }
        } else if (j > 0){
            j = aux[j - 1];
        } else {
            i++;
        }
    }

    return -1;
};

/**
 * 
 * @param {string} pattern 
 */
function generateKMPAux(pattern) {
    var lps = [0];

    var len = 0; // len is the previous longest prefix-suffix
    var i = 1;
    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

console.log(strStr("abcsdfeddddeas", "dde"));