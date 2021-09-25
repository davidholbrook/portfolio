import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const HomepageThoughts = () => {
  const data = useStaticQuery(graphql`
    query ThoughtQuery {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              path
              title
              template
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
      <h2 className="text-xl container mx-auto mt-5 uppercase border-b-2 border-black standardfont font-normal">
        My Thoughts
      </h2>
      <div className="container mx-auto m-10 ">
        {data.allMarkdownRemark.edges.map(
          ({ node }) =>
            node.frontmatter.template === "blog" && (
              <>
                <p className="pt-6 mb-0 text-xs uppercase">
                  {node.frontmatter.date}
                </p>
                <Link
                  to={node.frontmatter.path}
                  className="text-2xl mt-0"
                  style={{ color: node.frontmatter.primary }}
                >
                  <h2>{node.frontmatter.title}</h2>
                </Link>
                <p className="text-xl leading-relaxed">{node.excerpt}</p>
              </>
            )
        )}
      </div>
    </>
  )
}
export default HomepageThoughts
