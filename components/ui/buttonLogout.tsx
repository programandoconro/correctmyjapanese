import { signOutGoogle } from "../storage/firebase";
import { useDispatch } from "react-redux";
import { logOut } from "../../components/redux/authSlice";

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOutGoogle();
    dispatch(logOut());
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-gray-400 px-1 rounded hover:bg-gray-300 transition delay-75 shadow-2xl"
    >
      <h5>LOGOUT</h5>
    </button>
  );
};
export default ButtonLogout;
