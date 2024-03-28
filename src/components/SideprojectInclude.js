import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


const SideprojectInclude = () => {
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
              tags
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
    <div className="container mx-auto p-5 lg:p-0">
        <h2 className="text-5xl mt-10">Side Projects</h2>
        <p className="text-bodytext text-xl border-b-2 border-black pb-5">
          Personal projects built to solve problems that I have encounted.
        </p>
        <div className="mt-5 md:grid grid-cols-3 gap-5 mb-8">
          {data.allMarkdownRemark.edges.map(
            ({ node }) =>
              node.frontmatter.template === 'sideproject' && (
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
                        <ul className="flex justify-center pt-2">
                            {node.frontmatter.tags.map(item => {
                            return <li className={`text-sm mr-2 border-2 border-gray-400 py-1 px-2 uppercase font-bold rounded-lg`}>{item}</li>
                            })}
                        </ul>
                    </div>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
  )
}

export default SideprojectInclude;