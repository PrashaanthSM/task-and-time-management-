import React from 'react';
import { Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography paragraph>
        At Tasknow, your privacy is important to us. We are committed to protecting your personal information and ensuring your experience on our platform is secure. This Privacy Policy outlines how we collect, use, and safeguard your data.
      </Typography>
      <Typography paragraph>
        We may collect personal information such as your name, email address, and usage data. This information is used to provide and improve our services, communicate with you, and ensure the security of our platform.
      </Typography>
      <Typography paragraph>
        For more details on how we handle your data, please review our complete Privacy Policy on this page.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
