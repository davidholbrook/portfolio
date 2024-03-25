import React, { useEffect } from 'react'

export default function Layout({ children }) {
  useEffect(() => {
    const html = document.querySelector('html')
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (!html.dataset.theme) html.dataset.theme = 'light'
    if (isDark) html.dataset.theme = 'dark'
  }, [])

  return (
    <>
      <div className="min-h-[96vh]">{children}</div>
      <footer className="text-center bg-bgblack text-white text-base p-5">
        Protected under a{' '}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Attribution-ShareAlike 4.0 International
        </a>{' '}
        license | Built with{' '}
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
