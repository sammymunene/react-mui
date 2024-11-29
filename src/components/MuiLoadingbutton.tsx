import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';

const MuiLoadingButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Button onClick={handleClick} variant="contained" disabled={loading}>
      {loading ? <CircularProgress size={24} /> : 'Submit'}
    </Button>
  );
};

export default MuiLoadingButton;
