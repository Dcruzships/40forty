import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App, Topics } from './Components';
import Countdown from 'react-countdown';
import $ from "jquery";

const mainTopics = [
  "Race",
  "Sexuality",
  "School",
  "Parents",
  "Medication",
  "Drugs / Alcohol",
  "Art",
  "Love",
  "Violence",
  "Self Worth",
  "Sex",
  "Friendship",
  "Purpose",
  "Wants / Needs",
  "Physicality",
  "Judgement",
  "Sense of Self",
  "Adulthood",
  "World",
  "Dreams",
  "Meditation"
];

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
      <Countdown date={'June 20, 2020 00:00:00'} />
      <Topics topics={mainTopics} />
    </React.StrictMode>,
    document.querySelector('#page1')
  );
};

$(document).ready(function()
{
  init();
  makePage1();
});
