import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Welcome" />
    <Intro>
      <p>
        Hi I'm Dave, a Web Developer from Minnesota. I love Comic Books, Video
        Games and Star Wars, but most of all I have a passion for web
        development. Currently I work as a website developer for{" "}
        <a href="https://wihatools.com">Wiha Tools USA</a>.
      </p>
    </Intro>
    <Blog>
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
    </Blog>
    <Blog>
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
    </Blog>
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

const Title = styled.h3`
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
`

// ==========================================
//  Blog Styles
// =========================================

const SectionTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 2.5rem;

  /* text-transform: uppercase; */
  text-align: center;
  margin: 4rem 0;
`

const Blog = styled.div`
  text-align: center;

  margin: 0 auto;
  width: 80%;
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
