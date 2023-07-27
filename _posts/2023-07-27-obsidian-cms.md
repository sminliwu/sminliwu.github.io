---
title: 'Obsidian.md: My New CMS'
author: S
layout: post
date: 2023-07-27 15:46
tags: writing knowledge-management
---

![screenshot of Obsidian's graph view](/assets/Pasted-image-20230727155211.png)

I put on a variety of YouTube videos as background listening when I work -- sometimes fiction/worldbuilding, sometimes technical. In one of my more technical moods, I watched a couple of videos about [Obsidian](https://obsidian.md/) as a note-taking tool, but also more: a knowledge-management system, particularly a technique called "second brain". Buzzwords aside, what won me over was seeing its graph view, which shows each file as a node, and hyperlinks between files as edges.

Obsidian's basic units are Markdown (.md) files, organized into a "vault" -- analogous to a notebook/workspace/repository, maybe? I saw that you can import an existing folder containing Markdown files to start a new vault, so I tried to convert the repository for this GitHub pages site to a vault.

It's only been a couple of weeks, but I think it's working pretty well already. In order to keep the repository as both a git repo and an Obsidian vault, I had to create a new folder in the root directory `obsidian` for the `.gitignore` to overlook. This folder is where all of my Obsidian templates are going. Through a combination of templates and daily notes (two of Obsidian's core features), I can easily create new blog posts that are automatically dated and timestamped. Honestly, even more easily than what I previously used, forestry.io (which is now defunct). The previous [post](2023-07-25-braid-structure) was created through this method.

I'll have to do some more tinkering to get Obsidian's graph links working alongside normal Markdown/HTML hyperlinks that this site needs to function. I really want to get that working so the graph would reflect the organization of research ideas that I've documented.