import { Change } from "diff";

const Corrections = (props: { changes: Change[] }) => {
  const { changes } = props;
  return (
    <code className="text-8xl bg-gray-800 mb-10">
      <h2 className="text-4xl">Correction:</h2>
      <div className="flex">
        {changes.map((change: Change, key) => {
          if (!change.added && !change.removed) {
            return <p key={key}>{change.value}</p>;
          } else if (change.removed) {
            return (
              <del key={key} style={{ color: "red" }}>
                {change.value}
              </del>
            );
          }
        })}
      </div>
      <div className="flex">
        {changes.map((change: Change, key) => {
          if (!change.added && !change.removed) {
            return <p key={key}>{change.value}</p>;
          } else if (change.added) {
            return (
              <p key={key} style={{ color: "green" }}>
                {change.value}
              </p>
            );
          }
        })}
      </div>
    </code>
  );
};
export default Corrections;
