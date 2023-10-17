import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Toolbar } from '@mui/material';
import { StyledNavLink, toolbarStyle } from '../authNav/authNavStyled';

export const Navigation = () => {
  const { isLoggenIn } = useAuth();

  return (
    <Toolbar sx={toolbarStyle}>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggenIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Toolbar>
  );
};
