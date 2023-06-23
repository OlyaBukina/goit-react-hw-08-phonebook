import { Box } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

import { Button } from '../Button/Button.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Button to="/">Home</Button>
      {isLoggedIn && <Button to="/contacts">Contacts</Button>}
    </Box>
  );
};
