import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  UserCredential,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import store from "../redux/store";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
auth.useDeviceLanguage();

export const googleSignIn = async (props: {
  setUser: (u: UserCredential) => void;
  startSpinner: () => void;
  stopSpinner: () => void;
  login: () => void;
}) => {
  const { setUser, startSpinner, stopSpinner, login } = props;
  startSpinner();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // console.log(result.user.displayName);
      // console.log(await result.user.getIdTokenResult());
      setUser(result);
      login();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error({ errorCode, errorMessage, email, credential });
    })
    .finally(() => {
      stopSpinner();
    });
};

export const signOutGoogle = async () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {});
};
