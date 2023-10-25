import { useAuth } from '../../hooks/useAuth';
import { Toolbar } from '@mui/material';
import { StyledNavLink, toolbarStyle } from '../authNav/authNavStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar sx={toolbarStyle}>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Toolbar>
  );
};
