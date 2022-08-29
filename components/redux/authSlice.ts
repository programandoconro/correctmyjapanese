import { createSlice } from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";

type UserType = {
  isLogin: boolean;
  userName: string;
};

const initialState: UserType = {
  isLogin: false,
  userName: "",
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

    userName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { logIn, logOut, userName } = authSlice.actions;

export default authSlice;
