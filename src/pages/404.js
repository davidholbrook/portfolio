import * as React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <div className="container mx-auto p-5 lg:p-0">
    <h2 className="text-5xl mt-10">No Page Here</h2>
    <div className="mt-10 text-gray-700">
      <p>
        Please go <Link to="/">back home</Link> and try again.
      </p>
    </div>
  </div>
)

export default NotFoundPage
