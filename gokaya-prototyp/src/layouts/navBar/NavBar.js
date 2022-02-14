import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import {
  AppBar, IconButton, Toolbar, Box, List, makeStyles, useTheme, MenuItem
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LanguageIcon from '@material-ui/icons/Language';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FaceIcon from '@material-ui/icons/Face';
import RoomIcon from '@material-ui/icons/Room';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import NavItem from './navItem/index';
import logo from '../assets/logo.png';


const items = [
  {
    href: '/',
    title: 'Home',
    icon: (<DashboardIcon />)
  },
  {
    href: '/bookingsFrond',
    title: 'Bookings',
    icon: (<ShoppingCartIcon />)
  },
  {
    href: '/customers',
    title: 'Customers',
    icon: (<FaceIcon />)
  },
  {
    href: '/stations',
    title: 'manage_stations',
    icon: (<RoomIcon />)
  },
  {
    href: '/sites',
    title: 'Sites',
    icon: (<LanguageIcon />)
  },
  {
    href: '/promo-codes',
    title: 'Promo Codes',
    icon: (<ConfirmationNumberIcon />)
  }
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  flexbox: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logo: {
    width: 130
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: '#FFFFFF'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36,
    color: 'black'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  menuItemNav: {
    padding: 0,
    borderRadius: '6px',
    color: 'black'
  },
  test: {
    color: 'black'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (openM) => (event) => {
    if (
      event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(openM);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const content = (
    <Box className={classes.flexbox}>
      <Box
        display="flex"
        flexDirection="column"
        p={2}
      >
        <List>
          {items.map((item, index) => (
            <MenuItem
              key={item.title}
              className={classes.menuItemNav}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              <NavItem
                href={item.href}
                title={item.title}
                icon={item.icon}
              />
            </MenuItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <RouterLink to="/">
            <img src={logo} alt="gokaya-logo" className={classes.logo} />
          </RouterLink>
          <Box flexGrow={1} />
          <IconButton
            color="primary"
          >
            <InputIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        variant="permanent"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {content}
      </SwipeableDrawer>
    </Box>
  );
};

export default NavBar;
