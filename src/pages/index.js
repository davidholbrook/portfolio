import React from "react"
import styled from "styled-components"
// eslint-disable-next-line
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <h1>David Holbrook</h1>
    <div>
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
    </div>
  </Layout>
)

export default IndexPage
