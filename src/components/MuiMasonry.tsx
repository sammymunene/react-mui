import React from 'react';
import { Masonry } from '@mui/lab';
import { Paper, Box } from '@mui/material';

const MuiMasonry = () => {
  return (
    <Masonry columns={3} spacing={2}>
      <Box>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <h4>Item 1</h4>
          <p>Content for item 1</p>
        </Paper>
      </Box>
      <Box>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <h4>Item 2</h4>
          <p>Content for item 2</p>
        </Paper>
      </Box>
      <Box>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <h4>Item 3</h4>
          <p>Content for item 3</p>
        </Paper>
      </Box>
      <Box>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <h4>Item 4</h4>
          <p>Content for item 4</p>
        </Paper>
      </Box>
      <Box>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <h4>Item 5</h4>
          <p>Content for item 5</p>
        </Paper>
      </Box>
    </Masonry>
  );
};

export default MuiMasonry;
