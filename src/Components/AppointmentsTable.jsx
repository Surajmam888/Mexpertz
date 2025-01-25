import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = useState(false);
  const [cancelDetails, setCancelDetails] = useState({
    appointmentId: '',
    email: '',
    reason: '',
  });

  // Fetch Appointments Data
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/appointments');
        setAppointments(response.data.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  // Open Modal
  const handleOpen = (appointmentId, email) => {
    setCancelDetails({ ...cancelDetails, appointmentId, email });
    setOpen(true);
  };

  // Close Modal
  const handleClose = () => {
    setOpen(false);
  };

  // Handle Input Changes in Modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCancelDetails({ ...cancelDetails, [name]: value });
  };

  // Submit Cancellation
  const handleCancel = async () => {
    try {
      const { appointmentId, email, reason } = cancelDetails;
      if (!reason) {
        alert('Reason for cancellation is required!');
        return;
      }
      const response = await axios.delete(`http://localhost:3001/api/appointments/${appointmentId}`, {
        data: { email, reason },
      });
      if (response.status === 200) {
        alert('Appointment canceled successfully!');
        setAppointments(appointments.filter((appointment) => appointment._id !== appointmentId));
      } else {
        alert('Failed to cancel the appointment.');
      }
    } catch (error) {
      console.error('Error canceling appointment:', error);
      alert('An error occurred while canceling the appointment.');
    }
    handleClose();
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Appointments
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.length > 0 ? (
              appointments.map((appointment, index) => (
                <TableRow key={appointment._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{appointment.name}</TableCell>
                  <TableCell>{appointment.email}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleOpen(appointment._id, appointment.email)}
                    >
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No Appointments Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Cancel Appointment Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cancel Appointment</DialogTitle>
        <DialogContent>
          <TextField
            label="Appointment ID"
            value={cancelDetails.appointmentId}
            disabled
            fullWidth
            margin="dense"
          />
          <TextField
            label="Email"
            value={cancelDetails.email}
            disabled
            fullWidth
            margin="dense"
          />
          <TextField
            label="Reason for Cancellation"
            name="reason"
            value={cancelDetails.reason}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="dense"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
          <Button onClick={handleCancel} color="error" variant="contained">
            Cancel Appointment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AppointmentsTable;
