import Image from "next/image";

const ButtonLogin = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <button
      className="bg-blue-700 text-white
      font-bold
      rounded-lg
      transition
      delay-100
      my-10 hover:bg-blue-600"
      onClick={onClick}
    >
      <div
        className="flex align-middle 
      justify-center items-center px-2
      cursor-pointer
      p-2 gap-1
      select-none
      "
      >
        <Image
          src={"/icons/Google_icon.png"}
          height={50}
          width={50}
          priority={true}
          alt="Google icon"
        />
        <div className="cursor-pointer">Sign in with Google</div>
      </div>
    </button>
  );
};

export default ButtonLogin;
