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
      <h2 className="text-3xl lg:text-xl container mx-auto mt-5 uppercase text-center lg:text-left lg:border-b-2 lg:border-black standardfont lg:font-normal">
        My Work
      </h2>
      <div className="container mx-auto m-10 p-5 lg:p-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ">
        {data.allMarkdownRemark.edges.map(
          ({ node }) =>
            node.frontmatter.template === "project" && (
              <div className="mb-20 lg:mb-0 md:grid md:grid-cols-2 md:gap-8">
                <Link to={node.frontmatter.path}>
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
