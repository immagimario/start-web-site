module.exports = function(grunt) {
 
	require('load-grunt-config')(grunt, {
		data: {
			project: {

				//
				// name variable: [name folder]
				//
				folder: ['../'], // <%= pkg.name %> creates a folder with the same name // of the variable name present in package.json 
				assets: ['<%= project.folder %>/assets'],
					
				// elementi grafici
				components: ['<%= project.scss %>/components'],
				// styli form
				forms: ['<%= project.scss %>/forms'],
				// griglie e gabbie
				grid: ['<%= project.scss %>/grid'],
				// parametri e variabili
				settings: ['<%= project.scss %>/settings'],
				// gestione tipografia
				typography: ['<%= project.scss %>/typography'],
				// mixin e function
				util: ['<%= project.scss %>/util'],

				// theme
				img: ['<%= project.assets %>/images'],
				fonts: ['<%= project.assets %>/fonts'],
				scss: ['<%= project.assets %>/scss'],
				stylesheets: ['<%= project.assets %>/css'],
				javascripts: ['<%= project.assets %>/js'],
				jssource: ['<%= project.javascripts %>/source'],
				slim: ['<%= project.assets %>/slim'],
				statics: ['<%= project.assets %>/statics'],

				// vendor
				scssvendor: ['<%= project.scss %>/vendor'],
				imgvendor: ['<%= project.img %>/vendor'],
				jsvendor: ['<%= project.javascripts %>/vendor'],
				styleguide: ['<%= project.assets %>/styleguide'],

				// bower folder
				bower: ['bower_components'],
				
				// folder framework
				foundation: ['<%= project.bower %>/foundation-sites'],
				bootstrap: ['<%= project.bower %>/bootstrap-sass'],
				bourbon: ['<%= project.bower %>/bourbon'],
				susy: ['<%= project.bower %>/susy'],
				breakpoint: ['<%= project.bower %>/breakpoint-sass'],
				motionui: ['<%= project.bower %>'],

				// folder theme
				base:       ['<%= project.scss %>/base'], 
				components: ['<%= project.scss %>/components'],
				helpers:    ['<%= project.scss %>/helpers'],
				layout:     ['<%= project.scss %>/layout'],
				molecules:  ['<%= project.scss %>/molecules'],
				organism:   ['<%= project.scss %>/organism'],
				pages:      ['<%= project.scss %>/pages'],
				themes:     ['<%= project.scss %>/themes'],
				vendors:    ['<%= project.scss %>/vendors'],
			},
		},

	});
 
};