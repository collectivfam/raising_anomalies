const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Auto generate pages
  // Pages built using templates/page-template.js
  const pageData = [
    {
      name: "author",
      title:
        "Coming soon",
      content:
        "",
    },
    {
      name: "contact",
      title:
        "Coming soon",
      content:
        "",
    },
    {
      name: "updates",
      title:
        "updates",
      content:
        "",
    },    
    {
      name: "privacy",
      title:
        "Coming soon",
      content:
        "",
    },
    {
      name: "cookies",
      title:
        "Coming soon",
      content:
        "",
    },
    {
      name: "404",
      title:
        "This is the error page. You can change this title in gatsby-node.js",
    },
  ]
  pageData.forEach(page => {
    let template;
    
    switch(page.name) {
      case "author":
        template = "author.js"
        break;
      case "blog":
        template = "blog-list-template.js"
        break;
      case "updates":
          template = "updates.js"
          break;        
        case "contact":
          template = "contact.js"
          break;        
      default:
        template = "page-template.js"
    }
    
    createPage({
      path: `/${page.name}`,
      component: require.resolve(`./src/templates/${template}`),
      context: { page },
    })
  })

  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
    })
  })

  // Create blog list pages
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 1
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
