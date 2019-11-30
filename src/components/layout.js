import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    color: #333333;
    font-size: 18px;
    line-height: 1.7rem;
  }

  a{
    color: #E84118;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent>
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
    margin: 2rem 20vw 0;
    width: 60vw;
  }
`

const Footer = styled.footer`
  font-family: "Work Sans", sans-serif;
  line-height: 1.8rem;

  margin: 1rem 0 0 5rem;

  a {
    color: #e84118;
  }
`
