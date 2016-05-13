module.exports = function(grunt) {

	// require('load-grunt-config')(grunt, {
	// 	data: {
	// 		project: {

	// 			// folder project
	// 			//
	// 			folder: '../',
	// 			assets: '<%= project.folder %>/assets',

	// 			// assets theme
	// 			//
	// 			img: '<%= project.assets %>/images',
	// 			fonts: '<%= project.assets %>/fonts',
	// 			scss: '<%= project.assets %>/scss',
	// 			stylesheets: '<%= project.assets %>/css',
	// 			javascripts: '<%= project.assets %>/js',
	// 			slim: '<%= project.assets %>/slim',
	// 			pug: '<%= project.assets %>/pug',
	// 			statics: '<%= project.assets %>/statics',

	// 			// assets theme vendor
	// 			//
	// 			scssvendor: '<%= project.scss %>/vendor',
	// 			imgvendor: '<%= project.img %>/vendor',
	// 			jsvendor: '<%= project.javascripts %>/vendor',
	// 			styleguide: '<%= project.assets %>/styleguide',

	// 			// folder theme scss
	// 			//
	// 			base:       '<%= project.scss %>/base', 
	// 			components: '<%= project.scss %>/components',
	// 			helpers:    '<%= project.scss %>/helpers',
	// 			layout:     '<%= project.scss %>/layout',
	// 			molecules:  '<%= project.scss %>/molecules',
	// 			organism:   '<%= project.scss %>/organism',
	// 			pages:      '<%= project.scss %>/pages',
	// 			themes:     '<%= project.scss %>/themes',
	// 			vendors:    '<%= project.scss %>/vendors',

	// 			// bower folder
	// 			//
	// 			bower: 'bower_components',
				
	// 			// folder framework
	// 			//
	// 			foundation: '<%= project.bower %>/foundation-sites',
	// 			bootstrap: '<%= project.bower %>/bootstrap-sass',
	// 			bourbon: '<%= project.bower %>/bourbon',
	// 			susy: '<%= project.bower %>/susy',
	// 			breakpoint: '<%= project.bower %>/breakpoint-sass',
	// 			motionui: '<%= project.bower %>',
	// 		},
	// 	},

	// });


	
	//rimane commentata fino a che si riuscira a fala funzionare tramite load grunt
	
	// grunt.initConfig({
	// 	pkg: grunt.file.readJSON('package.json'),

	// 	postcss: {
	// 		options: {
	// 			map: true, // inline sourcemaps

	// 			processors: [
	// 				require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
	// 				//require('cssnano')() // minify the result
	// 			]
	// 		},
	// 		dist: {
	// 			//src: '../assets/css/src/main.css',
	// 			//dest: '../assets/css/dest/main.css'
	// 			files: [
	// 				{
	// 					'../assets/css/dist/main.css': '../assets/css/src/main.css',
	// 					'../assets/css/dist/vendor.css': '../assets/css/src/vendor.css',
	// 				}
	// 			]
	// 		}
	// 	}
	// });
	
	// grunt.loadNpmTasks('grunt-postcss');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		 pug: {
	    debug: {
	      options: {
	        data: {
	          debug: true,
	          timestamp: '<%= grunt.template.today() %>'
	        }
	      },
	      files: {
	        '../assets/statics/index.html': '../assets/pug/index.jade'
	      }	      
	    }
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-pug');

};
