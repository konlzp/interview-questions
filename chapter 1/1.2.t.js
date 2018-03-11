const assert = require('assert').ok;
var exports = require("./1.2.js");

var checkPermutation = exports.checkPermutation;

assert(checkPermutation("aa", "aa") === true);
assert(checkPermutation("aba", "baa") === true);
assert(checkPermutation("aabaaccdd", "abaaadcdc") === true);
assert(checkPermutation("aba", "abc") === false);