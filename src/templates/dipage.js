import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import "../styles/typography.css"
import "../styles/prism.css"

import Navagation from "../components/navagation"

const DiPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const Post = styled.div`
    h2,
    h3 {
      color: ${frontmatter.secondary};
    }
    a {
      color: ${frontmatter.secondary};
      border-bottom: 1px solid ${frontmatter.secondary};
    }
  `

  const ImgContainer = styled.div`
    position: absolute;
    top: 0;
    height: 70vh;
    overflow: hidden;
    background: ${frontmatter.primary};
    opacity: 1 !important;
    z-index: -1;
    img {
      mix-blend-mode: hard-light;
      opacity: 0.2 !important;
    }
  `

  const CaptionContainer = styled.div`
    position: absolute;
    top: 68vh;
    right: 0;

    padding: 5px;

    font-size: 0.6rem;
    background: #ffffff;
  `

  const Title = styled.h1`
    color: ${frontmatter.primary};
  `

  const fadeUp = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(2rem)", opacity: 0 },
    config: {
      speed: "5sec",
      delay: "2sec",
    },
  })

  return (
    <>
      <Layout>
        <SEO title={frontmatter.title} />
        <ImgContainer>
          <GatsbyImage
            image={frontmatter.coverImage.childImageSharp.gatsbyImageData}
          />
        </ImgContainer>
        <CaptionContainer>
          Photo by{" "}
          <a href="https://unsplash.com/@ianjbattaglia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Ian Battaglia
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/server?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </CaptionContainer>
        {/* <Header landing="/thoughts" /> */}
        <Navagation />
        <animated.div
          style={fadeUp}
          className="container mx-auto p-5 pt-1 bg-white lg:rounded-lg block"
        >
          <Title>{frontmatter.title}</Title>
          <Post dangerouslySetInnerHTML={{ __html: html }} />
        </animated.div>
      </Layout>
    </>
  )
}

export default DiPage

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        primary
        secondary
        coverImage {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
