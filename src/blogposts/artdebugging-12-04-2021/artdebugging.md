---
path: "/thoughts/the-art-of-debugging"
title: "The Art of Debugging"
date: "December 9th, 2021"
template: "blog"
primary: "HSL(333, 55%, 50%)"
secondary: "HSL(900, 50%, 40%)"
coverImage: "./Cover.jpg"
credit: "Photo by Markus Spiske on Unsplash"
creditURL: "https://unsplash.com/photos/hvSr_CVecVI"
---

_Aside: For this article, I am going to be using javascript and VS Code for the examples, but as this article is more of a **why** and not a **how to**, any editor and language should be applicable._

For eons, javascript developers have been printing their code values to either the screen or the console to find the value of a variable, function, array, in your code. This exchange generally looks like something below:

` console.log(variable)`

What if though you could do this exchange in your code editor/IDE (Integrated Developer Environment) and skip the browser? What if you could look at more complicated code and see all the variables in a file at once and while you run it? _Welcome to the Art of Debugging_.

While I could go into detail on how the debugger works from beginning to end, that is not what I am going for here. There are many other articles and videos tutorials that cover the process of debugging, including one from the [VS Code team](https://code.visualstudio.com/docs/introvideos/debugging), instead of in this article I am going rather into the _why_ of debugging and _why_ it is preferable to logging out commands on to the browser's console.

## Debug on

What makes debugging such a powerful part of any developer's arsenal, is that it can show you how your code is being run in real-time. No guessing, no taking a shot in the dark, just straight-up feedback on how your code is performing. So, for instance, if you wrote a variable like `const cool = []` and then you assign the array to certain JSON values using a map, so `cool` would now equal `[rocks, paper, scissors]`, but what if down along the way there was some array push and pops, and now `cool` is still equal to `['rock', 'scissors']` but also now includes `['airplanes', 'sailboats', 'cars', 'trains']`?

I know this example seems a bit simplistic but if you were to simply `console.log(cool)` it would come up with a mixture of results as shown above and would not be very helpful for finding out what is the root cause of the problem. This is why debugging is helpful as it takes you through the entire process, step by step, from where your first breakpoint, to the end of the application. This process can help clear up what caused the problem and help determine the potential fix.

## Stepping up

In debugging there with three main controls in most IDE’s: **step into**, **step out**, and **step over**. Along with continue and stop this makes up the crux of the debugging arsenal. When you set something known as a **breakpoint** and start the debugging process, the editor will pause where you set the breakpoint. At this point, you can start doing a few different things to understand what is happening with your code.

The **step over** command is what I use the most often as it allows you to go through, line by line, and see what is exactly being run inside your code. When you do this you will see that the variables panel light up with the current set of variables and what the current values are as you run through them.

The **Step Out** and **Step Into** are similar and not something I use a lot on a day-to-day basis but can be useful. They can, as the name infers, allow you to step _into_ and _out of_ various functions within your code. This can be especially useful when encountering loops and wanting to move to the next piece of code.

Using these three commands you can generally get to and inspect any piece of code faster and more accurately than printing a bunch of values to the browser's console tab.

## Watching you

Finally, I want to mention there are two other tabs in the VS Code inspector that are helpful, but I do not use them very often, and truth be told I normally have closed. These tabs are the **Watch** and **Call Stack**. Now the Call Stack is a bit more advanced than I want to get into in this post, but the Watch is really interesting.

What the watch does is allow you to write in a variable as an expression and you can watch as the values will change though out the course of the application's run time. This is useful if you want to see how one variable will change thought the course of a program's lifecycle.

## Wrap up

Hopefully, this gives you some idea of why debugging is super powerful and why you should use it in your next project. Some resources to get you started on this journey are the [VS Code official documentation](https://code.visualstudio.com/Docs/editor/debugging), [TechTims video overview of debugging](https://youtu.be/7qZBwhSlfOo) (this video uses python for teaching but the elements are the same), or just trying it out and see how it goes.

I hope this was useful and I hope to see this level up your coding game.
