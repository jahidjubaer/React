import { useState } from "react";
import Board from "./Board";
import { History } from "./History";

export function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsxIsNext] = useState(true);
  const [CurrentMove, setCurrentMove] = useState(0);

  const currentSquare = history[CurrentMove];

  function handlePlay(nextSquare) {
    setXIsxIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, CurrentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  //   jump to ;
  function jumpTo(move) {
    setCurrentMove(move);
    setXIsxIsNext(move % 2 === 0);
  }

  const moves = history.map((square, move) => {
    let description;
    if (move <= 0) {
      description = "Start your first move";
    } else {
      description = `your next move is ${move}`;
    }

    return (
      <li key={move}>
        <button className="p-2 border-2 border-white m-2 rounded-lg text-xl font-bold " onClick={() => jumpTo(move)}> {description}</button>
      </li>
    );
  });

  return (
    <div className="flex gap-10 justify-center mt-10">
      <div>
        <Board
          xIsNext={xIsNext}
          square={currentSquare}
          onPlay={handlePlay}
        ></Board>
      </div>
      <div>
        <History moves={moves}></History>
      </div>
    </div>
  );
}
