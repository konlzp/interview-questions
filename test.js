var Jasmine = require("jasmine");
var jasmine = new Jasmine();

jasmine.loadConfig({
    "spec_dir": "./tests",
    "spec_files": [
        "./*.t.js"
    ],
    "stopSpecOnExpectationFailure": false,
    "random": true
});

jasmine.execute();