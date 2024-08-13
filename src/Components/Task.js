import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Container,
  Paper,
  Alert,
  Box
} from '@mui/material';
import './Task.css';

const Task = ({ addTaskAndRedirect }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    dueDate: '',
    priority: 'low',
    assigneeEmail: '',
    status: 'incomplete'
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const apiUrl = 'http://127.0.0.1:8080/api/tasks'; // Backend API URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (task.name && task.description && task.dueDate && task.assigneeEmail) {
      try {
        const response = await axios.post(apiUrl, task, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        setMessage('Task added successfully.');
        addTaskAndRedirect(response.data); // Call the callback to switch to the progress view
      } catch (error) {
        console.error(error);
        setError('An error occurred while adding the task.');
      }
    } else {
      setError('Please fill in all required fields.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Add Task
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}

          <TextField
            label="Task Name"
            name="name"
            variant="outlined"
            value={task.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            value={task.description}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Due Date"
            name="dueDate"
            type="date"
            variant="outlined"
            value={task.dueDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              label="Priority"
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Assignee Email"
            name="assigneeEmail"
            variant="outlined"
            value={task.assigneeEmail}
            onChange={handleChange}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={task.status}
              onChange={handleChange}
              label="Status"
            >
              <MenuItem value="incomplete">Incomplete</MenuItem>
              <MenuItem value="in progress">In Progress</MenuItem>
              <MenuItem value="complete">Complete</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Add Task
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Task;
