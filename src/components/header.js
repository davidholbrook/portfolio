import React from "react"
// eslint-disable-next-line
import { Link } from "gatsby"
import styled from "styled-components"

import Icon from "../images/icons"

const Header = () => (
  <header>
    <Heading>
      {console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)}
      {window.matchMedia("(prefers-color-scheme: dark)").matches ? (
        <Icon name="logo--dark" />
      ) : (
        <Icon name="logo--light" />
      )}
      <span>
        <h2>David Holbrook</h2>
        <h3>Web Developer for Wiha Tools USA</h3>
      </span>
    </Heading>
  </header>
)

export default Header

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  @media (prefers-color-scheme: dark) {
    color: #cccccc;
  }

  svg {
    margin: -0.5rem 1rem 0 0;
  }

  h2 {
    font-family: "Nobile", sans-serif;
    font-size: 5rem;

    @media (max-width: 600px) {
      text-transform: uppercase;
      font-size: 25vw;
      text-align: center;
    }
  }
  h3 {
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    text-transform: uppercase;
    margin: -2rem 0 0 0;
    // evil I know
    letter-spacing: 2.5px;

    @media (max-width: 600px) {
      font-size: 9vw;
      line-height: 3.5rem;
      text-align: center;
    }
  }
`
