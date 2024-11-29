import React from 'react';
import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const MuiAvatar = () => {
  return (
    <div>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar sx={{ bgcolor: 'red' }}>
        <PersonIcon />
      </Avatar>
    </div>
  );
};

export default MuiAvatar;
