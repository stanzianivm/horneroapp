import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { PASSWORD, TEXT } from "../../helpers/types";

export const ShowPassword = ({ register, registerName, message }) => {
  console.log(registerName);
  const [showPassword, setShowPassword] = useState(false);
  const [typePassword, setTypePassword] = useState(PASSWORD);

  const showPasswordOnClick = () => {
    if (showPassword) {
      setTypePassword(PASSWORD);
      setShowPassword(false);
    } else {
      setTypePassword(TEXT);
      setShowPassword(true);
    }
  };

  return (
    <TextField
      label="password"
      type={typePassword}
      placeholder="Password"
      fullWidth
      name="password"
      {...register(registerName)}
      error={message ? true : false}
      helperText={message}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              edge="end"
              variant="contained"
              onClick={showPasswordOnClick}
            >
              {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
