import { Alert, Grid } from "@mui/material";
import React from "react";

export const ErrorMessage = ({ message }) => {
  return (
    <Grid item xs={12} display={!!message ? "" : "none"}>
      <Alert severity="error">{message}</Alert>
    </Grid>
  );
};
