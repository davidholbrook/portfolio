import React from "react"
import styled from "styled-components"

import Background from "../images/background.png"
import Logo from "../images/logo.svg"

const Header = props => {
  if (props.homepage === true) {
    return (
      <div>
        <Intro>
          <h1>David Holbrook</h1>
          <h2>Generating Websites. Star Wars Trivia, and Comic Book Love.</h2>
        </Intro>
      </div>
    )
  } else {
    return (
      <Default>
        <img src={Logo} height="50" alt="website logo" />
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

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;

    text-transform: uppercase;

    font-size: 4rem;
  }

  h2{
    font-weight: 200px;
  }
`

// Default styles
const Default = styled.div`
  background: #000;
  padding: 1rem 1rem 5rem 1rem;

  display: flex;
  justify-content: center;
`
