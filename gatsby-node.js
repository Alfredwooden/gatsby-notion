// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const api = await graphql(`
    query {
      allTable {
        nodes {
          component_name
          created_time
          description
          files
          id
          last_edited_time
          ready_for_next_step
          slug
          url
          tag
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
  })

  // const blogPost = await graphql(`
  //   query {
  //     allTable {
  //       nodes {
  //         Name
  //         slug
  //       }
  //     }
  //   }
  // `).then(result => {
  //   if (result.errors) {
  //     Promise.reject(result.errors)
  //   }

  //   result.data.allPosts.nodes.forEach(({ slug, id, Name }) => {
  //     createPage({
  //       path: `blog/posts/${id}`,
  //       component: path.resolve(`./src/templates/blogPost.js`),
  //       context: {
  //         // Data passed to context is available
  //         // in page queries as GraphQL variables.
  //         slug: slug,
  //       },
  //     })
  //   })
  // })

  // const newsPost = await graphql(`
  //   query {
  //     allTable {
  //       nodes {
  //         Name
  //         id
  //         slug
  //       }
  //     }
  //   }
  // `).then(result => {
  //   if (result.errors) {
  //     Promise.reject(result.errors)
  //   }

  //   result.data.allPosts.nodes.forEach(({ slug, id, Name }) => {
  //     createPage({
  //       path: `subscribe/posts/${id}`,
  //       component: path.resolve(`./src/templates/blogPost.js`),
  //       context: {
  //         // Data passed to context is available
  //         // in page queries as GraphQL variables.
  //         slug: slug,
  //       },
  //     })
  //   })
  // })

  return Promise.all([api])
}
