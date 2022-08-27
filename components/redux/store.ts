import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice";
import spinnerSlice from "./spinnerSlice";

export default configureStore({
  reducer: {
    auth: authSliceReducer.reducer,
    spinner: spinnerSlice.reducer,
  },
});
