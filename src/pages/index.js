import * as React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import Navagation from "../components/navagation"
import Seo from "../layout/seo"
import bgImg from "../images/headerbg.jpg"

import HomepageWork from "../components/HomepageWork"
import HomepageThoughts from "../components/HomepageThoughts"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Welcome" />
      <Header>
        <Navagation />
        <div className="p-5 lg:p-0 lg:pt-44 lg:pl-20 lg:w-1/2">
          <h2 className="text-5xl text-center md:text-left md:text-7xl text-white">
            Hi, I'm Dave.
          </h2>
          <p className="lg:pt-6 text-2xl leading-loose text-gray-300">
            A e-commerce developer for Wiha Tools. I have been building websites
            for the last 15 years and have a degree in Entrepreneurial Studies.
            I love to blog about development, the state of e-commerce, and
            sometimes Star Wars Nerdom.
          </p>

          <MoreBtn href="#" className="button ">
            Learn More
          </MoreBtn>
        </div>
      </Header>
      <HomepageWork />
      <HomepageThoughts />
    </Layout>
  )
}

export default IndexPage

const Header = styled.header`
  background: #000000 url(${bgImg}) center;
  background-size: cover;
  padding-bottom: 5rem;
`

const MoreBtn = styled.a`
  color: #ffffff;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: medium;

  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid #ffffff;
`
