module.exports = {
  // applies the changes of the Gruntfile.js to the compiler
  grunt: {
    options: {
      reload: true,
    },
    files: ['Gruntfile.js', 'grunt/*']
  },
  slim: {
    files: '<%= project.slim %>/**/*.slim',
    tasks: ['slim'],
    options: {
      spawn: false,
      livereload: true,
    },
  },
  sass: {
    files: '<%= project.scss %>/**/*.scss',
    tasks: ['sass'],
    options: {
      spawn: false,
      livereload: true,
    },
  },
};