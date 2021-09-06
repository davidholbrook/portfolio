import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const HomepageWork = () => {
  const data = useStaticQuery(graphql`
    query BigQuery {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              path
              title
              template
              color
              frontImage {
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
      }
    }
  `)
  return (
    <>
      <h2 className="text-xl container mx-auto mt-5 uppercase border-b-2 border-black standardfont font-normal">
        My Work
      </h2>
      <div className="container mx-auto m-10 grid grid-cols-2 gap-8 items-center ">
        {data.allMarkdownRemark.edges.map(
          ({ node }) =>
            node.frontmatter.template === "project" && (
              <div
                className="border-8 border-gray-400 text-center"
                style={{ borderColor: `${node.frontmatter.color}` }}
              >
                <Link to={node.frontmatter.path}>
                  <GatsbyImage
                    image={
                      node.frontmatter.frontImage.childImageSharp
                        .gatsbyImageData
                    }
                  />
                  <h2 className="self-end">{node.frontmatter.title}</h2>
                </Link>
              </div>
            )
        )}
      </div>
    </>
  )
}
export default HomepageWork
