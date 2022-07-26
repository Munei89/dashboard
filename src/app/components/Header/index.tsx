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

export const Header = () => {
  const today = moment().format('MMM D');

  return (
    <StyledNavHeader maxWidth="xl">
      <Box sx={{ display: 'flex', color: '#fff' }}>
        <span>{today}</span>
        <StyledInput
          placeholder="Search"
          inputProps={{ ariaLabel: 'search' }}
        />
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
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </StyledIconButton>
          </Tooltip>
        </StyledAvatar>
      </Box>
    </StyledNavHeader>
  );
};
