import React from "react"
import Logo from "../images/logo_new_white.svg"

export const navagation = () => {
  return (
    <div className="px-10 py-8 flex justify-between align-center">
      <img src={Logo} alt="" width="100px" />
      <nav>
        <ul className="flex">
          <li className="ml-5">
            <a href="#" className="text-2xl text-white uppercase">
              About
            </a>
          </li>
          <li className="ml-5">
            <a href="#" className="text-2xl text-white uppercase">
              Work
            </a>
          </li>
          <li className="ml-5">
            <a href="#" className="text-2xl text-white uppercase">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default navagation
