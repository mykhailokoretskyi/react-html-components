'use strict';

module.exports = function(grunt){


    grunt.initConfig({
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/input.js":            "src/jsx/input.jsx",
                    "dist/textInput.js":        "src/jsx/textInput.jsx",
                    "dist/emailInput.js":       "src/jsx/emailInput.jsx"
                }
            }
        },
    });

    require("load-grunt-tasks")(grunt, { pattern: ['grunt-*', '!grunt-lib-*'] });
    grunt.registerTask("default", ["babel"]);
};
