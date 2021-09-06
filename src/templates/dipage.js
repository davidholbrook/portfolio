import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../layout/layout"
import Seo from "../layout/seo"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import "../styles/typography.css"
import "../styles/prism.css"

import Navagation from "../components/navagation"

const DiPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const Post = styled.div`
    h2 {
      color: ${frontmatter.secondary};
      @media (prefers-color-scheme: dark) {
        color: #d3d1d1;
      }
    }
    h3 {
      color: ${frontmatter.primary};
      @media (prefers-color-scheme: dark) {
        color: #d3d1d1;
      }
    }
    a {
      color: ${frontmatter.secondary};
      border-bottom: 1px solid ${frontmatter.secondary};
      @media (prefers-color-scheme: dark) {
        color: #ffffff;
        border-color: #ffffff;
      }
    }
  `

  const ImgContainer = styled.div`
    position: absolute;
    top: 0;
    height: 600px;
    overflow: hidden;
    background: ${frontmatter.primary};
    opacity: 1 !important;
    z-index: -1;
    img {
      mix-blend-mode: hard-light;
      opacity: 0.2 !important;
    }
  `

  const Credit = styled.p`
    font-size: 0.8rem;
    color: ${frontmatter.primary};
    @media (prefers-color-scheme: dark) {
      color: #ffffff;
    }
  `

  const Title = styled.h1`
    color: ${frontmatter.primary};
    @media (prefers-color-scheme: dark) {
      color: #ffffff;
    }
  `

  const Date = styled.p`
    color: ${frontmatter.primary};
    @media (prefers-color-scheme: dark) {
      color: #ffffff;
    }
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
        <Seo title={frontmatter.title} />
        <ImgContainer>
          <GatsbyImage
            image={frontmatter.coverImage.childImageSharp.gatsbyImageData}
          />
        </ImgContainer>

        {/* <Header landing="/thoughts" /> */}
        <Navagation />
        <animated.div
          style={fadeUp}
          className="container mx-auto p-5 pt-1 bg-white dark:bg-gray-700 lg:rounded-lg lg:mb-10 block"
        >
          <div className="flex justify-between items-top">
            <Title>{frontmatter.title}</Title>
            <Date className="text-sm">{frontmatter.date}</Date>
          </div>
          <Post dangerouslySetInnerHTML={{ __html: html }} />
          {frontmatter.credit !== "" ? (
            frontmatter.creditURL !== "" ? (
              <Credit>
                <a
                  href={frontmatter.creditURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {frontmatter.credit}
                </a>
              </Credit>
            ) : (
              <Credit>{frontmatter.credit}</Credit>
            )
          ) : (
            ""
          )}
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
        date
        path
        primary
        secondary
        credit
        creditURL
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
