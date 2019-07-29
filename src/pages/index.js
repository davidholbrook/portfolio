import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <MainHeading>Hi I'm Dave</MainHeading>
    <SmallerHeading>
      web developer for
      <br /> <strong>Wiha Tools USA</strong>
    </SmallerHeading>
    <Side>
      <h2>Side Stuff</h2>
      <Button>
        <h3>unplan</h3>
      </Button>
      <Button>
        <h3>COGS</h3>
      </Button>
    </Side>
  </Layout>
)

export default IndexPage

// =========================================
//    Main Styles
// =========================================

const MainHeading = styled.h2`
  font-family: "Varela Round", sans-serif;
  text-transform: uppercase;
  font-size: 25vw;
  text-align: center;
`

const SmallerHeading = styled.h3`
  font-family: "Work Sans", sans-serif;
  font-weight: 300;

  font-size: 9vw;
  line-height: 3.5rem;
  text-align: center;
`

// =========================================
//    Sidebar Styles
// =========================================

const Side = styled.main`
  background: #fbc7ba;

  padding: 1rem;
  border-radius: 17px;

  text-align: center;
`
const Button = styled.button`
  background: none;
  border: #718093;
  text-transform: uppercase;
`
