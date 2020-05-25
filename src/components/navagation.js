import React, { useState, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"

export const Navagation = () => {
  const [scrollPosition, setSrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setSrollPosition(position)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  let onum = `0.${Math.round(scrollPosition) * 1}`
  if (onum > 0.7) {
    onum = `1`
  }
  const props = useSpring({
    opacity: onum,
    config: { duration: 320 },
  })

  console.log(onum)

  return (
    <div>
      <animated.div style={props}>
        <Nav>
          <ul>
            <li>About</li>
            <li>Thoughts</li>
            <li>Projects</li>
          </ul>
        </Nav>
      </animated.div>
    </div>
  )
}

export default Navagation

const Nav = styled.nav`
  background: #ffffff;

  padding: 0.5rem;
  padding-top: 0;

  max-width: 80%;
  margin: -4rem auto 0 auto;

  border-top: 5px solid orange;

  transition: opacity 320ms ease-in-out;

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
