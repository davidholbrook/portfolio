import * as React from "react"
import styled from "styled-components"
import Layout from "../Layout/main"
import Navagation from "../Components/navagation"
import bgImg from "../images/headerbg.jpg"

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
        </div>
      </Header>
    </Layout>
  )
}

export default IndexPage

const Header = styled.header`
  background: #000000 url(${bgImg}) center;
  background-size: cover;
  padding-bottom: 5rem;
`
