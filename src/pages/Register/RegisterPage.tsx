import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Form from "./Form";
import Carousel from "./Carousel";
import DetailsForm from "./DetailsForm";
import { AppThemeProvider } from "../../AppThemeProvider";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

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
            {step === 1 ? (
              <Form onNext={handleNext} />
            ) : (
              <DetailsForm onBack={handleBack} />
            )}
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