import Image from "next/image";

const ButtonLogin = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <button
      className="bg-blue-600 text-white
      font-bold
      rounded-lg
      transition
      delay-100
     my-4 hover:bg-blue-500"
      onClick={onClick}
    >
      <div
        className="flex align-middle 
      justify-center items-center px-2
      cursor-pointer
      p-2

      
      "
      >
        <Image src={"/icons/Google_icon.png"} height={50} width={50} />
        <h5 className="cursor-pointer">Sign in with Google</h5>
      </div>
    </button>
  );
};

export default ButtonLogin;
