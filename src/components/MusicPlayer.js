import React from 'react';
import CoolPlayer from 'react-cool-music-player';
import 'react-cool-music-player/dist/index.css';

class MusicPlayer extends React.Component
{
  constructor(props) {
    super(props);
    // Music data
    this.state = { songs:
    [
      {
        src: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/idk-demo.mp3',
        artist: 'Captain Brando!',
        name: 'idk / Now! (demo)',
        img: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png',
        id: '66575568423123',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/him.mp3',
        artist: 'Captain Brando!',
        name: 'Him',
        img: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/him.jpg',
        id: '66575568425354321',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/goodyou.mp3',
        artist: 'Captain Brando!',
        name: 'good, and you?',
        img: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png',
        id: '66575568423274',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/bargainbin.mp3',
        artist: 'Captain Brando!',
        name: 'Bargain Bin',
        img: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bargainbin.png',
        id: '66575568425349835',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/bbetc.mp3',
        artist: 'Captain Brando!',
        name: 'Better Better, etc.',
        img: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/bbetc.png',
        id: '66575568463795',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/music/paralyzed.mp3',
        artist: 'Captain Brando!',
        name: 'Paralyzed Paraplegic (instrumental)',
        img: 'https://raw.githubusercontent.com/dcruzships/dcruz-assets/master/images/sailboat.png',
        id: '66575568425355568',
      },
    ]};
  }

  render()
  {
    return (
      <div className={'wrapper'} id="musicPlayer">
        <CoolPlayer data={this.state.songs} />
      </div>
    );
  }
}

export default MusicPlayer;
