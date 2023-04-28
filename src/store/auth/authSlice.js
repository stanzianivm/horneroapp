import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  user: null,
  token: null,
  error: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
      state.error = null;
    },
    loginFailure: (state, { payload }) => {
      state.isLoading = false;
      state.loggedIn = false;
      state.user = null;
      state.token = null;
      state.error = payload;
    },
    logoutStart: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.loggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    logoutFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateSucces: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = null;
    },
    updateError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  updateSucces,
  updateError,
} = authSlice.actions;
export default authSlice.reducer;
