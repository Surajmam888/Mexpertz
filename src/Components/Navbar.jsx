import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
// import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

//   const ThemeToggleButton = () => {
//   const { darkMode, toggleTheme } = useTheme();

//   return (
//     <Button variant="contained" onClick={toggleTheme}>
//       Switch {darkMode ? "Light" : "Dark"}
//     </Button>
//   );
// };

  const menuItems = (
    <Box>
      <Link to="/register" style={{ textDecoration: 'none', color: '#fff' }}>
        <Button color="inherit" sx={{ fontWeight: 'bold', textTransform: 'none', mx: 1 }}>
          Register Patient/Doctor
        </Button>
      </Link>
      <Link to="/bookappointment" style={{ textDecoration: 'none', color: '#fff' }}>
        <Button color="inherit" sx={{ fontWeight: 'bold', textTransform: 'none', mx: 1 }}>
          Book Appointment
        </Button>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#fff' }}>
        <Button color="inherit" sx={{ fontWeight: 'bold', textTransform: 'none', mx: 1 }}>
          About
        </Button>
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: '#fff' }}>
        <Button color="inherit" sx={{ fontWeight: 'bold', textTransform: 'none', mx: 1 }}>
          Contact
        </Button>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>
        <Button color="inherit" sx={{ fontWeight: 'bold', textTransform: 'none', mx: 1 }}>
          Login
        </Button>
      </Link>
      {/* <Link to="/*" style={{ textDecoration: 'none', color: '#fff' }}>
        <ThemeToggleButton color="inherit" sx={{ fontWeight: 'bold', textTransform: 'none', mx: 1 }} />
      </Link> */}
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: '#912620' }}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              cursor: 'pointer',
              textAlign: { xs: 'center', sm: 'left' }, 
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' }, 
              mr: { xs: 2, sm: 5, md: 10 }, 
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Hospital Appointment System
          </Typography>
        </Link>

        {isMobile ? (
          <IconButton
          edge="end" 
          color="inherit"
          onClick={() => toggleDrawer(true)}
          sx={{
            display: { xs: 'block', md: 'none' }, 
            position: 'absolute', 
            right: '30px', 
          }}
        >
          <MenuIcon />
        </IconButton>
        ) : (
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              width: { md: '75%' },
            }}
          >
            {menuItems}
          </Box>
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
          PaperProps={{
            sx: {
              bgcolor: '#912620',
              color: '#fff',
            },
          }}
        >
          <Box
            sx={{
              width: 250,
            }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List>
              <ListItem button component={Link} to="/register">
                <ListItemIcon sx={{ color: '#fff' }}>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Register Patient/Doctor" sx={{ textAlign: 'left', color: '#fff' }} />
              </ListItem>
              <ListItem button component={Link} to="/bookappointment">
                <ListItemIcon sx={{ color: '#fff' }}>
                  <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary="Book Appointment" sx={{ textAlign: 'left', color: '#fff' }} />
              </ListItem>
              <ListItem button component={Link} to="/about">
                <ListItemIcon sx={{ color: '#fff' }}>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" sx={{ textAlign: 'left', color: '#fff' }} />
              </ListItem>
              <ListItem button component={Link} to="/contact">
                <ListItemIcon sx={{ color: '#fff' }}>
                  <ContactMailIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" sx={{ textAlign: 'left', color: '#fff' }} />
              </ListItem>
              <ListItem button component={Link} to="/login">
                <ListItemIcon sx={{ color: '#fff' }}>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Login" sx={{ textAlign: 'left', color: '#fff' }} />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
