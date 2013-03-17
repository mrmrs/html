Checkout [nkd.cc](http://nkd.cc)

# NKD

## Barebones scaffolding for a new Responsive HTML5 Jekyll project. 

NKD just works.
Start developing your jekyll prototype without any of the boring setup fuss.

Site structure is as follows:

<pre>
nkd                               [Site root]
├── README.md                     [What you're reading now]
├── Rakefile                      [Rake sass, rake dev]
├── _config.yml                   [Config for site. Site will run without config in defulat mode]
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

## Rake Tasks

### rake dev
    jekyll --auto --server
Use this to start the jekyll server. It will auto generate a new site at _site every time you save a file.


### rake sass
    sass --watch _sass:css
Run this to start the sass autocompiler. Compiles to /nkd/css/i.css on save.

### rake clean
    rm -rf _site
Run this to delete the _site directory. Use if you don't want to keep generated site locally unless actively developing.
