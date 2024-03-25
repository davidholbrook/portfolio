import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../layout/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="container mx-auto p-5 lg:p-0">
      <h2 className="text-5xl mt-10">No Page Here</h2>
      <div className="mt-10 text-bodytext">
        <p>
          Please go <Link to="/">back home</Link> and try again.
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
