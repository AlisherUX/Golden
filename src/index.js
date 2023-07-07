import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './utils/globalStyles';
import App from './App';
import CartState from 'reducer/CartState';
import LoadingSpinner from 'components/LoadingSpinner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartState>
      <LoadingSpinner/>
      <GlobalStyles />
      <App />
    </CartState>
  </React.StrictMode>
);