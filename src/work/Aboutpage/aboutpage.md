---
path: "/work/decksdirectaboutpage"
title: "DecksDirect About Page"
role: "Developer"
color: "#1d4588"
url: "https://www.decksdirect.com"
sd: "A complex brand page to show off the personal level of service within DecksDirect"
template: "project"
frontImage: "./AboutPage__closeup.jpeg"
---

## Overview
When I started at [DecksDirect](https://www.decksdirect.com), one of the objectives was to show off the company value of “Real People, Real Service” through an about us page. The owner was passionate about having the employees shown on the page, that when you call the company you get a real person, not a robot.

![The full about page circa 2022](./AboutPage__fullpage.jpeg)

## My roles and responsibilities

DecksDirect was using the EOS (Entrepreneurial Operating System) at the time, and one of the components of this system is to have one “rock”, or thing to do that can make the company better outside of you own day-to-day job. My first rock was to update the about page, both in terms of new images and design, but also in a way that employees can be displayed and managed.

From a page design perspective, I translated the wonderful design that my creative manager at the time created for me, as for the employee management I developed a few [Vue.js](https://vuejs.org) components with some vanilla javascript to make this work.

![Close up of the people grid](./AboutPage__closeup.jpeg)

## Problem and Opportunities

Creating the employee section was a difficult task to come up with in a short amount of time. I had roughly about a week to do most of the coding work. Coming off a custom development project that I created for Wiha Tools, I had some mastery of Vue and I knew that you could use it to create interfaces without loading a whole npm library worth of resources. 

Using this knowledge to my advantage, I started by creating a huge JSON file with all the employees names that the page would fetch in real time. After that, I used the native javascript fetch utility to load in the JSON file (via try/catch) and then mapped out the html elements to Vue components.

The advantage of using this method is that I was able to make changes to the employee section quickly on demand, this was helpful as there was a influx of incoming and outgoing employees at the time. Also, as this had to be a Magento module, as you could not use Vue in CMS pages, this was before we translated to Hyva, so some aspects had to be hardcoded. This was the not the most optimized way of handing this problem, but it worked.

![A detail page of the employee (in this case myself)](./AboutPage__detailed.jpeg)

## Conclusion

Working on this project was very challenging and rewarding for me a developer. It allowed me to stretch out my wings as a developer, but also create something meaningful to the company as a whole. The fact that there is so much personalization in every fun fact and description of each person ended up in is truly amazing. Unfortunately, due to so much change this module eventually needed to be scraped for a more efficient CMS approach, but it was still an amazing project for the time.
