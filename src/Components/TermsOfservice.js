import React from 'react';
import { Container, Typography } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Terms of Service
      </Typography>
      <Typography paragraph>
        Welcome to Tasknow! By accessing or using our platform, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before using our services.
      </Typography>
      <Typography paragraph>
        Our services are provided on an "as-is" basis. We make no warranties or representations about the accuracy, reliability, or availability of our services. You are responsible for your use of our platform and for any consequences that may arise.
      </Typography>
      <Typography paragraph>
        For detailed information about our terms, including user responsibilities and limitations of liability, please review the complete Terms of Service on this page.
      </Typography>
    </Container>
  );
};

export default TermsOfService;
