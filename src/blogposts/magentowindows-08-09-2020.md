---
path: "/thoughts/magento-development-on-windows"
title: "Magento 2 development on Windows"
date: "2020-08-09"
template: "blog"
primary: "HSL(325, 80%, 25%)"
secondary: "HSL(505, 60%, 20%)"
accent: "HSL(595, 20%, 80%)"
---

## A quick word about E-Commerce

Right now e-commerce is on the rise with every company looking towards the digital horizon to sell there next big product. The thing though that no one tells you is that e-commerce is really, really, hard. There is a reason that [Amazon is larger than almost every other company combine online](http://2oqz471sa19h3vbwa53m33yj.wpengine.netdna-cdn.com/wp-content/uploads/2016/12/chart-size-of-amazon.jpg), they have something figured out that no there company can figure out quite yet.

So, say you want to start a store what can you do? Personally, I would recommend working with a hosted platform such as Shopify or Wix that can help with many of the functions that are required to run an online store, such as security, fulfillment, and tax support. For those of you that want to own their own fate though, an open-source self-hosted platform like Magento might be right for you

## The Challenge

Anyone that has developed a website knows that the optimal flow for work goes: `local -> development -> production`, this has widely been established due to the ease of having files change on demand locally to having the stability on production. The problem is that Magento is a large system (6GB+) with millions of files and does not have great Windows support due to symbolic links and the way Windows handles them.

There are [many different solutions](https://github.com/search?q=magento+windows) to creating a great Magento workflow on your local machine, the problem is that most of them prefer a Mac and the Unix under system that only Apple can supply. If you are on Windows you are kind of out of luck.

## The Solution

After working on Magento 2 on a Windows laptop that my company suppled, it took me almost a whole year to find an optimal solution that would handle Magento 2 and all the custom code and solutions that our website needed to work correctly. Even with everything working smoothly it still takes a good amount of manual commands to make everything run smoothly.

### From the top

For the base system, I am using [Docker](https://www.docker.com/) with at least 4GB of ram to power the localized environment.

> **Update:** I am now using WSL2 version of docker which does require a `.wslconfig` a file that you can find online to limit the amount of ram that the system will dedicate to powering Docker, if you do not do this, the system _will_ run out of memory.

Next,e I have tried a few different docker setups in the past but I decided on [Mark Shust Docker setup](https://github.com/markshust/docker-magento) for working with the Magento system. His seems to work the best and with the included course it is pretty easy to set up and use.

### Where things break

This is where the fun begins, where windows have problems is with the automated deploys that Mark uses with his setup. This setup is meant for Mac, not Windows so we just have to run some things manually to get it to work properly.

#### No Sudo for you

The largest change is that sudo does not work with windows (at least in Git Bash where I normally work) so I had to change over any commands that have sudo built into them such as setting up the host [instrutions on how to do it here](https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/), or the SSL (which I will get to in a bit).

#### Broken copies

For my website, I was copying files from my live production environment into the local docker environment using [instutions on his Github page](https://github.com/markshust/docker-magento). Following his instructions I found that certain commands would just break on windows such as copying the src file over, the whole folder would copy to `/var/www/html/src` instead of `/var/www/html/`, so that would force me to enter the commands below to put the files in the correct location.

```shell
bin/root bash
mv /var/www/html/src/* /var/www/html
rm -rf src
```

Also I would have to edit the `fixperms` script with the snippet below to get the permissions to work correctly

```shell
chown -R app:app .
```

In another situation the `vendor` files would not copy back over as docker would have conflicts, so in a WSL terminal, I would have to go to my `src` directory and enter the command below to get my files back.

```shell
docker cp docker_phpfpm_1:/var/www/html/vendor ./vendor
```

### SSL for the win

This is where the fun stuff begins, Mark Shust’s Docker setup uses [MKcert](https://github.com/FiloSottile/mkcert) and Apple’s Keychain to generate and create valid key files so the website will appear secure. The two main problems are 1) no sudo on windows and 2) windows doesn’t have a keychain (well it does, but not the same thing). So to get SSL to work on windows you need to create the certificated manually, trust me it isn’t that hard.

First go to [MKcert](https://github.com/FiloSottile/mkcert) and download it for windows (I used the choco version). Next using elevated powershell (as they showed you) go to your Docker `src` directory and type the following below (using your own website of course)

```shell
mkcert -key-file key.pem -cert-file cert.pem example.com *.example.com
```

Then use the command below to copy it to the docker image (**_Note:_** first enter .crt then .key for the .xxx below)

```shell
docker cp nginx.xxx $(docker-compose ps -q phpfpm|awk '{print $1}'):/etc/nginx/certs
```

Restart the containers using `bin/restart` and you should have a secure website.

### One last thing

If you plan on creating multiple websites using the Dockerfile path in Mark’s course please not that Dockerfiles only work using WSL due to weird window permission errors.

## In Summary

Magento is a great open-source system provided by Adobe where with a bit of knowledge and skill you can create any kind of extension or system that you can imagine. Hopefully, now that I showed you how to set it up on windows you can start doing the next big revolution in e-commerce.
