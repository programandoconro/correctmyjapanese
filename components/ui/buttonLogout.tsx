const ButtonLogout = (props: { logOut: () => void }) => {
  return (
    <button
      onClick={props.logOut}
      className="bg-gray-400 px-1 rounded hover:bg-gray-300 transition delay-75 shadow-2xl"
    >
      <h5>LOGOUT</h5>
    </button>
  );
};
export default ButtonLogout;
