import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Header from "../components/header"
import Navagation from "../components/navagation"

const Thoughts = ({ data }) => {
  const FadeDown = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(-2rem)", opacity: 0 },
    config: {
      speed: "fast",
    },
  })
  const FadeLeft = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(2rem)", opacity: 0 },
    config: {
      speed: "slow",
    },
  })
  return (
    <Layout>
      <div className="thought__wrapper">
        <SEO title="About David" />
        <Header landing="/thoughts" />
        <Navagation />
        <div className="boxed">
          <animated.div style={FadeDown}>
            <h1>My Thoughts</h1>
            <h2 class="h4">
              This a collection of my posts about life, pop culture,
              e-commerance, and the website development industry at large.
            </h2>
          </animated.div>
          {data.allMarkdownRemark.edges.map(
            ({ node }) =>
              node.frontmatter.template === "blog" && (
                <>
                  <animated.div style={FadeLeft}>
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
                  </animated.div>
                </>
              )
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Thoughts

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            date
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
