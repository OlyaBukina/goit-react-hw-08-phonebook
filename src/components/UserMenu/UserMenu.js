import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/auth-operations';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const avatarLetter = user.email.slice(0, 1).toUpperCase();

  return (
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Avatar sx={{ bgcolor: '#cdc1d5' }}>{avatarLetter}</Avatar>
      <Typography component="p" sx={{ fontSize: '18px' }}>
        {user.email}
      </Typography>
      <Button
        variant="contained"
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
