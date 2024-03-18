import React from "react"
export default function Layout({ children }) {
  return (
    <>
      {children}
      <footer className="text-center bg-pureblack text-purewhite text-xl p-5">
        Protected under a{" "}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Attribution-ShareAlike 4.0 International
        </a>{" "}
        license | Built with{" "}
        <a
          href="https://www.gatsbyjs.org"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </>
  )
}
