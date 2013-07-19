require "rubygems"
require 'rake'

desc "Automatically generate site at :4000 for local dev"
task :dev do
  system "jekyll serve --watch"
end # task :dev

desc "Start Sass so that is compiles to css upon file save"
task :sass do
  system "sass --watch _sass:css"
end # task :sass

desc "Start Sass so that is minifies and compiles to nkd/css/i.css upon file save"
task :minify do
  system "sass --watch _sass:css --style compressed"
end # task :minify

desc "Remove _site from directory before committing"
task :clean do
  system "rm -rf _site"
end # task :clean

