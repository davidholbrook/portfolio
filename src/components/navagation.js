import React from "react"
import Logo from "../images/logo_new_white.svg"
import { Link } from "gatsby"

export const navagation = () => {
  return (
    <div className="flex flex-col md:px-10 py-8 md:flex-row md:justify-between align-center">
      <Link to="/" className="align-center">
        <img src={Logo} alt="" width="100px" className="mx-auto mb-5" />
      </Link>
      <nav>
        <ul className="flex justify-center md:justify-right">
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
