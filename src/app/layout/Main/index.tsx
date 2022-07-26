import React from 'react';
import Box from '@mui/material/Box';
import { StyledDrawer } from 'app/components/Drawer/Loadable';
import { MenuLinks } from 'app/mock';
import { StyledNavHeader } from './styles';
import { Header } from 'app/components/Header/Loadable';
import Grid from '@mui/material/Grid';

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
