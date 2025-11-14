import {
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import { Link as RouterLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../../../app/authConfig";
import { Navigate } from "react-router-dom";

const MenuButton = (props: any) => (
  <Button
    fullWidth
    variant="contained"
    sx={{
      bgcolor: 'common.white',
      color: 'text.primary',
      justifyContent: 'space-between',
      py: 1.5,
      '&:hover': {
        bgcolor: 'grey.200',
      },
    }}
    endIcon={<ArrowForwardIcon />}
    {...props}
  />
);

const MenuContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

export default function AdminMenu() {

  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  }

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <Stack spacing={4} sx={{ width: '100%' }}>
      <Typography variant="h1" sx={{ color: 'common.white', textAlign: 'left' }}>
        Go Decola
      </Typography>

      <MenuContainer>
        <MenuButton onClick={handleLogin}>
          Entrar
        </MenuButton>

        <Divider sx={{ my: 1.5 }} />

        <MenuButton>
          Lorem Ipsum
        </MenuButton>
        
        <Divider sx={{ my: 1.5 }} />
        
        <MenuButton>
          Lorem Ipsum
        </MenuButton>
      </MenuContainer>
    </Stack>
  );
}