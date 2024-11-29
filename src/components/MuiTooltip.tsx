import React from 'react';
import { Tooltip, Button } from '@mui/material';

const MuiTooltip = () => {
  return (
    <div>
      <Tooltip title="Delete" arrow>
        <Button>Delete</Button>
      </Tooltip>
    </div>
  );
};

export default MuiTooltip;
