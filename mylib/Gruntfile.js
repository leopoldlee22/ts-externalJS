module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        ts: {
            default: {
                src: ["src/**/*.ts", "!node_modules/**"],
                outDir: "dist",
                options: {
                    rootDir: "src",
                    target: "es5",
                    module: "amd",
                    comments: false,
                    declaration: true,
                    sourceMap: true,
                    strict: true,
                }
                // tsconfig: './tsconfig.json',
                // passThrough: true
            }
        },

        uglify: {
            target: {
                files: [{
                    expand: true,
                    src: ['*.js'/*, '!dist/*.min.js'*/],
                    dest: './dist',
                    cwd: './dist',
                    // rename: function (dst, src) {
                    //     return src.replace('.js', '.min.js');
                    // }
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ["ts:default", "uglify:target"]);
};