import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../layout/seo"

import Navagation from "../components/navagation"

const Thoughts = () => {
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
              primary
              date
            }
            excerpt(pruneLength: 450)
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo title="My Thoughts" />
      <div className="container mx-auto">
        <Navagation />
        <h2 className="text-xl mt-5 uppercase border-b-2 border-black dark:border-white standardfont font-normal">
          My Thoughts
        </h2>
        <div className="mt-10 ">
          {data.allMarkdownRemark.edges.map(
            ({ node }) =>
              node.frontmatter.template === "blog" && (
                <div className="mb-2">
                  <p className="pt-6 text-xs uppercase">
                    {node.frontmatter.date}
                  </p>
                  <Link to={node.frontmatter.path}>
                    <h2 className="text-5xl">{node.frontmatter.title}</h2>
                  </Link>
                  <p>{node.excerpt}</p>
                </div>
              )
          )}
        </div>
      </div>
    </>
  )
}
export default Thoughts
