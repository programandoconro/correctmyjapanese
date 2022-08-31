import { googleSignIn } from "../storage/firebase";
import ButtonLogin from "./ui/buttonLogin";

const Login = () => {
  const handleLogin = () => {
    googleSignIn();
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center min-h-screen">
      <h1 className="lg:text-8xl select-none md:text-6xl sm:text-4xl text-2xl flex flex-col  w-full justify-center items-center align-middle">
        Welcome to{" "}
        <b className="animate-pulse duration-75">correct my Japanese!</b>
      </h1>
      <ButtonLogin onClick={handleLogin} />
    </div>
  );
};
export default Login;
