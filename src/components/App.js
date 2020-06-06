import React from 'react';
import {Box, Grommet} from 'grommet';
import Panel from './Panel';
import {TopNav, BotNav} from './Navbar';

function App() {
  return(
    <Grommet height="100vh">
      <TopNav />
      <Box height="84vh" align="center" justify="center">
        <Panel />
      </Box>
      <BotNav />
    </Grommet>
  );
}

export default App;
