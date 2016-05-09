module.exports = {
	
	// jQuery is a fast, small, and feature-rich JavaScript library.
  jquery: {
    options: {
        srcPrefix: '<%= project.bower %>/jquery/dist//',
        destPrefix: '<%= project.assets %>/js/vendor/',
    },
    files: [
      {
        'jquery.js' : 'jquery.js',
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
};