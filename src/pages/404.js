import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Header from "../components/header"
import Navagation from "../components/navagation"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />
    <Navagation />
    <div className="boxed centered">
      <h1>I Didn't Do It.</h1>
      <p>
        Unlike the Simpsons, I really have not idea what happen to this page.
      </p>
      <p>Try again by clicking one of the sections above? </p>
      <img
        src="https://media.giphy.com/media/l2JehmdtfjLwPck6I/giphy.gif"
        alt="The Simpsons"
      />
    </div>
  </Layout>
)

export default NotFoundPage
