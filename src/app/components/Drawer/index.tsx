import React from 'react';
import { IMenu } from 'app/types';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box } from '@mui/material';

interface Props {
  menu: IMenu[];
  window?: () => Window;
}

const drawerWidth = 240;

export const StyledDrawer = ({ menu, window }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={true}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      <Box>
        Sport
        <br />
        Time
      </Box>
      <List>
        {menu.map(({ url, id, icon }) => (
          <ListItem button key={id}>
            <ListItemButton href={url}>
              <ListItemIcon>{icon}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
