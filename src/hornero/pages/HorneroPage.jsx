import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, MenuItem, TextField, Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const HorneroPage = () => {
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Plaza Land
          </Typography>
          <Typography
            variant="p"
            align="center"
            color="text.secondary"
            paragraph
          >
            Calle 6 572, La Plata, Buenos Aires Province, Argentina
          </Typography>
          <Typography
            variant="p"
            align="center"
            color="text.secondary"
            paragraph
          >
            85 Spots, 1 floors
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{ width: 200 }} />
            </LocalizationProvider>
            <TextField
              // onChange={onInputChange}
              // value={rol ?? ""}
              name="floors"
              label="Floors"
              sx={{ width: 200 }}
              select
              // error={!!rolValid && formSubmitted}
              // helperText={Boolean(formSubmitted) ? rolValid : ""}
            >
              <MenuItem>1st floor</MenuItem>
              {/* {rols.map((rol) => (
              <MenuItem key={rol.id} value={rol.name}>
                {rol.name}
              </MenuItem>
            ))} */}
            </TextField>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8, width: "25%" }}>
        <Grid container spacing={4}>
          <Grid item>
            <Typography variant="h1">MAP</Typography>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
