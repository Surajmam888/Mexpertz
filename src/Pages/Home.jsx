import React from "react";
import './Home.css'
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CardSection from "../Components/CardSection";
import Banner from "../Components/Banner";
import UserTable from "../Components/UserTable";
import banner from '../assets/image/gettyimagesnew.jpg';

const Home = () => {
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
        sx={{ textAlign: "center", marginBottom: 2,color:"#a12f2a" }}
      >
        Welcome to the Retina Hospital
      </Typography>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", marginBottom: 4, maxWidth: "600px",color:"#a12f2a",overlay:"#000" }}
      >
        Simplify your healthcare experience with our system. Book, manage, or
        cancel appointments with ease, and ensure you never miss your next
        visit.
      </Typography>

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

      <Box sx={{ marginTop: 6, width: "100%" }}>
        {/* <Typography variant="h5" sx={{ marginBottom: 2,color:"#a12f2a" }}>
          Registered Users
        </Typography> */}
        <Box>
          {/* <Typography variant="body2" sx={{ fontSize:"32px",color:"#1977D5"}}>
            Here is a list of users who have registered:
          </Typography> */}
          {/* <CardSection /> */}
          {/* <UserTable/> */}
          {/* <Banner /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
