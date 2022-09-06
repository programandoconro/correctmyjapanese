import { useRouter } from "next/router";
import { useState } from "react";
import Corrections from "../components/corrections";
import findDifferences from "../components/findDifferences";
import Header from "../components/header";
import InputArea from "../components/ui/inputArea";
import { useAppSelector } from "../redux/hooks";
import { updatePersistedDashboard } from "../storage/persisted";

const MyCorrection = () => {
  const manuscriptData = useAppSelector(
    (state) => state.correction.dataTeacher
  );
  return (
    <div>
      <Header />
      <div className="grid w-full p-4">
        <Corrections
          changes={findDifferences({
            learnerSentence: manuscriptData.manuscriptToCorrect || "",
            teacherCorrection: manuscriptData.correction || "",
          })}
        />
      </div>
    </div>
  );
};

export default MyCorrection;
