import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { messageSlice } from "./messaje";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    message: messageSlice.reducer,
  },
});
