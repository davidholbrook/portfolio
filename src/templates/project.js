import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

export default ({ data }) => {
  console.log(data)
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div>
        <Title>{frontmatter.title}</Title>
        <Post dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

const Post = styled.div`
  font-family: Merriweather, sans-serif;
  line-height: 1.8rem;

  h3 {
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    line-height: 2rem;

    @media (prefers-color-scheme: dark) {
      color: #ddd;
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #c4c4c4;

    /* werid bug */
    p {
      color: #c4c4c4;
    }
  }
`

const Title = styled.h2`
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    color: #ddd;
  }
`

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`
