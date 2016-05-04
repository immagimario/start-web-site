[Link Inspire SASS](https://github.com/HugoGiraudel/awesome-sass)

-

# Main file

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Reference: [Sass Guidelines](http://sass-guidelin.es/)

# Base
The base/ folder holds what we might call the boilerplate stuff for your project. In there, you might find the reset (or Normalize.css, or whatever), probably some stuff dealing with typography, and, depending on the project, maybe some other files.

* _normalize.scss
* _typography.scss

# Components
For smaller components, there is the components/ folder (frequently called modules/). While layout/ is kind of macro (defining the global wireframe), components/ is more micro. It can contain all kinds of specific modules like a slider, a loader, a widget, or anything along those lines. There are usually a lot of files in components/ since your site is should be mostly composed of tiny modules.

* _buttons.scss
* _carousel.scss
* _cover.scss
* _dropdown.scss
* _media.scss
* _navigation.scss
* _thumbnails.scss

# Helpers
The helpers/ folder (sometimes called utils) gathers all Sass tools and helpers we’ll use across the project. Got a function? A mixin? Put it in there. This folder also contains a \_variables.scss file (sometimes _config.scss) which holds all global variables for the project (for typography, color schemes, and so on).

* _variables.scss
* _mixins.scss
* _functions.scss
* \_placeholders.scss (frequently named \_helpers.scss)

# Layout
Contains the files which is the grid system used to build the layout and scaffold of master page.

* _grid.scss
* _scaffold.scss

# Molecules
Organisms can consist of similar and/or disparate molecule types. For example, a masthead organism might consist of a logo, navigation, and search form, while a “product grid” organism might consist of the same product info molecule repeated over and over.

* _blocks.scss
* _components.scss
* _form.scss
* _layout.scss
* _media.scss
* _messaging.scss
* _navigation.scss
* _text.scss

# Organism
The molecules directory (sometimes called partials) usually contains a number of files, each of them setting some styles for the main sections of the layout (header, footer, and so on). 

* _article.scss
* _comments.scss
* _footer.scss
* _header.scss
* _sections.scss
* _sidebar.scss

# Pages
If you have page-specific styles, I think it’s cool to put them in a pages/ folder and in a file named after the page. For example, it’s not uncommon to have very specific styles for the home page, so you’d have a _home.scss file in pages/ dealing with this.
Depending on your deployment process, those files could be called on their own to avoid merging them with the others in the resulting stylesheet. It is really up to you. Where I work, we decided to make them not-partials in order to include them only on pages requiring them. For example, our home page has a very specific layout, compiling to about 200 lines of CSS. To prevent those rules from being loaded on every page, we include this file only on the home page.

* _home.scss
* _contact.scss
* _faq.scss



# Themes
If you are working on a large site with multiple themes like I do, having a themes/ folder can make sense. You can stuff all your theme/design related styles in there. This is definitely project-specific so be sure to include it only if you feel the need.

* _theme.scss
* _admin.scss

# Vendors
And last but not least, you will probably have a vendors/ folder containing all the CSS files from external libraries and frameworks – Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to tell “Hey, this is not from me, not my code, not my responsibility”.

* _foundation.scss
* _bootstrap.scss
* _jquery-ui.scss

-

#### Reference article:
>
> **"Architecture for a Sass Project"**
> by Hugo Giraudel on [sitepoint.com] (http://www.sitepoint.com/architecture-sass-project/)
