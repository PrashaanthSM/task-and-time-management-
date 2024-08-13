import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  Box
} from '@mui/material';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: ''
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const apiUrl = `http://127.0.0.1:8080/api/users/${encodeURIComponent(user.email)}`;

  useEffect(() => {
    axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      setProfileData(response.data);
    })
    .catch(error => {
      console.error(error);
      setError('Failed to fetch profile data.');
    });
  }, [apiUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await axios.put(apiUrl, profileData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessage('Profile updated successfully.');
    } catch (error) {
      console.error(error);
      setError('Failed to update profile.');
    }
  };

  const handleDelete = async () => {
    setError('');
    setMessage('');

    try {
      await axios.delete(apiUrl, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessage('Profile deleted successfully.');
      logout(); // Log out the user
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error(error);
      setError('Failed to delete profile.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <Box component="form" onSubmit={handleUpdate} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}

          <TextField
            label="First Name"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            fullWidth
            disabled
          />
          <TextField
            label="Username"
            name="username"
            value={profileData.username}
            onChange={handleChange}
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit">
            Update Profile
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
            sx={{ marginTop: 2 }}
          >
            Delete Account
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
