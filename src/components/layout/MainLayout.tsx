import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
// 1. Importe o seu provedor de tema
import { AppThemeProvider } from '../../AppThemeProvider.tsx';

const MainLayout: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    return (
        <AppThemeProvider>
            <Navbar />
            <Box 
                component="main"
                sx={{ paddingTop: isHomePage ? 0 : theme.appBar.height }}
            >
                <Outlet />
            </Box>
        </AppThemeProvider>
    );
}

export default MainLayout;