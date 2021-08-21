import * as React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import Navagation from "../Components/navagation"
import bgImg from "../images/headerbg.jpg"

import HomepageWork from "../Components/HomepageWork"

const IndexPage = () => {
  return (
    <Layout>
      <Header>
        <Navagation />
        <div className="pt-44 pl-20 w-1/2">
          <h2 className="text-7xl newsfont text-white">Hi, I'm Dave.</h2>
          <p className="pt-6 text-2xl leading-loose text-gray-300">
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
