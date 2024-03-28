import React, { useEffect, useState } from "react"
import LogoWhite from "../images/logo_new_white.svg"
import CloseButton from "../images/close.svg"
import MenuButton from "../images/menu.svg"
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

const OuterModal = styled.div`
  background: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: none;

  z-index: 3;
  `

const InnerModal = styled.div`
  background: rgba(0,0,0,0.8);
  padding: 2rem;
  border-radius: 1rem;

  min-width: 90vw;
  min-height: 90vh;

  position: relative;
  pointer-events: auto;

  z-index: 5;
`

export default Navagation
