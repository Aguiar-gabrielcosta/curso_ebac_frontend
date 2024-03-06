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
        copy: {
            javascript: {
                files: [
                    {
                        expand: true,
                        cwd: './src/scripts',
                        src: ['./**/*.js'],
                        dest: './dev/scripts/'
                    }
                ]
            }
        },
        htmlmin: {
            production: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    './prebuild/index.html': './src/index.html'
                }
            }
        },
        clean: ['./prebuild'],
        replace: {
            development: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_JS',
                            replacement: './scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['./src/index.html'],
                        dest: './dev/'
                    }
                ]
            },
            production: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['./prebuild/index.html'],
                        dest: './dist/'
                    }
                ]
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
            },
            html: {
                files: ['./src/**/*.html'],
                tasks: ['replace:development']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-replace')

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production', 'uglify', 'htmlmin:production', 'replace:production', 'clean'])
}