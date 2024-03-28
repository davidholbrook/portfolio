import React, { useEffect, useState } from "react"
import LogoWhite from "../images/logo_new_white.svg"
import Lightdarktoggle from "./lightdarktoggle"
import { Link } from "gatsby"
import styled from 'styled-components';

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

    function switchTheme() {
      const html = document.querySelector('html');
      if(theme === "light"){
        html.dataset.theme = `dark`;
        setTheme('dark')
      } else {
        html.dataset.theme = `light`;
        setTheme('light')
      }
    }

    const toggleMenuButton = (e) => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <>
    <div className="flex flex-col pt-10 pb-0 md:py-8 md:flex-row md:justify-between align-center">
      <Link to="/" className="align-center">
        <img src={LogoWhite} alt="" width="100px" className="mx-auto mb-5" />
      </Link>
      <div className="md:flex justify-center md:justify-right md:items-start gap-4">
      <nav>
        <ul className="flex justify-center md:justify-right">
          <li className="ml-5">
            <Link to="/about" className="text-2xl text-white uppercase">
              About
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/blog" className="text-2xl text-white uppercase">
              Blog
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/work" className="text-2xl text-white uppercase">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      {themeToggle ? <button type="button" onClick={switchTheme}> <Lightdarktoggle icon={theme} /> <span className="hidden">Toggle light/dark mode</span></button> : null}
      </div>
    </div>
    
    </>
  )
}

export default Navagation
