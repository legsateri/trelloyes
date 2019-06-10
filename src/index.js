import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Store from './STORE';

ReactDOM.render(
  <App store={Store} />,
  document.getElementById('root'),
);