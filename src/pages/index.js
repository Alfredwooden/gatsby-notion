import "../index.scss"
import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  const {
    data: { allTable },
  } = props

  console.log(props.data.allTable.nodes)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="content" id="main">
        {allTable.nodes.map(node => (
          <h1 key={node.slug}>{node.component_name}</h1>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
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
`
