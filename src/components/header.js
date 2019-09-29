import React from "react"
// eslint-disable-next-line
import { Link } from "gatsby"
import styled from "styled-components"

import Background from "../images/background.jpg"

const Header = () => (
  <header>
    <Heading></Heading>
  </header>
)

export default Header

const Heading = styled.div`
  background: url(${Background}) no-repeat;
  background-size: cover;

  height: 100vh;
  width: 10vw;

  position: fixed;

  /* hack fix */
  margin: -2rem 0;

  @media (max-width: 900px) {
    display: none;
  }
`
