import { useDispatch } from 'react-redux';
import * as React from 'react';
import { register } from '../../redux/auth/operations';
import {
  Avatar,
  Button,
  Container,
  Typography,
  CssBaseline,
  TextField,
  Box,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { StyledNavLink } from '../authNav/authNavStyled';
import {
  avatarStyle,
  boxBottomFStyle,
  boxFormStyle,
} from '../../pages/stylePages';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={boxFormStyle}>
        <Avatar sx={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            helperText="The name must contain only letters, apostrophes, hyphens and indents."
            autoComplete="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            fullWidth
            label="Name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            helperText="Please enter a valid email address"
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            helperText="The password must contain at least 7 characters"
            fullWidth
            type="password"
            name="password"
            label="Password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            id="password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={boxBottomFStyle}>
            <StyledNavLink to="/login">
              Already have an account? Sign in
            </StyledNavLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
