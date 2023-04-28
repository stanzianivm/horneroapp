import {
  loginUser,
  logout,
  registerUser,
  updateUser,
} from "../../services/auth.service";
import { setSuccessMessage, setErrorMessage } from "../messaje/messageSlice";
import {
  loginStart,
  loginSuccess,
  logoutSuccess,
  updateSucces,
} from "./authSlice";

export const startLoginWithEmailPassword = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const data = await loginUser(user);
      dispatch(loginSuccess(data.data));
    } catch (error) {
      dispatch(logoutSuccess());
      dispatch(setErrorMessage(error.error));
    }
  };
};

export const startCreatingUserWithEmailPassword = (userRegister) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const data = await registerUser(userRegister);
      dispatch(loginSuccess(data.data));
    } catch (error) {
      dispatch(logoutSuccess());
      dispatch(setErrorMessage(error.error));
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logout();
    dispatch(logoutSuccess());
  };
};

export const updateUserAuth = (userUpdate) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const data = await updateUser(userUpdate);
      dispatch(updateSucces(data.data.user));
      dispatch(setSuccessMessage(data.successMessage));
    } catch (error) {
      dispatch(setErrorMessage(error.error));
    }
  };
};
