import React, { useState } from "react";
import NumberTile from "./NumberTile";
const initialNumbers = [2, 8, 3, 1, 6, 4, 7, 0, 5];
export default function NumberGrid() {
  const [numbers, setNumbers] = useState(initialNumbers);
  const handleDrop = (fromIndex, toIndex) => {
    setNumbers((prevNumbers) => {
      const updatedNumbers = [...prevNumbers];
      const [removed] = updatedNumbers.splice(fromIndex, 1);
      updatedNumbers.splice(toIndex, 0, removed);
      return updatedNumbers;
    });
  };
  const isSorted = () => {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        return false;
      }
    }
    return true;
  };
  return (
    <>
    <div className="number-grid">
      {numbers.map((number, index) => (
        <NumberTile
          key={index}
          index={index}
          number={number}
          handleDrop={handleDrop}
        />
      ))}
    </div>
    {isSorted() && <div className="success-message">Puzzle Solved!</div>}
    </>
  );
}
