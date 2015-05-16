# Test PSD Website

> This is Frank Rue's response to a prospective opportunity in order to show
off development skill. **Please note** that **all** of the preprocessing,
setup, installations of [NodeJS](http://nodejs.org) modules and [Bower](http://bower.io) components have been done from scratch; I did
not use a pre-fabricated setup from someone else or from somewhere online.

## Fun Stuff Used (Development Environment)
- [NodeJS](http://nodejs.org) - Used by the temporary, minimal webserver used during development, and other modules (like Gulp).
- [Gulp](http://gulpjs.com) - Used to watch the development files, compile SASS, and refresh the browser.
- [gulp-sass](https://github.com/dlmanning/gulp-sass) - I use gulp-sass because it uses libSass, which is lightning fast compared to the SASS gem for Ruby. While I've happily used the Ruby SASS compiler (alongside Grunt) previously, the advantage of compiling with Compass does not compare to my the speedy reloads and preprocessing, though I'm comfortable with either.
- [autoprefixer](https://github.com/postcss/autoprefixer) - Autoprefixer just allows me to be a little more lazy in my SASS so I don't have to worry about making multi-vendor prefixes.

## Fun Stuff Used (Website Output)
- [RequireJS](http://requirejs.org) - Asynchronous loader for JS files. Forces me to use AMD in my JS development, which keeps my files tidier and separated.
- [jQuery](http://jquery.com) - The premier framework for easier JS development.
- [jQuery TouchSwipe](http://labs.rampinteractive.co.uk/touchSwipe/demos/index.html) - A simple but powerful tool which simplifies access to a swipe event in any direction (even simulated by a mouse).
- [FastClick](https://github.com/ftlabs/fastclick) - A "fix" for the delay that makes a "touchStart" different from a "click". Since most times we are doing the same action from both events, this effectively eliminates the difference, allowing me to use "click" only.
- [Twitter Bootstrap](http://getbootstrap.com) - Bootstrap, one of the premier HTML/JS/CSS UI frameworks.

___


## From Client (Requirements)

This is a desktop only view, breakdown is left to your interpretation. On a
'real' build this will never be the case, we do require the designers deliver
tablet/mobile PSDs as well. We won't be judging on any design elements, just
that it works and the code is clean. It can even have a unstyled unordered
list & solid background color! Very basic is okay.

Keep track of how long it takes to build, it helps us gauge where you're at.

## Few things we'll want to see:
- SCSS
- Component driven css organization
- Semantical HTML5 Mark Up
- Preprocessor (Gulp preferably)
- Bourbon / Neat
- Fully responsive (vs adaptive)
- Sticky Footer (so if the page is not tall enough it'll stay floated to the bottom)
- Slide out (from right) mobile navigation

## Would be impressed to see:
- Use of animate.css for navigation / to spicen up the initial load
- SVG sprites (symbol syntax)
- Touch events (swipe) to close navigation
- Dropped it into a repo
