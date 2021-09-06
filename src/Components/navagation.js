import React from "react"
import Logo from "../images/logo_new_white.svg"
import { Link } from "gatsby"

export const navagation = () => {
  return (
    <div className="px-10 py-8 flex justify-between align-center">
      <Link to="/">
        <img src={Logo} alt="" width="100px" />
      </Link>
      <nav>
        <ul className="flex">
          <li className="ml-5">
            <Link to="/about" className="text-2xl text-white uppercase">
              About
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/work" className="text-2xl text-white uppercase">
              Work
            </Link>
          </li>
          <li className="ml-5">
            <Link to="/thoughts" className="text-2xl text-white uppercase">
              Thoughts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default navagation
