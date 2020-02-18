import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Welcome" />
    <Banner>David Holbrook</Banner>
    <Intro>
      <p>
        I am a Developer working for{" "}
        <a
          href="https://www.wihatools.com/about-wiha-tools"
          alt="Wiha Tools USA, website"
        >
          Wiha Tools USA
        </a>
        . I love Comic Books, Video Games and Star Wars, but most of all I have
        a passion for web development and making cool useful things..
      </p>
    </Intro>
    <>
      <SectionTitle>My Thoughts</SectionTitle>
      {data.allMarkdownRemark.edges.map(
        ({ node }) =>
          node.frontmatter.template === "blog" && (
            <>
              <Link to={node.frontmatter.path}>
                <Title>{node.frontmatter.title}</Title>
              </Link>
              <p>{node.excerpt}</p>
            </>
          )
      )}
    </>
    <>
      <SectionTitle>Working On</SectionTitle>
      {data.allMarkdownRemark.edges.map(
        ({ node }) =>
          node.frontmatter.template === "project" && (
            <>
              <Link to={node.frontmatter.path}>
                <Title>{node.frontmatter.title}</Title>
              </Link>
              <p>{node.excerpt}</p>
            </>
          )
      )}
    </>
  </Layout>
)

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
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage

// =========================================
//    Main Styles
// =========================================

const Intro = styled.div`
  display: block;
  font-size: 1.3rem;
  line-height: 2.3rem;

  @media (prefers-color-scheme: dark) {
    color: #cccccc;
    line-height: 2.7rem;
  }
`

const Banner = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-size: 7vw;
  margin: 3.2rem 0 3rem 0;

  @media (min-width: 82rem) {
    font-size: 6rem;
  }

  @media (max-width: 55rem) {
    font-size: 12vw;
  }
`

const Title = styled.h3`
  font-family: "Work Sans", sans-serif;
  font-size: 1em;
`

// ==========================================
//   Blog Styles
// =========================================

const SectionTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 2.5rem;

  /* text-transform: uppercase; */

  margin: 4rem 0;
`

// =========================================
//    Sidebar Styles
// =========================================

const Side = styled.main`
  background: #fbc7ba;
  text-align: center;

  max-width: 44rem;
  padding: 1rem;

  border-radius: 17px;

  h2 {
    text-transform: uppercase;

    letter-spacing: 1.5px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`

const Button = styled.button`
  background: none;
  color: #333333;
  text-transform: uppercase;

  margin: 0 0.5rem;
  padding: 1rem;

  max-width: 8rem;

  border: #333333 1px solid;

  img {
    height: 50px;
  }
`
