import React from 'react';
import MusicPlayer from './MusicPlayer';
import { Anchor, Box, Header, Nav, Heading, Clock } from "grommet";

const items = [
  { label: "About", href: "#" },
  { label: "Notes", href: "#" },
  { label: "Home", href: "#" }
];

function TopNav()
{
  return(
    <Header background="light-1" pad="medium" id="header" height="8vh">
      <Box direction="row" align="center" gap="medium">
        <Anchor href="https://github.com/dcruzships" target="_blank"><Heading size="small" color="black">40/40</Heading></Anchor>
        <Clock hourLimit="12" type="digital" size="large" />
      </Box>

      <Nav direction="row">
        {items.map(item => (
          <Anchor label={item.label} key={item.label} />
        ))}
      </Nav>
    </Header>
  )
}

function BotNav()
{
  return (
    <Box id="musicPlayer">
      <MusicPlayer />
    </Box>
  )
}

export {TopNav, BotNav};
