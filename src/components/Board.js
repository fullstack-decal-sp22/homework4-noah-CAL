import React, { useState } from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {

    const [nextPlayer, setNextPlayer] = useState("X")
    const updatePlayer = () => {
      if (nextPlayer === "X") {
        setNextPlayer("O")
      } else {
        setNextPlayer("X")
      }
    }
    const status = `Next player: ${nextPlayer}`;

    function renderSquare(i) {
        return <Square nextPlayer={nextPlayer} setNextPlayer={updatePlayer} />;
    }

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{status}</div>
        </div>
    )
}

export default Board;