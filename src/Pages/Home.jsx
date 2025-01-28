import React from "react";
import './Home.css'
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import banner from '../assets/image/gettyimagesnew.png';
import Banner from "../Components/Banner";
import HomePage from "../Components/HomePage";
import CardSection from "../Components/CardSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Box
      sx={{
        // minHeight: "100vh",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // padding: 3,
        // bgcolor: "background.default",
      }}
    >
      {/* <Banner/> */}
      <HomePage />
      <CardSection />
      <Footer />
    </Box>
  );
};

export default Home;
