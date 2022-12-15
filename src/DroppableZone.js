import React from "react";
import { useDroppable } from "@dnd-kit/core";

export const DroppableZone = ({ id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id
  });

  const style = {
    width: "600px",
    background: isOver ? "green" : "orange"
  };

  isOver && console.log(`isOver ${id}`);

  return (
    <div ref={setNodeRef} style={style}>
      DroppableZone
    </div>
  );
};
