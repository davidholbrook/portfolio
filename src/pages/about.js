import React from "react"
import Seo from "../layout/seo"
import Layout from "../layout/layout"
import { Link } from "gatsby"

import Navagation from "../components/navagation-about"

const About = () => {
  return (
    <Layout>
      <Seo title="About Me" />
      <div className="bg-bgblack w-3/4 md:w-1/2 m-auto mt-10 rounded-md">
          <Navagation />
      </div>
      <div className="container mx-auto w-3/4 md:w-1/2 p-5 lg:p-0 mb-10 ">

        <div className="mt-10 bodytext">
          <p>I’m primarily a PHP e‑commerce developer, which means I spend a lot of time maintaining and building solutions for complex, high‑traffic systems. When I’m not doing that, I’m usually working on side projects in JavaScript and React (including the website you’re reading right now), reading a book, or watching an unreasonable amount of YouTube, to which I confess.</p>
          <p>My background is a blend of business and development. I earned a degree in Entrepreneurial Studies from MCAD (Minneapolis College of Art and Design), which helps me approach problems from multiple angles: as a developer, a designer, and a business‑minded thinker. I hope that comes through in my blog posts, where I try to take complicated challenges and turn them into simple, useful explanations — along with a few warnings about the pitfalls I fell into along the way.</p>
          <p>I’ll admit this site is a bit of a mess at the moment, but I’m working on cleaning it up and adding new posts soon, including showcases of the side projects I’ve been tinkering with. Thanks for being patient with me in the meantime, and I hope you enjoy the ride.</p>
          <p>Visit the <Link to={"/blog"} className="underline">Blog</Link></p>
        </div>
      </div>
    </Layout>
  )
}
export default About
