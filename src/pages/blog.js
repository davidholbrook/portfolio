import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Seo from "../layout/seo"
import Layout from "../layout/layout"

import Navagation from "../components/navagation"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {frontmatter: {sortdate: DESC}}) {
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
    <Layout>
      <Seo title="Blog" />
      <div className="bg-bgblack">
        <div className="container mx-auto">
          <Navagation />
        </div>
      </div>
      <div className="container mx-auto p-5 lg:p-0">
        <h2 className="text-5xl mt-10 text-bgblack">Blog</h2>
        <p className="text-bodytext text-xl border-b-2 border-black pb-5">
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
                  <p className="leading-loose text-bodytext">
                    {node.excerpt}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
    </Layout>
  )
}
export default Blog
