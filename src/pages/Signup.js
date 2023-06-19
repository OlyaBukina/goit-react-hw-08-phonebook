import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUp } from '../redux/auth/auth-operations';
import { ErrorMes } from './Pages.styled';

// import {
//   FormControl,
//   Grid,
//   Box,
//   Button,
//   CssBaseline,
//   Container,
//   Typography,
//   TextField,
//   InputLabel,
//   OutlinedInput,
//   InputAdornment,
//   IconButton,
//   Visibility,
//   VisibilityOff,
// } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field!')
    .min(2, 'Too short name!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    ),
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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const onSubmit = data => {
    dispatch(signUp(data));
    reset();
  };

  // const onSubmit = event => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   const signupUserData = {
  //     name: form.elements.name.value,
  //     email: form.elements.email.value,
  //     password: form.elements.password.value,
  //   };
  //   dispatch(signUp(signupUserData));
  //   form.reset();
  // };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
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
                {...register('name')}
                error={errors.name ? true : false}
                helperText={errors.name?.message}
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                {...register('email')}
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
                  {...register('password')}
                  error={errors.password ? true : false}
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
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
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
