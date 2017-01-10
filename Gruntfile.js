"use strict";

module.exports = function(grunt) {

	grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'assets/css/src/main.css': 'assets/css/src/sass/main.scss',
                    'assets/css/src/horloge.css': 'assets/css/src/sass/horloge.scss',
                }
            }
        },
		concat:{
			app_js:{
				src: [
					'./bower_components/jquery/dist/jquery.min.js',
					'./bower_components/bootstrap/dist/js/bootstrap.min.js',
					'./assets/plugins/flipclock/flipclock.min.js',
					'./assets/js/src/horloge.js'
				],
				dest: './assets/js/app.min.js'
			},
            app_css: {
				src: [
                    'bower_components/bootstrap/dist/css/bootstrap.min.css"',
                    './assets/plugins/flipclock/flipclock.css',
                    'assets/css/src/main.css',
                    'assets/css/src/horloge.css',
				],
                dest: './assets/css/app.css'
            }
		},
		watch:{
			front_css:{
				files: ['./assets/src/css/*.scss'],
				tasks: ['css']
			},
			app_js:{
				files: ['./assets/src/js/*.js'],
				tasks: ['app_js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('css', ['compile_css', 'concat_css']);
    grunt.registerTask('app_js', ['concat:app_js']);
	grunt.registerTask('compile_css', ['sass']);
	grunt.registerTask('concat_css', ['concat:app_css']);

};