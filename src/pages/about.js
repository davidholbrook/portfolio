import React from "react"
import Seo from "../layout/seo"
import Layout from "../layout/layout"

import Navagation from "../components/navagation"

const About = () => {
  return (
    <Layout>
      <Seo title="About Me" />
      <div className="bg-bgblack">
        <div className="container mx-auto">
          <Navagation />
        </div>
      </div>
      <div className="container mx-auto w-1/2 p-5 lg:p-0 mb-10 ">
        <h2 className="text-5xl mt-10 text-center">About David Holbrook</h2>
        <div className="mt-10 bodytext">
          <p>I’m an upbeat and enthusiastic website developer with twenty years of experience. I have experience with
            everything from server-side logic to client-side interactivity.</p>

          <h3>Entrepreneurial from the Start</h3>

          <p>From a young age, I have always been interested in how business works in the digital landscape. My
            background includes a degree in Entrepreneurial Studies from MCAD (Minneapolis College of Art and Design).
            All of this allows me to think uniquely through problems from more than just a technical standpoint but also
            from a human and business perspective, allowing me to understand issues better and find innovative ways to
            fix them.</p>

          <h3>Technical know-how</h3>

          <p>I started with PHP and MySQL and later added Javascript to my roster of programming languages. I have built
            multiple themes and plugins for content management systems such as WordPress, Magneto, Drupal, Expression
            Engine, Joomla, and many others. I am always learning new systems while keeping an eye on how to fix the
            problems in front of me.</p>
        </div>
      </div>
    </Layout>
  )
}
export default About
