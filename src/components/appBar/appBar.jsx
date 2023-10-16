import { Navigation } from '../navigation/navigation';
import { UserMenu } from '../userMenu/userMenu';
import { AuthNav } from '../authNav/authNav';
import { useAuth } from '../../hooks/useAuth';


const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar