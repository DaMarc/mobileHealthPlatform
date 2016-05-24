# Mobile Health Platform

A bootstrap for the mobile health platform

## Git Manifest

We want to use a version control via git. We also want to follow the feature branch approach. A good documentation can be found here:

## [Feature Branch Workflow][git-feature-branch]

you can download the project via:

	git clone https://github.com/mobody/mobileHealthPlatform.git


## Usage

#### Install npm dependencies

In the file package.json you can see that we need gulp and [laravel-elixir][laravel-elixir]. laravel-elixir is a wrapper around gulp, which brings us super easy usage of sass mixin (for css structuring) and browserify (which lets us structur our javascript code very nicely). Just have a look at gulpfile.js. 
With two lines of code, laravel-elixir allows us to bundle our sass files, and our .js files. we can even run 

	gulp --production

and we get an uglyfied version.

Another dependency we integrated in our framework is [jQuery Mobile][jquery-mobile], which is a HTML5-based user interface system.

[package-json]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[git-feature-branch]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[laravel-elixir]: https://github.com/laravel/elixir
[jquery-mobile]: http://jquerymobile.com/