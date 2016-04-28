module.exports = function(grunt) {
 
    require('load-grunt-config')(grunt, {
    	data: {
            project: {
              //
              // name variable: [name folder]
              //

                folder: ['../'], // <%= pkg.name %> creates a folder with the same name // of the variable name present in package.json 
                assets: ['<%= project.folder %>/assets'],
                  img: ['<%= project.assets %>/images'],
                  fonts: ['<%= project.assets %>/fonts'],
                  scss: ['<%= project.assets %>/scss'],
                // elementi grafici
                components: ['<%= project.scss %>/components'],
                // styli form
                forms: ['<%= project.scss %>/forms'],
                // griglie e gabbie
                grid: ['<%= project.scss %>/grid'],
                // parametri e variabili
                settings: ['<%= project.scss %>/settings'],
                // gestione tipografia
                typography: ['<%= project.scss %>/typography'],
                // mixin e function
                util: ['<%= project.scss %>/util'],
                // sass prodotto da altri
                vendor: ['<%= project.scss %>/vendor'],
                stylesheets: ['<%= project.assets %>/css'],
                javascripts: ['<%= project.assets %>/js'],
                jssource: ['<%= project.javascripts %>/source'],
                jsvendor: ['<%= project.javascripts %>/vendor'],
                slim: ['<%= project.assets %>/slim'],
                html: ['<%= project.assets %>/html'],
                styleguide: ['<%= project.assets %>/styleguide'],

                bower: ['bower_components'], // bower name folder
                // folder plugin
                foundation: ['<%= project.bower %>/foundation-sites/scss/'],
                bourbon: ['<%= project.bower %>/bourbon/app/assets/stylesheets/'],
                susy: ['<%= project.bower %>/susy/sass/'],
                breakpoint: ['<%= project.bower %>/compass-breakpoint/stylesheets/'],
            },
      },

    });
 
};