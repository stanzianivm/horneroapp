import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCheckAuth } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";
import { startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { clearMessages } from "../../store/messaje/messageSlice";
import { schemaLogin } from "../../helpers/schemas/schemaLogin";
import { ShowPassword } from "../../ui/components/ShowPassword";
import { ErrorMessage } from "../../ui/components/ErrorMessage/ErrorMessage";

export const LoginPage = () => {
  const { errorMessage } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const { isLoading } = useCheckAuth();
  const navigate = useNavigate();

  const initialForm = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: initialForm,
  });

  const onSubmit = async (data) => {
    // const lastPath = localStorage.getItem("lastPath" || "/");

    await dispatch(startLoginWithEmailPassword(data));

    // navigate(lastPath, {
    //   replace: true,
    // });
  };

  useEffect(() => {
    dispatch(clearMessages());
  }, []);

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email"
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
              label="password"
              placeholder="password"
              name="password"
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <ErrorMessage message={errorMessage} />
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                disabled={!isValid || isLoading}
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
