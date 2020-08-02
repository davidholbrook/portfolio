import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Header from "../components/header"
import Navagation from "../components/navagation"

const thoughts = ({ data }) => {
  const DiColor = styled.div`
    --primary: {node.frontmatter.primary}

  `
  return (
    <Layout>
      <div className="thought__wrapper">
        <SEO title="About David" />
        <Header landing="/thoughts" />
        <Navagation />
        <div className="boxed">
          <h1>My Thoughts</h1>
          <p>
            This a collection of my posts about life, pop culture, e-commerance,
            and the website development industry at large.
          </p>
          <br />
          {data.allMarkdownRemark.edges.map(
            ({ node }) =>
              node.frontmatter.template === "blog" && (
                <>
                  <h2 className="fancy-underline">
                    <Link
                      to={node.frontmatter.path}
                      style={{
                        color: node.frontmatter.primary,
                        backgroundImage: `linear-gradient(${node.frontmatter.primary}, ${node.frontmatter.primary}), linear-gradient(${node.frontmatter.secondary}, ${node.frontmatter.secondary})`,
                      }}
                    >
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>{node.excerpt}</p>
                </>
              )
          )}
        </div>
      </div>
    </Layout>
  )
}

export default thoughts

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            template
            primary
            secondary
          }
          excerpt(pruneLength: 450)
        }
      }
    }
  }
`
