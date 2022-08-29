import { createSlice } from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";

type UserType = {
  isLogin: boolean;
  user: UserCredential | null;
};

const initialState: UserType = {
  isLogin: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state) => {
      state.isLogin = true;
    },
    logOut: (state) => {
      state.isLogin = false;
    },

    user: (state) => {
      state.user = null;
    },
  },
});

export const { logIn, logOut, user } = authSlice.actions;

export default authSlice;
