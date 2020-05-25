import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import styled from "styled-components"

export default ({ data }) => {
  console.log(data)
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const Post = styled.div`
    a {
      color: ${frontmatter.color};
      border-color: ${frontmatter.color};
    }
  `

  const Title = styled.h2`
    font-family: "Work Sans", sans-serif;
    text-transform: uppercase;
    text-align: center;

    color: ${frontmatter.color};
  `

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

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        color
      }
    }
  }
`
