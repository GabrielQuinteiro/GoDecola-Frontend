import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  Checkbox,
  FormControlLabel,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleBtn from "../Register/GoogleBtn";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);

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

      <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        Bem-vindo de volta!
      </Typography>

      <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>Email</Typography>
      <TextField fullWidth placeholder="exemplo@email.com" sx={{ mb: 2 }} />

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
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <FormControlLabel 
          control={
            <Checkbox 
              color="primary" 
              sx={{
                color: 'grey.500',
                '&.Mui-checked': {
                  color: 'primary.main',
                },
              }}
            />
          } 
          label="Continuar logado" 
        />
        <MuiLink href="#" underline="hover">
          Esqueceu a senha?
        </MuiLink>
      </Box>

      <Button fullWidth variant="contained" sx={{ mt: 2, py: 1.5 }}>
        Log in
      </Button>
      <Divider sx={{ my: 2 }}>ou</Divider>
      <GoogleBtn>
        Entre com Google
      </GoogleBtn>

      <Typography sx={{ mt: 3, textAlign: 'center' }}>
        Ainda não tem conta?{' '}
        <MuiLink component={RouterLink} to="/cadastro" underline="hover">
          Faça seu cadastro agora!
        </MuiLink>
      </Typography>
    </>
  );
}