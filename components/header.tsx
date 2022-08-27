import ButtonLogout from "./ui/buttonLogout";

const Header = () => {
  return (
    <header className=" h-10 mt-4">
      <div className="flex justify-end">
        <ButtonLogout />
      </div>
    </header>
  );
};

export default Header;
