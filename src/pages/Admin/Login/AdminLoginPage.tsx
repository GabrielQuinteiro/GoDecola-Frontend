import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AppThemeProvider } from "../../../AppThemeProvider";
import AdminMenu from "./AdminMenu";
import { styled } from '@mui/material/styles';
import adminImageUrl from '../../../assets/images/admin-login-background.jpg';

const StyledImage = styled('img')(({ theme }) => ({
  width: 538,
  height: 816,
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  maxHeight: '90vh',
}));

export default function AdminLoginPage() {
  return (
    <AppThemeProvider>
      <Grid container sx={{ minHeight: "100vh", bgcolor: 'primary.main' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: "center",
            p: 3,
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <AdminMenu />
          </Box>
        </Grid>
        
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
          }}
        >
          {}
          <StyledImage
            src={adminImageUrl}
            alt="Pessoas em uma reunião de trabalho"
          />
        </Grid>
      </Grid>
    </AppThemeProvider>
  );
}