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
  // disabling eslint as varible is not used but is necessary for the effect to work.
  //eslint-disable-next-line
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
    @media (prefers-color-scheme: dark) {
      background: #333333;
    }
  }
`

  const Project = styled.div`
    a {
      color: ${frontmatter.color};
      border-color: ${frontmatter.color};
      font-weight: bold;
      @media (prefers-color-scheme: dark) {
        color: #ffffff;
        text-decoration: underline;
      }
    }
    figcaption {
      color: ${frontmatter.color};
      @media (prefers-color-scheme: dark) {
        color: #ffffff;
      }
    }
  `

  const Company = styled.h2`
    color: #ffffff;
    @media (min-width: 1024px) {
      color: ${frontmatter.color};
    }
    @media (prefers-color-scheme: dark) and (min-width: 1024px) {
      color: #ffffff;
    }
  `

  const WebsiteLink = styled.a`
    color: ${frontmatter.color};
    font-weight: bold;
    @media (prefers-color-scheme: dark) {
      color: #ffffff;
      text-decoration: underline;
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
            className="col-span-1 w-full lg:w-64 lg:bg-white lg:dark:bg-gray-700 px-10 lg:float-left lg:px-4 py-3 mt-0 rounded-lg"
          >
            <Company className="text-5xl lg:text-3xl font-bold mt-3">
              {frontmatter.title}
            </Company>
            <p className="text-sm text-white lg:text-black lg:dark:text-gray-200">
              {frontmatter.sd}
            </p>
            <p className="text-sm text-white lg:text-black lg:dark:text-gray-200">
              <strong>Role: </strong>
              {frontmatter.role}
            </p>
            <p className="text-sm text-white lg:text-black lg:dark:text-gray-200">
              <strong>Website: </strong>
              <WebsiteLink
                href={frontmatter.url}
                target="_blank"
                rel="noopener"
              >
                {frontmatter.url}
              </WebsiteLink>
            </p>
          </div>
          <Project
            dangerouslySetInnerHTML={{ __html: html }}
            className="lg:ml-72 block bg-white dark:bg-gray-700 px-10 py-4 mt-0 lg:mb-10 lg:rounded-lg lg:shadow-lg"
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
