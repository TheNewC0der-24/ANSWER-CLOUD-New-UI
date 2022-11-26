import React, { useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const DashboardLayout = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  // Link Should be here
  const handleDrawerToggle = (link) => {
    // eslint-disable-next-line
    const { innerWidth: width, innerHeight: height } = window;
    if (width < 900) {
      setMobileOpen(!mobileOpen);
    }
  }

  return (
    <>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Box sx={{ height: '100vh', width: "100vw", position: 'absolute', backgroundColor: 'white' }}>
        <Box p={2} sx={{
          width: { xs: '100vw', md: `calc( 100vw - 299px)` },
          position: 'relative', left: { md: '17rem' }, top: '4.5rem'
        }}>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default DashboardLayout;