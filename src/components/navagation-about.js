import React, { useEffect, useState } from "react"
import LogoWhite from "../images/logo_new_white_square.svg"
import { Link } from "gatsby"

export const Navagation = () => {
    const [theme, setTheme] = useState()
    const [themeToggle, setThemeToggle] = useState(true)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
      const html = document.querySelector('html');
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if(isDark) setThemeToggle(false)

      if(html.dataset.theme === "light") setTheme('light')
      else setTheme('dark')
    }, [theme])

  return (
    <>
    <div className="p-10">
      <Link to="/" className="align-center">
        <img src={LogoWhite} alt="" width="80px" className="mx-auto" />
      </Link>
      <h2 className="text-5xl my-5 text-center text-white">About David Holbrook</h2>
      <em className="text-white text-center block fancyfont">Trying to simplify website development</em>
    </div>
    </>
  )
}



export default Navagation
