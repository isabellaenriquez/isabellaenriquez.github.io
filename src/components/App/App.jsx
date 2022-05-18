import React from 'react';
import NavBar from '../NavBar/NavBar';
import ExpBlock from '../ExpBlock/ExpBlock';
import Socials from '../Socials/Socials';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import Blob from '../../images/blob.svg';

const workData = require('../../data/work.json');
const projectsData = require('../../data/projects.json');
export default class App extends React.Component {
  getWorkBlocks() {
    return workData.map((node) => {
      return (
        <ExpBlock
          key={node.company}
          title={node.company}
          timespan={node.timespan}
          summary={node.summary}
          stack={node.stack}
          links={node.links}
          imgName={node.imgName}
        />
      );
    });
  }

  getProjectBlocks() {
    return projectsData.map((node) => {
      return (
        <ExpBlock
          key={node.title}
          title={node.title}
          timespan={node.timespan}
          summary={node.summary}
          stack={node.stack}
          links={node.links}
          imgName={node.imgName}
        />
      );
    });
  }

  componentDidMount() {
    const blobSections = [
      {
        section: document.getElementById('about-me'),
        show: false,
        msg: 'Isabella is hoping to start a blog soon, so stay tuned!',
      },
    ];
    window.addEventListener(
      'scroll',
      () => {
        if (this.blob && this.blobMsg) {
          let showBlob = false;
          blobSections.forEach((sec) => {
            sec.show = this.showSectionBlob(sec.section);
            if (sec.show) {
              if (!showBlob) showBlob = true;
              if (this.blobMsg.innerHTML !== sec.msg)
                this.blobMsg.innerHTML = sec.msg;
            }
          });
          if (showBlob && !this.blob.classList.contains('visible-blob')) {
            this.blob.classList.add('visible-blob');
          } else if (
            !showBlob &&
            this.blob.classList.contains('visible-blob')
          ) {
            this.blob.classList.remove('visible-blob');
          }
        }
      },
      true
    );
  }
  showSectionBlob(section) {
    const top = section.getBoundingClientRect().top;
    const height = section.clientHeight;
    return top >= -1 * (height / 2) && top <= 0;
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query AppQuery {
            lightModeMe: file(base: { eq: "lightModeMe.jpeg" }) {
              publicURL
            }
            darkModeMe: file(base: { eq: "darkModeMe.jpeg" }) {
              publicURL
            }
            blob: file(base: { eq: "blob.svg" }) {
              publicURL
            }
          }
        `}
        render={(data) => (
          <>
            <main>
              <NavBar>{this.props.children}</NavBar>
              <section aria-label='Home' id='home'>
                <header>
                  <h1>&#128075; Hi, I'm Isabella!</h1>
                  <p>
                    &#10024; I like coding pretty, functional things that
                    everyone can enjoy.
                  </p>
                </header>
                <img
                  src={
                    this.props.theme === 'dark'
                      ? data.darkModeMe.publicURL
                      : data.lightModeMe.publicURL
                  }
                  alt='Isabella Enriquez'
                  id='profile-pic'
                />
              </section>
              <section id='about-me' aria-label='About Me'>
                <header>
                  <h1>About Me</h1>
                </header>
                <div id='summary'>
                  <p>A quick summary:</p>
                  <p>&#128105; she/her</p>
                  <p>
                    &#128187; Started coding in the 10th grade by accidentally
                    taking a "Computer Studies" course
                  </p>
                  <p>
                    &#128218; Rising senior at Queen's University working
                    towards a Bachelor of Computing with a specialization in
                    Software Design
                  </p>
                  <p>
                    &#128084; Professional interests: Full Stack Web
                    Development, Web Accessibility, Tech for Social Impact
                  </p>
                  <p>
                    &#129412; (un)professional interests: Cultural Geography,
                    History, Mythology,{' '}
                    <a href='https://goodreads.com/isabellaenriquez'>Reading</a>
                    , Travel, Video Games, Writing
                  </p>
                  {/* <p>Some fun facts:</p>
                  <ul id='fun-facts'>
                    <li>
                      For my Food History class final, I wrote and designed a{' '}
                      <a href='https://issuu.com/isabella4tech2020pls/docs/s._oleracea_magazine_for_issuu_'>
                        magazine all about select periods in the history of
                        spinach
                      </a>
                      .
                    </li>
                  </ul> */}
                  <p>
                    &#9749; &#10024; Reach me at my{' '}
                    <a href='mailto:isabella.enriquez@queensu.ca'>email</a> or{' '}
                    <a href='https://linkedin.com/in/isabellaenriquez'>
                      LinkedIn
                    </a>{' '}
                    to chat about opportunities (resume available upon request),
                    any one of my interests, or whatever :))
                  </p>
                </div>
              </section>
              <section
                id='work'
                aria-label='Work'
                ref={(section) => (this.workSection = section)}
              >
                <header>
                  <h1>Work</h1>
                </header>
                <p>&#128640; My professional adventures thus far.</p>
                <div className='block-grid'>{this.getWorkBlocks()}</div>
              </section>
              <section id='projects' aria-label='Projects'>
                <header>
                  <h1>Projects</h1>
                </header>
                <p>
                  &#128296; Innovating with code and design. Below are select
                  projects, check out more on my{' '}
                  <a href='https://github.com/isabellaenriquez'>GitHub</a>!
                </p>
                <div className='block-grid'>{this.getProjectBlocks()}</div>
              </section>
              <div
                id='popup-blob'
                className='blob-friend'
                ref={(blob) => (this.blob = blob)}
              >
                <Blob />
                <span
                  className='blob-message'
                  ref={(span) => (this.blobMsg = span)}
                />
              </div>
            </main>
            <footer id='footer'>
              <h2>Aw, leaving already? Let's stay connected!</h2>
              <Socials />
              <div id='footer-blob' className='blob-friend'>
                <Blob />
                <span className='blob-message'>I'll miss you! &#10084;</span>
              </div>
            </footer>
          </>
        )}
      />
    );
  }
}
