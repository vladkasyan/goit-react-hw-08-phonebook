import { Navigation } from '../navigation/navigation';
import { UserMenu } from '../userMenu/userMenu';
import { AuthNav } from '../authNav/authNav';
import { useAuth } from '../../hooks/useAuth';
import { AppBar, Toolbar } from '@mui/material';

const MyAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar>
      <Toolbar
        sx={{ display: 'flex', fontSize: 18, justifyContent: 'space-between' }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
