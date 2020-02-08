import React from "react"
// eslint-disable-next-line
import { Link } from "gatsby"
import styled from "styled-components"

import Icon from "../images/icons"

const Header = () => (
  <HeadBG>
    {window.matchMedia("(prefers-color-scheme: dark)").matches ? (
      <Icon name="logo--light" />
    ) : (
      <Icon name="logo--dark" />
    )}
  </HeadBG>
)

export default Header

const HeadBG = styled.header`
  background: #2d3436;
  height: 100vh;

  svg {
    margin: 1rem auto;
  }
`
