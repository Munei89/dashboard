import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    // type: 'light',
    primary: {
      main: '#000000',
      light: '#ffffff',
      dark: '#000000',
    },
    secondary: {
      main: '#f50057',
      light: '#008e8a',
      dark: '#008e8a',
    },
    background: {
      default: '#000000',
      paper: 'rgba(0,0,0,0)',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: '#bdbdbd',
      disabled: 'rgba(105,72,72,0.46)',
      // hint: '#008e8a',
    },
    divider: '#008e8a',
  },
};
