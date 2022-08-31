import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
  name: string;
  uid: string;
};
type AuthType = {
  isLogin: boolean;
  user: UserType;
};

const initialState: AuthType = {
  isLogin: false,
  user: {
    name: "",
    uid: "",
  },
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

    setUserCredentials: (state: AuthType, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { logIn, logOut, setUserCredentials } = authSlice.actions;

export default authSlice;
