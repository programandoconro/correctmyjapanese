import CONSTANTS from "../utils/constants";

const InputArea = (props: {
  title?: string;
  input: string;
  setInput: (s: string) => void;
}) => {
  const { title, input, setInput } = props;
  const handleInputChange = async (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInput(event.target.value);
    await fetch(`/api/${title}`, {
      method: "POST",
      body: event.target.value,
    });
  };
  const name =
    title === CONSTANTS.MANUSCRIPTS ? "Student's input" : "Sensei's input";
  return (
    <>
      <h5 className="text-xl">{name}</h5>
      <textarea
        className="bg-gray-300 text-black font-bold text-2xl min-h-[200px] px-4 max-w-[1000px]"
        value={input}
        onChange={handleInputChange}
        placeholder={name}
      />
    </>
  );
};

export default InputArea;
