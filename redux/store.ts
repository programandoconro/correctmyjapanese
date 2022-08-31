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
import {
  correctionSlice,
  differencesSlice,
  manuscriptSlice,
} from "./correctionSlice";

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
    correction: correctionSlice.reducer,
    manuscript: manuscriptSlice.reducer,
    differences: differencesSlice.reducer,
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
export type RootState = ReturnType<typeof store.getState>;
