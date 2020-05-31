import React, { useState, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import { Link } from "gatsby"

export const Navagation = props => {
  let onum = `0.${Math.round(props.scrollPosition)}`
  console.log(onum)
  if (onum > 0.7) {
    onum = `1`
  }
  const intro = useSpring({
    opacity: onum,
    config: { duration: 320 },
  })

  if (props.homepage === true) {
    return (
      <animated.div style={intro}>
        <Nav>
          <ul>
            <li>About</li>
            <li>Thoughts</li>
            <li>Projects</li>
          </ul>
        </Nav>
      </animated.div>
    )
  } else {
    return (
      <Nav>
        <ul>
          <li>
            <Highlight href="#">About</Highlight>
          </li>
          <li>Thoughts</li>
          <li>Projects</li>
        </ul>
      </Nav>
    )
  }
}

export default Navagation

const Nav = styled.nav`
  background: #ffffff;

  padding: 0.5rem;
  padding-top: 0;

  max-width: 80%;
  margin: -4rem auto 0 auto;

  border-top: 5px solid orange;

  &:hover {
    opacity: 1;
  }

  ul {
    list-style: none;

    display: flex;
    justify-content: center;

    li {
      margin: 0 1rem;
      font-size: 1.2rem;
    }
  }
`
const Highlight = styled.a`
  color: orange;
  font-weight: bolder;
  text-decoration: none;
`
