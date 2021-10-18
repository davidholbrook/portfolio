import React from "react"
import Seo from "/layout/seo"

import Navagation from "/components/navagation"

const Thoughts = () => {
  return (
    <>
      <Seo title="About Me" />
      <div className="bg-black">
        <div className="container mx-auto">
          <Navagation />
        </div>
      </div>
      <div className="container mx-auto p-5 lg:p-0">
        <h2 className="text-5xl mt-10">About Me</h2>
        <div className="mt-10 text-gray-700 dark:text-gray-300">
          <p>
            Hello, I’m David. I am a e-commerce developer currently working for
            Wiha Tools. I love crafting websites that are beautiful, purposeful,
            and above all disirable to be used day-after-day. I have a long
            history of working with Javascript, Node, GraphQL PHP, and MySQL.
          </p>
          <p>
            As a developer I have worked with many different forms of websites,
            from simple wordpress designs, to full website stores, to full
            in-house developed membership systems. I have also have a extensive
            experience working React for a fast and responsive websites that can
            be developed using data from slower and less responsive systems.
          </p>
          <p>
            I also have a background in business and marketing, enjoying a
            degree in Entrepreneurial Studies for Minneapolis College of Art and
            Design. Having this experience has opened up new opportunities for
            myself to work with business leaders and marketers to tailor and
            understand how my work can contribute to the organization as a
            whole. I also use this background to open up new dialogs in how I
            can develop code and design systems to help meet the goals and needs
            of the organization as well.
          </p>
          <p>
            At the end of the day, I am someone who is very passionate in the
            details creating websites and interfaces that are easy-to-use,
            maintainable, and again, desirable for use day-after-day for buying
            that next great idea.
          </p>
        </div>
      </div>
    </>
  )
}
export default Thoughts
