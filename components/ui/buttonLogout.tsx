import { signOutGoogle } from "../storage/firebase";

const ButtonLogout = () => {
  const handleLogout = () => {
    signOutGoogle();
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-gray-600 px-1 rounded hover:bg-gray-400 
      transition delay-75 shadow-2xl"
    >
      <h5>LOGOUT</h5>
    </button>
  );
};
export default ButtonLogout;
