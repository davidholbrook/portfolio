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
    text-transform: uppercase;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Grid>
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
      </Grid>
    </>
  )
}

export default Layout

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr;
`

const MainContent = styled.main`
  width: 50rem;
  margin-left: 1rem;
`

const Footer = styled.footer`
  font-family: "Work Sans", sans-serif;
  line-height: 1.8rem;

  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: #eeeeee;
  }
`
