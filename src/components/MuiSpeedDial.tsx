import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MuiSpeedDial = () => {
  const actions = [
    { icon: <AddIcon />, name: 'Add' },
    { icon: <EditIcon />, name: 'Edit' },
    { icon: <DeleteIcon />, name: 'Delete' },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      icon={<SpeedDialIcon />}
      direction="up"
    >
      {actions.map((action) => (
        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
      ))}
    </SpeedDial>
  );
};

export default MuiSpeedDial;
