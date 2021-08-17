import React from "react"
import "./styles.css"
export default function Layout({ children }) {
  return (
    <>
      {children}
      <footer className="text-center bg-black text-white text-xl p-5">
        Protected under a{" "}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          className="text-gray-500 underline"
          target="_blank"
        >
          Attribution-ShareAlike 4.0 International
        </a>{" "}
        license | Built with{" "}
        <a
          href="https://www.gatsbyjs.org"
          className="text-gray-500 underline"
          target="_blank"
        >
          Gatsby
        </a>
      </footer>
    </>
  )
}
