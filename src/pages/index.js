import React from "react"
import styled from "styled-components"
// import { useSpring, animated } from "react-spring"

// eslint-disable-next-line
// import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Navagation from "../components/navagation"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <Layout>
      <Rid>
        <SEO title="Minneapolis Developer" />
        <Header />
        <Navagation />
      </Rid>
    </Layout>
  )
}

export default IndexPage

//temp height ajustment
// TODO remove this
const Rid = styled.div`
  height: 1700px;
`
