import React from "react"
import {graphql} from "gatsby"

export default function BlogPost({data}) {
    const postData = data.markdownRemark;
    return (
        <div>
            <h1>{postData.frontmatter.title}</h1>
            <small>{postData.frontmatter.date}</small>
            <div dangerouslySetInnerHTML={{ __html: postData.html }}/>
        </div>
    )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`