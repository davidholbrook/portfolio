import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../layout/layout"
import Seo from "../layout/seo"
import styled, {createGlobalStyle} from "styled-components"
import { useSpring, animated } from "react-spring"

import Navagation from "../components/navagation"

const DiPage = ({ data }) => {
  const [theme, setTheme] = useState('light')

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    const elhtml = document.querySelector('html');
    const checkTheme = elhtml.dataset.theme === 'light'
    
    setTheme(checkTheme)

  }, [theme])

  const GlobalStyles = createGlobalStyle`
    :root[data-theme="light"] {
      --text-primary: ${frontmatter.primary};
      --text-secondary: ${frontmatter.secondary};
      --precode: #fdf6e3;
    }
    :root[data-theme="dark"] {
      --text-primary: "#ffffff;
      --text-secondary: "#ffffff;
      --precode: #222222;
    }
  `;


  const Post = styled.div`
  h2 {
    color: var(--text-secondary);
  }
  h3 {
    color: var(--text-primary);
  }
  a {
    color: var(--text-secondary);
    border-bottom: 1px solid var(--text-secondary);
  }
  :not(pre)>code[class*=language-], pre[class*=language-] {
       background-color: var(--precode);
  }
`
const ImgContainer = styled.div`
    position: absolute;
    top: 0;
    height: 600px;
    overflow: hidden;
    background: ${frontmatter.primary};
    opacity: 1 !important;
    z-index: -1;
    img {
      mix-blend-mode: hard-light;
      opacity: 0.2 !important;
    }
  `

  const Credit = styled.p`
    font-size: 0.8rem;
    color: var(--text-primary);
  `

  const Title = styled.h1`
    color: var(--text-primary);
  `

  const Date = styled.p`
    color: var(--text-primary);
  `

  const fadeUp = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(2rem)", opacity: 0 },
    config: {
      speed: "5sec",
      delay: "2sec",
    },
  })

  return (
    <>
      <Layout>
      <GlobalStyles />
        <Seo title={frontmatter.title} />
        <ImgContainer>
          <GatsbyImage
            image={frontmatter.coverImage.childImageSharp.gatsbyImageData}
          />
        </ImgContainer>

        {/* <Header landing="/Blog" /> */}
        <div className="container mx-auto">
          <Navagation />
        </div>
        <animated.div
          style={fadeUp}
          className="container mx-auto p-5 pt-1 bg-portbg lg:rounded-lg lg:mb-10 block"
        >
          <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-top">
            <Date className="text-sm">{frontmatter.date}</Date>
            <Title>{frontmatter.title}</Title>
          </div>
          <Post dangerouslySetInnerHTML={{ __html: html }} />
          {frontmatter.credit !== "" ? (
            frontmatter.creditURL !== "" ? (
              <Credit>
                <a
                  href={frontmatter.creditURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {frontmatter.credit}
                </a>
              </Credit>
            ) : (
              <Credit>{frontmatter.credit}</Credit>
            )
          ) : (
            ""
          )}
        </animated.div>
      </Layout>
    </>
  )
}


export default DiPage

export const pageQuery = graphql`
  query ($patheq: String!) {
    markdownRemark(frontmatter: { path: { eq: $patheq } }) {
      html
      frontmatter {
        title
        date
        path
        primary
        secondary
        credit
        creditURL
        coverImage {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`