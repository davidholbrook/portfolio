import React from "react"
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
              sd
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
              <div className="grid grid-cols-2 gap-8">
                <Link
                  to={node.frontmatter.path}
                  className="border-l-2 border-black pl-1"
                >
                  <GatsbyImage
                    image={
                      node.frontmatter.frontImage.childImageSharp
                        .gatsbyImageData
                    }
                  />
                </Link>
                <span>
                  <h2>{node.frontmatter.title}</h2>
                  <p className="my-0 leading-loose text-gray-700 dark:text-gray-300">
                    {node.frontmatter.sd}
                  </p>
                  <Link
                    to={node.frontmatter.path}
                    className="inline-block border-2 border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 p-2 mt-2 uppercase"
                  >
                    Read More
                  </Link>
                </span>
              </div>
            )
        )}
      </div>
    </>
  )
}
export default HomepageWork
