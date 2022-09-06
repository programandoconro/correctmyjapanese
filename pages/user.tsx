import Header from "../components/header";
import { useAppSelector } from "../redux/hooks";

const User = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <Header />
      <div className="p-4">
        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Uid:</b> {user.uid}
        </p>
      </div>
    </div>
  );
};

export default User;
