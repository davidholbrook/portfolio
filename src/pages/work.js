import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../layout/seo"

import Navagation from "../components/navagation"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              path
              title
              template
              color
              sd
              frontImage {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    width: 400
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo title="My Work" />
      <div className="container mx-auto">
        <Navagation />
        <h2 className="text-xl mt-5 uppercase border-b-2 border-black dark:border-white standardfont font-normal">
          My Work
        </h2>
        <div className="m-10 ">
          {data.allMarkdownRemark.edges.map(
            ({ node }) =>
              node.frontmatter.template === "project" && (
                <div className="mb-2 grid grid-cols-12 gap-5 items-center">
                  <GatsbyImage
                    image={
                      node.frontmatter.frontImage.childImageSharp
                        .gatsbyImageData
                    }
                    className="col-span-1"
                  />
                  <div className="col-span-10">
                    <Link to={node.frontmatter.path}>
                      <h2 className="text-5xl pt-6">
                        {node.frontmatter.title}
                      </h2>
                    </Link>
                    <p>{node.frontmatter.sd}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  )
}
export default Work
