module.exports = {
  postcss: { // please note: in this case this is target name not plugin name (so you can put any keyword, like: foo or dist or production etc.)
    options: {
      processors: [
        require('autoprefixer')({browsers: ['last 2 versions']}),
      ]
    },
		files: {
			'<%= project.stylesheets %>/dest/main.css': '<%= project.stylesheets %>/src/main.css',
			'<%= project.stylesheets %>/dest/vendor.css': '<%= project.stylesheets %>/src/vendor.css',
  	}
  }
};