---
logo: './spiritedfeet.png'
workPath: '/work/spiritedfeet'
title: 'Spirited Feet'
role: 'Designer and Developer'
url: 'http://spiritedfeet.com'
bgColor: '#142440'
featured: false
sd: 'Teaching dance classes in a non-competitive environment for grades three through twelve.'
---

## Overview

Spirited Feet is a dance organization based in Woodbury, Minnesota. Their mission is to teach dance and christian teaching in a non-competitive environment. They teach grades 3 through 12 and offer classes many nights a week.

![Spirited Feet in Action](./church-photo.jpg 'Spirited Feet in Action')

## Goals and Project

Spirited Feet came to me through a mutual friend to help update their outdated website. They were not happy with the current website and wanted a modern replacement. The client preferred that it would remain in Wordpress flexable to new content.

## Design Process

Being both designer and developer on this project, I was able to control the look and feel of the website. Having a family member who teaches grade school and a history of working with children. I was able supplement the normal research process and started with more of a design focus right away.

![Notebook sketch](./notebook.png 'Notebook Sketch')

I worked through a number of concepts until finally landing on a unique one sided design. This was the design, after prototyping it for the client, got the green light and started development work.

## Development

I have several years of experience working in Wordpress so creating a new theme was not difficult. Some key development points of this project was:

- Setting up a single page website for many WordPress pages.
- Creating a fixed navigation menu.
- Using Themify Builder as a content editor.

### Single Page

The first challenge of working with the website was creating a one cohesive webpage. There were a few different approaches for this, but I decided on the many to one solution.

This worked by creating every section as its own Wordpress page. This had many benefits including cleaner organization and better references for future development. After going through and creating each page, I was able to use a custom WordPress loop to find the pages and concatenate them together.

![Sticky Navagation](./navstick.png 'Sticky Navagation')

### Fixed Navigation

The next development point was creating a menu that followed the user down the page. This menu had two different states depending on which part of the page the user was on.

Using the Waypoints library, I was able to use a landmark on the website to trigger an element change. This happens when the user scroll past the header to another section to which a second state of the menu would happen. This second state would follow the user down the rest of the page until they scrolled back to the header.

One problem is that the Themify Builder would not corporate well with the jQuery I was using for this effect. To fix this effect I used Waypoints with generic javascript to build the effect in a non-conflicting way.

### Themify Builder

Themeify Builder was the last part I needed to add to the website. The builder was installed via a paid plugin and created a front-end editor for the client. From this editor, the client will be able to create or edit any content via blocks and containers. This alleviated the complex knowledge of knowing how Wordpress works internally to create content.

## Deployment and Wrap up

After the final development, I assisted in deploying the website to their servers. After that, I helped the client by creating several videos in how to maintain and use the new website for there ministry.
