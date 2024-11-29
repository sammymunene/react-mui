import React from 'react';
import { Badge, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiBadge = () => {
  return (
    <div>
      <IconButton aria-label="mail">
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default MuiBadge;
