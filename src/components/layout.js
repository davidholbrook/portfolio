import React from "react"
import { createGlobalStyle } from "styled-components"

import "./normalize.css"

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: content-box;
}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <div>
          {children}
          <footer>
            <p>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                Attribution-ShareAlike 4.0 International
              </a>{" "}
              license | Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
