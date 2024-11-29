import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
