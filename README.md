Checkout [ht-ml.cc](http://ht-ml.cc "HTML - Common patterns for reuse")

# HTML

Common markup patterns I use for developing websites.

# Features

* All non-media elements in the HTML5 spec are included on one page and are ready to be styled.
* Modular Structure - add your own patterns, or delete the ones you don't like.
* Semantic and accessible markup examples for common design patterns.
* 100% responsive except for the silly img element :)
* Thoroughly commented code (notes and reference links for new HTML developers)

# Getting the Code

* Create a new repo for your project on Github
* In terminal run
```bash
    git clone git@github.com:mrmrs/html.git yourNewRepoName
    cd [yourNewRepoName]
    git remote rm origin
    git remote add origin git@github.com:yourUserName/yourNewRepoName.git
    git remote -v
```

* git remote -v will allow you to check that you have changed the remote origin correctly. The output should look like:
```bash
    origin git@github.com:yourUserName/yourNewRepoName.git (fetch)
    origin  git@github.com:yourUserName/yourNewRepoName.git (push)
```

Now your set up to use this in a new project.

# Getting Started

## The HTML
* Open up index.html with your favorite text editor and hack away. It's that simple.
* To preview changes at http://localhost:8000 - open up terminal.app and type
```
python -m SimpleHTTPServer
```

## The CSS

If you use sass you can run ```rake sass``` from the root of the directory and then
edit ```_sass/_styles.scss``` to style the content in index.html

If you'd like to just edit the vanilla css you can delete the _sass directory and
just edit ```css/i.css```


# Author
[MRMRS](http://mrmrs.cc "Adam Morse - Designer Developer")

# Reference
[Mozilla HTML element list](http://https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list "Mozilla HTML element list")

# MIT LICENSE
Copyright (c) 2014 Adam Morse http://opensource.org/licenses/MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
