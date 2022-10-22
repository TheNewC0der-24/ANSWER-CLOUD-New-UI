import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
  Avatar,
} from '@mui/material';

// react-router-dom
import { useLocation, useNavigate } from 'react-router-dom';

import defaultAvatar from '../../assets/Images/defaultAvatar.png';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import GroupIcon from '@mui/icons-material/Group';

// Styles
import { makeStyles } from '@mui/styles';


export const drawerWidth = 240;

const useStyles = makeStyles({
  sideBarActive: {
    backgroundColor: '#f4f4f4',
    borderRight: '3px solid #000',
    color: 'black'
  },
  sideBarActiveIcon: {
    color: 'black'
  }
})

function Sidebar({ handleDrawerToggle, mobileOpen }) {

  const classes = useStyles();
  // const type = 0;


  const location = useLocation();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/account/dashboard'
    },
    {
      label: 'My Workspace',
      icon: <WorkspacesIcon />,
      link: '/account/workspace'
    },
    {
      label: 'Teams',
      icon: <GroupIcon />,
      link: '/account/teams'
    },
    // {
    //   label: 'External Bot',
    //   icon: <GroupIcon />,
    //   link: '/account/external-bot'
    // },
  ]
  const drawer = (
    <div style={{ paddingTop: '5px', paddingLeft: '10px', paddingRight: '10px' }}>
      <Box sx={{ height: '3.70rem', borderBottom: "1px solid #000" }}>
        <Box sx={{ width: '100%', height: '3.25rem', display: 'flex', bgcolor: '#000', justifyContent: 'space-around', alignItems: 'center', borderRadius: '10px' }}>
          <Avatar
            alt='user-image'
            src={defaultAvatar}
            sx={{ width: 40, height: 40 }}
          />
          <Stack>
            <Typography variant='subtitle1' sx={{ color: '#fff', fontWeight: "bold", fontFamily: "Public Sans,sans-serif" }}>Bhavya Khurana</Typography>
          </Stack>
        </Box>
      </Box>
      <List>
        {sideBarMenu.map((item, index) => (
          <ListItem key={index}
            disablePadding
            className={location.pathname === item.link ? classes.sideBarActive : null}
            onClick={() => { navigate(item.link); handleDrawerToggle(item.link); }}
          >
            <ListItemButton>
              <ListItemIcon className={location.pathname === item.link ? classes.sideBarActiveIcon : null}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
export default Sidebar;

