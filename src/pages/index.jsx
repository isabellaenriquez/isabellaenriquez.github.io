import React from 'react';
import App from '../components/App/App';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../styles/useDarkmode';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import Sun from '../images/sunFriend.svg';
import Moon from '../images/moonFriend.svg';
import { Helmet } from 'react-helmet';
import OgImage from '../../static/site-preview.jpg';
import * as Sentry from '@sentry/gatsby';

Sentry.init({
  dsn: 'https://594b1b365f452a9e0a502a72a2c211d1@o4505641601007616.ingest.sentry.io/4505641604349952',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', 'https:yourserver.io/api/'],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

export default function Index() {
  const [theme, toggleTheme] = useDarkMode();
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
        <span
          className='ball'
          aria-label='theme toggler'
          title='Toggle theme'
        />
      </label>
    </div>
  );

  const title = 'Isabella Enriquez';
  const description =
    'I like making pretty, functional things everyone can enjoy.';

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content={`https://isabellaenriquez.github.io${OgImage}`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script
          src='https://kit.fontawesome.com/740a5138ca.js'
          crossorigin='anonymous'
        ></script>
      </Helmet>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <App theme={theme}>
          <Toggler />
        </App>
      </ThemeProvider>
    </>
  );
}
