import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const HomepageBlog = () => {
  const data = useStaticQuery(graphql`
    query ThoughtQuery {
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
              sortdate
              date
              primary
            }
            excerpt(pruneLength: 270)
          }
        }
      }
    }
  `)
  return (
    <>
      <h2 className="text-3xl lg:text-xl container mx-auto mt-5 uppercase text-center lg:text-left lg:border-b-2 lg:border-black standardfont lg:font-normal">
        My Blog
      </h2>
      <div className="container mx-auto m-10 mt-0 p-5 lg:p-0">
        {data.allMarkdownRemark.edges.map(
          ({ node }) =>
            node.frontmatter.template === "blog" && (
              <>
                <p className="pt-6 mb-0 text-xs uppercase">
                  {node.frontmatter.date}
                </p>
                <Link
                  to={node.frontmatter.path}
                  className="text-lg md:text-2xl my-0"
                  style={{ color: node.frontmatter.primary }}
                >
                  <h2>{node.frontmatter.title}</h2>
                </Link>
                <p className="text-xl leading-relaxed mt-0 text-gray-700 dark:text-gray-300">
                  {node.excerpt}
                </p>
              </>
            )
        )}
      </div>
    </>
  )
}
export default HomepageBlog
