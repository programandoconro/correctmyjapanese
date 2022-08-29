import { useEffect, useState } from "react";
import InputArea from "./inputArea";
import CONSTANTS from "../utils/constants";
import Corrections from "./corrections";
import findDifferences from "./findDifferences";
import Header from "./header";
import { useSelector } from "react-redux";

const CorrectMyWriting = () => {
  const [studentInput, setStudentInput] = useState<string>("");
  const [teacherInput, setTeacherInput] = useState<string>("");
  const uid = useSelector(
    (state: { auth: { user: { uid: string } } }) => state.auth.user.uid
  );
  useEffect(() => {
    const getPersistedData = async (route: "manuscripts" | "corrections") => {
      const response = await fetch(`/api/${route}`, {
        method: "POST",
        body: JSON.stringify({ uid }),
      });
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
    <div className="grid h-screen">
      <Header />
      <div className="grid gap-10 pt-10 xl:px-40">
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
    </div>
  );
};
export default CorrectMyWriting;
