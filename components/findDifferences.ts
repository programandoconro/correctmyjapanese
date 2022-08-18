import { Change, diffChars } from "diff";

const findDifferences = (props: {
  learnerSentence: string;
  teacherCorrection: string;
}): Change[] => {
  const { learnerSentence, teacherCorrection } = props;
  const changedWords = diffChars(learnerSentence, teacherCorrection);

  return changedWords;
};

export default findDifferences;
