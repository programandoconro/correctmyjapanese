import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/header";
import InputArea from "../components/ui/inputArea";
import {
  DataStudent,
  Differences,
  setManuscript,
} from "../redux/correctionSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CONSTANTS from "../utils/constants";
import {
  clearPersistedManuscript,
  getPersistedData,
  setPersistedDifferences,
} from "../storage/persisted";

const Student = () => {
  const studentData = useAppSelector((state) => state.manuscript.dataStudent);
  const user = useAppSelector((state) => state.auth.user);

  const dispatch = useAppDispatch();
  const handleStudentInput = (input: string) => {
    const manuscript: DataStudent = {
      student: user.name,
      studentUid: user.uid,
      corrected: false,
      manuscript: input,
    };
    dispatch(setManuscript(manuscript));
  };
  useEffect(() => {
    getPersistedData({
      route: CONSTANTS.MANUSCRIPTS,
      handleData: handleStudentInput,
    });
  }, []);

  const router = useRouter();
  const handleFinish = async () => {
    const differences: Differences = {
      dataTeacher: {
        teacher: "",
        teacherUid: "",
        correction: "",
        manuscriptToCorrect: "",
        itemKey: 0,
        studentName: studentData.student,
        studentToCorrectUid: studentData.studentUid,
      },
      dataStudent: {
        ...studentData,
      },
    };
    await setPersistedDifferences({ data: differences });
    await clearPersistedManuscript();
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full grid h-full">
        <div className="flex-grow h-full my-2  grid items-center mx-4 xl:mx-20">
          <InputArea
            title={CONSTANTS.MANUSCRIPTS}
            input={studentData.manuscript}
            setInput={handleStudentInput}
          />
        </div>
        <div className="flex w-full items-end mt-4 pr-4 xl:pr-20 justify-end mb-10">
          <button
            onClick={handleFinish}
            className="border-white border rounded-md p-2 select-none"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student;
function setPersistedInputContent(arg0: {
  route: any;
  event: Event | undefined;
  setInput: any;
}) {
  throw new Error("Function not implemented.");
}
