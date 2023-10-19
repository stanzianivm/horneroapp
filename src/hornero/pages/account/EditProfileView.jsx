import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { ProfileLayout } from "./layout/ProfileLayout";
import { rolsData } from "../../../services/data/MockRolsApi";
import { useCheckAuth } from "../../../hooks";
import { updateUserAuth } from "../../../store/auth/thunks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaEdit } from "../../../helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { clearMessages } from "../../../store/messaje/messageSlice";

export const EditProfileView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const auth = useSelector((state) => state.auth.user);
  const { isLoading, user } = useCheckAuth();
  // console.log(user);
  const { errorMessage, successMessage } = useSelector(
    (state) => state.message
  );
  const [rol, setRol] = useState(user.rol);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaEdit),
    mode: "onChange",
  });

  const redirectButton = (path) => {
    navigate(path, {
      replace: true,
    });
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    dispatch(updateUserAuth(data));
  };

  // useEffect(() => {
  //   const fields = ["username", "email", "rol"];
  //   fields.forEach((field) => setValue(field, user[field]));
  //   dispatch(clearMessages());
  // }, []);

  useEffect(() => {
    const fields = ["username", "email", "rol"];
    fields.forEach((field) => setValue(field, user[field]));
    dispatch(clearMessages());

    if (errorMessage !== null) {
      Swal.fire({ icon: "error", title: "Error", html: errorMessage });
    }

    if (successMessage !== null) {
      Swal.fire({
        icon: "success",
        title: "Success",
        html: successMessage,
        confirmButtonText: "Success",
      }).then(() => {
        redirectButton("/");
      });
    }
  }, [successMessage, errorMessage]);

  return (
    <ProfileLayout title="My Profile">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              id="standard-required"
              label="Username"
              variant="standard"
              fullWidth
              name="username"
              {...register("username")}
              error={errors.username?.message ? true : false}
              helperText={errors.username?.message}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              id="standard-read-only-input"
              label="Email"
              name="email"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
              fullWidth
              disabled
              {...register("email")}
              // error={errors.email?.message ? true : false}
              // helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              id="demo-simple-select-standard"
              variant="standard"
              select
              label="Rol"
              fullWidth
              name="rol"
              {...register("rol")}
              error={errors.rol?.message ? true : false}
              helperText={errors.rol?.message}
              // defaultValue={auth.rol ?? ""}
              value={rol}
              onChange={(e) => {
                setRol(e.target.value);
              }}
            >
              <MenuItem disabled value="" style={{ display: "none" }}>
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
            <Grid item xs={12} sm={12} display="flex" justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                disabled={!isValid || isLoading}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </ProfileLayout>
  );
};
