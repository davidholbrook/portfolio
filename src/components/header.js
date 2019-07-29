import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "../images/logo.js"
import Menu from "../images/menu.js"

const Header = () => (
  <header>
    <Heading>
      <Logo />
      <MenuStyled />
    </Heading>
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
const MenuStyled = styled(Menu)`
  background: #bada55;
  outline: #bada55 3px solid;
`
