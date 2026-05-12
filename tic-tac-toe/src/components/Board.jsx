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

  const winner = checkWinner(square);
  let status;

  if (winner) {
    status = `winner ${winner}`;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (square[i] || checkWinner(square)) return;

    const nextSquare = [...square];
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    setXIsxIsNext(!xIsNext);
    setSquare(nextSquare);
  }

  return (
    <>
      <h3 className="font-bold text-xl ml-4">{status}</h3>
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

function checkWinner(square) {
  const posResult = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < posResult.length; i++) {
    const [a, b, c] = posResult[i];

    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
