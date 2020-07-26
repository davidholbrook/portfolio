import React from "react"
import { createGlobalStyle } from "styled-components"

import "./normalize.css"
import "./style.css"

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        {children}
        <footer>
          <p>
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              className="footer__a"
            >
              Attribution-ShareAlike 4.0 International
            </a>{" "}
            license | Built with
            {` `}
            <a href="https://www.gatsbyjs.org" className="footer__a">
              Gatsby
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Layout
