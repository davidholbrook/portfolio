import React from "react"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
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

  @media (min-width: 1280px) {
    margin: 10vh 30vw;
    width: 65vw;
  }
`

const Footer = styled.footer`
  font-family: "Work Sans", sans-serif;
  line-height: 1.8rem;
  text-align: center;

  margin: 1rem 0 0 0;

  a {
    color: #e84118;
  }
`
