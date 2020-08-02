import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Header from "../components/header"
import Navagation from "../components/navagation"

const thoughts = ({ data }) => {
  return (
    <Layout>
      <div className="thought__wrapper">
        <SEO title="About David" />
        <Header />
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
                  <Link
                    to={node.frontmatter.path}
                    style={{
                      color: node.frontmatter.primary || "#555",
                      borderColor: node.frontmatter.primary || "#555",
                    }}
                  >
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
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
          }
          excerpt
        }
      }
    }
  }
`
