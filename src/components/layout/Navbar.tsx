import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { setNavbarHeight } from '../../features/layout/layoutSlice';
import { useElementHeight } from '../../hooks/useElementHeight';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Navbar: React.FC = () => {
    const appBarRef = useRef<HTMLElement>(null);
    useElementHeight(appBarRef, setNavbarHeight);
    
    const scrollY = useScrollPosition();

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // pega as alturas da navbar e do hero
    const { heroHeight, navbarHeight } = useAppSelector((state) => state.layout);

    // verifica se a rolagem começou e se a rolagem passou do hero
    const hasStartedScrolling = scrollY > 10;
    const isScrolledPastHero = heroHeight > 0 && scrollY >= heroHeight - navbarHeight;

    // define se o background solido ou o efeito fosco deve ser aplicado
    const showSolidBackground = !isHomePage || isScrolledPastHero;
    const showFrostedEffect = !isHomePage || (isHomePage && hasStartedScrolling);

    return (
        <AppBar
            ref={appBarRef}
            position="fixed"
            elevation={0} // remove sombra padrão
            sx={{
                backgroundColor: showSolidBackground ? 'background.paper' : 'transparent',
                color: (theme) => theme.palette.primary.main,
            }}
        >
            <Toolbar 
                sx={{
                    margin: (theme) =>  theme.spacing(1, 2),
                    border: (theme) => showFrostedEffect ? `1.5px solid ${theme.palette.primary.main}` : 'none',
                    borderRadius: showFrostedEffect ? 2 : 0,
                    backdropFilter: showFrostedEffect ? 'blur(5px)' : 'none',
                }}
            >
                <Typography
                    variant="h1"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Go Decola
                </Typography>

                <Box
                    sx={{
                        marginRight: (theme) => theme.spacing(3)
                    }}
                >
                    <Button color="inherit">
                        <Typography
                            variant='h6'
                        >
                            Pacotes
                        </Typography>
                    </Button>
                    <Button color="inherit">
                        <Typography
                            variant='h6'
                        >
                            Promoções
                        </Typography>
                    </Button>
                    <Button color="inherit">
                        <Typography
                            variant='h6'
                        >
                            Minhas Reservas
                        </Typography>
                    </Button>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'text.secondary',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        },
                    }}
                >
                    <Typography
                        variant='h6'
                    >
                        Entrar
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;