import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import { Link } from "gatsby"

// temp image links
import CGOS from "../images/projects/CGOS.svg"
import unplan from "../images/projects/unplan.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <Intro>
      <h2>Hi I'm Dave</h2>
      <h3>Developer for Wiha Tools USA</h3>
    </Intro>
    <Side>
      <h2>Side Stuff</h2>
      <ButtonWrapper>
        <Button>
          <img src={unplan} alt="unplan logo" />
          <h3>unplan</h3>
        </Button>
        <Button>
          <img src={CGOS} alt="unplan logo" />
          <h3>COGS</h3>
        </Button>
      </ButtonWrapper>
    </Side>
  </Layout>
)

export default IndexPage

// =========================================
//    Main Styles
// =========================================

const Intro = styled.div`
  display: block;
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

    @media (min-width: 900px) {
      margin-left: 1.5rem;
      /* hack to align the word blocks */
      padding-bottom: 0.5rem;
    }
    @media (min-width: 600px) {
      text-transform: uppercase;
    }

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
