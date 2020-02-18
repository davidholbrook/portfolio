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

  padding: 1.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 55rem) {
    height: inherit;
    width: 100vw;
    margin-bottom: 1rem;
  }
`
