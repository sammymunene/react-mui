import React from 'react';
import { Chip } from '@mui/material';

const MuiChip = () => {
  return (
    <div>
      <Chip label="Chip 1" color="primary" />
      <Chip label="Chip 2" color="secondary" onDelete={() => alert('Deleted')} />
    </div>
  );
};

export default MuiChip;
