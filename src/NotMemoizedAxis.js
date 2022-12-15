import { DroppableZone } from "./DroppableZone";

export const NotMemoizedAxis = ({ score }) => {
  const doubleScore = () => {
    return 2 * score;
  };

  console.log("<NotMemoizedAxis>");
  return (
    <div style={{ marginLeft: "20px" }}>
      <b>Not Memoized Axis</b>
      <br />
      score: {score}
      <br />
      double score: {doubleScore()}
      <DroppableZone id={"drop-in-not-memoized"} />
    </div>
  );
};
