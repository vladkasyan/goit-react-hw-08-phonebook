import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#445cc9',
    },
    secondary: {
      main: '#452cb3',
    },
    error: {
      main: '#9e2818',
    },
  },
});

export default theme;
