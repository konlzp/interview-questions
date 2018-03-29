var shortLength = 6;
var mapping = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    var shortUrl = Array(shortLength).fill(0);
    var urlLen = longUrl.length;
    longUrl = longUrl + Array(shortLength - (urlLen - 1) % shortLength - 1).fill(" ").join("");
    for (var i = 0; i < longUrl.length; i += shortLength) {
        for (var j = 0; j < shortLength; ++j) {
            shortUrl[j] = (shortUrl[j] + longUrl.charCodeAt(i + j)) % 26;
        }
    }

    shortUrl = shortUrl.map(val => String.fromCharCode(val + 'a'.charCodeAt(0))).join("");
    if (!mapping[shortUrl])
    mapping[shortUrl] = longUrl;

    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return mapping[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 console.log(decode(encode("abdcsdfewrasfvsaerw")));