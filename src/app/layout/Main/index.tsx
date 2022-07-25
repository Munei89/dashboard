import React from 'react';
import Box from '@mui/material/Box';
import { StyledDrawer } from 'app/components/Drawer';
import { MenuLinks } from 'app/mock';

interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <StyledDrawer menu={MenuLinks} />
      <div>{children}</div>
    </Box>
  );
};
