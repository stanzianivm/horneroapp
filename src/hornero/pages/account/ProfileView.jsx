import { useSelector } from "react-redux";
import { Avatar, Button, Grid, TextField } from "@mui/material";
import { ProfileLayout } from "./layout/ProfileLayout";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export const ProfileView = () => {
  const auth = useSelector((state) => state.auth.user);

  return (
    <ProfileLayout title="My Profile">
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }} display="flex">
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              component={Link}
              to="/editProfile"
              variant="outlined"
              startIcon={<EditIcon />}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            id="standard-read-only-input"
            label="User name"
            defaultValue={auth.username}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            id="standard-read-only-input"
            label="Email"
            defaultValue={auth.email}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            id="standard-read-only-input"
            label="Rol"
            defaultValue={auth.rol}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            fullWidth
          />
        </Grid>
        {/* <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button type="submit" variant="contained" fullWidth>
              Edit Profile
            </Button>
          </Grid>
        </Grid> */}
      </Grid>
    </ProfileLayout>
  );
};
