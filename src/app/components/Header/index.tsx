import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import {
  StyledInput,
  StyledIconButton,
  StyledUsername,
  StyledAvatar,
  StyledNavHeader,
} from './styles';
import moment from 'moment';
import { MenuIcon } from 'app/assets/icons';
import { useInjectReducer } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from 'app/slice';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Header = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const dispatch = useDispatch();
  const today = moment().format('MMM D');

  return (
    <StyledNavHeader maxWidth="xl">
      <Box
        sx={{
          position: 'absolute',
          left: '40px',
          xs: {
            display: 'block',
          },
          lg: {
            display: 'none',
          },
        }}
        onClick={() => dispatch(actions.setDrawerOpen())}
      >
        <MenuIcon />
      </Box>
      <Box sx={{ display: 'flex', color: '#fff' }}>
        {isLg && <span>{today}</span>}
        {isLg && <StyledInput placeholder="Search" />}
        <StyledUsername>
          {' '}
          <p>
            Eleanor Pena
            <br />
            <span>Admin</span>
          </p>
        </StyledUsername>
        <StyledAvatar>
          <Tooltip title="Open Profile">
            <StyledIconButton>
              <Avatar alt="Eleanor Pena" src="/static/images/avatar/2.jpg" />
            </StyledIconButton>
          </Tooltip>
        </StyledAvatar>
      </Box>
    </StyledNavHeader>
  );
};
