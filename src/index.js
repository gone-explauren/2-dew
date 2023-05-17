import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { MantineProvider } from '@mantine/core';
import SettingProvider from './Context/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
      <SettingProvider>
        <App />
      </SettingProvider>
    </MantineProvider>
  </React.StrictMode>
);
