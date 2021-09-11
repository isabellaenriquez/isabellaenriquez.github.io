import React from 'react';
import App from '../components/App/App';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../styles/useDarkmode';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import Sun from '../images/sunFriend.svg';
import Moon from '../images/moonFriend.svg';
import { Helmet } from 'react-helmet';
import Loader from '../components/Loader/Loader';

export default function Index() {
  const [theme, toggleTheme, themeLoaded] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const Toggler = () => (
    <div className='toggler'>
      <input
        type='checkbox'
        name='theme'
        id='theme'
        onChange={toggleTheme}
        checked={theme === 'dark' ? true : false}
        aria-label='theme toggle'
      />
      <label htmlFor='theme'>
        <Moon />
        <Sun />
        <span className='ball' aria-label='theme toggler' />
      </label>
    </div>
  );

  const title = 'Isabella Enriquez || Full Stack Dev and CS Student';
  const description =
    'I like making pretty, functional things everyone can enjoy.';

  if (!themeLoaded) {
    return (
      <ThemeProvider theme={darkTheme}>
        <>
          <Helmet>
            <script
              src='https://kit.fontawesome.com/740a5138ca.js'
              crossorigin='anonymous'
            ></script>
          </Helmet>
          <GlobalStyles />
          <Loader />
        </>
      </ThemeProvider>
    );
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
          <script
            src='https://kit.fontawesome.com/740a5138ca.js'
            crossorigin='anonymous'
          ></script>
        </Helmet>
        <GlobalStyles />
        <App>
          <Toggler />
        </App>
      </>
    </ThemeProvider>
  );
}
