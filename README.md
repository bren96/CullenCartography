[Fork of Barbar-Jeckyll Theme](https://github.com/samesies/barber-jekyll)

### Installation
Jekyll requires all dependencies to be saved in the ````Gemfile````. Run ````bundle install```` (Install [Bundler](http://bundler.io/) if it is not already) on your command line after downloading or cloning the theme. You can then run ````bundle exec jekyll serve```` or ````npm start```` to see your development site. Run ````bundle exec jekyll build```` or ````npm run build```` to build a production ready site for deployment.

### Create Posts
All posts go upder the ````_posts```` directory. You can also have a ````_drafts```` directory with posts that will on your development page, but not in production.

```
---
layout: post
title: "Brunch Swag"
date: 2017-02-18
description: 
image: /assets/images/placeholder-15.jpg
author: Thomas Vaeth
tags: 
  - XOXO
  - La Croix
---
```

The front matter has to have a layout of page. All the other fields are completely optional. If you have an ````author```` variable, then it must match an author's name in ````_config.yml```` (see [Update Settings](#update-settings)). The ````tag```` variable will add a related section to the post and popular tags to the footer.

### Create Pages
Creating a static page is the same as creating a post. The only difference is a page is in the root of the directory rather than the ````_posts```` directory.

```
---
layout: page
title: Style Guide
image: /assets/images/placeholder-18.jpg
---
```

You just have to make sure the front matter has a layout of page instead of post. If there is no title or image, then the page will default to the site configuration.

### Deployment
Run ````bundle exec jekyll build```` or ````npm run build```` and manually add the contents of the ```_site``` folder to the ```gh-pages``` branch.

### Source Code
The source code is broken down to make finding what you need as easy as possible. Almost everything runs through ````gulpfile.js````, so you will need to run ````npm install```` on your command line before doing any additional development. You can then run ````gulp```` or ````npm run gulp```` to compile everything.

```
.
├── _assets
|   ├── js
|       ├── components
|       ├── vendor
|       ├── _inits.js
|       └── app.js
|   └── scss
|       ├── base
|       ├── components
|       ├── fonts
|       ├── regions
|       ├── tools
|       ├── utils
|       ├── vendor
|       └── app.scss
├── _includes
|   ├── contact.html
|   ├── disqus.html
|   ├── footer.html
|   ├── formcarry.html
|   ├── head.html
|   ├── header.html
|   ├── navigation.html
|   ├── pagination.html
|   ├── post-card.html
|   ├── share.html
|   ├── social.html
|   └── subscribe_form.html
├── _layouts
|   ├── compress.html
|   ├── default.html
|   ├── page.html
|   ├── post.html
|   └── tag.html
├── _plugins
├── _posts
├── _site
├── assets
|   ├── css
|   ├── images
|   ├── js
├── .eslintrc
├── .gitignore
├── .stylelintrc
├── 404.html
├── _config.yml
├── Gemfile
├── Gemfile.lock
├── gulpfile.js
├── index.html
├── package.json
├── README.md
├── style-guidle.html
└── subscribe.html
```
