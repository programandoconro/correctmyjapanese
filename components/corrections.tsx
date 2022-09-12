import { Change } from "diff";

const Corrections = (props: { changes: Change[] }) => {
  const { changes } = props;
  return (
    <code className="gap-4 divide-y text-2xl bg-gray-800 mb-10 overflow-auto">
      <h2 className="text-4xl px-4 pt-2">Corrections:</h2>
      <span className="flex-wrap flex p-4">
        {changes.map((change: Change, key) => {
          if (!change.added && !change.removed) {
            return (
              <span className="grid" key={key}>
                {change.value}
              </span>
            );
          } else if (change.removed) {
            return (
              <del className="grid" key={key} style={{ color: "red" }}>
                {change.value}
              </del>
            );
          }
        })}
      </span>
      <div className="flex flex-wrap p-4">
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
