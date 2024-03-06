module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './dev/styles/main.css': './src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    './dist/styles/main.min.css': './src/styles/main.less'
                }
            }
        },
        uglify: {
            production: {
                files: {
                    './dist/scripts/main.min.js': './src/scripts/main.js'
                }
            }
        },
        watch: {
            less: {
                files: ['./src/styles/**/*.less'],
                tasks: ['less:development']
            },
            javascript: {
                files: ['./src/scripts/**/*.js'],
                tasks: ['copy:javascript']
            }
        },
        copy: {
            javascript: {
                files: [
                    {
                        expand: true,
                        src: ['./src/scripts/**/*.js'],
                        dest: './dev/scripts/'
                    }
                ]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-copy')

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production', 'uglify'])
}