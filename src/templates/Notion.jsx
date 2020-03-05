import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Notion = ({ data: { notion } }) => {
  const content = notion.internal.content

  return (
    <Layout>
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </Layout>
  )
}

export default Notion

export const pageQuery = graphql`
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
