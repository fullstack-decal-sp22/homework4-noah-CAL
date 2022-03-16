import React, { useState } from "react";
import './styles/Square.css';

function Square(props) {
    const [player, setPlayer] = useState("");

    return (
        <button className="square" onClick={() => setPlayer("O")}>
            {/* TODO */}
            {console.log(props.number)}
            {player}
        </button>
    )
}

export default Square;