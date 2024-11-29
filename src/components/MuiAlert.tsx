import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

const MuiAlert = () => {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — check it out!
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert!
      </Alert>
    </div>
  );
};

export default MuiAlert;
