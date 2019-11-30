import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SubProjects from "../subcomponents/subprojects"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <Intro>
      <h2>David Holbrook</h2>
      <h3>Web Developer for Wiha Tools USA</h3>
      <p>
        Hi I'm Dave, a Web Developer from Minnesota. I love Comic Books, Video
        Games and Star Wars, but most of all I have a passion for web
        development. Currently I work as a website developer for{" "}
        <a href="https://wihatools.com">Wiha Tools USA</a>.
      </p>
    </Intro>
    <SubProjects />
  </Layout>
)

export default IndexPage

// =========================================
//    Main Styles
// =========================================

const Intro = styled.div`
  display: block;
  font-size: 1.5rem;
  line-height: 2.3rem;

  h2 {
    font-family: "Nobile", sans-serif;
    font-size: 5rem;

    @media (max-width: 600px) {
      text-transform: uppercase;
      font-size: 25vw;
      text-align: center;
    }
  }

  h3 {
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    text-transform: uppercase;
    margin-top: -2rem;
    // evil I know
    letter-spacing: 2.5px;

    @media (max-width: 600px) {
      font-size: 9vw;
      line-height: 3.5rem;
      text-align: center;
    }
  }
`

// =========================================
//    Sidebar Styles
// =========================================

const Side = styled.main`
  background: #fbc7ba;
  text-align: center;

  max-width: 44rem;
  padding: 1rem;

  border-radius: 17px;

  h2 {
    font-family: "Nobile", sans-serif;
    text-transform: uppercase;

    letter-spacing: 1.5px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`

const Button = styled.button`
  background: none;
  color: #333333;
  text-transform: uppercase;

  margin: 0 0.5rem;
  padding: 1rem;

  max-width: 8rem;

  border: #333333 1px solid;

  img {
    height: 50px;
  }
`
