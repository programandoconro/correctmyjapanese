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
  return (
    <>
      <h5 className="text-xl">{title}</h5>
      <textarea
        className="bg-gray-200 text-black font-bold text-2xl min-h-[200px]"
        value={input}
        onChange={handleInputChange}
      />
    </>
  );
};

export default InputArea;
