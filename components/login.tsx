import { googleSignIn } from "./storage/firebase";
import { useDispatch } from "react-redux";
import { logIn } from "./redux/authSlice";
import { useState } from "react";
import { UserCredential } from "firebase/auth";
import { spinnerOn, spinnerOff } from "./redux/spinnerSlice";
import ButtonLogin from "./ui/buttonLogin";

const Login = () => {
  const [userCredential, setUserCredential] = useState<UserCredential>();
  const dispatch = useDispatch();
  const stopSpinner = () => dispatch(spinnerOff());
  const startSpinner = () => dispatch(spinnerOn());
  const handleLogin = () => {
    googleSignIn(setUserCredential, startSpinner, stopSpinner);
    dispatch(logIn());
  };
  return (
    <div className="flex flex-col justify-center align-middle items-center min-h-screen">
      <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-2xl flex flex-col  w-full justify-center items-center align-middle">
        Welcome to{" "}
        <b className="animate-pulse duration-75">correct my writing!</b>
      </h1>
      <ButtonLogin onClick={handleLogin} />
    </div>
  );
};
export default Login;
