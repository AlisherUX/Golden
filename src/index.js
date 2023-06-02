import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './utils/globalStyles';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);