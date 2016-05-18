**(beta 0.01)**

## E' presente la documentazione scritta con la modalità "markdown"
* Come configurare il progetto
* Elenco dei plugin Grunt e Bower presenti, con relativa spiegazione di installazione e utilizzo
* Cosa si intende per "Pattern Atomic Design"
* Struttura e logica dei file SASS

## Tutto funziona utilizzando http://gruntjs.com/
> All'interno della cartella front-end vengono configurati i plugin di Grunt per: Sass, Slim, PostCSS, ecc
> 
>La volontà è di creare una base per partire immediatamente a realizzare il design di un sito solo dopo aver scritto in Consol questi 3 comandi:

	`
	$ git clone https://github.com/......git
	$ npm install
	$ bower install
	$ grunt  (per avviare grunt)
	$ grunt bowercopy (per copiare gli asset necessari)
	$ grunt modernizr (It builds js with the basic plugin)
	` 
## La logica della struttura prende spunto da Pattern Atomic Design
[ [Pattern Lab](http://patternlab.io/) ] è una raccolta di metodi e logiche che consentono di creare progettazione atomiche. 
Grazie alla suddivisione degli elementi in strutture componibili, si passa dal "atomo" al template completo.

![Atomic design in one gif](https://raw.githubusercontent.com/immagimario/start-web-site/version-zero/assets/images/readme/atomic-gif-3.gif)


## SASS:
> La struttura SCSS delle folder e i nomi dei file prendono sempre spunto dal Pattern Atomic Design
>
> I framework disponibili sono Bootstrap o foundation tramite il cambio di una variabile in un mixin
>
> Inoltre ho inserito i seguenti framework di funzioni e mixin, utili a velocizzare la produzione del design
> 
> [ [Bourbon](http://bourbon.io/docs) ] Una libreria mixin semplice e leggera scritta in Sass.
>
> [ [Susy](http://susydocs.oddbird.net/) ] Susy, è un insieme funzioni e mixin per la creazione di colonne di layout personalizzati.
>
> [ [Breakpoint](https://github.com/at-import/breakpoint/wiki) ] velocizza drasticamente la scrittura delle media queries.

## HTML
> [ [Slim](http://slim-lang.com/) ] Per la scrittura del codice html c'è slim-lang, un "linguaggio" esemplificato che velocizza drasticamente la scrittura del codice.

	` 
	esempio Slim:
	head.titolo-sezione
	     h1.titolo
	        | Testo del titolo
	
	esempio HTML:
	
	<head class="titolo-sezione">
	   <h1 class="titolo-sezione">
	       Testo del titolo
	   </h1>
	</head>
	` 
	
> Il codice html prodotto viene salvato, tramite grunt, direttamente in una cartella Statics, che racchiude file e cartelle con la logica Pattern Atomic Design

## Font
Le font saranno divise in 3 tipologie:

* Librerie di font, tipo Google Font
* [ [GUI Icon Font](https://fortawesome.github.io/Font-Awesome/icons/)]
* Font personalizzato per il cliente. Questo è lo strumento che utilizzo http://icomoon.io/

> Utilizzando grunt, vi è l'opzione di realizzare le fonts solo tramite SVG. Rendendo la pagina più accessibile.

## StyleGuide (Questa parte è in studio)
> Creare tramite il plugin per grunt, la style guide personalizzata del sito.
Tramite i commenti inseriti nel SCSS viene generto un sito web che mostra tutti gli elementi impaginati in modo realistico.
Permettendo al Team di vedere ogni elemento visivamente, e facilita il cliente a mantenere lo Style e il design del sito.

* [Framework SC5](http://styleguide.sc5.io/)
* [Demo](http://demo.styleguide.sc5.io/)

-

* [Framework Living Style Guide](https://livingstyleguide.org/)
* [Demo](https://www.homify.de/assets/styleguide.html)
