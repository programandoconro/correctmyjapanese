import { Differences } from "../redux/correctionSlice";
import store from "../redux/store";
import CONSTANTS from "../utils/constants";
import { DashboardData } from "../utils/types";

export const getPersistedData = async (props: {
  route: "manuscripts" | "corrections";
  handleData: (s: string) => void;
}) => {
  const { route, handleData } = props;
  const uid = store.getState().auth.user.uid;
  const response = await fetch(`/api/${route}`, {
    method: "POST",
    body: JSON.stringify({ uid }),
  });
  const data = await response.json();
  if (route === CONSTANTS.MANUSCRIPTS) {
    handleData(data.manuscripts);
  } else if (route === CONSTANTS.CORRECTIONS) {
    handleData(data.corrections);
  }
};

const key = `differences/${store.getState().auth.user.uid}`;
export const getPersistedDifferences = async (): Promise<Differences[]> => {
  const response = await fetch(`/api/${CONSTANTS.DIFFERENCES}`, {
    method: "POST",
    body: JSON.stringify({ uid: key }),
  });
  const data = await response.json();
  const d: Differences[] = data.differences.map((diff: string) => {
    return JSON.parse(diff);
  });
  return d;
};
export const setPersistedDifferences = async (props: { data: Differences }) => {
  const { data } = props;
  await fetch(`/api/${CONSTANTS.DIFFERENCES}`, {
    method: "PUT",
    body: JSON.stringify({ uid: key, payload: data }),
  });
};

export const setPersistedInputContent = async (props: {
  event: React.ChangeEvent<HTMLTextAreaElement>;
  route: "manuscripts" | "corrections";
  setInput: (s: string) => void;
}) => {
  const { event, route, setInput } = props;
  setInput(event.target.value);

  const uid = store.getState().auth.user.uid;
  await fetch(`/api/${route}`, {
    method: "PUT",
    body: JSON.stringify({ uid, payload: event.target.value }),
  });
};

export const clearPersistedManuscript = async () => {
  const uid = store.getState().auth.user.uid;
  await fetch(`/api/${CONSTANTS.MANUSCRIPTS}`, {
    method: "PUT",
    body: JSON.stringify({ uid, payload: "" }),
  });
};
export const getPersistedDashboardData = async (props: {
  setDataSource: (d: DashboardData[]) => void;
}) => {
  const diff: Differences[] = await getPersistedDifferences();
  const { setDataSource } = props;
  setDataSource(
    diff.map((d: Differences, key) => {
      return {
        key: key.toString(),
        name: d.dataStudent.student,
        corrected: d.dataStudent.corrected.toString(),
        manuscript: d.dataStudent.manuscript,
      };
    })
  );
};
