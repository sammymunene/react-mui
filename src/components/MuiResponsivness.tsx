import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const MuiResponsivness = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Responsive Box 1</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Responsive Box 2</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Responsive Box 3</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MuiResponsivness;
