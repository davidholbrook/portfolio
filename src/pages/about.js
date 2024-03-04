import React from "react"
import Seo from "../layout/seo"

import Navagation from "../components/navagation"

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
        <h2 className="text-5xl mt-10">About David Holbrook</h2>
        <div className="mt-10 text-gray-700 dark:text-gray-300 text-2xl">
         
         <p>I’m an energetic and strangely upbeat front-end developer with over five years of experience in the field. My passion lies in crafting beautiful, user-friendly interfaces that enhance the digital experience.</p>
         
         <h3 class="mb-3">The Technical Bits:</h3>
         
         <ul class="ml-7 list-disc">
           <li class="mb-2"><span class="font-bold">Landing Pages:</span> I have built from simple landing pages for Google Ads campaigns to captivating web experiences</li>
           <li class="mb-2"><span class="font-bold">React and Vue Applications:</span> I specialize in building dynamic applications using React and Vue. Whether it is scaffolding out an entire website or building a small-use utility.</li>
           <li class="mb-2"><span class="font-bold">Business Storefronts:</span> I’ve worked extensively with Magento 2 (PHP) and Hyva Themes (Tailwind CSS and Alpine JS) to create robust and visually appealing storefronts for businesses.</li>
           <li class="mb-3"><span class="font-bold">Other Technologies:</span> I have also used AWS Platform, Docker, and Node. I love exploring new technologies and adapting them to solve real-world challenges.</li>
         </ul>
         
         <h3 class="mb-3">My Education and Unique Perspective: </h3>
         
         My educational background is in Entrepreneurial Studies from MCAD (Minneapolis College of Art and Design), which grants me a unique ability to understand business requirements and target my skills to meet the unique needs of each business.
         
         <h3 class="my-3">Working with Others:</h3> 
         
         I’m not just about code—I also enjoy working with and teaching others. I have collaborated with a vast array of teams, from marketing to technical IT to business development. In each case, I strive to find common ground to ensure that the work I do is understood by each member of the team. Additionally, I aim to teach code and logic straightforwardly, making it accessible for other team members to understand what I do.
         

         
         
        </div>
      </div>
    </>
  )
}
export default Thoughts
