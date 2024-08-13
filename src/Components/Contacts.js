import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const Contacts = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography paragraph>
        We value your feedback and are here to help with any questions or concerns you may have. Please feel free to reach out to us using the following contact details:
      </Typography>
      <List>
        <ListItem>Email: support@tasknow.com</ListItem>
        <ListItem>Phone: +1-800-123-4567</ListItem>
        <ListItem>Address: 123 Tasknow Lane, Suite 100, Tech City, TX 12345</ListItem>
      </List>
      <Typography paragraph>
        Our support team is available Monday to Friday, 9 AM to 5 PM (EST). We look forward to hearing from you!
      </Typography>
    </Container>
  );
};

export default Contacts;
