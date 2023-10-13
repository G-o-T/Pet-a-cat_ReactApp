import React from 'react';
import ReactDOM from 'react-dom/client';
import '././assets/styles/index.scss';
import Router from './routes/RoutesWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>
);
