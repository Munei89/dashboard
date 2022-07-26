import styled from 'styled-components/macro';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';

export const StyledInput = styled(Input)`
  &.MuiInput-root {
    margin: 0 30px;
    color: #fff;
    height: 50px;
    margin-top: -16px;
    &:before {
      border-bottom: 3px solid rgba(0, 142, 138, 1);
    }
    &:after {
      border-bottom: 3px solid rgba(0, 142, 138, 1);
    }
  }
`;

export const StyledIconButton = styled(IconButton)`
  &.MuiButtonBase-root {
    color: #fff;
  }
`;

export const StyledUsername = styled.div`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  text-align: right;
  p {
    margin-top: 0;
  }
  span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-weight: 500;
  }
`;

export const StyledAvatar = styled.div`
  .MuiAvatar-root {
    width: 72px;
    height: 72px;
    margin-top: -16px;
    margin-left: 16px;
  }
`;

export const StyledNavHeader = styled(Container)`
  &.MuiContainer-root {
    display: flex;
    justify-content: flex-end;
    padding: 60px 60px 30px;
    color: #fff;
  }
`;
