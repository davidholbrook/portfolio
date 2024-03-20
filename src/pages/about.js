import React from "react"
import Seo from "../layout/seo"
import Layout from "../layout/layout"

import Navagation from "../components/navagation"

const Blog = () => {
  return (
    <Layout>
      <Seo title="About Me" />
      <div className="bg-bgblack">
        <div className="container mx-auto">
          <Navagation />
        </div>
      </div>
      <div className="container mx-auto p-5 lg:p-0 mb-10">
        <h2 className="text-5xl mt-10">About David Holbrook</h2>
        <div className="mt-10 bodytext">
         <p>I'm an energetic and strangely upbeat front-end developer with over five years of experience in the field. My passion lies in crafting beautiful, user-friendly interfaces that enhance the digital experience.</p>
         
         <h3 className="mb-3">The Technical Bits:</h3>
         
         <ul className="ml-7 list-disc">
           <li className="mb-2 leading-[1.7em]"><span className="font-bold">Landing Pages:</span> I have built from simple landing pages for Google Ads campaigns to captivating web experiences</li>
           <li className="mb-2 leading-[1.7em]"><span className="font-bold">React and Vue Applications:</span> I specialize in building dynamic applications using React and Vue. Whether it is scaffolding out an entire website or building a small-use utility.</li>
           <li className="mb-2 leading-[1.7em]"><span className="font-bold">Business Storefronts:</span> I've worked extensively with Magento 2 (PHP) and Hyva Themes (Tailwind CSS and Alpine JS) to create robust and visually appealing storefronts for businesses.</li>
           <li className="mb-3 leading-[1.7em]"><span className="font-bold">Other Technologies:</span> I have also used AWS Platform, Docker, and Node. I love exploring new technologies and adapting them to solve real-world challenges.</li>
         </ul>
         
         <h3 className="mb-3">My Education and Unique Perspective: </h3>
         
         <p>My educational background is in Entrepreneurial Studies from MCAD (Minneapolis College of Art and Design), which grants me a unique ability to understand business requirements and target my skills to meet the unique needs of each business.</p>
        </div>
      </div>
    </Layout>
  )
}
export default Blog
