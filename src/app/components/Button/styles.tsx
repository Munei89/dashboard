import styled from 'styled-components/macro';
import Button from '@mui/material/Button';

export const StyledBtn = styled(Button)<{
  variant?: string;
  buttontype?: string;
}>`
  &.MuiButton-root {
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    ${({ buttontype }) => {
      switch (buttontype) {
        case 'primary':
          return `
                    background-color: #fff;
                    color: #008E8A;
                    &:hover {
                        background-color: #008E8A;
                        color: #fff;
                    }
                `;
        case 'secondary':
          return `
                    background-color: rgba(31, 31, 37, 1);
                    color: #008E8A;
                    border: 1px solid #008E8A;
                    &:hover {
                        background-color: #008E8A;
                        color: #fff;
                        border: none;
                    }
                `;
        default:
          return `
                    background-color: transperent;
                    color: #008E8A;
                `;
      }
    }}
`;
