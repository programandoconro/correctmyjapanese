import { useEffect, useState } from "react";
import InputArea from "./inputArea";
import CONSTANTS from "../utils/constants";
import Corrections from "./corrections";
import findDifferences from "./findDifferences";

const CorrectMyWriting = () => {
  const [studentInput, setStudentInput] = useState<string>("");
  const [teacherInput, setTeacherInput] = useState<string>("");
  useEffect(() => {
    const getPersistedData = async (route: "manuscripts" | "corrections") => {
      const response = await fetch(`/api/${route}`, { method: "GET" });
      const data = await response.json();
      if (route === CONSTANTS.MANUSCRIPTS) {
        setStudentInput(data.manuscripts);
      } else if (route === CONSTANTS.CORRECTIONS) {
        setTeacherInput(data.corrections);
      }
    };
    getPersistedData(CONSTANTS.MANUSCRIPTS);
    getPersistedData(CONSTANTS.CORRECTIONS);
  }, []);
  return (
    <div className="grid gap-10 pt-10 w-screen xl:w-[1200px] px-10">
      <InputArea
        title={CONSTANTS.MANUSCRIPTS}
        input={studentInput}
        setInput={setStudentInput}
      />
      <InputArea
        title={CONSTANTS.CORRECTIONS}
        input={teacherInput}
        setInput={setTeacherInput}
      />
      <Corrections
        changes={findDifferences({
          learnerSentence: studentInput,
          teacherCorrection: teacherInput,
        })}
      />
    </div>
  );
};
export default CorrectMyWriting;
