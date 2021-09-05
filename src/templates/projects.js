import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import Seo from "../layout/seo"
import styled, { createGlobalStyle } from "styled-components"

import Navagation from "../components/navagation"
import "../styles/typography.css"

const Project = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const [scrollPosition, setSrollPosition] = useState(0)

  const handleScroll = () => {
    const companyHeader = document.getElementById("companyHeader")
    const position = window.pageYOffset
    setSrollPosition(position)

    if (position >= 135) {
      companyHeader.classList.add("lg:fixed", "lg:top-5")
    }
    if (position <= 135) {
      companyHeader.classList.remove("lg:fixed", "lg:top-5")
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const GlobalStyle = createGlobalStyle`
  body {
    background: ${frontmatter.color};
  }
`

  const Project = styled.div`
    a {
      color: ${frontmatter.color};
      border-color: ${frontmatter.color};
    }
    figcaption {
      color: ${frontmatter.color};
    }
  `

  const Company = styled.h2`
    color: #ffffff;
    @media (min-width: 1024px) {
      color: ${frontmatter.color};
    }
  `
  return (
    <>
      <GlobalStyle />
      <Seo title={frontmatter.title} />
      <Layout>
        <div className="container mx-auto">
          <Navagation />

          <div
            id="companyHeader"
            className="col-span-1 w-full lg:w-64 lg:bg-white px-10 lg:float-left lg:px-4 py-3 mt-0 rounded-lg"
          >
            <Company className="text-5xl lg:text-3xl font-bold mt-3">
              {frontmatter.title}
            </Company>
            <p className="text-sm text-white lg:text-black">{frontmatter.sd}</p>
            <p className="text-sm text-white lg:text-black">
              <strong>Role: </strong>
              {frontmatter.role}
            </p>
          </div>
          <Project
            dangerouslySetInnerHTML={{ __html: html }}
            className="lg:ml-72 block bg-white px-10 py-4 mt-0 lg:mb-10 lg:rounded-lg lg:shadow-lg"
          />
        </div>
      </Layout>
    </>
  )
}
export default Project
export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        color
        role
        url
        sd
      }
    }
  }
`
