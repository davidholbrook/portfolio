import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import styled from "styled-components"

import Header from "../components/header"
import Navagation from "../components/navagation"

export default ({ data }) => {
  console.log(data)
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const Post = styled.div`
    width: 50rem;
    margin: 1rem auto;
    a {
      color: ${frontmatter.primary};
      border-color: ${frontmatter.primary};
    }
    h2,
    h3,
    h4,
    h5 {
      color: ${frontmatter.secondary};
    }
  `

  const Title = styled.h2`
    font-family: "Work Sans", sans-serif;
    text-transform: uppercase;
    text-align: center;

    color: ${frontmatter.secondary};
  `

  const DiColor = styled.div`
    --primary: ${frontmatter.primary};
    --secondary: ${frontmatter.secondary};
    --accent: ${frontmatter.accent};
  `

  return (
    <>
      <Layout>
        <SEO title={frontmatter.title} />
        <DiColor>
          <Header />
          <Navagation />
          <div class="boxed">
            <Title>{frontmatter.title}</Title>
            <Post dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </DiColor>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        primary
        secondary
        accent
      }
    }
  }
`
