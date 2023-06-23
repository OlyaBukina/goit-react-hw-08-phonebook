import { Box } from '@mui/material';
import { Button } from '../Button/Button.styled';

export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Button to="/signup">Sign up</Button>
      <Button to="/login">Log in</Button>
    </Box>
  );
};
