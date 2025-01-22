import React, { useState } from 'react';
import axios from 'axios';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';

const CancelAppointment = () => {
  const [formData, setFormData] = useState({
    appointmentId: '',
    email: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/appointment/cancel', formData);
      alert('Appointment canceled successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error canceling appointment:', error);
      alert('Failed to cancel the appointment. Please try again.');
    }
  };

  return (
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
        Cancel Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Appointment ID"
              name="appointmentId"
              value={formData.appointmentId}
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
          <Grid item xs={12}>
            <TextField
              label="Reason for Cancellation"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ py: 1.5 }}
            >
              Cancel Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CancelAppointment;
