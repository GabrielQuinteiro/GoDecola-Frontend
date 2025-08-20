import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { RootState } from './app/store';
import { lightTheme, darkTheme } from './styles/theme';
import React from 'react';

// Aceita 'children' para poder encapsular outros componentes
interface AppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const theme = useMemo(() => 
    themeMode === 'light' ? lightTheme : darkTheme, 
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline reseta o CSS e aplica estilos base do tema */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};