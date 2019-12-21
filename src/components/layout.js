import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    color: #333333;
    font-size: 18px;
    line-height: 1.7rem;

    @media (prefers-color-scheme: dark) {
      background: #333333;
      color: #ffffff;
    }
  }

  a{
    color: #E84118;

    @media (prefers-color-scheme: dark) {
      color: #d96649;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MainContent>
        <Header />
        {children}
        <Footer>
          <p>
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              Attribution-ShareAlike 4.0 International
            </a>{" "}
            license | Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </Footer>
      </MainContent>
    </>
  )
}

export default Layout

const MainContent = styled.main`
  width: 90vw;
  margin: 0 auto;

  @media (min-width: 900px) {
    margin: 2rem 15vw;
    width: 60vw;
  }
`

const Footer = styled.footer`
  font-family: "Work Sans", sans-serif;
  line-height: 1.8rem;

  text-align: center;

  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: #eeeeee;
  }
`
