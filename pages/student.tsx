import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/header";
import InputArea from "../components/ui/inputArea";
import { DataStudent, setManuscript } from "../redux/correctionSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CONSTANTS from "../utils/constants";
import { getPersistedData } from "../utils/getPersistedData";

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
  const handleFinish = () => {
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
