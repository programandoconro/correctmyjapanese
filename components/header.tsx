import ButtonLogout from "./ui/buttonLogout";

const Header = (props: { logOut: () => void }) => {
  return (
    <header className=" h-10 mt-4">
      <div className="flex justify-end">
        <ButtonLogout logOut={props.logOut} />
      </div>
    </header>
  );
};

export default Header;
