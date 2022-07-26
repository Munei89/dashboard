import React, { useState, useEffect } from 'react';
import { IMenu } from 'app/types';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface Props {
  menu: IMenu[];
  drawerOpen: boolean;
  onClose: () => void;
}

export const StyledDrawer = ({ menu, drawerOpen, onClose }: Props) => {
  const [activeLink, setActiveLink] = useState('');
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  let drawerWidth;

  if (!isLg) {
    drawerWidth = 107;
  } else {
    drawerWidth = 207;
  }

  return (
    <Box
      component="nav"
      sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="menu"
    >
      <Drawer
        variant={isLg ? 'permanent' : 'temporary'}
        open={drawerOpen}
        anchor="left"
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'rgba(4, 4, 21, 1)',
          },
        }}
      >
        <Box
          sx={{
            color: '#fff',
            fontWeight: '700',
            fontSize: '30px',
            padding: '50px',
            lineHeight: '36px',
            paddingLeft: ['40px', '40px', '40px', '100px'],
            paddingRight: '0px',
          }}
        >
          {!isLg ? (
            <>ST</>
          ) : (
            <>
              Sport
              <br />
              Time
            </>
          )}
        </Box>
        <List>
          {menu.map(({ url, id, icon }) => (
            <ListItem button key={id} sx={{ padding: '0' }}>
              <ListItemButton
                sx={{
                  height: '80px',
                  border: `${
                    activeLink === url ? '1.5px solid #008E8A' : '0px'
                  }`,
                  borderRadius: '50px',
                  marginLeft: '-100px',
                  marginBottom: '16px',
                  justifyContent: 'flex-end',
                }}
                href={url}
                onClick={() => {
                  setActiveLink(url);
                  !isLg && onClose();
                }}
                disableTouchRipple
              >
                <ListItemIcon
                  sx={{
                    background: '#292E39',
                    height: '60px',
                    width: '60px',
                    textAlign: 'center',
                    padding: '16px',
                    borderRadius: '50px',
                  }}
                >
                  {icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
