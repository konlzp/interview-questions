const assert = require('assert').ok;
var exports = require("./1.6.js");

var compress = exports.compress;

assert(compress("aaabbccddd") === "a3b2c2d3");
assert(compress("abcdefg") === "abcdefg");
assert(compress("aacccdaaabbaa") === "a2c3d1a3b2a2");
assert(compress("aacccdaaabba") === "aacccdaaabba");