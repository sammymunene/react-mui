import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

const MuiBreadcrumbs = () => {
  return (
    <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
      <Link color="inherit" href="/">Home</Link>
      <Link color="inherit" href="/about">About</Link>
      <Typography color="textPrimary">Contact</Typography>
    </Breadcrumbs>
  );
};

export default MuiBreadcrumbs;
