/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Layout from '../layout/layout'
import Seo from '../layout/seo'

import Navagation from '../components/navagation'
import '../styles/typography.css'

const Project = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const GlobalStyle = createGlobalStyle`
  
	:root[data-theme="light"] {
	  --text-primary: ${frontmatter.color};
	  --specbg: ${frontmatter.color};
	  --figcap: #333333;
	}
	:root[data-theme="dark"] {
	  --text-primary: #ffffff;
	  --specbg: #333333;
	  --figcap: #eeeeee;
	}

  body {
	/* need to make important to for theme color to appear */
	background-color: var(--specbg) !important;
  }
  
.blogpost {
    h2,
    h3,
    h4,
    h5 {
        color: var(--text-primary);
    }

    h3 {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }

    h4 {
        font-size: 1.4rem;
        line-height: 1.7;
        font-weight: 500;
    }

    h5 {
        font-size: 1.3rem;
        line-height: 2.25rem;
        margin-top: 1rem;
    }

    a {
        color: var(--text-primary);
        border-color: var(--text-primary);
        font-weight: bold;
    }

    figcaption {
        color: var(--figcap);
        font-style: italic;
        font-weight: 300;
        font-size: 1.1rem;
    }
    .dlbtn{
        border: 4px solid var(--specbg) !important;
        color: var(--text-primary);
    }
}
`

  return (
    <>
      <GlobalStyle />
      <Seo title={frontmatter.title} />
      <Layout>
        <div className="container mx-auto">
          <Navagation />
          <div className="bg-portbg col-span-9 px-10 py-4 mb-10 lg:rounded-lg lg:shadow-lg blogpost">
            <div className="border border-gray-500 rounded-md mt-2 px-6 flex justify-between items-center">
              <div>
                <h2 className="standardfont mb-0">{frontmatter.title}</h2>
                <p className="mt-1">{frontmatter.sd}</p>
              </div>
              <div className="dlbtn block uppercase p-2 rounded-xl font-bold tracking-wide">
                github
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Project
export const pageQuery = graphql`
  query ($patheq: String!) {
    markdownRemark(frontmatter: { path: { eq: $patheq } }) {
      html
      frontmatter {
        title
        path
        color
        url
        sd
        tags
      }
    }
  }
`
