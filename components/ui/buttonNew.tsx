import { FileAddOutlined } from "@ant-design/icons";
import Link from "next/link";

const ButtonNew = () => {
  return (
    <div className="mx-4 select-none">
      <div className="flex justify-end my-4">
        <Link href={"/student"}>
          <button
            className="bg-gray-600 h-16 w-16
           font-bold rounded-full p-4
           justify-center flex flex-col items-center
           shadow-xl  border-2 border-gray-400
           hover:bg-gray-800 transition delay-75
           select-none text-gray-200
           "
          >
            <FileAddOutlined />
            New
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ButtonNew;
