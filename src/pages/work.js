import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../layout/seo"
import Layout from "../layout/layout"

import Navagation from "../components/navagation"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
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
                  gatsbyImageData(
                    quality: 100
                    width: 250
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
      <Seo title="My Portfolio" />
      <div className="bg-black">
        <div className="container mx-auto">
          <Navagation />
        </div>
      </div>
      <div className="container mx-auto p-5 lg:p-0">
        <h2 className="text-5xl mt-10 border-b-2 border-black pb-2">My Portfolio</h2>
        <div className="mt-5 mb-8">
          {data.allMarkdownRemark.edges.map(
            ({ node }) =>
              node.frontmatter.template === "project" && (
              <Link to={node.frontmatter.path}>
                  <div className="mb-5 md:flex">
                    <GatsbyImage
                      image={
                        node.frontmatter.frontImage.childImageSharp
                          .gatsbyImageData
                      }
                      className="border border-grey-900"
                    />
                    <div className="ml-5">
                        <h2 className="text-3xl leading-tight mb-1 mt-10" style={{ color: node.frontmatter.color }}>
                          {node.frontmatter.title}
                        </h2>
                      <p className="my-0">{node.frontmatter.sd}</p>
                    </div>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
    </Layout>
  )
}
export default Work
