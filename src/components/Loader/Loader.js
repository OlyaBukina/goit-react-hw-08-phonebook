import { ThreeDots } from 'react-loader-spinner';
import { Box, useTheme } from '@mui/material';

export const Loader = ({ position = 'center', height = '100vh' }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <ThreeDots
        color={theme.palette.primary.main}
        strokeWidth="5"
        animationDuration="0.75"
        width="56"
        height="40"
        visible={true}
        wrapperStyle={{
          justifyContent: 'center',
          display: 'flex',
          minHeight: height,
          alignItems: position,
        }}
      />
    </Box>
  );
};
