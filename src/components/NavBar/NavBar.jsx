import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.isOpen = false;
    this.menu = React.createRef();

    this.headers = [
      {
        name: 'Home',
        url: '#home',
      },
      {
        name: 'About Me',
        url: '#about-me',
      },
      {
        name: 'Work',
        url: '#work',
      },
      {
        name: 'Projects',
        url: '#projects',
      },
      {
        name: 'Blog',
        url: '/blog',
      },
    ];

    this.socialIcons = [
      {
        name: 'Resume',
      },
      {
        name: 'Email',
        url: 'mailto:isabella.enriquez@queensu.ca',
      },
      {
        name: 'Linkedin',
        url: 'https://linkedin.com/in/isabellaenriquez',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/isabellaenriquez',
      },
    ];
  }

  generateHeaders() {
    return this.headers.map((header) => {
      return (
        <a
          key={header.name + '-header'}
          className='nav-header'
          href={header.url}
        >
          <span>{header.name}</span>
        </a>
      );
    });
  }

  generateSocialIcons(iconData) {
    return this.socialIcons.map((icon) => {
      return (
        <a
          key={icon.name + '-icon'}
          className='nav-icon'
          href={icon.url}
          aria-label={`Isabella Enriquez's ${icon.name}`}
          title={icon.name}
        >
          <div
            style={{
              maskImage: 'url(' + iconData[icon.name].publicURL + ')',
              WebkitMaskImage:
                'url(' + iconData[icon.name].publicURL + '#' + icon.name + ')',
              width: 'auto',
              height: '100%',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          ></div>
        </a>
      );
    });
  }

  handleBurgerClick() {
    const menu = this.menu.current;

    menu.classList.toggle('is-open');
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query NavBarQuery {
            GitHub: file(base: { eq: "GitHub.svg" }) {
              publicURL
            }
            Resume: file(base: { eq: "Resume.svg" }) {
              publicURL
            }
            Linkedin: file(base: { eq: "Linkedin.svg" }) {
              publicURL
            }
            Email: file(base: { eq: "Email.svg" }) {
              publicURL
            }
          }
        `}
        render={(data) => (
          <nav className='nav-bar block' ref={this.menu} aria-label='menu'>
            <button
              id='burger'
              onClick={() => this.handleBurgerClick()}
              aria-label='open/close menu'
            >
              🍔
            </button>
            <span id='headers'>
              <hr />
              {this.generateHeaders()}
            </span>
            <span className='social-icons'>
              <label className='toggle'>
                {this.props.children}
                <span className='toggle-circle'></span>
              </label>
              {this.generateSocialIcons(data)}
            </span>
          </nav>
        )}
      />
    );
  }
}
