import React, { useState } from "react";
import './styles/Square.css';

function Square(props) {
    const [player, setPlayer] = useState("");

    const onClick = () => {
        if (player === "") {
            setPlayer(props.nextPlayer)
            props.setNextPlayer()
        }
    }

    return (
        <button className="square" onClick={onClick}>
            {/* TODO */}
            {player}
        </button>
    )
}

export default Square;