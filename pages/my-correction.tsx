import Corrections from "../components/corrections";
import findDifferences from "../components/findDifferences";
import Header from "../components/header";
import { useAppSelector } from "../redux/hooks";

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
