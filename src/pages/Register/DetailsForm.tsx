import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  IconButton,
  Box,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function DetailsForm({ onBack }: { onBack: () => void }) {
  const [docType, setDocType] = useState("CPF");

  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 16,
    today.getMonth(),
    today.getDate()
  ).toISOString().split("T")[0];

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={onBack} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography color="primary" variant="h1">
          Go Decola
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom>
        Falta só mais alguns detalhes
      </Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={6}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>Telefone</Typography>
          <TextField fullWidth placeholder="+XX (XX) XXXXX-XXXX" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>Data de nascimento</Typography>
          <TextField
            fullWidth
            type="date"
            inputProps={{ max: maxDate }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>{docType}</Typography>
          <TextField
            fullWidth
            placeholder={docType === 'CPF' ? '000.000.000-00' : 'XXXXXXXX'}
            inputProps={{ maxLength: docType === 'CPF' ? 11 : 8 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FormControl variant="standard" sx={{ mr: 2 }}>
                    <Select
                      value={docType}
                      onChange={(e) => setDocType(e.target.value)}
                      disableUnderline
                    >
                      <MenuItem value="CPF">CPF</MenuItem>
                      <MenuItem value="RNE">RNE</MenuItem>
                    </Select>
                  </FormControl>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Button fullWidth variant="contained" sx={{ mt: 3, py: 1.5 }}>
        Criar conta
      </Button>
    </>
  );
}