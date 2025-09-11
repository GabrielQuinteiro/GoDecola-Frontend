import { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  Link as MuiLink,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleBtn from "./GoogleBtn";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Form({ onNext }: { onNext: () => void }) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconButton component={RouterLink} to="/" sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography color="primary" variant="h1">
          Go Decola
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Pronto para embarcar?
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>Seu nome</Typography>
          <TextField fullWidth placeholder="João" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>Sobrenome</Typography>
          <TextField fullWidth placeholder="Da Silva" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>Email</Typography>
          <TextField fullWidth placeholder="exemplo@email.com" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>Senha</Typography>
          <TextField
            fullWidth
            type={showPass ? "text" : "password"}
            placeholder="************"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPass(!showPass)}>
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>Confirme sua senha</Typography>
          <TextField
            fullWidth
            type={showConfirm ? "text" : "password"}
            placeholder="************"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      
      <Button fullWidth variant="contained" sx={{ mt: 3, py: 1.5 }} onClick={onNext}>
        Criar conta
      </Button>
      <Divider sx={{ my: 2 }}>ou</Divider>
      <GoogleBtn>Crie com Google</GoogleBtn>

      <Typography sx={{ mt: 3, textAlign: 'center' }}>
        Já tem uma conta?{' '}
        <MuiLink component={RouterLink} to="/login" underline="hover">
          Faça seu login
        </MuiLink>
      </Typography>
    </>
  );
}