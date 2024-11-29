import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const MuiList = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 2" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 3" />
      </ListItem>
    </List>
  );
};

export default MuiList;
