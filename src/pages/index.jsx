import React from 'react';
import App from '../components/App/App';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../styles/useDarkmode';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import Sun from '../images/sunFriend.svg';
import Moon from '../images/moonFriend.svg';
import { Helmet } from 'react-helmet';

export default function Index() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
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
        <span className='ball' />
      </label>
    </div>
  );

  const title = 'Isabella Enriquez || Full Stack Dev and CS Student';
  const description =
    'I like making pretty, functional things everyone can enjoy.';

  if (!componentMounted) {
    return (
      <ThemeProvider theme={themeMode}>
        <main
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          Loading...
        </main>
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
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Helmet>
        <GlobalStyles />
        <App>
          <Toggler />
        </App>
      </>
    </ThemeProvider>
  );
}
