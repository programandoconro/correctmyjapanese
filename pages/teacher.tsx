import { useRouter } from "next/router";
import { useState } from "react";
import Corrections from "../components/corrections";
import findDifferences from "../components/findDifferences";
import Header from "../components/header";
import InputArea from "../components/ui/inputArea";
import { useAppSelector } from "../redux/hooks";
import { updatePersistedDashboard } from "../storage/persisted";

const Teacher = () => {
  const manuscriptData = useAppSelector(
    (state) => state.correction.dataTeacher
  );
  const [input, setInput] = useState<string>("");
  const router = useRouter();
  const handleFinish = async () => {
    await updatePersistedDashboard({
      key: manuscriptData.itemKey,
      uid: "differences",
      payload: {
        dataStudent: {
          student: manuscriptData.studentName,
          studentUid: manuscriptData.studentToCorrectUid,
          corrected: true,
          manuscript: manuscriptData.manuscriptToCorrect,
        },
        dataTeacher: {
          teacher: manuscriptData.teacher,
          teacherUid: manuscriptData.teacherUid,
          correction: input,
          manuscriptToCorrect: manuscriptData.manuscriptToCorrect,
          studentName: manuscriptData.studentName,
          itemKey: manuscriptData.itemKey,
          studentToCorrectUid: manuscriptData.studentToCorrectUid,
        },
      },
    });
    router.push("/");
  };
  return (
    <div>
      <Header />
      <div className="grid w-full px-4">
        <div className="flex justify-center">
          <p className="text-2xl">Teacher Corrections</p>
        </div>
        <p>Student manuscript</p>
        <p className="text-2xl font-semibold bg-gray-900">
          {manuscriptData.manuscriptToCorrect}
        </p>
        <p className="">Teacher Corrections</p>
        <InputArea title="corrections" input={input} setInput={setInput} />
        <div className="flex w-full items-end mt-4 pr-4 xl:pr-20 justify-end mb-10">
          <button
            onClick={handleFinish}
            className="border-white border rounded-md p-2 select-none"
          >
            Finish
          </button>
        </div>
        {manuscriptData.manuscriptToCorrect && (
          <Corrections
            changes={findDifferences({
              learnerSentence: manuscriptData.manuscriptToCorrect,
              teacherCorrection: input,
            })}
          />
        )}
      </div>
    </div>
  );
};

export default Teacher;
