import { setPersistedInputContent } from "../../storage/persisted";
import CONSTANTS from "../../utils/constants";

const InputArea = (props: {
  title: "manuscripts" | "corrections";
  input: string;
  setInput: (s: string) => void;
}) => {
  const { title, input, setInput } = props;

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPersistedInputContent({ route: title, event, setInput });
  };
  const name =
    title === CONSTANTS.MANUSCRIPTS ? "Student's input" : "Sensei's input";

  return (
    <>
      <textarea
        className="bg-gray-800 border border-gray-800 hover:border
         hover:border-gray-500  text-white text-2xl
         px-4 min-h-[400px]"
        value={input}
        onChange={handleInputChange}
        placeholder={name}
      />
    </>
  );
};

export default InputArea;
