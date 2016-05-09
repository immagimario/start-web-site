module.exports = {
  development: {
    options: {

      // Add a (or multiple) Sass import path.
      loadPath: [
        // import framework
        '<%= project.foundation %>/',
        '<%= project.bootstrap %>',
        '<%= project.bourbon %>/',
        '<%= project.susy %>/',
        '<%= project.breakpoint %>/',
        '<%= project.normalize %>',
        '<%= project.motionui %>',

        // import theme
        '<%= project.base %>/',
        '<%= project.components %>/',
        '<%= project.helpers %>/',
        '<%= project.layout %>/',
        '<%= project.molecules %>/',
        '<%= project.organism %>/',
        '<%= project.pages %>/',
        '<%= project.themes %>/',
        '<%= project.vendors %>/',

        // import theme
      ],

      // different write mode CSS output
      style: 'expanded',

      // Emit extra information in the generated CSS that can be used by the FireSass Firebug plugin.
      debugInfo: false,

      // Emit comments in the generated CSS indicating the corresponding source line.
      lineNumbers: false,

      // per utilizzare questa funzione è fondamentale avere installata la gemma del sass [ $ gem install sass ]
      // relative paths where possible, file URIs elsewhere
      sourcemap: 'auto',
    },
    files: {
      '<%= project.stylesheets %>/main.css' : '<%= project.scss %>/main.scss',
      '<%= project.stylesheets %>/normalize-reset.css' : '<%= project.scss %>/normalize-reset.scss',
      //'<%= project.stylesheets %>/jquery.selectbox.css' : '<%= project.scss %>/jquery.selectbox.scss',
      //'<%= project.stylesheets %>/font-awesome.css' : '<%= project.bower %>/font-awesome/scss/font-awesome.scss',
      //'<%= project.stylesheets %>/slick-theme.css' : '<%= project.bower %>/slick-carousel/slick/slick-theme.scss',
      //'<%= project.stylesheets %>/slick.css' : '<%= project.bower %>/slick-carousel/slick/slick.scss'
    }
  },
  // production: {
  //   options: {

  //     // Add a (or multiple) Sass import path.
  //     loadPath: [
  //       '<%= project.foundation %>/',
  //       '<%= project.boostrap %>/',
  //       '<%= project.bourbon %>/',
  //       '<%= project.susy %>/',
  //       '<%= project.breakpoint %>/'
  //     ],

  //     // different write mode CSS output
  //     style: 'compressed',

  //     // Emit extra information in the generated CSS that can be used by the FireSass Firebug plugin.
  //     debugInfo: false,

  //     // Emit comments in the generated CSS indicating the corresponding source line.
  //     lineNumbers: false,

  //     // per utilizzare questa funzione è fondamentale avere installata la gemma del sass [ $ gem install sass ]
  //     // relative paths where possible, file URIs elsewhere
  //     sourcemap: 'auto',
  //   },
  //   files: {
  //     '<%= project.stylesheets %>/style.css' : '<%= project.scss %>/style.scss',
  //   }
  // },
};