module.exports = {
  
  // applies the changes of the Gruntfile.js to the compiler
  postcss: {
    options: {
      map: true, // inline sourcemaps

      processors: [
        require('autoprefixer')({browsers: 'last 2 versions'})
      ]
    },
    dist: {
      files: [
        {
          '<%= project.stylesheets %>/dist/main.css': '<%= project.stylesheets %>/src/main.css',
          '<%= project.stylesheets %>/dist/vendor.css': '<%= project.stylesheets %>/src/vendor.css',
        }
      ]
    }
  }
  
};


// var autoprefixer = require('autoprefixer');

// module.exports = {
//   postcss: {
//     options: {
//       processors: [
//         autoprefixer({browsers: ['last 2 versions']})
//       ]
//     },
//     dist: {
//       src: '<%= project.stylesheets %>/src/main.css',
//       dest: '<%= project.stylesheets %>/dest/main.css'
//     }
//   }
// };