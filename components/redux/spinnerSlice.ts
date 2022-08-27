import { createSlice } from "@reduxjs/toolkit";

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState: {
    on: false,
  },
  reducers: {
    spinnerOn: (state) => {
      state.on = true;
    },

    spinnerOff: (state) => {
      state.on = false;
    },
  },
});

export const { spinnerOn, spinnerOff } = spinnerSlice.actions;

export default spinnerSlice;
