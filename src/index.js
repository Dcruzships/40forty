import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App, Page1, Page2, Footer } from './components/App.js';
// import MusicPlayer from './main';
import $ from "jquery";

const init = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.querySelector('#root')
  );
};

const makePage1 = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Page1 />
    </React.StrictMode>,
    document.querySelector('#page1')
  );
};

const makePage2 = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Page2 />
    </React.StrictMode>,
    document.querySelector('#page2')
  );
};

const makeNav = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>,
    document.querySelector('footer')
  );
};

$(document).ready(function()
{
  init();
  makeNav();
  makePage1();
  makePage2();
});
