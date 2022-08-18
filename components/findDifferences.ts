import { Change, diffChars } from "diff";

const findDifferences = (props: {
  learnerSentence: string;
  teacherCorrection: string;
}): Change[] => {
  const { learnerSentence, teacherCorrection } = props;
  const changedWords =
    teacherCorrection && teacherCorrection.length
      ? diffChars(learnerSentence, teacherCorrection)
      : [];

  return changedWords;
};

export default findDifferences;
