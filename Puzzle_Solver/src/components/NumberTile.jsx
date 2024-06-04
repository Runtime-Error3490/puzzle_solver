import React from "react";
import { useDrag, useDrop } from "react-dnd";

export default function NumberTile({ index, number, handleDrop }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "NUMBER_TILE",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "NUMBER_TILE",
    drop: (item) => handleDrop(item.index, index),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  const isActive = canDrop && isOver;
  return (
    <div
      ref={drop}
      className={`number-tile ${isDragging ? "dragging" : ""} ${
        isActive ? "active" : ""
      }`}
    >
      <div ref={drag} className="tile-content">
        {number}
      </div>
    </div>
  );
}
