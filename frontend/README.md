# Design Front-end, project for start new website with: Gruntjs & Bower
Framework based on Gruntjs and Bower, to create a startup environment of site and web-app project

### Prerequisites (Gruntjs & Bower)

> There are some things you'll need before you can start working with Bower:

* The command line. 
* [node.js - https://nodejs.org/en/] Node and NPM.
* Git. [https://git-scm.com/book/it/v1/Per-Iniziare-Installare-Git] Is a packages manager of the Git repos. 
* Global Installation. Technically you could install it in every project but you'll probably want to have it everywhere.

## Inizializzazione del progetto e creazione del file package.js
> https://docs.npmjs.com/files/package.json | Guida al significato delle risposte da completare a seguito dell'invio del comando

`
$ npm init
`

--

![Grunt Logo](https://raw.githubusercontent.com/immagimario/start-web-site/version-zero/assets/images/readme/grunt-logo.png)
#### Gruntjs
* [http://gruntjs.com/] Guide
* [http://gruntjs.com/plugins] Search Pugin


## Grunt command line (solo per installare da zero grunt)
* http://gruntjs.com/getting-started
* Rendere Grunt richiamabile da qualsiasi path dalla console del computer
* grunt-cli (the Grunt command line interface):

`
$ npm install -g grunt-cli
`

## File da creare dentro la cartella
* Creare il file allo stesso livello della cartella di progetto:  Gruntfile.js
* Per crearlo da riga di comando: $ touch Gruntfile.js

		`
		//
		Esempio di un file di Gruntfile.js
		//
		module.exports = function(grunt) {
		  grunt.initConfig({
		    pkg: grunt.file.readJSON('package.json'),
		    // inserire le configurazioni dei plugin scaricati nella cartella            
		  });
		  grunt.loadNpmTasks('nome plugin');
		  grunt.registerTask('nome della task', ['nome configurazione plugin']);
		};
		`

* .gitignore: creare il file allo stesso livello della cartella di progetto (If you create a file in your repository named .gitignore, Git uses it to determine which files and directories to ignore, before you make a commit.)

## Installazione dei plugin di Gruntjs

> Unico comando per installare tutti i plugin Grunt in un unico invio

`
$ npm install ... name package ...  --save-dev
`

#### Innstalling Grunt and gruntplugins
> install the latest version of Grunt in your project folder, adding it to your devDependencies

`
npm install grunt --save-dev
`

#### load-grunt-config

> [ [link plugin](https://github.com/firstandthird/load-grunt-config) ] | load-grunt-config is a Grunt library that allows you to break up your Gruntfile config by task. For most small projects a single Gruntfile.js is perfect. But as a project grows, the Gruntfile.js can quickly become unmanagable; this is where load-grunt-config comes in handy.
> 
> Creare la cartella "grunt" allo stesso livello del file Gruntfile.js, e creare il file aliases.js per gestire i gruppi di task. E creare un file con il nome del task per ogni pacchetto da configurare.

`
npm install -D load-grunt-config
`

#### grunt-contrib-watch
> [ [link plugin](https://github.com/gruntjs/grunt-contrib-watch) ] | Run predefined tasks whenever watched file patterns are added, changed or deleted

`
$ npm install grunt-contrib-watch --save-dev
`


> Per sfruttare il reload nel browser a seguito di unamofifica al codice, si deve aggiungere questo codice script al piede della pagina

`
<script src="//localhost:35729/livereload.js"></script>
`


#### grunt-contrib-sass
> [ [link plugin](https://github.com/gruntjs/grunt-contrib-sass) ] | Compile Sass to CSS. (This task uses libsass which is a Sass compiler in C++. In contrast to the original Ruby compiler, this one is much faster, but is missing some features, though improving quickly. It also doesn't support Compass. Check out grunt-contrib-sass if you prefer something more stable, but slower.)

	* [http://sass-lang.com/] Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
	* [http://sass-guidelin.es/] Ottima guida all'utilizzo del linguaggio sass/scss
	* [http://jackiebalzer.com/color] Ottima guida sulla elaborazione del colore tramite le funzipni sass

`
$ npm install grunt-contrib-sass --save-dev
`

#### grunt-slim
> [ [link plugin](https://github.com/matsumos/grunt-slim) ] | Compile Slim to HTML

> It 'important to install the ruby gem dedicated to slim-lang.
> 
> **The code entered in the import file must be iddented to zero**

`
$ gem install slim
`

`
$ npm install grunt-slim --save-dev
`

> Per utilizzare i partial inserirli all'interno di questo codice di esempio:
> == Slim::Template.new('slim/_head.slim').render 

#### grunt-modernizr
> [ [link plugin](https://github.com/modernizr/grunt-modernizr) ] | This highly configurable task allows you to configure and export a custom Modernizr build.

`
$ npm install grunt-modernizr --save-dev
`

#### PostCSS | [http://postcss.org/](http://postcss.org/)
> PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
>
> > [Video PostCSS Tutorials](https://leveluptutorials.com/tutorials/postcss-tutorials)
>
>
> > ##### grunt-postcss
> > [ [link plugin](https://github.com/nDmitry/grunt-postcss) ] | Default plugin to apply several post-processors to your CSS using PostCSS.
>
> > ##### grunt-postcss (Autoprefixer)
> > [ [link plugin](https://github.com/postcss/autoprefixer) ] | Autoprefixer: A Postprocessor for Dealing with Vendor Prefixes.

	`
	$ npm install grunt-postcss --save-dev
	
	to use the PostCSS plugin, just add the name of the plugin to download. eg. "Autoprefixer"
	
	$ npm install grunt-postcss pixrem autoprefixer cssnano
	`

#### grunt-mkdir
> https://github.com/rubenv/grunt-mkdir | Create directories with Grunt.

`
$ npm install grunt-mkdir --save-dev
`

#### grunt-file-creator
> https://github.com/travis-hilterbrand/grunt-file-creator | A grunt task that creates/writes to files from Javascript functions in the grunt config (useful for config files, etc).

`
$ npm install grunt-file-creator --save-dev
`

#### grunt-contrib-jshint
> https://github.com/gruntjs/grunt-contrib-jshint | JSLint Error Explanations is designed to help you improve your JavaScript by understanding the sometimes cryptic error messages produced by JSLint, JSHint and ESLint, and teaching you how to avoid such errors.

`
$ npm install grunt-contrib-jshint --save-dev
`

#### grunt-contrib-concat
> https://github.com/gruntjs/grunt-contrib-concat | Concatenate files.

`
$ npm install grunt-contrib-concat --save-dev
`

#### grunt-contrib-connect
> https://github.com/gruntjs/grunt-contrib-connect | This allows you to create a web-server to view the application.

`
$ npm install grunt-contrib-connect --save-dev
`

#### grunt-bowercopy
> https://github.com/timmywil/grunt-bowercopy | Wrangle those bower dependencies and place each one where it's supposed to be.

`
$ npm install grunt-bowercopy --save-dev
`

#### grunt-contrib-copy
> [ [link plugin](https://github.com/gruntjs/grunt-contrib-copy) ] | Able to copy all file and folder are it configuration in a Gruntfile.js | Run this task with the grunt copy command.

`
$ npm install grunt-contrib-copy --save-dev
`

#### grunt-sync
> https://github.com/tomusdrw/grunt-sync | A grunt task to keep directories in sync. It is very similar to grunt-contrib-copy but tries to copy only those files that has actually changed.

`
$ npm install grunt-sync --save
`

#### grunt-contrib-cssmin
> https://github.com/gruntjs/grunt-contrib-cssmin | CSS minifier to optimize your CSS code to make your website faster by decreasing the file size.

`
$ npm install grunt-contrib-cssmin --save-dev
`

#### grunt-contrib-uglify
> https://github.com/gruntjs/grunt-contrib-uglify | Minify files with UglifyJS.

`
$ npm install grunt-contrib-uglify --save-dev
`

#### grunt-contrib-clean
> https://github.com/gruntjs/grunt-contrib-clean | Clean files and folders & files.

`
$ npm install grunt-contrib-clean --save-dev
`

-

![Grunt Logo](https://raw.githubusercontent.com/immagimario/start-web-site/version-zero/assets/images/readme/bower-logo.png)
# Installare bower

> [Guide - http://frontendbabel.info/articles/bower-why-frontend-package-manager/ - https://css-tricks.com/whats-great-bower/] Bower, a package manager that makes it easy to manage all your application’s front-end dependencies
 
`
// To install Bower globally:
$ npm install -g bower
`

#### search package tramite bower.io
* [http://bower.io/search/]
* http://bower.io/stats/

#### initialization of package manager bower

	`
	// command to start and create the bower project, also creates the bower.json
	// file collecting settings and functionality
	$ bower init
	? name: project-name
	? version: 0.0.1
	? description: framework to create a startup environment of site and web-app project
	? main file: index.html
	? what types of modules does this package expose? 
	? keywords: ui, ux, design, frontend
	? authors: Name <name@domain.it>
	? license: Apache-2.0
	? homepage: https://github.com/immagimario/ui-ux-design-frontend
	? set currently installed components as dependencies? Yes
	? would you like to mark this package as private which prevents it from being accidentally published to the registry? Yes
	`

## Comandi bower
> With bower install command, will be downloaded the package and its dependencies. For example, downloading bootstrap, you will also downloaded jQuery.

## Framework SASS/SCSS

#### Sassy-maps (con Breakpoint viene scaricato come dipendenza)
> [ [Sass Map](https://github.com/at-import/Sassy-Maps) ] | Sassy Maps adds a variety of functions aimed at helping you work with Sass 3.3 maps much easier.

`
$ bower install sassy-maps --save-dev
`

#### Susy
> [ [Susy Grid](http://susy.oddbird.net/) ] | Responsive Design — Susy integrates smoothly with Breakpoint for powerful media-query controls. See the documentation for details.

`
$ bower install susy --save
`

#### breakpoint
> [ [Breakpoint Framework](https://github.com/at-import/breakpoint) ] | Breakpoint makes writing media queries in Sass super simple.

`
$ bower install compass-breakpoint --save
`

#### Bourbon
> [ [Utilty Mixin](http://bourbon.io/) ] | A simple and lightweight mixin library for Sass.

`
$ bower install bourbon --save
`

#### normalize.css
> [ [Reset HTML](http://necolas.github.io/normalize.css) ]A collection of HTML element and attribute style-normalizations

`
$ bower install normalize-css --save
`

#### motion-ui
> [Site of Motion-ui] (https://github.com/zurb/motion-ui) | A Sass library for creating CSS transitions and animations from your friends at ZURB. Originally integrated into Foundation for Apps, the code is now a standalone library, soon to be used by Foundation for Sites and Foundation for Apps.
> 
> **Browser Support**: Chrome, Firefox, Safari, IE 10+, iOS 8+, Android 4+
>
> [ [Demo framework](http://zurb.com/playground/motion-ui) ] 
> 
> [ [Documentation framework](https://github.com/zurb/motion-ui/blob/master/docs/classes.md) ] 

`
$ bower install motion-ui --save
`

#### placeholder HTML5 for fallback Internet Explorer 
> [link plugin](https://github.com/mathiasbynens/jquery-placeholder) | A jQuery plugin that enables HTML5 placeholder behavior for browsers that aren’t trying hard enough

`
$ bower install jquery-placeholder --save
`

## Framework CSS/JS
#### Foundation Zurb
> [ [Zurb Foundation](http://foundation.zurb.com/) ] | The most advanced responsive front-end framework in the world.

`
$ bower install foundation-sites --save
`

#### Bootstrap
> [ [Bootstrap](http://getbootstrap.com/) ] | The most advanced responsive front-end framework in the world.

`
$ bower install bootstrap-sass --save
`

## Framework Standard Web
#### HTML5 Boilerplate
> [ [HTML5 Conventions](https://github.com/h5bp/html5-boilerplate) ] | HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.

	`
	// in questo caso si è obbligati a scaricare attraverso un comando git
	// conviene spostarsi tramite console dentro la folder di bower "bower_components"
	$ git clone https://github.com/h5bp/html5-boilerplate.git
	`