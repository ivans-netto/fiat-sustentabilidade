module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            dev: {
                files: {                   // Target options
                    'assets/css/main.css': [ 'assets/less/main.less']
                },
                options: {
                    compress: false,
                    // LESS source map
                    // To enable, set sourceMap to true and update sourceMapRootpath based on your install
                    sourceMap: true,
                    sourceMapFilename: 'assets/css/main.css.map'
                    // sourceMapRootpath: '/app/themes/roots/'
                }
            },
            build: {
                files: {                       // Target options
                    'assets/css/min/main.min.css': ['assets/less/main.less']
                },
                options: {
                    compress: true
                }
            }
        },
        watch: {
            css: {
                files: [
                    'assets/**/*.less',
                    'assets/**/**/*.less',
                    'assets/**/**/**/*.less',
                    'assets/**/**/**/**/*.less'
                ],
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('dev',[
        'less:dev'
    ]);
    grunt.registerTask('build',[
        'less:build'
    ]);
    grunt.registerTask('default',['watch']);
}