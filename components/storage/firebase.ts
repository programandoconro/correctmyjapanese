import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import store from "../redux/store";
import {
  logIn,
  logOut,
  setUserCredentials,
  UserType,
} from "../redux/authSlice";
import { spinnerOff, spinnerOn } from "../redux/spinnerSlice";

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

export const googleSignIn = async () => {
  store.dispatch(spinnerOn());
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(await result.user.getIdTokenResult());
      const name = result?.user?.displayName;
      const uid = result?.user?.uid;
      if (name && uid) {
        store.dispatch(setUserCredentials({ name, uid }));
        store.dispatch(logIn());
      } else {
        alert("An error ocurred, no name or uid was found");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error({ errorCode, errorMessage, email, credential });
    })
    .finally(() => {
      store.dispatch(spinnerOff());
    });
};

export const signOutGoogle = async () => {
  signOut(auth)
    .then(() => {
      store.dispatch(logOut());
      store.dispatch(setUserCredentials({ name: "", uid: "" }));
    })
    .catch((error) => {});
};
