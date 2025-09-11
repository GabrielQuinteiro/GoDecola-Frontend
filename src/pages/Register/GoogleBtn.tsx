import { Button } from "@mui/material";
import React from "react";

export default function GoogleBtn({ children }: { children: React.ReactNode }) {
  return (
    <Button
      fullWidth
      variant="outlined"
      sx={{ py: 1.2, textTransform: "none" }}
      startIcon={
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          width={20}
          height={20}
        />
      }
    >
      {children}
    </Button>
  );
}