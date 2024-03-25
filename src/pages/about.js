import React from 'react'
import Seo from '../layout/seo'
import Layout from '../layout/layout'

import Navagation from '../components/navagation'

const Blog = () => (
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
        <p>
          I am an energetic (and strangely upbeat) developer with over five
          years of experience working in the front-end scope. Having worked with
          multiple different departments and people I have developed everything
          from simple landing pages for Google ads targeting, to full-scale
          React and Vue-based applications for dynamically filtering and
          displaying information in real-time.
        </p>

        <p>
          My educational background is in Entrepreneurial Studies from MCAD
          (Minneapolis College of Art and Design), which grants me a unique
          ability to understand business requirements and target my skills to
          the unique needs of each business. This also allows me to mentor and
          teach co-workers about simple coding logic and how applications can
          work in a simple yet easy-to-understand manner.
        </p>

        <p>
          On a technical level, my experience includes Magento 2 (PHP) and Hyva
          Themes (Tailwind CSS and Alpine JS) for business storefronts, React
          and Vue for developing dynamic applications for filtering and
          displaying data on demand, and a bunch of other technologies (AWS
          Platform, Docker, Node) for various uses as they come up.
        </p>
      </div>
    </div>
  </Layout>
)
export default Blog
