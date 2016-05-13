module.exports = {
      // pug: {
      //   compile: {                        
      //     options: {                      
      //       data: {
      //         debug: true
      //       }
      //     },
      //     files: {
      //       '../assets/statics/index.html': '../assets/pug/index.jade'
      //     }
      //     files: [{
      //       expand: true,
      //       cwd: '<%= project.pug %>/',
      //       src: [
      //         // Home Page Template
      //         '*.jade',
      //         // Scaffold template
      //         'base/*.jade',
      //         // They also include more abstract elements
      //         'atoms/*.jade',
      //         // Molecules are groups of elements that function together as a unit
      //         'molecules/*.jade',
      //         // Organisms can consist of similar and/or disparate molecule types
      //         'organisms/*.jade',
      //         // Templates provide context for these relatively abstract molecules and organisms, which is helpful for designers and clients alike.
      //         'templates/*.jade',
      //         // Pages are specific instances of templates and swap out placeholder content with real representative content to give an accurate depiction of what a user will ultimately see.
      //         'pages/*.jade',
      //       ],
      //       dest: '<%= project.statics %>/',
      //       ext: '.html'
      //     }]
      //   },
      // }

  pug: {
    debug: {
      options: {
        data: {
          debug: true,
          timestamp: '<%= grunt.template.today() %>'
        }
      },
        '<%= project.statics %>/index.html': '<%= project.pug %>/index.jade'
      
    }
  }
};