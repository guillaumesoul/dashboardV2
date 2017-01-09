"use strict";

module.exports = function(grunt) {

	grunt.initConfig({
        sass: {
            dev: {
                files: {
                    // destination         // source file
                    'assets/css/styles.css' : 'assets/src/css/horloge.scss'
                }
            }
        },
		concat:{
			app_js:{
				src: [
					'./assets/plugins/jquery/dist/jquery.min.js',
					'./assets/plugins/jquery-ui/jquery-ui.min.js',
					'./assets/plugins/bootstrap-sass/assets/javascripts/bootstrap.min.js',
					'./assets/js/src/contact.js',
					'./assets/js/src/app.js'
				],
				dest: './assets/js/app.min.js'
			}
		},
		uglify:{
			app_js: {
				options: {
					mangle: {
						except: [
							'./assets/plugins/jquery/dist/jquery.min.js',
							'./assets/plugins/jquery/dist/jquery.min.js',
							'./assets/plugins/jquery-ui/jquery-ui.min.js',
							'./assets/plugins/bootstrap-sass/assets/javascripts/bootstrap.min.js',
						]
					}
				},
				files: {
					'./assets/js/app.min.js': [
						'./assets/plugins/jquery/dist/jquery.min.js',
						'./assets/plugins/jquery-ui/jquery-ui.min.js',
						'./assets/plugins/bootstrap-sass/assets/javascripts/bootstrap.min.js',
						'./assets/js/src/contact.js',
						'./assets/js/src/app.js'
					]
				}
			}
		},
		watch:{
			front_css:{
				files: ['./assets/css/src/*.scss'],
				tasks: ['front_css']
			},
			app_js:{
				files: ['./assets/js/src/*.js'],
				tasks: ['app_js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('front_css', ['sass:dev']);
	grunt.registerTask('app_js', ['concat:app_js', 'uglify:app_js']);
};