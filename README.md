# NKD

Barebones scaffolding for a new HTML5 Jekyll project. 

nkd                               [Site root]
├── README.md                     [What you're reading now]
├── Rakefile                      [Rake sass, rake dev]
├── _config.yml                   [Config for site. Site will run without config in defulat mode]
├── _includes                     [Common includes I need for sites / pages]
│   ├── _footer.html
│   ├── _head.html
│   ├── _js_includes.html
│   └── _navigation_main.html
├── _layouts                      [Two layout files: default and post. both are identical by default.]
│   ├── default.html
│   └── post.html
├── _posts                        [Directory where you'd put posts...if you want any]
├── _sass
│   ├── _grid.scss                [Blank media queries. Not included or compiled to css]
│   ├── i.scss
│   └── normalize.scss            
├── _site                         [compiled website]
│   ├── README.md
│   ├── Rakefile
│   ├── css
│   │   ├── i.css
│   │   └── normalize.css
│   └── index.html
├── css
│   ├── i.css
│   └── normalize.css
└── index.html
