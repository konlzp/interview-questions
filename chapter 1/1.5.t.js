const assert = require('assert').ok;
var exports = require("./1.5.js");

var oneAway = exports.oneAway;

assert(oneAway("pale", "ple") === true);
assert(oneAway("pales", "pale") === true);
assert(oneAway("pale", "bale") === true);
assert(oneAway("pale", "bake") === false);