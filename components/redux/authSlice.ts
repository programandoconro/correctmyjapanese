import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    spinner: false,
  },
  reducers: {
    logIn: (state) => {
      state.isLogin = true;
    },
    logOut: (state) => {
      state.isLogin = false;
    },
    setSpinnerOff: (state) => {
      state.spinner = false;
    },
    setSpinnerOn: (state) => {
      state.spinner = true;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice;
