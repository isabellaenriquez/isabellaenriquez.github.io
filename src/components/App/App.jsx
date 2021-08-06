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
            <section id='about-me' aria-label='About Me'>
              <header>
                <h1>About Me</h1>
              </header>
              <p>
                I started coding in the 10th grade. I meant to take a graphic
                design course but 15-year old Isabella did not actually read the
                description of the "Computer Studies" course. I think it worked
                out though.
              </p>
              <div class='block-grid'>
                <div class='block rounded-block'>
                  <h3>&#129302; Tech Stack</h3>
                  <div class='subsection'>
                    <span>Languages:</span>Python, JavaScript, TypeScript, HTML,
                    CSS, Sass, Java, C#, C, SQL
                  </div>
                  <div class='subsection'>
                    <span>Frameworks:</span>
                    Flask, Django, React, Svelte, Cypress, JUnit, Gatsby
                  </div>
                  <div class='subsection'>
                    <span>Other tools and skills:</span>
                    Git/GitHub, Unity, Linux, Figma, REST, CI/CD
                  </div>
                </div>
                <div class='block rounded-block'>
                  <h3>&#10084; Things I Enjoy</h3>
                  <div class='subsection'>
                    <span>Professional Interests:</span>
                    All Things Web (dev/design/a11y), Full Stack Development,
                    Tech for Social Impact
                  </div>
                  <div class='subsection'>
                    <span>Personal Interests:</span>
                    Cultural Geography, Fashion, History, Movies, Travel, Video
                    Games, World Building, Writing
                  </div>
                </div>
              </div>
              <hr />
              <p>
                Currently, I’m a junior at Queen’s University studying towards a
                Bachelor of Computing with a specialization in Software Design.
                Beyond my professional career, I’m involved in a few
                extra-curricular activities and I’ll sometimes work on coding
                projects in my free time. I’m also trying to maintain a blog!
                I’d love if you could check it out.
              </p>
              <br />
              <p>
                Feel free to reach out to me at{' '}
                <a href='mailto:isabella.enriquez@queensu.ca'>
                  isabella.enriquez@queensu.ca
                </a>
                ! I’d love to chat, whether it be about opportunities, any one
                of my interests, my writing, or even just how you’re doing. I’m
                here to listen.
              </p>
            </section>
          </>
        )}
      />
    );
  }
}
