import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Navagation from "../components/navagation"
import Seo from "../layout/seo"
import bgImg from "../images/headerbg.jpg"

import HomepageBlog from "../components/HomepageBlog"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Welcome" />
      <Header>
        <div className="container mx-auto">
          <Navagation />
          <div className="py-5 lg:pt-14 lg:w-1/2">
            <h2 className="text-5xl text-center md:text-left md:text-7xl text-tint">
              Hey, I'm David.
            </h2>
            <p className="lg:pt-6 text-2xl leading-loose text-tint">
              I'm a Front End developer based out of Minneapolis, Minnesota. I have a passion for developing forward-thinking websites that help businesses succeed.
            </p>
            <Link
              to="about"
              className="inline-block border-2 border-tint text-tint p-2 mt-2 uppercase hover:bg-tint hover:text-black hover:border-tint"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Header>
      <HomepageBlog />
    </Layout>
  )
}

export default IndexPage

const Header = styled.header`
  ${document.body.hasAttribute('data-theme') ? 'background: var(--pureblack);' : `background: url(${bgImg}) #000000;`}
  background-size: cover;
  padding-bottom: 5rem;
`
