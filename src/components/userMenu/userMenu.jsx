import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Avatar, Button, Toolbar } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import avatar from '../images/avatar.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      <Avatar alt={user.name} src={avatar} sx={{ width: 36, height: 36 }} />
      <p>Welcome, {user.name}</p>
      <Button
        color="inherit"
        variant="text"
        onClick={() => dispatch(logOut())}
        startIcon={<LogoutOutlinedIcon />}
      >
        Logout
      </Button>
    </Toolbar>
  );
};
