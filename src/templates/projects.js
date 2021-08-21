import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import styled from "styled-components"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const Post = styled.div`
    a {
      color: ${frontmatter.color};
      border-color: ${frontmatter.color};
    }
  `

  const Title = styled.h2`
    color: ${frontmatter.color};
  `
  return (
    <>
      <SEO title={frontmatter.title} />
      <Layout>
        <div className="container mx-auto">
          <Title class="text=3xl font-bold">{frontmatter.title}</Title>
          <Post dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
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
