import { createTheme } from '@mui/material/styles';

// Extensões do Theme
declare module '@mui/material/styles' {
  interface Theme {
    appBar: {
      height: string;
    };
  }
  interface ThemeOptions {
    appBar?: {
      height?: string;
    };
  }
}

// Tokens de Design
const typography = {
  fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '3rem',
    fontWeight: 500,
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 500,
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 500,
  },
};

const shape = {
  borderRadius: 10,
};

const appBar = {
  height: '4rem',
};

// Tema Base
const baseTheme = createTheme({
  typography,
  shape,
  spacing: 8,
  appBar,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 2,
      },
    },
  },
});

// Tema Light
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: { main: '#F29933' },
    secondary: { main: '#66676b' },
    background: {
      default: '#F5F5F5',
      paper: '#F9F9F9',
    },
    text: {
      primary: '#66676b',
      secondary: '#F5F5F5',
    },
  },
});


// Tema Dark
export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: { main: '#FF9215' },
    secondary: { main: '#F5F5F5' },
    background: {
      default: '#2e2e2e',
      paper: '#3f3f3f',
    },
    text: {
      primary: '#F29933',
      secondary: '#F5F5F5',
    },
  },
});
