import { useEffect } from "react";
import InputArea from "./ui/inputArea";
import CONSTANTS from "../utils/constants";
import Corrections from "./corrections";
import findDifferences from "./findDifferences";
import Header from "./header";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  DataStudent,
  DataTeacher,
  setCorrection,
  setManuscript,
} from "../redux/correctionSlice";

const CorrectMyWriting = () => {
  const uid = useAppSelector((state) => state.auth.user.uid);
  const studentData = useAppSelector((state) => state.manuscript.dataStudent);
  const teacherData = useAppSelector((state) => state.correction.dataTeacher);
  const user = useAppSelector((state) => state.auth.user);

  const dispatch = useAppDispatch();
  const handleStudentInput = (e: string) => {
    const manuscript: DataStudent = {
      student: user.name,
      studentUid: user.uid,
      corrected: false,
      manuscript: e,
    };
    dispatch(setManuscript(manuscript));
  };
  const handleTeacherInput = (e: string) => {
    const correction: DataTeacher = {
      teacher: user.name,
      teacherUid: user.uid,
      correction: e,
    };
    dispatch(setCorrection(correction));
  };

  useEffect(() => {
    const getPersistedData = async (route: "manuscripts" | "corrections") => {
      const response = await fetch(`/api/${route}`, {
        method: "POST",
        body: JSON.stringify({ uid }),
      });
      const data = await response.json();
      if (route === CONSTANTS.MANUSCRIPTS) {
        handleStudentInput(data.manuscripts);
      } else if (route === CONSTANTS.CORRECTIONS) {
        handleTeacherInput(data.corrections);
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
          input={studentData.manuscript}
          setInput={handleStudentInput}
        />
        <InputArea
          title={CONSTANTS.CORRECTIONS}
          input={teacherData.correction}
          setInput={handleTeacherInput}
        />
        <Corrections
          changes={findDifferences({
            learnerSentence: studentData.manuscript,
            teacherCorrection: teacherData.correction,
          })}
        />
      </div>
    </div>
  );
};
export default CorrectMyWriting;
