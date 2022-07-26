import React from 'react';
import Box from '@mui/material/Box';
import { StyledDrawer } from 'app/components/Drawer/Loadable';
import { MenuLinks } from 'app/mock';
import { Header } from 'app/components/Header/Loadable';
import Grid from '@mui/material/Grid';

interface Props {
  children: React.ReactNode;
  drawerOpen: boolean;
  onCloseDrawer: () => void;
}

export const Main = ({ children, drawerOpen, onCloseDrawer }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingBottom: '50px',
      }}
    >
      <StyledDrawer
        menu={MenuLinks}
        drawerOpen={drawerOpen}
        onClose={onCloseDrawer}
      />
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            paddingLeft: '35px',
            paddingRight: '35px',
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
