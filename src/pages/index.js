import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Navagation from "../components/navagation"
import Header from "../components/header"

const IndexPage = () => {
  const [scrollPosition, setSrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setSrollPosition(position)

    if (position > 600) {
      navigate("/about/")
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Layout>
      <Rid>
        <SEO title="Minneapolis Developer" />
        <Header homepage={true} scrollPosition={scrollPosition} />
        <Navagation homepage={true} scrollPosition={scrollPosition} />
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
