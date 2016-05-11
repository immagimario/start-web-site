module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {

		data: {
			project: {

				// folder project
				//
				folder: '../',
				assets: '<%= project.folder %>/assets',

				// assets theme
				//
				img: '<%= project.assets %>/images',
				fonts: '<%= project.assets %>/fonts',
				scss: '<%= project.assets %>/scss',
				stylesheets: '<%= project.assets %>/css',
				javascripts: '<%= project.assets %>/js',
				slim: '<%= project.assets %>/slim',
				statics: '<%= project.assets %>/statics',

				// assets theme vendor
				//
				scssvendor: '<%= project.scss %>/vendor',
				imgvendor: '<%= project.img %>/vendor',
				jsvendor: '<%= project.javascripts %>/vendor',
				styleguide: '<%= project.assets %>/styleguide',

				// folder theme scss
				//
				base:       '<%= project.scss %>/base', 
				components: '<%= project.scss %>/components',
				helpers:    '<%= project.scss %>/helpers',
				layout:     '<%= project.scss %>/layout',
				molecules:  '<%= project.scss %>/molecules',
				organism:   '<%= project.scss %>/organism',
				pages:      '<%= project.scss %>/pages',
				themes:     '<%= project.scss %>/themes',
				vendors:    '<%= project.scss %>/vendors',

				// bower folder
				//
				bower: 'bower_components',
				
				// folder framework
				//
				foundation: '<%= project.bower %>/foundation-sites',
				bootstrap: '<%= project.bower %>/bootstrap-sass',
				bourbon: '<%= project.bower %>/bourbon',
				susy: '<%= project.bower %>/susy',
				breakpoint: '<%= project.bower %>/breakpoint-sass',
				motionui: '<%= project.bower %>',
			},
		},

	});
};