import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');  

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <Box>
      <Link to="/register" style={{ textDecoration: 'none', color: '#000' }}>
        <Button color="inherit" sx={{ fontWeight: 'bold', textTransform: 'none', mx: 1 }}>
          Register Patient/Doctor
        </Button>
      </Link>
      <Link to="/bookappointment" style={{ textDecoration: 'none', color: '#000' }}>
        <Button color="inherit" sx={{ fontWeight: 'bold', textTransform: 'none', mx: 1 }}>
          Book Appointment
        </Button>
      </Link>
      <Link to="/cancelappointment" style={{ textDecoration: 'none', color: '#000' }}>
        <Button color="inherit" sx={{ fontWeight: 'bold', textTransform: 'none', mx: 1 }}>
          Cancel Appointment
        </Button>
      </Link>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer',mr:1, }}>
            Hospital Appointment System
          </Typography>
        </Link>

        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none',ml:"-1px" } }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems}
          </Box>
        )}

        <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
            <List>
              <ListItem button component={Link} to="/register">
                <ListItemText primary="Register Patient/Doctor" />
              </ListItem>
              <ListItem button component={Link} to="/bookappointment">
                <ListItemText primary="Book Appointment" />
              </ListItem>
              <ListItem button component={Link} to="/cancelappointment">
                <ListItemText primary="Cancel Appointment" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
