import { Avatar, Grid } from "@mui/material";

export const ProfileLayout = ({ children, title }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          background: "white",
          padding: 6,
          borderRadius: 2,
        }}
      >
        <Grid item xs={12} sx={{ mt: 2 }} display="flex">
          <Avatar sx={{ width: 70, height: 70 }} />
        </Grid>
        {children}
      </Grid>
    </Grid>
  );
};
