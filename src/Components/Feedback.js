import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    description: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    number: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'name':
        errorMessage = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        errorMessage = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
        break;
      case 'number':
        errorMessage = !/^\d{10}$/.test(value) ? 'Invalid contact number (must be 10 digits)' : '';
        break;
      case 'description':
        errorMessage = value.trim() === '' ? 'Description is required' : '';
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submission
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));

    if (Object.values(errors).some((error) => error)) {
      alert('Please correct the errors in the form.');
      return;
    }

    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your Feedback!');
    setFormData({
      name: '',
      email: '',
      number: '',
      description: ''
    });
    setErrors({
      name: '',
      email: '',
      number: '',
      description: ''
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Feedback
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Contact Number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          error={Boolean(errors.number)}
          helperText={errors.number}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          error={Boolean(errors.description)}
          helperText={errors.description}
          margin="normal"
          multiline
          rows={4}
        />
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Feedback;
