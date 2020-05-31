import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Navagation from "../components/navagation"
import Header from "../components/header"

const IndexPage = () => {
  const [scrollPosition, setSrollPosition] = useState(0)
  const [HomPag, setHomPag] = useState(true)

  const handleScroll = () => {
    const position = window.pageYOffset
    setSrollPosition(position)

    if (position > 600) {
      setHomPag(false)
      window.scrollTo(0, 0)
      window.removeEventListener("scroll", handleScroll)
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
        <Header homepage={HomPag} />
        <Navagation homepage={HomPag} scrollPosition={scrollPosition} />
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
