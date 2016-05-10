module.exports = {
  development: {
    options: {

      // Add a (or multiple) Sass import path.
      loadPath: [
        // import framework
        '<%= project.foundation %>/scss/',
        '<%= project.bootstrap %>/assets/stylesheets',
        '<%= project.bourbon %>/app/assets/stylesheets/',
        '<%= project.susy %>/sass/',
        '<%= project.breakpoint %>/stylesheets/',
        '<%= project.normalize %>/normalize-css/',
        '<%= project.motionui %>/motion-ui/',

        // import theme
        '<%= project.base %>/',
        '<%= project.components %>/',
        '<%= project.helpers %>/',
        '<%= project.layout %>/',
        '<%= project.molecules %>/',
        '<%= project.organism %>/',
        '<%= project.pages %>/',
        '<%= project.themes %>/',
        '<%= project.scssvendor %>/',

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
      '<%= project.stylesheets %>/vendor.css' : '<%= project.scssvendor %>/vendor.scss',
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