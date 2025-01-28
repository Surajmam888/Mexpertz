import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar, Button } from "@mui/material";
import TeamIcon from "@mui/icons-material/Group";
import VisionIcon from "@mui/icons-material/Visibility";
import MissionIcon from "@mui/icons-material/Flag";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box
      sx={{
        // background: "linear-gradient(135deg, #912620, #b23a35)",
        minHeight: "100vh",
        padding: "50px 20px",
        color:"#000",
        backgroundColor:"#fff"
      }}
    >
      {/* Header Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "700px", margin: "0 auto" }}>
          Welcome to our hospital, where patient care and excellence in medical services meet. Learn more about our mission, vision, and the team dedicated to serving you.
        </Typography>
      </Box>

      {/* Mission, Vision, and Team Section */}
      <Grid container spacing={6} justifyContent="center">
        {/* Mission */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#912620",
                margin: "0 auto",
                width: 64,
                height: 64,
                mb: 2,
              }}
            >
              <MissionIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#912620" }}>
              Our Mission
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "#333" }}>
              To provide world-class healthcare services with compassion, excellence, and integrity. Our mission is to improve lives and create healthier communities.
            </Typography>
          </Card>
        </Grid>

        {/* Vision */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#912620",
                margin: "0 auto",
                width: 64,
                height: 64,
                mb: 2,
              }}
            >
              <VisionIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#912620" }}>
              Our Vision
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "#333" }}>
              To become a trusted leader in healthcare by achieving excellence in medical innovation, research, and patient care.
            </Typography>
          </Card>
        </Grid>

        {/* Team */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#912620",
                margin: "0 auto",
                width: 64,
                height: 64,
                mb: 2,
              }}
            >
              <TeamIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#912620" }}>
              Our Team
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "#333" }}>
              Our dedicated team of healthcare professionals, including doctors, nurses, and staff, work tirelessly to provide top-quality care for our patients.
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action Section */}
      <Box textAlign="center" mt={8}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Ready to Learn More?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "600px", margin: "0 auto", mb: 4 }}>
          We are committed to providing the best healthcare experience for you and your loved ones. Reach out to us today to find out more.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/contact"
          sx={{
            padding: "10px 30px",
            fontWeight: "bold",
            borderRadius: "8px",
            backgroundColor: "#912620",
            "&:hover": {
              backgroundColor: "#b23a35",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default About;
