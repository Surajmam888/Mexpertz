import React from "react";
import { Box, Typography } from "@mui/material";
import banner from '../assets/image/gettyimagesnew.jpg';

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Hospital
        </Typography>
        <Typography variant="h6">
          Your health is our top priority. Book your appointment today!
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
