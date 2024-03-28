const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const dipage = path.resolve(`src/templates/dipage.js`)
  const projectTemplate = path.resolve(`src/templates/projects.js`)
  const sideprojectTemplate = path.resolve(`src/templates/sideprojects.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
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
    // eslint-disable-next-line eqeqeq
    if (node.frontmatter.template == 'project') {
      createPage({
        path: `${node.frontmatter.path}`,
        component: projectTemplate,
        context: {
          patheq: node.frontmatter.path,
        },
      })
    }
    // eslint-disable-next-line eqeqeq
    else if (node.frontmatter.template == 'sideproject') {
      createPage({
        path: `${node.frontmatter.path}`,
        component: sideprojectTemplate,
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
