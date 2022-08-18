import { Change } from "diff";

const Corrections = (props: { changes: Change[] }) => {
  const { changes } = props;
  return (
    <code className="text-8xl bg-gray-600">
      <h2 className="text-4xl">Corrections:</h2>
      <div className="flex">
        {changes.map((change: Change) => {
          if (!change.added && !change.removed) {
            return <p>{change.value}</p>;
          } else if (change.removed) {
            return <del style={{ color: "red" }}>{change.value}</del>;
          }
        })}
      </div>
      <div className="flex">
        {changes.map((change: Change) => {
          if (!change.added && !change.removed) {
            return <p>{change.value}</p>;
          } else if (change.added) {
            return <p style={{ color: "green" }}>{change.value}</p>;
          }
        })}
      </div>
    </code>
  );
};
export default Corrections;
