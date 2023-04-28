import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";
import { useCheckAuth, useForm } from "../../hooks";
import { startLoginWithEmailPassword } from "../../store/auth/thunks";
import { clearMessage } from "../../store/messaje/messageSlice";

export const LoginPage = () => {
  const initialForm = {
    email: "",
    password: "",
  };

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const { isLoading } = useCheckAuth();
  const { onInputChange, values, validationsRequired, error } =
    useForm(initialForm);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!validationsRequired()) return;
    dispatch(startLoginWithEmailPassword(values));
  };

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={values.email}
              onChange={onInputChange}
              error={!!error.emailMessage}
              helperText={error.emailMessage && "Email is required"}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={values.password}
              onChange={onInputChange}
              error={!!error.passwordMessage}
              helperText={error.passwordMessage && "Password is required"}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!message ? "" : "none"}>
              <Alert severity="error">{message}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                disabled={isLoading}
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={0} direction="column" alignItems="end">
            <Grid item xs={12} sm={6}>
              <Link component={RouterLink} to="/auth/register" color="inherit">
                Don't have account?
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
