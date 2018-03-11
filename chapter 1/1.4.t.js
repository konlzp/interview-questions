const assert = require('assert').ok;
var exports = require("./1.4.js");

var checkPalindrome = exports.checkPalindrome;

assert(checkPalindrome("tactcoa") === true);
assert(checkPalindrome("aba") === true);
assert(checkPalindrome("aabaerf") === false);