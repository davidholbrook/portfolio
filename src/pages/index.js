import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Background from "../images/background.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Minneapolis Developer" />
    <Intro>
      <h1>David Holbrook</h1>
      <h2>Generating Websites. Star Wars Trivia, and Comic Book Love.</h2>
    </Intro>
    <Nav>
      <ul>
        <li>About</li>
        <li>Thoughts</li>
        <li>Projects</li>
      </ul>
    </Nav>
  </Layout>
)

export default IndexPage

const Intro = styled.div`
  color: #999;

  background: #333 url('${Background}') no-repeat;
  background-size: cover;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;

    text-transform: uppercase;

    font-size: 4rem;
  }

  h2{
    font-weight: 200px;
  }
`

const Nav = styled.nav`
  background: #ffffff;

  padding: 0.5rem;
  padding-top: 0;

  max-width: 80%;
  margin: -4rem auto 0 auto;

  border-top: 5px solid orange;

  opacity: 0.6;

  transition: opacity 320ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  ul {
    list-style: none;

    display: flex;
    justify-content: center;

    li {
      margin: 0 1rem;
      font-size: 1.2rem;
    }
  }
`
