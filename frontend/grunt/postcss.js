module.exports = {
  // applies the changes of the Gruntfile.js to the compiler
  postcss: {
    options: {
      //map: true, // inline sourcemaps

      processors: [
        //require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        //require('cssnano')() // minify the result
        require('autoprefixer')(),
      ]
    },
    dist: {
      src: '<%= project.stylesheets %>/src/*.css',
      dest: '<%= project.stylesheets %>/dest/*.css'
    }
  }
};