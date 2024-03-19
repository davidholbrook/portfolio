import React, { useEffect } from "react"
import Logo from "../images/logo_new.svg"
import LogoWhite from "../images/logo_new_white.svg"
import { Link } from "gatsby"

export const Navagation = () => {
    // useEffect(() => {
    //   document.body.setAttribute('data-theme', 'neon')
    // }, [])
  return (
    <>
    <div className="flex flex-col py-8 md:flex-row md:justify-between align-center">
      <Link to="/" className="align-center">
        <img src={(document.body.hasAttribute('data-theme')) ? Logo : LogoWhite} alt="" width="100px" className="mx-auto mb-5" />
      </Link>
      <nav>
        <ul className="flex justify-center md:justify-right">
          <li className="ml-5">
            <Link to="/about" className="text-2xl text-purewhite uppercase">
              About
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/blog" className="text-2xl text-purewhite uppercase">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}
export default Navagation
