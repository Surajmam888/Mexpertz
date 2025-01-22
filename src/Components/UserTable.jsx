import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, headerAlign: 'center', align: 'center' },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'mobile', headerName: 'Mobile', width: 150 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'userType', headerName: 'User Type', width: 120 },
  ];

  const rows = users.map((user, index) => ({
    id: index + 1, 
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    address: user.address,
    city: user.city,
    gender: user.gender,
    userType: user.userType,
  }));

  return (
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
  );
};

export default UserTable;
