import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import Header from "../components/header"
import Navagation from "../components/navagation"

const DiPage = ({ data }) => {
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

  const scaleout = useSpring({
    to: { transform: "scale(1)", opacity: 1 },
    from: { transform: "scale(0.5)", opacity: 0 },
    config: {
      speed: "slow",
      delay: "320ms",
    },
  })

  const fadeUp = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(2rem)", opacity: 0 },
    config: {
      speed: "slow",
      delay: "1000ms",
    },
  })

  return (
    <>
      <Layout>
        <SEO title={frontmatter.title} />
        <DiColor>
          <Header landing="/thoughts" />
          <Navagation />
          <div class="boxed">
            <animated.div style={scaleout}>
              <Title>{frontmatter.title}</Title>
            </animated.div>
            <animated.div style={fadeUp}>
              <Post dangerouslySetInnerHTML={{ __html: html }} />
            </animated.div>
          </div>
        </DiColor>
      </Layout>
    </>
  )
}

export default DiPage

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
