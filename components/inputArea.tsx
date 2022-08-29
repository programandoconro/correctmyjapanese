import { useSelector } from "react-redux";
import CONSTANTS from "../utils/constants";

const InputArea = (props: {
  title?: string;
  input: string;
  setInput: (s: string) => void;
}) => {
  const { title, input, setInput } = props;
  const uid = useSelector(
    (state: { auth: { user: { uid: string } } }) => state.auth.user.uid
  );

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInput(event.target.value);

    await fetch(`/api/${title}`, {
      method: "PUT",
      body: JSON.stringify({ uid, payload: event.target.value }),
    });
  };
  const name =
    title === CONSTANTS.MANUSCRIPTS ? "Student's input" : "Sensei's input";
  return (
    <>
      <textarea
        className="bg-gray-300  text-black font-bold text-2xl min-h-[200px] px-4"
        value={input}
        onChange={handleInputChange}
        placeholder={name}
      />
    </>
  );
};

export default InputArea;
