module.exports = {
	
	// jQuery is a fast, small, and feature-rich JavaScript library.
	jquery: {
		options: {
				srcPrefix: '<%= project.bower %>/jquery/dist/',
				destPrefix: '<%= project.jsvendor %>/',
		},
		files: [
			{
				'jquery.js' : 'jquery.js',
			}
		]
	},

	// A jQuery plugin that enables
	// HTML5 placeholder behavior for browsers that aren’t trying hard enough yet
	jqueryplaceholder: {
		options: {
				srcPrefix: '<%= project.bower %>/jquery-placeholder/',
				destPrefix: '<%= project.jsvendor %>/',
		},
		files: [
			{
				'jquery.placeholder.min.js' : 'jquery.placeholder.min.js',
			}
		]
	},

	// HTML5 Boilerplate is a professional front-end template
	// for building fast, robust, and adaptable web apps or sites.
	html5boilerplate: {
		options: {
				srcPrefix: '<%= project.bower %>/html5-boilerplate/src/',
				destPrefix: '<%= project.assets %>/',
		},
		files: [
			{
				'apple-touch-icon.png' : 'apple-touch-icon.png',
				'favicon.ico' : 'favicon.ico',
				'crossdomain.xml' : 'crossdomain.xml',
				'humans.txt' : 'humans.txt',
				'.editorconfig' : '.editorconfig',
			}
		]
	},

	// Bootstrap is the most popular HTML, CSS, and JS framework
	// for developing responsive, mobile first projects on the web.
	bootstrap: {
		options: {
				srcPrefix: '<%= project.bower %>/bootstrap-sass/assets/javascripts/',
				destPrefix: '<%= project.jsvendor %>/bootstrap/',
		},
		files: [
			{
			'bootstrap.min.js' : 'bootstrap.min.js',
			}
		]
	},
		bootstrapfont: {
			options: {
					srcPrefix: '<%= project.bower %>/bootstrap-sass/assets/fonts/bootstrap',
					destPrefix: '<%= project.fonts %>/bootstrap/',
			},
			files: [
				{
				'glyphicons-halflings-regular.eot' : 'glyphicons-halflings-regular.eot',
				'glyphicons-halflings-regular.svg' : 'glyphicons-halflings-regular.svg',
				'glyphicons-halflings-regular.ttf' : 'glyphicons-halflings-regular.ttf',
				'glyphicons-halflings-regular.woff' : 'glyphicons-halflings-regular.woff',
				'glyphicons-halflings-regular.woff2' : 'glyphicons-halflings-regular.woff2',
				}
			]
		},

	// Foundation is the most advanced responsive front-end framework in the world.
	foundation: {
		options: {
				srcPrefix: '<%= project.bower %>/foundation-sites/js/',
				destPrefix: '<%= project.jsvendor %>/foundation/',
		},
		files: [
			{
			'foundation.core.js' : 'foundation.core.js',
			'foundation.util.box.js' : 'foundation.util.box.js',
			'foundation.util.keyboard.js' : 'foundation.util.keyboard.js',
			'foundation.util.mediaQuery.js' : 'foundation.util.mediaQuery.js',
			'foundation.util.timerAndImageLoader.js' : 'foundation.util.timerAndImageLoader.js',
			'foundation.util.touch.js' : 'foundation.util.touch.js',
			'foundation.util.triggers.js' : 'foundation.util.triggers.js',
			}
		]
	},
	
	// Motion UI - A Sass library for creating CSS transitions and animations 
	motionui: {
		options: {
			srcPrefix: '<%= project.bower %>/motion-ui/',
			destPrefix: '<%= project.jsvendor %>/',
		},
		files: [
			{
				'motion-ui.js': 'motion-ui.js',
			}
		]
	},
	
	// Motion UI - A Sass library for creating CSS transitions and animations 
	whatinput: {
		options: {
			srcPrefix: '<%= project.bower %>/what-input/',
			destPrefix: '<%= project.jsvendor %>/',
		},
		files: [
			{
				'what-input.min.js': 'what-input.min.js',
			}
		]
	},
	
	// Slick Slider - the last carousel you'll ever need
	slick: {
		options: {
			srcPrefix: '<%= project.bower %>/slick-carousel/slick/',
			destPrefix: '<%= project.jsvendor %>/',
		},
		files: [
			{
				'slick.min.js': 'slick.min.js',
			}
		]
	},
	
		slickscss: {
			options: {
				srcPrefix: '<%= project.bower %>/slick-carousel/slick/',
				destPrefix: '<%= project.scssvendor %>/slick/',
			},
			files: [
				{
					'slick.scss': 'slick.scss',
					'slick-theme.scss': 'slick-theme.scss',
				}
			]
		},
	
		slickfont: {
			options: {
				srcPrefix: '<%= project.bower %>/slick-carousel/slick/fonts/',
				destPrefix: '<%= project.fonts %>/slick',
			},
			files: [
				{
					'slick.eot': 'slick.eot',
					'slick.svg': 'slick.svg',
					'slick.ttf': 'slick.ttf',
					'slick.woff': 'slick.woff',
				}
			]
		},
	
		slickimg: {
			options: {
				srcPrefix: '<%= project.bower %>/slick-carousel/slick/',
				destPrefix: '<%= project.imgvendor %>/slick',
			},
			files: [
				{
					'ajax-loader.gif': 'ajax-loader.gif',
				}
			]
		},
	
	// Font Awesome - gives you scalable vector icons that can instantly be customized
	fontawesome: {
		options: {
			srcPrefix: '<%= project.bower %>/font-awesome/fonts/',
			destPrefix: '<%= project.fonts %>/font-awesome',
		},
		files: [
			{
				'fontawesome-webfont.eot': 'fontawesome-webfont.eot',
				'fontawesome-webfont.svg': 'fontawesome-webfont.svg',
				'fontawesome-webfont.ttf': 'fontawesome-webfont.ttf',
				'fontawesome-webfont.woff': 'fontawesome-webfont.woff',
				'fontawesome-webfont.woff2': 'fontawesome-webfont.woff2',
				'FontAwesome.otf': 'FontAwesome.otf',
			}
		]
	},
	
		fontawesomescss: {
			options: {
				srcPrefix: '<%= project.bower %>/font-awesome/scss/',
				destPrefix: '<%= project.scssvendor %>/font-awesome',
			},
			files: [
				{
					'_variables.scss': '_variables.scss',
					'_mixins.scss': '_mixins.scss',
					'_path.scss': '_path.scss',
					'_core.scss': '_core.scss',
					'_larger.scss': '_larger.scss',
					'_fixed-width.scss': '_fixed-width.scss',
					'_list.scss': '_list.scss',
					'_bordered-pulled.scss': '_bordered-pulled.scss',
					'_animated.scss': '_animated.scss',
					'_rotated-flipped.scss': '_rotated-flipped.scss',
					'_stacked.scss': '_stacked.scss',
					'_icons.scss': '_icons.scss',
					'_screen-reader.scss': '_screen-reader.scss',
					'font-awesome.scss': 'font-awesome.scss',
				}
			]
		},

};