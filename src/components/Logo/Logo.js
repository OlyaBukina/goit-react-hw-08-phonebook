import { useTheme } from '@mui/material';
import { LogoWrapper, LogoSpan } from './Logo.styled';

export const Logo = () => {
  const theme = useTheme();
  return (
    <LogoWrapper to="/">
      <LogoSpan color={theme.palette.primary.main}>P</LogoSpan> |{' '}
      <p>Phonebook</p>
    </LogoWrapper>
  );
};
