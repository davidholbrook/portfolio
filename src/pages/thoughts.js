import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Seo from "../layout/seo"

import Navagation from "../components/navagation"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___sortdate], order: DESC }
      ) {
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
      <Seo title="Blog" />
      <div className="bg-black">
        <div className="container mx-auto">
          <Navagation />
        </div>
      </div>
      <div className="container mx-auto p-5 lg:p-0">
        <h2 className="text-5xl mt-10">Blog</h2>
        <p className="text-gray-600 dark:text-gray-300 text-xl border-b-2 border-black pb-5">
          A collection of thoughts and recollections on web development,
          business, nerdium, and more.
        </p>
        <div className="mt-10 ">
          {data.allMarkdownRemark.edges.map(
            ({ node }) =>
              node.frontmatter.template === "blog" && (
                <div className="mb-2">
                  <p className="pt-6 text-xs uppercase">
                    {node.frontmatter.date}
                  </p>
                  <Link to={node.frontmatter.path}>
                    <h2
                      className="text-3xl"
                      style={{ color: node.frontmatter.primary }}
                    >
                      {node.frontmatter.title}
                    </h2>
                  </Link>
                  <p className="leading-loose text-gray-700 dark:text-gray-300">
                    {node.excerpt}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
    </>
  )
}
export default Blog
