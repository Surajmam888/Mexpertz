import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Box
      sx={{
        // background: "linear-gradient(135deg, #912620, #b23a35)",
        minHeight: "100vh",
        padding: "50px 20px",
        color: "#000",
        backgroundColor:"fff",
      }}
    >
      {/* Header Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "600px", margin: "0 auto" }}>
          Have any questions or concerns? Feel free to reach out to us. We're
          here to assist you with all your healthcare needs.
        </Typography>
      </Box>

      {/* Main Grid */}
      <Grid container spacing={6} justifyContent="center">
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#912620" }}
              >
                Send Us a Message
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    padding: "10px 20px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    backgroundColor: "#912620",
                    "&:hover": {
                      backgroundColor: "#b23a35",
                    },
                  }}
                  fullWidth
                >
                  Send Message
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Box>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                mb: 4,
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ backgroundColor: "#912620", mr: 2 }}>
                    <PhoneIcon />
                  </Avatar>
                  <Typography variant="h6">+91-1234567890</Typography>
                </Box>
              </CardContent>
            </Card>

            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                mb: 4,
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ backgroundColor: "#912620", mr: 2 }}>
                    <EmailIcon />
                  </Avatar>
                  <Typography variant="h6">support@hospital.com</Typography>
                </Box>
              </CardContent>
            </Card>

            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ backgroundColor: "#912620", mr: 2 }}>
                    <LocationOnIcon />
                  </Avatar>
                  <Typography variant="h6">
                    123, Health Street, Indore, MP, India
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Box mt={6} textAlign="center">
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "white" }}
        >
          Our Location
        </Typography>
        <Box
          sx={{
            height: "300px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          }}
        >
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.529429703348!2d75.85772527413503!3d22.719568430093707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc59109ad2fb%3A0xe5e69bb1a8a547f1!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
