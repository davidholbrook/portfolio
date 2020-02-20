import React from "react"
// eslint-disable-next-line
import { Link } from "gatsby"
import styled from "styled-components"

import Icon from "../images/icons"

const Header = () => (
  <HeadBG>
    {window.matchMedia("(prefers-color-scheme: dark)").matches ? (
      <Icon name="logo--dark" />
    ) : (
      <Icon name="logo--light" />
    )}
  </HeadBG>
)

export default Header

const HeadBG = styled.header`
  background: #b2bec3;
  border-right: 3px solid rgba(45, 52, 54, 0.5);
  height: 100vh;

  padding: 1.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (prefers-color-scheme: dark) {
    background: #666;
  }

  @media (max-width: 55rem) {
    height: inherit;
    width: 100vw;
    margin-bottom: 1rem;
  }

  @media (min-width: 55rem) {
    position: sticky;
    top: 0;
  }
`
