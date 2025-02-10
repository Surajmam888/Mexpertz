import React from "react";
import './HomePage.css'
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import banner from '../assets/image/gettyimagesnew.png';

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "auto",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        bgcolor: "background.default",
      }}
    >
      <Box className="bg-new"></Box>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
          marginBottom: { xs: "150px !important", lg:"150px !important" }, 
          marginTop: { xs: "-338px !important", lg:"-150px !important" },
          fontSize: { xs: "2rem", md: "3rem",lg:"3rem" }, 
          color: "#a12f2a",
        }}
      >
        Welcome to the Retina Hospital
      </Typography>
      {/* <Typography
        variant="h6"
        sx={{ textAlign: "center", marginBottom: 4, maxWidth: "600px",color:"#fff",backgroundColor:"" }}
      >
        Simplify your healthcare experience with our system. Book, manage, or
        cancel appointments with ease, and ensure you never miss your next
        visit.
      </Typography> */}

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            component={Link}
            to="/bookappointment"
            variant="contained"
            color="primary"
            size="large"
            sx={{ paddingX: 4 }}
          >
            Book Appointment
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ paddingX: 4, color: "#000", backgroundColor: "#a12f2a" }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
