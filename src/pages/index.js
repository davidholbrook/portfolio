import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Navagation from "../components/navagation"
import Seo from "../layout/seo"
import bgImg from "../images/headerbg.jpg"

import HomepageThoughts from "../components/HomepageThoughts"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Welcome" />
      <Header>
        <div className="container mx-auto">
          <Navagation />
          <div className="p-5 lg:p-0 lg:pt-14 lg:w-1/2">
            <h2 className="text-5xl text-center md:text-left md:text-7xl text-white">
              Hi, I'm David.
            </h2>
            <p className="lg:pt-6 text-2xl leading-loose text-gray-300">
              I'm an front end developer for{" "}
              <a
                href="https://www.decksdirect.com"
                target="_blank"
                rel="noreferrer"
              >
                DecksDirect
              </a>
              . I love creating websites and applications to solve the problems
              of tomorrow.
            </p>
            <Link
              to="about"
              className="inline-block border-2 border-white text-white p-2 mt-2 uppercase hover:bg-white hover:text-black hover:border-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Header>
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
