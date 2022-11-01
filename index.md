---
layout: default
title: Home
---

# Welcome


This is a little corner of the internet that I could build from scratch. You can also find me elsewhere.

Instagram: [@{{ site.owner.instagram }}](https://www.instagram.com/pipernell/)<br>
Knitting patterns: [Payhip](https://www.payhip.com/PiperNell)<br>
Twitter: [@{{ site.owner.twitter }}](https://twitter.com/sminliwu)

<hr>

## Recent Projects
{% for project in site.data.projects limit:3 %}
  <p><a href="{{ project.link }}">{{ project.name }}</a></p>
{% endfor %}

<hr>

## Recent Blog posts
{% for post in site.posts limit:3 %}
  <small>{{ post.date | date_to_string }}</small><br>
  <a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}