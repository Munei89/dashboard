import React from 'react';
import { StyledBtn } from './styles';

export const StyledButton = ({ children, ...props }) => {
  return <StyledBtn {...props}>{children}</StyledBtn>;
};
