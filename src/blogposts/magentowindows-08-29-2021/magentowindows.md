---
path: "/thoughts/magento-development-on-windows"
title: "Magento 2 Development on Windows"
date: "August 9th, 2021"
sortdate: "08-09-2021"
template: "blog"
primary: "hsl(290,50%,50%)"
secondary: "HSL(50, 90%, 30%)"
coverImage: "./magentoWindows.jpg"
credit: "Background photo by rupixen.com from Unsplash"
creditURL: "https://unsplash.com/photos/Q59HmzK38eQ"
---

With the trend of online selling on the rise, every company is looking to the digital horizon with hopes to sell the next great thing that will go viral. The hard truth though is that selling online is really, really, hard. There is a reason that [Amazon is larger](http://2oqz471sa19h3vbwa53m33yj.wpengine.netdna-cdn.com/wp-content/uploads/2016/12/chart-size-of-amazon.jpg) than almost every other online company combine, which is because they have something figured out that no there company can figure out quite yet, the brains of selling online.

There are millions of ways and solutions to selling your products online from hosted platforms like Shopify and Wix to do-it-yourself solutions such as Woocommerce or Magento. There is truly no black and white way to sell online and really there are as many options as there are ideas in your head. At [Wiha](https://www.wihatools.com) though we choose Magento because we love the flexibility with the [trusted open source](https://github.com/magento/magento2) that it can provide, we just had one large problem. How do you develop for it locally on your machine?

## The Challenge

Anyone that has developed a website knows that the optimal workflow for any website is: `local -> development -> production`. This process has widely established the speed of development locally with stability and process checking that can take place online. The problem is that Magento is a large system, with at least 6GB worth of files and does not handle the Windows system well due to how the system handles symbolic links as well other problems that can arise within a non-Linux environment.

After searching many different solutions online at [github](https://github.com/search?q=magento+windows) It became obvious that to find a perfect system online, you have would have to either use a [mac](https://www.apple.com/mac/) or suffer from a slow and obtrusive docker-compose that could not handle live changes as fast as I could create them.

## The Solution

Working with Magento 2 on Windows took me almost a year to find the optimal solution to handle the system and all the custom code and solutions that I was (and am) coding to help our stores work correctly. Even in an optimal environment it still took me quite a bit of time to find all the correct commands to get Windows and Magento to work well together, unfortunately some of these are still manuel commands for the time being as there is not a good way (such as with SSL) to script them into windows.

For the base system, I am still using [Docker](https://www.docker.com/) with at least 4GB of ram to power the localized environment.

> **Update:** I am now using WSL2 version of docker which runs **much faster and is more performant**, you can check out more about this on [Nick Janetakis’s blog](https://nickjanetakis.com/blog/a-linux-dev-environment-on-windows-with-wsl-2-docker-desktop-and-more).

I have tried a few different docker-compose leading up to my solution, but I decided on [Mark Shust’s Docker setup](https://github.com/markshust/docker-magento) to be the Gold Standard for working with Magento locally. His works really well and with the included course it is pretty easy to set up and understand. The only problem is all the scripts where written for Mac and not Windows and that is where the following steps come in, as to what I had to change to get this excellent setup to work on my Windows computer.

## The Problems:

### 1. No Sudo for you

One of the largest problems was that the `sudo` command does not work with Windows Git Bash, which is my main command line, so I had to go through and change any script in the `bin` folder that had the `sudo` command to either run as a non-sudo command or run the script manually within the `bin/bash` script. This also includes registering hosts, which is extremely different on windows as apposed to mac, but instruction for doing that can be found online.

### 2. Broken copies

As mentioned above windows do not have support for symlinks as well docker can be just a bit strange in copying files. For my uses, I was installing from our already existing developer website (yes we did things backward) and following the [instructions Github](https://github.com/markshust/docker-magento), but his instructions break from time to time. One example would be that copying the `src` folder over, the containing folder would copy, not just the files inside, this would cause me to list the commands below to fix this problem:

```shell
bin/root bash
mv /var/www/html/src/* /var/www/html
rm -rf src
```

Also, I had to fix the `fixperms` script in the `bin` directory with the snippet below to as the sudo command would cause problems.

```shell
chown -R app:app .
```

In another situation, the `vendor` files would not copy back over as docker would have conflicts with the Windows filesystem. So I had to boot up a WSL terminal (like ubuntu), located my `src` directory, and paste the command below to copy the files back correctly.

```shell
docker cp docker_phpfpm_1:/var/www/html/vendor ./vendor
```

### 3. SSL is just the worst!

This is where the fun stuff begins, Mark Shust’s Docker setup uses [MKcert](https://github.com/FiloSottile/mkcert) and Apple’s Keychain to generate and save key files to trick the browsers into thinking the website is secure. The two problems with windows are 1) no sudo on windows and 2) windows doesn’t have a keychain (well it does, but not remotely the same thing). Because of these problems this was the last feature I got working on Windows

The solution found by looking at the code in `bin/setup-ssl` and translating it for windows, thankfully MKcert has a windows version of it software and a pretty easy setup process it just takes a couple extra steps.

1. Go to [MKcert](https://github.com/FiloSottile/mkcert) and download it for windows (I used the choco version). Next using elevated powershell (following their instructions) go to your Docker `src` directory and type the following below, using your local domain instead of example.com.

```shell
mkcert -key-file key.pem -cert-file cert.pem example.com *.example.com
```

2.Use the command below to copy it to the docker image (**Note:** use first `.crt` than `.key` for the _.xxx_ placeholder below)

```shell
docker cp nginx.xxx $(docker-compose ps -q phpfpm|awk '{print $1}'):/etc/nginx/certs
```

Restart the containers using `bin/restart` and you magically have a secure website.

**One last note:** If you plan on creating any custom Dockerfiles in windows, use WSL to create the image or else you will be greeted with permission errors in Git Bash.

## In Summary

Magento is a great open-source system provided by Adobe where with a bit of knowledge and skill you can create any kind of extension or system that you can imagine. Now that I showed some of my favorite tips and tricks you can get a great Docker setup and create that next great Magento 2 extension.
