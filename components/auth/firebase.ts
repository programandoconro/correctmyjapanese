import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  User,
  IdTokenResult,
  UserCredential,
} from "firebase/auth";

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

const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.useDeviceLanguage();

export const googleSignIn = () => {
  signInWithRedirect(auth, provider);
};

export const handleRedirectResult = (
  setToken: (t: String) => void,
  setUser: (u: UserCredential) => void,
  setSpinner: (s: boolean | null) => void
) => {
  setSpinner(true);
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        console.log(true);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        token && setToken(token);
        setUser(result);
      }

      // The signed-in user info.
    })
    .catch((error) => {
      setSpinner(null);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log({ errorCode, errorMessage, email, credential });
      // ...
    })
    .finally(() => {
      setSpinner(false);
    });
};
