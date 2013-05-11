---
layout: blog
title: nginx virtual host generator
crumb: /blogging/
---

# <a href="{{ page.url }}/">{{ page.title }}</a>

[Here&rsquo;s](https://gist.github.com/lukemartin/5560855) a quick bash script to generate and symlink a new virtual host for nginx. Pretty simple stuff, but I find myself doing this quite often so just wanted a quicker way.

<p><code>NGINXSA</code> &amp; <code>NGINXSE</code> should be modified to point to your nginx host paths, and <code>STR</code> should be changed for your server config. Mine just sets the hostname and directory, and then some fastcgi stuff for PHP.</p>

Put the script into <code>/bin</code> and run it like so:

<pre><code>$ sudo nvhgen hostname working_dir

# eg.
$ sudo nvhgen cats.com /home/me/sites/cats/www</code></pre>

Full script on [GitHub](https://gist.github.com/lukemartin/5560855):