import React from 'react';
import { Skeleton } from '@mui/material';

const MuiSkeleton = () => {
  return (
    <div>
      <Skeleton variant="text" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={118} />
      {/* <Skeleton variant="circle" width={40} height={40} /> */}
    </div>
  );
};

export default MuiSkeleton;
