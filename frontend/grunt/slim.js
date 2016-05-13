module.exports = {

  dist: {                           
    options: {                      
      pretty: true,
    },
    files: [{
      expand: true,
      cwd: '<%= project.assets %>/slim/',
      src: [
        // Home Page Template
        '*.slim',
        // Scaffold template
        'base/*.slim',
        // They also include more abstract elements
        'atoms/*.slim',
        // Molecules are groups of elements that function together as a unit
        'molecules/*.slim',
        // Organisms can consist of similar and/or disparate molecule types
        'organisms/*.slim',
        // Templates provide context for these relatively abstract molecules and organisms, which is helpful for designers and clients alike.
        'templates/*.slim',
        // Pages are specific instances of templates and swap out placeholder content with real representative content to give an accurate depiction of what a user will ultimately see.
        'pages/*.slim',
      ],
      dest: '<%= project.assets %>/statics',
      ext: '.html'
    }]
  },

};