import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AppThemeProvider } from "../../AppThemeProvider";
import Carousel from "../Register/Carousel";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <AppThemeProvider>
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 500, p: 3 }}>
            <LoginForm />
          </Box>
        </Grid>
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            bgcolor: "background.default",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Carousel />
        </Grid>
      </Grid>
    </AppThemeProvider>
  );
}