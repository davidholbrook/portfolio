import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from '../layout/seo'
import Layout from '../layout/layout'

import Navagation from '../components/navagation'

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { order: ASC } }) {
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
      <Seo title="My Portfolio" />
      <div className="bg-black">
        <div className="container mx-auto">
          <Navagation />
        </div>
      </div>
      <div className="container mx-auto p-5 lg:p-0">
        <h2 className="text-5xl mt-10">My Portfolio</h2>
        <p className="text-bodytext text-xl border-b-2 border-black pb-5">
          Here is a list of companies and projects that I have worked on in the
          past
        </p>
        <div className="mt-5 md:grid grid-cols-3 gap-5 mb-8">
          {data.allMarkdownRemark.edges.map(
            ({ node }) =>
              node.frontmatter.template === 'project' && (
                <Link to={node.frontmatter.path}>
                  <div className="mb-5 md:flex flex-col justify-center">
                    <GatsbyImage
                      image={
                        node.frontmatter.frontImage.childImageSharp
                          .gatsbyImageData
                      }
                      className="border border-grey-900 mx-auto"
                    />
                    <div className="text-center">
                      <h2 className="text-3xl leading-tight mb-1 mt-10">
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
