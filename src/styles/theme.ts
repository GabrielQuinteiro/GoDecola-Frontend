import { createTheme } from '@mui/material/styles';

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

// Crie um tema base que será compartilhado entre light e dark mode
const baseTheme = createTheme({
  // Seção de Tipografia: defina fontes, pesos e tamanhos
  typography: {
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
      textTransform: 'none', // Para que os botões não fiquem em MAIÚSCULAS
      fontWeight: 500,
    },
  },

  appBar: {
      height: '4rem',
  },

  // Seção de Espaçamento: a base é 8px. theme.spacing(4) será 32px.
  spacing: 8,

  // Seção de Formas: defina o arredondamento padrão dos componentes
  shape: {
    borderRadius: 10,
  },

  // Seção de Componentes: sobrescreva o estilo padrão de componentes específicos
  components: {
    // Exemplo: todo botão primário terá a elevação (sombra) desabilitada
    MuiButton: {
      styleOverrides: {
        root: {
          disableElevation: true,
        },
      },
    },
    // Exemplo: todo Card começará com uma sombra mais sutil
    MuiCard: {
      styleOverrides: {
        root: {
          elevation: 2,
        }
      }
    }
  }
});

export const lightTheme = createTheme({
  ...baseTheme, // Herda todas as configurações base
  palette: {
    mode: 'light',
    primary: {
      main: '#F29933',
    },
    secondary: {
      main: '#66676b',
    },
    background: {
      default: '#F5F5F5', // Fundo principal da página
      paper: '#F9F9F9',   // Fundo de componentes como Card, Paper, etc.
    },
    text: {
      primary: '#66676b',
      secondary: '#F5F5F5',
    }
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF9215',
    },
    secondary: {
      main: '#F5F5F5',
    },
    background: {
      default: '#2e2e2e',
      paper: '#3f3f3f',
    },
    text: {
      primary: '#F29933',
      secondary: '#F5F5F5',
    }
  },
});