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

  const handleScroll = () => {
    const companyHeader = document.querySelector('.companyHeader')
    const position = window.scrollY

    if (position >= 135) {
      companyHeader.classList.add("lg:sticky", "lg:top-3")
    }
    if (position <= 135) {
      companyHeader.classList.remove("lg:sticky", "lg:top-3")
    }
  }
  useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const GlobalStyle = createGlobalStyle`
  
    :root[data-theme="light"] {
      --text-primary: ${frontmatter.color};
      --specbg: ${frontmatter.color};
      --figcap: #333333;
    }
    :root[data-theme="dark"] {
      --text-primary: #ffffff;
      --specbg: #333333;
      --figcap: #eeeeee;
    }

  body {
    /* need to make important to for theme color to appear */
    background-color: var(--specbg) !important;
  }
`

  const Project = styled.div`
    h2, h3, h4, h5 {
      color: var(--text-primary);
    }
    h3{
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
    h4{
      font-size: 1.4rem;
      line-height: 1.7;
      font-weight: 500
    }
    h5{
      font-size: 1.3rem;
      line-height: 2.25rem;
    }
    a {
      color: var(--text-primary);
      border-color: var(--text-primary);
      font-weight: bold;
    }
    figcaption {
      color: var(--figcap);
      font-style: italic;
      font-weight: 300;
      font-size: 1.1rem;
    }
  `

  const Company = styled.h2`
    color: #ffffff;

    @media (min-width: 1280px){
      color: var(--text-primary);
    }
  `

  const WebsiteLink = styled.a`
    color: #ffffff;
    font-weight: bold;

    @media (min-width: 1280px){
      color: var(--text-primary);

      display:inline-block;
      width: 10rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `

  return (
    <>
      <GlobalStyle />
      <Seo title={frontmatter.title} />
      <Layout>
        <div className="container mx-auto">
          <Navagation />
          <div className="xl:grid grid-cols-12 gap-3 items-start">
          <div
            className="companyHeader col-span-2 w-full xl:bg-portbg px-4 xl:px-4 py-1 my-0 rounded-lg"
          >
            <Company className="text-5xl lg:text-3xl font-bold mt-3">
              {frontmatter.title}
            </Company>
            <p className="text-sm text-white xl:text-bodytext">
              {frontmatter.sd}
            </p>
            <p className="text-sm text-white xl:text-bodytext">
              <strong>Role: </strong>
              {frontmatter.role}
            </p>
            <p className="text-sm text-white xl:text-bodytext">
              <strong>Website: </strong>
              <WebsiteLink
                href={frontmatter.url}
                target="_blank"
                title={frontmatter.url}
                rel="noopener"
              >
                {frontmatter.url}
              </WebsiteLink>
            </p>
          </div>
          <Project
            dangerouslySetInnerHTML={{ __html: html }}
            className="bg-portbg col-span-9 px-10 py-4 mb-10 lg:rounded-lg lg:shadow-lg"
          />
        </div>
        </div>
      </Layout>
    </>
  )
}
export default Project
export const pageQuery = graphql`
  query ($patheq: String!) {
    markdownRemark(frontmatter: { path: { eq: $patheq } }) {
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
