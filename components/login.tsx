import { googleSignIn } from "./storage/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logIn, user } from "./redux/authSlice";
import { useState } from "react";
import { UserCredential } from "firebase/auth";
import { spinnerOn, spinnerOff } from "./redux/spinnerSlice";
import ButtonLogin from "./ui/buttonLogin";
import { AppDispatch } from "./redux/store";

const Login = () => {
  const [userCredential, setUser] = useState<UserCredential>();
  const dispatch = useDispatch<AppDispatch>();
  const login = () => dispatch(logIn());
  const stopSpinner = () => dispatch(spinnerOff());
  const startSpinner = () => dispatch(spinnerOn());
  const getUser = () => dispatch(user());

  const userCre = useSelector(
    (state: { auth: { user: UserCredential | null } }) => state.auth.user
  );

  const handleLogin = () => {
    googleSignIn({ setUser, startSpinner, stopSpinner, login });
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center min-h-screen">
      <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-2xl flex flex-col  w-full justify-center items-center align-middle">
        Welcome to{" "}
        <b className="animate-pulse duration-75">correct my Japanese!</b>
      </h1>
      <ButtonLogin onClick={handleLogin} />
    </div>
  );
};
export default Login;
