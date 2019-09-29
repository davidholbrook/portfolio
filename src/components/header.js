import React from "react"
// eslint-disable-next-line
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => (
  <header>
    <Heading></Heading>
  </header>
)

export default Header

const Heading = styled.h1`
  display: flex;
  margin: 5vh 0;
  @media (min-width: 1280px) {
    position: absolute;
    top: 0.5vh;
    left: 0;
  }
`
