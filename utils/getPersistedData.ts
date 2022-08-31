import store from "../redux/store";
import CONSTANTS from "./constants";
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
