import React from 'react';
import App from '../components/App/App';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../styles/useDarkmode';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import Sun from '../images/sunFriend.svg';
import Moon from '../images/moonFriend.svg';

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

  if (!componentMounted) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <App>
          <Toggler />
        </App>
      </>
    </ThemeProvider>
  );
}
