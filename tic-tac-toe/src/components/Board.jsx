import { useState } from "react";

function Square({ value, handleSquareClick }) {
  return (
    <button
      className="text-2xl bg-white h-20 w-20 m-4 border-2 border-gray-300 rounded-xl font-bold"
      onClick={handleSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsxIsNext] = useState(true);

  function handleClick(i) {
    if (square[i]) return;
    const nextSquare = [...square];
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    setXIsxIsNext(!xIsNext);
    setSquare(nextSquare);

    console.log(nextSquare);
  }

  return (
    <>
      <div className="flex">
        <Square
          value={square[0]}
          handleSquareClick={() => handleClick(0)}
        ></Square>
        <Square
          value={square[1]}
          handleSquareClick={() => handleClick(1)}
        ></Square>
        <Square
          value={square[2]}
          handleSquareClick={() => handleClick(2)}
        ></Square>
      </div>

      <div className="flex">
        <Square
          value={square[3]}
          handleSquareClick={() => handleClick(3)}
        ></Square>
        <Square
          value={square[4]}
          handleSquareClick={() => handleClick(4)}
        ></Square>
        <Square
          value={square[5]}
          handleSquareClick={() => handleClick(5)}
        ></Square>
      </div>

      <div className="flex">
        <Square
          value={square[6]}
          handleSquareClick={() => handleClick(6)}
        ></Square>
        <Square
          value={square[7]}
          handleSquareClick={() => handleClick(7)}
        ></Square>
        <Square
          value={square[8]}
          handleSquareClick={() => handleClick(8)}
        ></Square>
      </div>
    </>
  );
}
