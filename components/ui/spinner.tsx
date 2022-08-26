const Spinner = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div
        className="
        inline-block w-8 h-8 
        bg-white animate-pulse
        rounded-full opacity-0"
        role="status"
      ></div>
      <div
        className="
        inline-block w-8 h-8 
        bg-white animate-pulse
        rounded-full opacity-0"
        role="status"
      ></div>
      <div
        className="
        inline-block w-8 h-8 
        bg-white animate-pulse
        rounded-full opacity-0"
        role="status"
      ></div>
    </div>
  );
};
export default Spinner;
