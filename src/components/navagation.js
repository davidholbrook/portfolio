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

    const MobileMenu = () => (
      <OuterModal>
        <InnerModal>
          {themeToggle ? <button type="button" onClick={switchTheme} className="absolute"> <Lightdarktoggle icon={theme} /></button> : null}
          <Link to="/" className="flex justify-center"><img src={LogoWhite} alt="my logo" width="120px" /></Link>
          <button type="button" onClick={toggleMenuButton}><img src={CloseButton} className="absolute top-6 right-6" alt="close" width="35" /></button>
          <nav className="flex flex-col items-center mt-10">
            <ul className="">
              <li className="text-center">
                <Link to="/about" className="text-4xl text-white uppercase">
                  About
                </Link>
              </li>
              <li className="text-center mt-8">
                <Link to="/blog" className="text-4xl text-white uppercase">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </InnerModal>
      </OuterModal>
    )

  return (
    <>
    <div className="flex flex-col py-8 md:flex-row md:justify-between align-center">
      <Link to="/" className="align-center">
        <img src={LogoWhite} alt="" width="100px" className="mx-auto mb-5" />
      </Link>
      <button type="button" className="block md:hidden" onClick={toggleMenuButton}><img src={MenuButton} className="absolute top-8 right-8" width="35" alt="toggle mobile menu" /></button>
      <div className="hidden absolute md:static md:flex justify-center md:justify-right md:items-start gap-4">
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
        </ul>
      </nav>
      {themeToggle ? <button type="button" onClick={switchTheme}> <Lightdarktoggle icon={theme} /></button> : null}
      </div>
    </div>
    {mobileMenu ? <MobileMenu /> : null}
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
