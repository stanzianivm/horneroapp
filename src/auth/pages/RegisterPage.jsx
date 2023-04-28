import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCheckAuth } from "../../hooks";
import { rolsData } from "../../services/data/MockRolsApi";
import { AuthLayout } from "../layout/AuthLayout";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { clearMessages } from "../../store/messaje/messageSlice";
import { schemaRegister } from "../../helpers/schemas/schemasRegister";
import { ErrorMessage } from "../../ui/components/ErrorMessage/ErrorMessage";
import { ShowPassword } from "../../ui/components/ShowPassword";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.message);
  const { isLoading } = useCheckAuth();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaRegister),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(startCreatingUserWithEmailPassword(data));
  };

  useEffect(() => {
    dispatch(clearMessages());
  }, []);

  // useEffect(() => {
  //   trigger("password");
  // }, [trigger]);

  return (
    <AuthLayout title="Create account">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="username *"
              type="text"
              placeholder="username"
              fullWidth
              name="username"
              {...register("username")}
              error={errors.username?.message ? true : false}
              helperText={errors.username?.message}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email *"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              {...register("email")}
              error={errors.email?.message ? true : false}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <ShowPassword
              register={register}
              registerName="password"
              message={errors.password?.message}
              label="password *"
              placeholder="Password"
              name="password"
              showMessageCondition={true}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <ShowPassword
              register={register}
              registerName="confirmPassword"
              message={errors.confirmPassword?.message}
              label="confirm password *"
              placeholder="Confirm Password"
              name="confirmPassword"
              showMessageCondition={false}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name="rol"
              select
              label="rol *"
              fullWidth
              {...register("rol")}
              error={errors.rol?.message ? true : false}
              helperText={errors.rol?.message}
              defaultValue=""
            >
              <MenuItem disabled style={{ display: "none" }}>
                Select Rol
              </MenuItem>
              {rolsData.map((rol) => (
                <MenuItem key={rol.id} value={rol.name}>
                  {rol.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <ErrorMessage message={errorMessage} />
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={!isValid || isLoading}
              >
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end" alignItems="end">
            <Typography sx={{ mr: 1 }}>Do you have account?</Typography>
            <Link component={RouterLink} to="/auth/login" color="inherit">
              Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
