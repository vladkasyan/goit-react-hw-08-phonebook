import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  const { isLoggenIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggenIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
