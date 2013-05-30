Checkout [nkd.cc](http://nkd.cc "NKD")

# NKD

## Light-weight template for a responsive HTML5/SCSS Jekyll project 

NKD just works.
Start developing your prototype in [jekyll](http://jekyllrb.com "Jekyll - Simple, blog-aware, static sites") 
without any of the boring setup.

# Features
* Modular file structure, easy to extend or get rid of existing code.
* Mobile friendly responsive type scale
* Thoroughly commented code (Easy to get going if it's your first jekyll project)
* Two media queries for tablet and desktop size screens. Lends itself to mobile-first design.

# Getting started

* Create a new repo for your project on Github
* In terminal run 
```bash
    git clone git@github.com:mrmrs/nkd.git [yourNewRepoName]
    cd [yourNewRepoName]
    git remote rm origin
    git remote add origin git@github.com:[yourUserName]/[yourNewRepoName].git
    git remote -v
```

* git remote -v will allow you to check that you have changed the remote origin correctly. The output should look like:
```bash
    origin git@github.com:[yourUserName]/[yourNewRepoName].git (fetch)
    origin  git@github.com:[yourUserName]/[yourNewRepoName].git (push)
```
  
* Once you add & commit files you are ready to publish run:
```bash
git push -u origin master
```



File structure is as follows:

<pre>
nkd                                 [ Site root]
  ├── README.md                     [What you're reading now]
  ├── Rakefile                      [Rake sass, rake dev]
  ├── _config.yml                   [Config for site. You can run jekyll without a _config.yml file if you want]
  ├── _includes                     [Common includes I need for sites / pages]
  │   ├── _footer.html              [_BLANK_]
  │   ├── _head.html                [Common header elements]
  │   ├── _js_includes.html         [_BLANK_]
  │   └── _navigation_main.html     [_BLANK_]
  ├── _layouts                      [Two layout files: default and post. both are identical by default.]
  │   ├── default.html      
  │   └── post.html
  ├── _posts                        [Directory where you'd put posts...if you want any]
  ├── _sass
  │   ├── _grid.scss                [Blank media queries. Not included or compiled to css]
  │   ├── i.scss                    [Includes normalize - compiles to i.css]
  │   └── normalize.scss            
  ├── css
  │   ├── i.css
  └── index.html                    [index file that's served up at root. The "homepage" if you will.]
</pre>

# Rake Tasks
## WAIT I'M A DESIGNER WHAT IS RAKE
Rake is super simple. Don't be afraid. In this instance it's used to map unix commands
to "rake tasks". It's a lot easier to remember 'rake dev' then jekyll serve --watch, well 
it is for me anyways. If you don't like any of these commands, don't be scared. Rakefile
is a super easy file to edit. 

Start the jekyll server on port 4000. Preview in your browser at http://localhost:4000
### rake dev
```
jekyll serve --watch
```

Run this to start sass development and preserve css comments. Helpful for debugging. Outputs to css/includes.css. 
### rake sass
```
sass --watch _sass:css
```

Run this to start the sass autocompiler with minified outpu. Outputs to /nkd/css/i.css.
### rake minify
```
sass --watch _sass:css --style compressed
```

Run this to delete the _site directory. Use if you don't want to keep generated site locally unless actively developing.
### rake clean
```
rm -rf _site
```


# Resources

There is an included Adobe Illustrator file that has artboards for every favicon size you'll need.
If you're into that sort of thing. There are premade favicons you will want to replace or remove
reference to.

# Author
[MRMRS](http://mrmrs.cc "Adam Morse - Designer Developer")

# License
This work is licensed under a [Creative Commons Attribution 3.0 Unported
License](http://creativecommons.org/licenses/by/3.0/ "Creative Commons
License").
