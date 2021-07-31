import React from 'react';
import App from '../components/App/App';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../styles/useDarkmode';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';

export default function Index() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const Toggler = () => (
    <input
      type='checkbox'
      name='theme'
      id='theme'
      onChange={toggleTheme}
      checked={theme === 'dark' ? true : false}
      aria-label='theme toggle'
    />
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
