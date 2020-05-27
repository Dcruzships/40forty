import React from 'react';
import MusicPlayer from './MusicPlayer';
import Panel from './Panel';

function App() {
  return (
    <>
      <header></header>
      <div id="app">
        <div id="page1" className="fullPage"></div>
        <div id="page2" className="fullPage"></div>
      </div>
      <footer></footer>
    </>
  )
}

function Page1() {
  return (
    <>
      <Panel />
    </>
  );
}

function Page2()
{
  return (
    <>
      <div>this is page 2 lol</div>
    </>
  );
}

function Footer()
{
  return (
    <>
      <MusicPlayer />
    </>
  );
}

export { App, Page1, Page2, Footer };
