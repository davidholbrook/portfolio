import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const HomepageWork = () => {
  const data = useStaticQuery(graphql`
    query BigQuery {
        allMarkdownRemark(sort: {frontmatter: {order: ASC}}) {
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
                      gatsbyImageData(quality: 100, width: 320, placeholder: BLURRED)
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
      <h2 className="text-3xl lg:text-xl container mx-auto mt-5 uppercase text-center lg:text-left lg:border-b-2 lg:border-bodytext standardfont lg:font-normal">
        Portfolio
      </h2>
      <div className="container mx-auto m-10 p-5 lg:p-0 lg:grid lg:grid-cols-2 lg:gap-2">
        {data.allMarkdownRemark.edges.map(
          ({ node }) =>
            node.frontmatter.template === "project" && (
              <div
                className="mb-10 lg:mb-0 relative"
                style={{ background: node.frontmatter.color }}
                key={node.frontmatter.path}
              >
                  <GatsbyImage
                    image={
                      node.frontmatter.frontImage.childImageSharp
                        .gatsbyImageData
                    }
                    className="w-full h-full opacity-50"
                    alt={`screenshot of ${node.frontmatter.title}`}
                  />
                  <Link to={node.frontmatter.path} >
                <div
                  className="md:absolute md:top-5 md:left-4 md:w-11/12 md:mx-2 p-5 md:border-white md:border-2 text-white"
                  style={{ background: node.frontmatter.color }}
                >
                  <h3 className="text-3xl">{node.frontmatter.title}</h3>
                  <p className="my-0 leading-loose text-white">
                    {node.frontmatter.sd}
                  </p>
                </div>
                </Link>
              </div>
            )
        )}
      </div>
    </>
  )
}
export default HomepageWork
