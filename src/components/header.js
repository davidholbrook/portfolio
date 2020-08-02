import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

import Background from "../images/background.png"
import Logo from "../images/logo.svg"

import Arrow from "../images/arrow.svg"

const Header = props => {
  if (props.homepage === true) {
    return (
      <div>
        <Intro>
          <h1 className="jumbo">David Holbrook</h1>
          <h2 className="h4">
            Generating Websites. Star Wars Trivia, and Comic Book Love.
          </h2>
          {props.scrollPosition < 80 ? (
            <Img src={Arrow} alt="down arrow" />
          ) : null}
        </Intro>
      </div>
    )
  } else {
    return (
      <Default>
        {props.landing != null ? (
          <Link to={props.landing}>
            <img src={Logo} height="50" alt="website logo" />
          </Link>
        ) : (
          <img src={Logo} height="50" alt="website logo" />
        )}
      </Default>
    )
  }
}

export default Header

// Homepage styles
const Intro = styled.div`
  color: #999;

  background: #333 url('${Background}') no-repeat;
  background-size: cover;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

// Default styles
const Default = styled.div`
  background: var(--primary);
  padding: 1rem 1rem 5rem 1rem;

  display: flex;
  justify-content: center;

  border-bottom: 5px var(--secondary) solid;
`

const Img = styled.img`
  position: absolute;
  bottom: 30px;
`
