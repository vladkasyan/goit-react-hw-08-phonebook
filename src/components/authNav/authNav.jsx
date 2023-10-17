import { Toolbar } from '@mui/material';

import { StyledNavLink, toolbarStyle } from './authNavStyled';

export const AuthNav = () => {
  return (
    <Toolbar sx={toolbarStyle}>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </Toolbar>
  );
};
