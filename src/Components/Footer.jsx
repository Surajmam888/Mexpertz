import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#912620",
        color: "white",
        padding: "20px 40px",
        marginTop: "auto",
        textAlign:"left"
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Hospital Information */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Hospital Management System
          </Typography>
          <Typography variant="body2">
            Providing quality healthcare services since 2000. We aim to make
            healthcare accessible and reliable for everyone.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="hover">
              About Us
            </Link>
          </Box>
          <Box>
            <Link href="#" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Box>
          <Box>
            <Link href="#" color="inherit" underline="hover">
              Careers
            </Link>
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Phone: +91-1234567890
          </Typography>
          <Typography variant="body2">
            Email: info@hospital.com
          </Typography>
          <Typography variant="body2">
            Address: 123, Health Street, Indore, MP
          </Typography>
        </Grid>
      </Grid>
      <Box textAlign="center" mt={4}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Hospital Management System. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
