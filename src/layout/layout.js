import React from "react"
import { createGlobalStyle } from "styled-components"

import "./normalize.css"

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  line-height: 1.5rem;
}
.boxed{
  max-width: 70%;
  margin: 0 auto;
}
footer{
  text-align: center;
  a{
    color: #000000;
  }
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
