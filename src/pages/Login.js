import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logIn } from 'redux/auth/auth-operations';
import { ErrorMes } from './Pages.styled';
import {
  FormControl,
  Grid,
  Box,
  Button,
  Container,
  Typography,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is a required field!')
    .matches(/\S+@\S+\.\S+/, `Email is invalid`),
  password: yup
    .string()
    .required('Password is a required field!')
    .min(
      7,
      'Your password must be 7-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.'
    ),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <>
      <Container
        component="div"
        maxWidth="xs"
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '18px',
          borderRadius: '10px',
        }}
      >
        <Typography component="h2" variant="h5">
          Log in
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register('email', { required: true })}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  error={errors.password ? true : false}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  error={errors.password ? true : false}
                  name="password"
                  required
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {errors.password && (
                <ErrorMes>{errors.password?.message}</ErrorMes>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log in
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
