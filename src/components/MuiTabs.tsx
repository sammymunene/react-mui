import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const MuiTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="tabs example">
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <Box p={3}>
        {value === 0 && <div>Content for Tab 1</div>}
        {value === 1 && <div>Content for Tab 2</div>}
        {value === 2 && <div>Content for Tab 3</div>}
      </Box>
    </Box>
  );
};

export default MuiTabs;
