import { Box, Button, Container, Typography } from "@mui/material";
import heroBgImage from '../../../assets/images/HomeBanner.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRef } from "react";
import { setHeroHeight } from "../../layout/layoutSlice";
import { useElementHeight } from "../../../hooks/useElementHeight";

const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);

    useElementHeight(heroRef, setHeroHeight);

    return (
        <Box
            ref={heroRef}
            sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${heroBgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
            }}
            aria-label="Mulher sorrindo com mochila e chapéu segurando uma garrafa térmica durante uma viagem"
        >
            <Container
                sx={{
                    marginLeft: (theme) => theme.spacing(1)
                }}
            >
                <Typography
                    variant="h1"
                    component="div"
                    sx={{
                        color: (theme) => theme.palette.common.white,
                        textAlign: 'left'
                    }}
                >
                    Seu próximo destino <br />é com a Go Decola!
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        color: (theme) => theme.palette.common.white,
                        marginTop: (theme) => theme.spacing(2),
                        fontWeight: 200
                    }}
                >
                    Sonhar com seu próximo destino nunca foi tão fácil com
                    a Go Decola
                </Typography>

                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        padding: (theme) => theme.spacing(1, 2),
                        marginTop: (theme) => theme.spacing(4),
                        backgroundColor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.common.white,
                        '&:hover': {
                            backgroundColor: (theme) => theme.palette.primary.dark,
                        },
                    }}
                >
                    Veja mais
                </Button>
            </Container>

        </Box>
    )
}

export default HeroSection;