module.exports = (grunt) => {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            files: [
                '**/*.html',
                '**/*.css',
                '**/*.js',
                '**/*.scss'
            ],
            tasks: ['default']
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true
                }
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);
};
