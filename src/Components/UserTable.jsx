import React, { useEffect, useState } from 'react';
import './UserTable.css'
import axios from 'axios';
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/user/fetch/');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = (user) => {
    setSelectedUser(user); 
    setOpen(true); 
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/user/delete/${id}`);
      fetchData(); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleClose = () => {
    setOpen(false); 
    setSelectedUser(null); 
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/user/update/${selectedUser._id}`, selectedUser);
      fetchData(); 
      handleClose(); 
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, headerAlign: 'center', align: 'center' },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'mobile', headerName: 'Mobile', width: 150 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'userType', headerName: 'User Type', width: 120 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={() => handleUpdate(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const rows = users.map((user, index) => ({
    id: user._id, 
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    address: user.address,
    city: user.city,
    gender: user.gender,
    userType: user.userType,
    _id: user._id, 
  }));

  return (
    <>
      <Box
        sx={{
          height: 500,
          width: '95%',
          margin: '0 auto',
          mt: 4,
          bgcolor: '#f9f9f9',
          borderRadius: 2,
          boxShadow: 3,
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ color: '#333', mb: 2 }}
        >
          User List
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          loading={loading}
          sx={{
            bgcolor: '#fff',
            borderRadius: 1,
            boxShadow: 2,
            border: '1px solid #ddd',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#eaeaea',
              fontWeight: 'bold',
              textAlign: 'center',
            },
            '& .MuiDataGrid-cell': {
              textAlign: 'center',
            },
            '& .MuiDataGrid-footerContainer': {
              justifyContent: 'center',
            },
          }}
        />
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <form onSubmit={handleFormSubmit}>
              <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={selectedUser.name || ''}
                onChange={handleInputChange}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                value={selectedUser.email || ''}
                onChange={handleInputChange}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Mobile"
                name="mobile"
                value={selectedUser.mobile || ''}
                onChange={handleInputChange}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Address"
                name="address"
                value={selectedUser.address || ''}
                onChange={handleInputChange}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="City"
                name="city"
                value={selectedUser.city || ''}
                onChange={handleInputChange}
              />
              <Grid item xs={12} sm={6}></Grid>
              <TextField
                fullWidth
                margin="normal"
                label="Gender"
                name="gender"
                value={selectedUser.gender || ''}
                onChange={handleInputChange}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="User Type"
                name="userType"
                value={selectedUser.userType || ''}
                onChange={handleInputChange}
              />
              </Grid>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Save
                </Button>
              </DialogActions>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserTable;
