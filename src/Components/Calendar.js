import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';
import './Calendar.css'; // You can keep this for custom styles

const CalendarComponent = ({ tasks = [] }) => {
  const [value, setValue] = useState(new Date());

  // Function to handle date selection
  const onChange = (date) => {
    setValue(date);
  };

  // Map tasks to their corresponding dates
  const tasksByDate = tasks.reduce((acc, task) => {
    const date = new Date(task.dueDate).toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(task);
    return acc;
  }, {});

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Calendar
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Calendar
          onChange={onChange}
          value={value}
          tileContent={({ date, view }) => {
            const dateString = date.toDateString();
            return (
              <List dense>
                {tasksByDate[dateString] &&
                  tasksByDate[dateString].map((task, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={task.name} />
                    </ListItem>
                  ))}
              </List>
            );
          }}
        />
      </Paper>
    </Box>
  );
};

export default CalendarComponent;
