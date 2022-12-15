import "./styles.css";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { NotMemoizedAxis } from "./NotMemoizedAxis";
import { MemoizedAxis } from "./MemoizedAxis";
import { DraggableThing } from "./DraggableThing";

export default function CalculateFactorial() {
  const [uselessValue, setUselessValue] = useState("whatever");
  const [score, setScore] = useState(0);

  const increment = () => setScore(() => score + 1);
  const changeUselessValue = () => setUselessValue(() => uselessValue + "!");

  const handleDragEnd = () => {
    console.log("drag end!");
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ fontFamily: "monospace" }}>
        <h3>App</h3>
        value we don't care about: {uselessValue}
        <DraggableThing />
        <div style={{ display: "flex" }}>
          <button onClick={increment}>Increment Important Score!</button>
          <button onClick={changeUselessValue}>Change Useless Value</button>
        </div>
        <hr />
        <NotMemoizedAxis score={score} />
        <MemoizedAxis score={score} />
      </div>
    </DndContext>
  );
}
