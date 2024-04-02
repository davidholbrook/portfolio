---
path: "/blog/why-I-use-tailwinds-css"
title: "Why I Use Tailwinds CSS"
date: "April 2nd, 2024"
issue: "5"
template: "blog"
primary: "hsl(124,24%,57%)"
secondary: "HSL(203,30%,26%)"
coverImage: "./tailwind.jpg"
credit: "Background Photo by Markus Spiske on Unsplash"
creditURL: "https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-text-on-it-MI9-PY5cyNs"
---

Three years ago, I was introduced to something called [Tailwind CSS](https://tailwindcss.com/) (called Tailwind from here on), and I have not gone back since. Tailwind is a utility-first framework that works by writing HTML class names, it saves time by not making you name classes and keeps your code more consistent and standardized. Here are some reasons why I think Tailwind is a good framework and why I keep coming back to it time after time.


### The Pros of Tailwind.

The real reason why you should use something like Tailwind over vanilla CSS is the way that it destructors styling. Unlike writing normal CSS, Tailwind uses class names to make styling more straightforward and seamless, for example:


```
<div class="mt-4 bg-gray-500 p-5 border-2 border-grey-900">
```

This would be the same as writing:

```
.greyBox {
	margin-top: 1rem;
	background: #6b7280;
	padding: 1.25rem;
	border: 2px #111827 solid;
}
```

_In case you are wondering where these values are coming from, they are all listed on [Tailwind’s documentation website](https://tailwindcss.com/docs/installation)_

Using Tailwind’s class-based approach simplifies writing styles as all you need to do is just write classes, not name and configure each rule per element. This is different from other CSS frameworks as it is more modular, making each class a one-line declaration, not a whole pattern or concept. This modular approach allows you to have more customization as you can create different looks without writing new styles each time. On top of this, as all classes are standardized to the framework, no matter which project or technical stack you use, all classes will be written and read the same way.

Another way Tailwinds is helpful is that it has a [global configuration file](https://tailwindcss.com/docs/configuration) (normally found at `tailwind.config.js`) which can hold extra variables, such as fonts, custom colors, breakpoints, and a whole lot more. All these variables are stored in one place and can be used throughout the project by just typing `bg-primary`, where the `primary` is the custom color defined in the configuration file.

### The cons of Tailwind.

While everything that I laid out above seems great, there are some downfalls to Tailwind. The first major downfall is that it can be difficult to install, depending on what you use, which I will cover in the next section. The other is that while Tailwind covers most common styles and patterns it does not cover everything you might need.

Tailwind is what I consider to be an opinionated framework, while not the worst I have ever seen, it can be a bit difficult to work with depending on what you need. For example, if you have a class labeled `mt-4` (which stands for `margin-top: fourth iteration`) it will compile to a value that seems arbitrary and will be incremented (say `mt-4` to `mt-6`) weirdly by even numbers. I assume that this is because most popular design patterns are incremented by these numbers, so this is what Tailwind works with, but it is still odd. As well higher you go, the numbers will stop being logical and just jump by increments of 4 or more, such as `mt-64` to `mt-72`, this jump is not clearly explained anywhere and if you do use a number it does not support (say `mt-68`, which seems logical) it will just break. There is a workaround however, in which you can use bracket notation (like `mt-[3.2rem]`), but this is frowned upon because it creates a new class every time you and these new classes grow the size of your CSS file. 

The other major downside of Tailwind is that it doesn’t support new or experimental features of CSS. While this is more of an edge case, there are times that I want to use a new feature under the `@supports` flag, new browsers would be greeted with a nicer experience while older browsers would not be affected. Tailwinds does not currently allow for this, so I am still stuck in writing normal CSS styles for these kinds of styles. This is sort of an edge case, but there are still times that you will need to write traditional CSS and thankfully Tailwind allows you to do this.

### How does Tailwind work?

While you can use Tailwind as a [hotlink-able script](https://cdn.tailwindcss.com/3.4.3) (something I did not know before researching for this article), the far better and preferred way to use Tailwind is through its dynamic class compiler. Tailwind is a huge library, the CDN version coming in at around 50ms, this is because of all the classes needed to write your code. To help with file size, the framework uses a little neat trick, a compiler, which works in the background to read the class names that you writing and then create only those styles and nothing else. 

Because of this compiler feature, this framework can be somewhat tricky to install and set up, depending on what you use. More modern frameworks such as [Next.js](https://nextjs.org/) have [drop-in support](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css) for this framework, while older frameworks like [Create React App](https://create-react-app.dev/) do not and need to add it manually, which is a hassle. This is why Tailwind, in my opinion, is far more flexible than other frameworks, but also harder to install and configure because of how this compiler needs to work and run.

### Wrap Up

Tailwind is a powerful CSS framework that can speed up and standardize the way that you style your code. While not perfect and can be a bit difficult to work with initially, it does have an extremely helpful [documentation website](https://tailwindcss.com/docs/installation) and allows you to use it incrementally. I hope this article was useful and helped you understand my thoughts on why Tailwind is so useful, I hope that this framework can help speed styling your next website or application as well.
