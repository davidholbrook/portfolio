import React from "react"
import styled from "styled-components"

// temp image links
import CGOS from "../images/projects/CGOS.svg"
import unplan from "../images/projects/unplan.svg"

const subprojects = () => (
  // eventually this will be a loop
  <Wrapper>
    <Project>
      <SpacerBox>
        <img src={CGOS} alt="CGOS Logo" />
      </SpacerBox>
      <Header>Christian Gaming Outreach Society</Header>
    </Project>
  </Wrapper>
)

export default subprojects

const Wrapper = styled.div`
  /* I don't know if I neeed this yet. */
`

const Project = styled.div`
  border: 6px solid #e84118;
`

const Header = styled.h2`
  color: #e84118;
`

const SpacerBox = styled.div`
  padding: 1rem;
  border-right: 6px solid #e84118;
`
