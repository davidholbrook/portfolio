import React from "react"
import Seo from "../layout/seo"

import Navagation from "../components/navagation"

const Work = () => {
  return (
    <>
      <Seo title="My Work" />
      <div className="bg-black mb-5">
        <div className="container mx-auto">
          <Navagation />
        </div>
      </div>
      <div className="container mx-auto">
        <h2>I am not currently looking for work at this time.</h2>
      </div>
    </>
  )
}

export default Work
