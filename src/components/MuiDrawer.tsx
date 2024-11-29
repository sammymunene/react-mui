import React, { useState } from 'react';
import { Drawer, Button, List, ListItemButton, ListItemText } from '@mui/material';

const MuiDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer
        anchor="left" // This is the correct prop for the Drawer position
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItemButton onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
};

export default MuiDrawer;
