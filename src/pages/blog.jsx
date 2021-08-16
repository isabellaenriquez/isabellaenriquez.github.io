import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function Blog() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      blog: allMarkdownRemark {
        posts: nodes {
          frontmatter {
            date(fromNow: true)
            title
            author
          }
          excerpt
          id
        }
      }
    }
  `);

  const { posts } = data.blog;

  function getPosts() {
    return posts.map(function (post) {
      return (
        <article>
          <h2>{post.frontmatter.title}</h2>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      );
    });
  }

  return (
    <div>
      <h1>BLOGGGGG</h1>
      <div>{getPosts()}</div>
    </div>
  );
}
