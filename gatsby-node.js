const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const dipage = path.resolve(`src/templates/dipage.js`)
  const projectTemplate = path.resolve(`src/templates/projects.js`)
  const result = await graphql(`
  {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
      edges {
        node {
          frontmatter {
            title
            path
            template
            color
          }
        }
      }
    }
  }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.template == "project") {
      createPage({
        path: `${node.frontmatter.path}`,
        component: projectTemplate,
        context: {
          patheq: node.frontmatter.path,
        },
      })
    } else {
      createPage({
        path: `${node.frontmatter.path}`,
        component: dipage,
        context: {
          patheq: node.frontmatter.path,
        },
      })
    }
  })
}
