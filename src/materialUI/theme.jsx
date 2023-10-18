import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#785118',
    },
    secondary: {
      main: '#c2811f',
    },
    error: {
      main: '#9e2818',
    },
  },
});

export default theme;
