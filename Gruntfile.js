'use strict';

module.exports = function(grunt){


    grunt.initConfig({
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/input.jsx":               "src/jsx/input.jsx",
                    "dist/baseInputWrapper.jsx":    "src/jsx/baseInputWrapper.jsx",
                    "dist/textInput.jsx":           "src/jsx/textInput.jsx",
                    "dist/emailInput.jsx":          "src/jsx/emailInput.jsx"
                }
            }
        },
    });

    require("load-grunt-tasks")(grunt, { pattern: ['grunt-*', '!grunt-lib-*'] });
    grunt.registerTask("default", ["babel"]);
};
