import React from 'react';
import {Box, Grommet} from 'grommet';
import MusicPlayer from './components/MusicPlayer';
import Panel from './components/Panel';
import './index.scss';

function App() {
  return(
    <Grommet height="100vh">
      <Box height="92vh" align="center" justify="center">
        <Panel />
      </Box>
      <Footer />
    </Grommet>
  );
}

function Footer()
{
  return (
    <Box id="musicPlayer">
      <MusicPlayer />
    </Box>
  )
}

// <header></header>
// <div id="page1" className="fullPage"></div>
// <div id="page2" className="fullPage"></div>
// <footer></footer>

// function Page2()
// {
//   return (
//     <>
//       <div>this is page 2 lol</div>
//     </>
//   );
// }

export default App;
