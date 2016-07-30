'use strict';

var grunt = require('grunt');

require("load-grunt-tasks")(grunt);

grunt.initConfig({
    "babel": {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                "dist/input.js": "src/jsx/*.jsx"
            }
        }
    }
});

grunt.registerTask("default", ["babel"]);
