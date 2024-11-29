import React, { useState } from 'react';
import { Snackbar, Button } from '@mui/material';

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar open={open} onClose={handleClose} message="This is a snackbar" autoHideDuration={3000} />
    </div>
  );
};

export default MuiSnackbar;
