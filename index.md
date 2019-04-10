---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Shanel's Blog
---
<!--<h1>{{ page.title }}</h1>-->
<div class="posts">
  {% for post in site.posts %}
    <article class="post">
    	<header>
	      {% if page.img %}
	      	<img src="{{site.baseurl}}/img/{{page.img}}" alt="{{page.img}}">
	      {% endif %}
	      <h1><span>{{ post.date | date_to_string }}</span>
	      	<a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
	      </h1>
    	</header>
    	{{ content }}
    	{% include _share-post.html %}
  	</article>
  {% endfor %}
</div>