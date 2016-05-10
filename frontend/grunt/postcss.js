module.exports = {
  // applies the changes of the Gruntfile.js to the compiler
  postcss: {
    options: {
      map: true, // inline sourcemaps

      // or
      map: {
        inline: false, // save all sourcemaps as separate files...
        annotation: '<%= project.stylesheets %>/maps/' // ...to the specified directory
      },

      processors: [
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
    },
    dist: {
      src: '<%= project.stylesheets %>/*.css'
    }
  }
};