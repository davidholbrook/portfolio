import React from "react"
import styled from "styled-components"

import Avatar from "../images/avatar.jpg"

const About = () => {
  return (
    <div className="boxed">
      <AboutBox>
        <Img src={Avatar} alt="My Face" />
        <span>
          <h2>About David Holbrook</h2>
          <p>
            Hey, I'm David, an e-commerce developer for Wiha Tools USA. I have
            been working on websites for the last 15 years and have a degree in
            Entrepreneurship Studies. I love to blog about development, the
            state of e-commerce, video games, comic books, and sometimes even
            Star Wars.
          </p>
        </span>
      </AboutBox>
      <Title>Some of my Favorite Things</Title>
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
          <h4>Most Experenced Devtools</h4>
          <ul>
            <li>Node</li>
            <li>React</li>
            <li>Magento 2</li>
            <li>Session Box</li>
            <li>VS Code</li>
          </ul>
        </DetailBox>
        <DetailBox>
          <h4>Favorite Fandom</h4>
          <ul>
            <li>Star Wars</li>
            <li>Nintendo</li>
            <li>Apple</li>
            <li>Halo</li>
            <li>Assassin’s Creed</li>
          </ul>
        </DetailBox>
      </BoxWrapper>
    </div>
  )
}
export default About

const AboutBox = styled.div`
  background: #edd0b7;
  padding: 1rem;
  border-radius: 0.5rem;

  display: grid;
  grid-template-columns: 13rem 1fr;
  column-gap: 1rem;
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
  border: 1px #c4c4c4 solid;

  display: grid;
  justify-content: center;

  h4 {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    text-align: center;

    padding-left: 0;
  }
`
