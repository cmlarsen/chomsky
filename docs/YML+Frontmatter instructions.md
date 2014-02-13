---
layout: noam_docs
title: '[INTERNAL] :: Setting up Noam Docs'
permalink: /creating-the-noam-docs/
---

#[Internal] 

##The Markdown files and Frontmatter
The docs files will be written in markdown and stored in the /docs/ folder of the site. The filenames are not important and can be whatever suites internal organization.

The Frontmatter for each file is pretty simple. It consists of three properties:

**layout:** Defines which Layout file to use in the template.

**title:** The text seen in the browser title bar. This should be escaped with ticks: '

**permalink:** This is the page name as seen by the browser.

For example, the Frontmatter for this page is
{% highlight yaml %}
---
layout: noam_docs
title: '[INTERNAL] :: Setting up Noam Docs'
permalink: /creating-the-noam-docs/
---
{% endhighlight %}

Code snippets can be highlighted. They need to be wrapped in some in the Liquid {% raw %}{% highlight LANGUAGE_NAME %}{% endraw %} tag.

For example:
{% highlight smarty  %}
{% raw %}
{% highlight CSS  %}
.class {
	font-size:12px;
}
{% endhighlight %}
{% endraw %}
{% endhighlight %}
Produces:
{% highlight CSS  %}
.class {
	font-size:12px;
}
{% endhighlight %}

More info can be found on the [Jekyll](http://jekyllrb.com/docs/posts/) site and at [Pygments](http://pygments.org/languages/#template-languages).

##The docs.yml file

The docs.yml file lives in /_data/ folder. It is a [YAML](http://en.wikipedia.org/wiki/YAML) file that defines the navigation hierarchy. You can add/edit/remove links from the side navigation by editing this file. You can download it from [Github](https://github.com/cmlarsen/chomsky/blob/gh-pages/_data/docs.yml).


YAML strictly depends on indenting to descibe the data relationships, so be mindful of that when editing this document.  

The **category** is a Top Level category.


*docs* is a collection of links within that category. You can nest categories to an arbitrary depth. 

The **name** in each link definition is the name the link will have in the nav.  

The **url** is the **permalink** of the page, as defined in its Frontmatter. 

Note: strings should be escaped with ticks (e.g. '[Internal] Guides') if they contain non-alphabetic characters. 

It looks like this:
{% highlight yaml %}
- category: '[Internal] Guides'
  docs:
  - {name: Setting up Noam Docs, url: creating-the-noam-docs}
- category: Getting Started
  docs:
  - {name: Introduction, url: introduction}
  - {name: Install Noam Moderator, url: install-noam}
  - {name: Add Participants, url: add-participants}
- category: Reference
  docs:
  - {name: Lexicon, url: lexicon}
  - {name: Noam Protocol, url: noam-protocol}

- category: Demo Top Category
  docs:
  - {name: Item 1, url: install}
  - {name: Item 2, url: introduction}
  - category: Demo Sub Category
    docs:
    - {name: Item 1, url: introduction}
    - {name: Item 2, url: introduction}
    - category: Demo Sub Sub Category
      docs:
      - {name: Item 1, url: introduction}
      - {name: Item 2, url: introduction}
{% endhighlight%}