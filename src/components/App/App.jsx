import React from 'react';
import NavBar from '../NavBar/NavBar';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
export default class App extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query AppQuery {
            me: file(base: { eq: "profile-pic.jpeg" }) {
              publicURL
            }
          }
        `}
        render={(data) => (
          <>
            <NavBar>{this.props.children}</NavBar>
            <section aria-label='Home' id='home'>
              <header>
                <h1>&#128075; Hi, I'm Isabella!</h1>
                <p>
                  &#10024; I like coding pretty, functional things that everyone
                  can enjoy.
                </p>
                <p className='subtext'>
                  Feel free to ask me about my headline, I'd be more than happy
                  to explain!
                </p>
              </header>
              <img
                src={data.me.publicURL}
                alt='A picture of Isabella Enriquez'
                id='profile-pic'
              ></img>
            </section>
          </>
        )}
      />
    );
  }
}
