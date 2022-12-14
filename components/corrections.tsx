import { Change } from "diff";
import { Divider } from "antd";

const Corrections = (props: { changes: Change[] }) => {
  const { changes } = props;
  return (
    <code className="gap-4 p-4 text-sm sm:text-2xl  bg-gray-800 mb-10 overflow-auto">
      <h2 className="text-4xl px-4 pt-2">Corrections:</h2>
      <Divider />
      <div className="p-4">
        {changes.map((change: Change, key) => {
          if (!change.added && !change.removed) {
            return (
              <span className="" key={key}>
                {change.value}
              </span>
            );
          } else if (change.removed) {
            return (
              <del className="" key={key} style={{ color: "red" }}>
                {change.value}
              </del>
            );
          }
        })}
      </div>
      <Divider />

      <div className="p-4">
        {changes.map((change: Change, key) => {
          if (!change.added && !change.removed) {
            return (
              <span className="" key={key}>
                {change.value}
              </span>
            );
          } else if (change.added) {
            return (
              <span className="" key={key} style={{ color: "green" }}>
                {change.value}
              </span>
            );
          }
        })}
      </div>
    </code>
  );
};
export default Corrections;
