const assert = require('assert').ok;
var exports = require("./1.1.js");

var isUnique = exports.isUnique;

assert(isUnique("aa") === false);
assert(isUnique("aba") === false);
assert(isUnique("abcd") === true);