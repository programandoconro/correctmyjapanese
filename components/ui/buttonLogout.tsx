import { signOutGoogle } from "../storage/firebase";
import { useRouter } from "next/router";
import { LogoutOutlined } from "@ant-design/icons";

const ButtonLogout = () => {
  const router = useRouter();
  const handleLogout = () => {
    signOutGoogle();
    router.push("/");
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-gray-600 flex justify-center align-middle items-center gap-2 px-1 rounded hover:bg-gray-400 
      transition delay-75"
    >
      LOGOUT
      <LogoutOutlined />
    </button>
  );
};
export default ButtonLogout;
