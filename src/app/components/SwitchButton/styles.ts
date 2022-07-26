import styled from 'styled-components/macro';
import Switch from '@mui/material/Switch';

export const StyledSwitchButton = styled(Switch)`
  &.MuiSwitch-root {
    width: 80px;
    height: 48px;
    padding: 10px;
    margin-left: -10px;
    .Mui-checked + .MuiSwitch-track {
      background-color: #39bd45;
      opacity: 1;
    }
    .Mui-checked {
      color: #fff;
    }
  }
  .MuiSwitch-track {
    background-color: #434a59;
    border-radius: 40px;
  }
  .MuiSwitch-thumb {
    margin-top: 5px;
    margin-left: 7px;
  }
  .Mui-checked {
    color: #39bd45;
    .MuiSwitch-thumb {
      margin-left: 17px;
    }
  }
`;

export const StyledSwitchWrapper = styled.div`
  color: #fff;
  display: flex;
  margin: 16px 0;

  p {
    margin-top: 8px;
    margin-bottom: -8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  div {
    flex-grow: 1;
  }
`;
