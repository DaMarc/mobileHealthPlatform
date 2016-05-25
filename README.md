# Mobile Health Platform

Mobile Health Platform ist ein Framework, dass Funktionen und Module, sowie deren Anwendung für Gesundheits Apps zur Verfügung stellt. 

## Git Manifest

Das Framework benutzt den Ansatz des [Feature Branch Workflow][git-feature-branch]. In diesem Ansatz wird für jedes neue Feature (Funktion oder Modul) ein neuer Branch angelegt. Erst wenn das Modul vollständig integriert ist, wird der Feature Branch in den Master Branch gemergt.

## Download Framework

Das Framework lässt mit folgendem Befehl herunterladen:

	git clone https://github.com/mobody/mobileHealthPlatform.git

Wir arbeiten mit dem Frontend Package Manager [npm][npm]. In der package.json Datei stehen die vom Framework verwendeten Packages. Zunächst sollten diese heruntergeladen werden via:

<<<<<<< HEAD
## Usage

#### Install npm dependencies

In the file package.json you can see that we need gulp and [laravel-elixir][laravel-elixir]. laravel-elixir is a wrapper around gulp, which brings us super easy usage of sass mixin (for css structuring) and browserify (which lets us structur our javascript code very nicely). Just have a look at gulpfile.js. 
With two lines of code, laravel-elixir allows us to bundle our sass files, and our .js files. we can even run 

	gulp --production

and we get an uglyfied version.

Another dependency we integrated in our framework is [jQuery Mobile][jquery-mobile], which is a HTML5-based user interface system.
=======
	npm install


## Usage

#### JQuery Mobile

Wir benutzen ein HTML5 User Interface System: [jQuery Mobile][jquery-mobile].
>>>>>>> structure/vendor-functions

[package-json]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[git-feature-branch]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[laravel-elixir]: https://github.com/laravel/elixir
<<<<<<< HEAD
[jquery-mobile]: http://jquerymobile.com/
=======
[jquery-mobile]: http://jquerymobile.com/
[npm]: https://www.npmjs.com/
>>>>>>> structure/vendor-functions
