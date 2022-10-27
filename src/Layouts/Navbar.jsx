import React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Stack,

} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

import Profile from './Navtabs/Profile';

const drawerWidth = 240;

const Navbar = ({ handleDrawerToggle }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: '#fff'
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{
            color: 'black',
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            {/* Left Box */}
            {/* <Stack direction='row' justifyContent='center' alignItems='center' mr={1}>
              <img src='/brand.png' alt="app-logo" width='150px' />
            </Stack> */}

            {/* Right Box */}
            <Stack direction='row' style={{ display: "flex", justifyContent: "end", marginLeft: "auto" }}>
              <Profile />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;