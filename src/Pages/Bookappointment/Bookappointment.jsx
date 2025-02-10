import React, { useState } from 'react';
import axios from 'axios';
import { Box, Grid, TextField, Button, Typography, MenuItem } from '@mui/material';
import { BASE_URl } from "../../api";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    date: '',
    time: '',
    doctorName: '',
    specialization: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URl}api/appointments`, formData);
      alert('Appointment booked successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book the appointment. Please try again.');
    }
  };

  return (
    <Box sx={{minHeight: {xs:"",md:"",lg:"87vh"},}}>
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 2,
        mt: 4,
      }}
    >
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        Book Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{
                shrink: true, // Ensures the label doesn't overlap the date picker value
              }}
              required
            />
          </Grid>

          {/* Third Row */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{
                shrink: true, // Ensures the label doesn't overlap the time picker value
              }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Doctor Name"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          {/* Fourth Row */}
          <Grid item xs={12}>
            <TextField
              select
              label="Specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              fullWidth
              required
            >
              <MenuItem value="General Physician">General Physician</MenuItem>
              <MenuItem value="Dermatologist">Dermatologist</MenuItem>
              <MenuItem value="Cardiologist">Cardiologist</MenuItem>
              <MenuItem value="Pediatrician">Pediatrician</MenuItem>
              <MenuItem value="Gynecologist">Gynecologist</MenuItem>
            </TextField>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ py: 1.5,backgroundColor:"#912620" }}
            >
              Book Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    </Box>
  );
};

export default BookAppointment;
