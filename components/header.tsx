import { useSelector } from "react-redux";
import ButtonLogout from "./ui/buttonLogout";

const Header = () => {
  const user = useSelector(
    (state: { auth: { userName: string } }) => state.auth.userName
  );

  return (
    <header className="grid grid-cols-2 h-10 mt-4 cursor-default border-b-2 items-start align-baseline">
      <div className="flex gap-1 ml-4 items-start align-baseline select-none">
        <h5 className="text-white font-extrabold self-start">User:</h5>

        <h5 className="text-white font-extralight italic ">{user}</h5>
      </div>
      <div className="flex justify-end mb-2 mr-4 select-none">
        <ButtonLogout />
      </div>
    </header>
  );
};

export default Header;
