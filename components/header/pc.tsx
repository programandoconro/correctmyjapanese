import Link from "next/link";
import ButtonLogout from "../ui/buttonLogout";
import { useAppSelector } from "../../redux/hooks";

const Header = () => {
  const user = useAppSelector((state) => state.auth.user.name);

  return (
    <header
      className="grid grid-cols-10 bg-gray-800 h-12 cursor-default
      items-center "
    >
      <div className=" grid col-span-9 grid-cols-3 gap-1 ml-4 items-start align-baseline select-none">
        <Link href={"/user"}>
          <div className="flex gap-1 cursor-pointer hover:underline underline-offset-2">
            <div className="text-white font-extrabold">User:</div>
            <div className="text-white font-extralight italic ">{user}</div>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="cursor-pointer hover:bg-gray-600 rounded px-2 w-24 flex justify-center delay-75 transition">
            Dashboard
          </div>
        </Link>
        <Link href={"/student"}>
          <div className=" flex justify-center cursor-pointer hover:bg-gray-600 rounded w-24 delay-75 transition">
            New writing
          </div>
        </Link>
      </div>
      <div className="flex justify-end mr-4 select-none">
        <ButtonLogout />
      </div>
    </header>
  );
};

export default Header;
