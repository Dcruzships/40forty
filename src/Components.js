import React from 'react';
import CoolPlayer from 'react-cool-music-player';
import 'react-cool-music-player/dist/index.css';

function App() {
  return (
    <div>
      <header className="App-header"></header>
      <div id="app">
        <div id="page1">
        </div>
        <div id="page2">
        </div>
      </div>
      <footer id="App-footer"></footer>
    </div>
  );
}

class Topics extends React.Component
{
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.count = 1;
  }

  handleClick()
  {
    let randNum = Math.round(Math.random() * this.props.topics.length);
    let topicsBox = document.querySelector("#theTopic");
    if(randNum === this.props.topics.length) randNum--;
    if(randNum === -1) {
      topicsBox.innerHTML = `<p>Done</p>`;
      return;
    }
    topicsBox.innerHTML = `<p>${this.count}. ${this.props.topics[randNum]}</p>`;
    this.props.topics.splice(randNum, 1);
    this.count++;
  }

  render()
  {
    return (
      <div id="topics" className="centeredItems">
        <button onClick={this.handleClick}>Get Random Topic</button>
        <span id="theTopic" className="centeredItems"><p>No topic</p></span>
      </div>
    );
  }
}

class MusicPlayer extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { data:
    [
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/idk-demo.mp3',
        artist: 'Captain Brando!',
        name: 'idk / Now! (demo)',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/sailboat.png',
        id: '66575568423123',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/him.mp3',
        artist: 'Captain Brando!',
        name: 'Him',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/him.jpg',
        id: '66575568425354321',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/goodyou.mp3',
        artist: 'Captain Brando!',
        name: 'good, and you?',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/sailboat.png',
        id: '66575568423274',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bargainbin.mp3',
        artist: 'Captain Brando!',
        name: 'Bargain Bin',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bargainbin.png',
        id: '66575568425349835',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bbetc.mp3',
        artist: 'Captain Brando!',
        name: 'Better Better, etc.',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bbetc.png',
        id: '66575568463795',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/paralyzed.mp3',
        artist: 'Captain Brando!',
        name: 'Paralyzed Paraplegic (instrumental)',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/sailboat.png',
        id: '66575568425355568',
      },
    ]};
  }

  render()
  {
    return (
      <div className={'wrapper'}>
        <CoolPlayer data={this.state.data} />
      </div>
    );
  }
}

export { App };
export { Topics };
export { MusicPlayer };