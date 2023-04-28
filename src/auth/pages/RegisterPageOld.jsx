import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  Grid,
  TextField,
  Typography,
  Button,
  Alert,
  MenuItem,
  Popover,
  IconButton,
  InputAdornment,
  List,
  ListItem,
} from "@mui/material";
import { rolsData } from "../../services/data/MockRolsApi";
import { useCheckAuth, useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { clearMessage } from "../../store/messaje/messageSlice";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoIcon from "@mui/icons-material/Info";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { ErrorSharp } from "@mui/icons-material";
import { PASSWORD, ROL } from "../../helpers/types";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  const { isLoading } = useCheckAuth();

  //#region Popover
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  //#endregion

  const [typePassword, setTypePassword] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

  const initialForm = {
    username: "",
    email: "",
    password: "",
    rol: "",
  };

  const { onInputChange, values, error, isFormValid, createValidators } =
    useForm(initialForm);

  //#region Functions
  const isShowPassword = () => {
    if (showPassword) {
      setTypePassword("password");
      setShowPassword(false);
    } else {
      setTypePassword("text");
      setShowPassword(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createValidators();
    console.log("isformvalid", isFormValid);
    console.log("error", error);

    let pepe = Object.keys(error).some(([key, value]) => {
      console.log("e", error);
      return value === "";
    });

    console.log("pepe", pepe);
    if (pepe) return;

    // dispatch(startCreatingUserWithEmailPassword(values));
  };
  //#endregion

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  return (
    <AuthLayout title="Create account">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="username *"
              type="text"
              placeholder="username"
              fullWidth
              name="username"
              value={values.username}
              onChange={onInputChange}
              error={!!error.messageErrorUserName}
              helperText={
                error.messageErrorUserName && error.messageErrorUserName
              }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email *"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={values.email}
              onChange={onInputChange}
              error={!!error.messageErrorEmail}
              helperText={error.messageErrorEmail && error.messageErrorEmail}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="password *"
              type={typePassword}
              placeholder="Password"
              fullWidth
              name="password"
              value={values.password}
              onChange={onInputChange}
              error={!!error.messageErrorPassword?.length > 0}
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      variant="contained"
                      onClick={isShowPassword}
                    >
                      {showPassword ? (
                        <RemoveRedEyeIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                    <IconButton
                      edge="end"
                      color="info"
                      aria-describedby={id}
                      variant="contained"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                    >
                      <InfoIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <List>
                <ListItem>Longer than 6 characters</ListItem>
                <ListItem>Shorter than 20 characters</ListItem>
                <ListItem>Minimum of 1 lower case letter [a-z]</ListItem>
                <ListItem>Minimum of 1 upper case letter [A-Z]</ListItem>
                <ListItem>Minimum of 1 numeric character [0-9]</ListItem>
                <ListItem>Minimum of 1 special character</ListItem>
              </List>
            </Popover>
            <Grid item display="inline-grid">
              {error.messageErrorPassword &&
                error.messageErrorPassword.map((pem, index) => (
                  <Typography
                    key={index}
                    variant="p"
                    color="red"
                    fontSize={12}
                    sx={{ ml: 2 }}
                  >
                    {pem}
                  </Typography>
                ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              onChange={onInputChange}
              value={values.rol ?? ""}
              name="rol"
              select
              label="rol *"
              fullWidth
              error={!!error.messageErrorRol}
              helperText={error.messageErrorRol && error.messageErrorRol}
            >
              {rolsData.map((rol) => (
                <MenuItem key={rol.id} value={rol.name}>
                  {rol.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!message ? "" : "none"}>
              <Alert severity="error">{message}</Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={!isFormValid || isLoading}
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
