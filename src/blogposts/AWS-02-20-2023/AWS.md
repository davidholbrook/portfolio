---
path: "/blog/5-things-I-wish-I-knew-about-aws"
title: "5 Things I Wish I Knew About AWS"
date: "August 12th, 2023"
sortdate: "08-12-2023"
template: "blog"
primary: "HSL(36, 100%, 50%)"
secondary: "HSL(200, 100%, 40%)"
coverImage: "./Cover.jpg"
credit: "Photo by Ian Battaglia on Unsplash"
creditURL: "https://unsplash.com/photos/9drS5E_Rguc"
---

AWS (Amazon Web Services) is an advanced service platform with over 240 services being provided by the web giant Amazon. While working with [Wiha Tools](https://wihatools.com) was tasked with creating a new storefront built on the AWS platform. I wanted to share five things that I learned about AWS that would have been super useful from the beginning.

**Note** I want to be upfront about this. I am not writing a beginners guide or offering technical advise on how to setup or run any service on AWS. This platform is extremely capable but also dangerous if you are unsure on what you are doing. I would advise hiring an expert (either a person or company) to help setup AWS correctly. Amazon has historically not taken any liability for any security matters, which as we will see, ended poorly for one company.

## 1. Amazon does NOT hold your hand and expect you know what you are doing.

The first thing I learned working with AWS is that it is truly built for IT and web professionals, not for hobbyist or people building their first or second website. While there is a lot of power being wielded by AWS it assumes that you understand all of the risks, correct setup, and even the correct pricing structure (more on that in a minute).

After the attacks on [Capital One](https://www.cnn.com/2019/07/29/business/capital-one-data-breach/index.html) as well many other large websites, it is imperative that the end user is absolutely sure that they know what they are doing or go with a trusted service or professional that can guide them through the common pitfalls and traps that using such a powerful service can provide.

## 2. Watch your costs and defaults

Amazon loves to make money off of you and AWS is no different, from starting a new EC2 instance to launching a CloudFormation template (more on that in a bit) AWS will always encourage WAY larger versions of there instances than you actually need. In our launch of AWS magento quickstart alone AWS was encouraging an `m4.large` for the server and a `r4.large` for the database, this is something that Best Buy or Target would use to run there ENTIRE production system not for a small business. Most of the time you will not need anything larger than a `t2.small` or medium at best.

## 3. Use the security groups Luke!

Security Groups are the things that police which IP and port can be accessed your amazon service (in our case it is the EC2 and database instances), coming in and going out, this is AWS’s way of providing build in security against anyone accessing your machine. This feature alone flummoxed me many times and I would try to make a connection from a non-approved machine and it would say ‘connection refused’. Always keep this feature in mind and keep it updated throughout your development lifecycle to maintain maximum security.

## 4. CloudFormation is made for people way smarter than me.

At the start of our project it was suggested that we should ether use or create our own AWS CloudFormation template as this would save us time and resources in creating all the services that would go into our new store. Unfortunately, we quickly found out that this is a very advanced tool that was made for people smarter (or perhaps more information technology orientated) than myself or the team. After about one month of messing around and even creating our own template (which will be on github eventually) we decided to abandon that concept for a simpler Elastic Beanstalk installation.

## 5. Bastions boxes are cool, but unnecessary.

So… there is a concept in programing called bastion boxes. The first time I logged into one of these boxes I was truly confused: where are my files? What is all this logging doing? Why is this box so small?

Later after Googling (actually [DuckDuckGoing](https://duckduckgo.com)) around I found out that a bastion box is a middle man box that sits between you and your server, it logs everything going through the box and one you are inside you have to ssh into your actual server to get to the files et cetera, again confusing.

Although in a cool sci-fi way this whole concept sounds really awesome and why wouldn't you do it, in reality it is just really unnecessary. Think about it Security Groups gatekeeper all the random ports and IP’s out of you box as well there are other services such as cloudwatch and monitoring that can tell you what is going on with you box and who is trying to access it, paying for another instance to do this just seems like a waste of money and time.

Again, these are just five things off the top of my head that I wish that I would have known sooner and saved myself (or actually the company) some time and money. I hope this is helpful and I might make a followup if I can find more confusing or weird things about AWS and all their services.
