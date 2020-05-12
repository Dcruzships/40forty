import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Countdown from 'react-countdown';

ReactDOM.render(
  <React.StrictMode>
    <Countdown date={'June 20, 2020 00:00:00'} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
