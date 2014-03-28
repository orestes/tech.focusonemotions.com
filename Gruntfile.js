module.exports = function(grunt) {
// Project configuration.
    var pkg = require('./package.json');

    grunt.initConfig({

        // Various Grunt tasks...

        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'git@github.com:focusonemotions/tech.focusonemotions.com.git',
                    branch: 'gh-pages'
                }
            },
            local: {
                options: {
                    remote: '../',
                    branch: 'build'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-build-control');
    grunt.registerTask('deploy', ['buildcontrol']);
};