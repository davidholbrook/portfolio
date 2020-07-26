import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import useMeasure from "../utils/useMeasure"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import Header from "../components/header"
import Navagation from "../components/navagation"

import Avatar from "../images/avatar.jpg"

const About = () => {
  const [toggle, setToggle] = useState(true)
  const [bind, { height, top }] = useMeasure()

  const readMore = useSpring({
    overflow: "hidden",
    height: toggle ? 0 : height,
    opacity: toggle ? 0 : 1,
    transform: toggle ? "translateY(0)" : "translateY(-2rem)",
    config: { duration: 320 },
  })

  const fadeTop = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(-2rem)", opacity: 0 },
    config: {
      speed: "slow",
    },
  })

  const fadeLeft = useSpring({
    to: { transform: "scale(1)", opacity: 1 },
    from: { transform: "scale(0.5)", opacity: 0 },
    config: {
      speed: "slow",
      delay: "320ms",
    },
  })

  return (
    <Layout>
      <div className="about__wrapper">
        <SEO title="About David" />
        <Header />
        <Navagation />
        <div className="boxed">
          <animated.div style={fadeTop}>
            <AboutBox>
              <Img src={Avatar} alt="My Face" />
              <span>
                <h2>About David Holbrook</h2>
                <p>
                  Hey, I'm David, an e-commerce developer for{" "}
                  <a href="https://wihatools.com">Wiha Tools USA</a>. I have
                  been working on websites for the last 15 years and have a
                  degree in Entrepreneurship Studies. I love to blog about
                  development, the state of e-commerce, video games, comic
                  books, and sometimes Star Wars.
                </p>
                <animated.div style={readMore}>
                  <div {...bind} style={{ margin: "0.3rem 0 0 0" }}>
                    <p style={{ margin: "0" }}>
                      As a developer, I have worked with many different kinds of
                      development languages and frameworks. Starting with
                      WordPress and ending with Gatsby I have worked with PHP,
                      Javascript (including the new ECMAScript features), node,
                      and even dabbled some in the future of development, such
                      as GraphQL and the new headless commerce concepts.
                    </p>
                    <p>
                      I have more than that to share in my blog (called
                      thoughts, as they are my thoughts about the current topics
                      on the web) and you can see how I implement these concepts
                      both on my Github and my side projects, which are in-depth
                      looks into side-projects I am currently working on.
                    </p>
                    <br />
                  </div>
                </animated.div>
                <Button onClick={() => setToggle(!toggle)}>
                  {toggle ? "Learn More" : "Less Information"}
                </Button>
              </span>
            </AboutBox>
          </animated.div>
          <Title>Some Fun Facts about Me</Title>
          <animated.div style={fadeLeft}>
            <BoxWrapper>
              <DetailBox>
                <h4>Favorite Devtools</h4>
                <ul>
                  <li>Node</li>
                  <li>React</li>
                  <li>Magento 2</li>
                  <li>Session Box</li>
                  <li>VS Code</li>
                </ul>
              </DetailBox>
              <DetailBox>
                <h4>Favorite Fandoms</h4>
                <ul>
                  <li>Star Wars</li>
                  <li>Nintendo</li>
                  <li>Apple</li>
                  <li>Halo</li>
                  <li>Assassin’s Creed</li>
                </ul>
              </DetailBox>
              <DetailBox>
                <h4>Statistics</h4>
                <ul>
                  <li>
                    <strong>Years of Coding:</strong> 10
                  </li>
                  <li>
                    <strong>Number of Programing Languages Used:</strong> 5
                  </li>
                  <li>
                    <strong>Number of Coding Lessons:</strong> Way to many
                  </li>
                </ul>
              </DetailBox>
            </BoxWrapper>
          </animated.div>
        </div>
      </div>
    </Layout>
  )
}
export default About

const AboutBox = styled.div`
  background: var(--primary);
  color: var(--white);

  padding: 1rem;
  border-radius: 0.5rem;

  display: grid;
  grid-template-columns: 13rem 1fr;
  column-gap: 1rem;

  a {
    color: var(--white);
  }
`

const Button = styled.button`
  background: var(--white);
  color: var(--black);

  text-transform: uppercase;
  letter-spacing: 1px;

  padding: 0.5rem 0.5rem 0.3rem 0.5rem;
  border: none;

  border-radius: 0.2rem;
`

const Img = styled.img`
  border-radius: 0.5rem;
`

const Title = styled.h3`
  text-align: center;
`
const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
`

const DetailBox = styled.div`
  border: 1px var(--secondary) solid;

  display: grid;
  justify-content: center;
  align-content: start;

  h4 {
    margin-bottom: 0;
    text-align: center;
  }
  ul {
    list-style: none;
    text-align: center;

    padding-left: 0;
  }
`
