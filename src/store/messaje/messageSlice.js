import { createSlice } from "@reduxjs/toolkit";

const initialState = { successMessage: null, errorMessage: null };

export const messageSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
      state.errorMessage = null;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
      state.successMessage = null;
    },
    clearMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
});

export const { setSuccessMessage, setErrorMessage, clearMessages } =
  messageSlice.actions;
export default messageSlice.reducer;
