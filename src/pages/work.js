import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../layout/seo"
import Layout from "../layout/layout"

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
    <Layout>
      <Seo title="My Work" />
      <div className="bg-black">
        <div className="container mx-auto">
          <Navagation />
        </div>
      </div>
      <div className="container mx-auto p-5 lg:p-0">
        <h2 className="text-5xl mt-10">My Work</h2>
        <p className="text-gray-600 dark:text-gray-300 text-xl border-b-2 border-black pb-5">
          Below is a sample of work that I have done for my past full-time
          positions.
        </p>
        <div className="mt-5 ">
          {data.allMarkdownRemark.edges.map(
            ({ node }) =>
              node.frontmatter.template === "project" && (
                <div className="mb-2 md:grid md:grid-cols-12 md:gap-5 items-center">
                  <GatsbyImage
                    image={
                      node.frontmatter.frontImage.childImageSharp
                        .gatsbyImageData
                    }
                    className="col-span-1 md:mt-4"
                  />
                  <div className="col-span-10">
                    <Link to={node.frontmatter.path}>
                      <h2 className="text-3xl pt-6">
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
    </Layout>
  )
}
export default Work
