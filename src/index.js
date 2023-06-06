import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.scss';
import App from './App';

if (process.env.NODE_ENV === "development") {
  require('./mocks/browser')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);