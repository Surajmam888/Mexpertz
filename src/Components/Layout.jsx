import React from "react";
import { AppBar, Toolbar, Box, Grid, Typography } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Navbar</Typography>
        </Toolbar>
      </AppBar>

      <Grid container sx={{ flex: 1 }}>
        <Grid item xs={12} sx={{ bgcolor: "#a8d5ba", p: 2 }}>
          <Typography align="center">Top Section</Typography>
        </Grid>

        <Grid container sx={{ flex: 1 }}>
          <Grid item xs={12} sm={5} sx={{ bgcolor: "#4a90e2", p: 2 }}>
            <Typography align="center">Left Section</Typography>
          </Grid>
          <Grid item xs={12} sm={5} sx={{ bgcolor: "#8e44ad", p: 2 }}>
            <Typography align="center">Right Section</Typography>
          </Grid>
          <Grid item xs={12} sm={2} sx={{ bgcolor: "#e74c3c", p: 2 }}>
            <Typography align="center">Sidebar</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ bgcolor: "#f1c40f", p: 2 }}>
          <Typography align="center">Bottom Section</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
