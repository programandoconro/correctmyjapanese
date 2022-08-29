import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import spinnerSlice from "./spinnerSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authSlice from "./authSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    spinner: spinnerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
export type AppDispatch = typeof store.dispatch;
