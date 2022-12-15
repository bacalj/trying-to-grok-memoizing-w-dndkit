import { DroppableZone } from "./DroppableZone";

export const MemoizedAxis = ({ score }) => {
  const doubleScore = () => {
    return 2 * score;
  };

  console.log("<MemoizedAxis>");
  return (
    <div style={{ marginLeft: "20px" }}>
      <b>Memoized Axis</b>
      <br />
      score: {score}
      <br />
      double score: {doubleScore()}
      <DroppableZone id={"drop-in-memoized"} />
    </div>
  );
};
