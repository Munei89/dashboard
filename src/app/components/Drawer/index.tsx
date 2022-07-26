import React, { useState, useEffect } from 'react';
import { IMenu } from 'app/types';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box } from '@mui/material';

interface Props {
  menu: IMenu[];
}

const drawerWidth = 207;

export const StyledDrawer = ({ menu }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="menu"
    >
      <Drawer
        variant="permanent"
        open={true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
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
          }}
        >
          Sport
          <br />
          Time
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
                onClick={() => setActiveLink(url)}
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
