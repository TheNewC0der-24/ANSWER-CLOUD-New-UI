import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function LoadAnimations() {
  return (
    <Box>
      <Skeleton sx={{height:"100px"}}/>
      <Skeleton sx={{height:"100px"}}/>
      <Skeleton sx={{height:"100px"}}/>
      <Skeleton sx={{height:"100px"}}/>
      <Skeleton sx={{height:"100px"}}/>
    </Box>
  );
}