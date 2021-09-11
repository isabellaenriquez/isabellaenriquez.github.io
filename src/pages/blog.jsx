import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../styles/useDarkmode';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import { Helmet } from 'react-helmet';

export default function Blog() {
  const data = useStaticQuery(graphql`
    query BlogPageQuery {
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
  const [theme, toggleTheme, themeLoaded] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const title = 'Isabella Enriquez || Blog';
  const description = 'A tech & life blog written by Isabella Enriquez.';

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
    <ThemeProvider theme={themeMode}>
      <>
        <Helmet>
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://avatars.githubusercontent.com/u/45607721?v=4'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Helmet>
        <GlobalStyles />
        <main
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column',
          }}
        >
          <h1>Hello World!</h1>
          <p>This page is currently in construction. Stay tuned!</p>
          <a href='/'>Return to Home.</a>
        </main>
      </>
    </ThemeProvider>
  );
}
