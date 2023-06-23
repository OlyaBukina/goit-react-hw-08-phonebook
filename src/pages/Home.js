import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { TitleSpan, TitleWrapper } from './Pages.styled';

const Home = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
      <TitleWrapper>
        <Typography component="h1" variant="h2">
          Enjoy symple{' '}
          <TitleSpan color={theme.palette.primary.main}>phonebook</TitleSpan>{' '}
          App
        </Typography>
      </TitleWrapper>
    </Box>
  );
};

export default Home;
