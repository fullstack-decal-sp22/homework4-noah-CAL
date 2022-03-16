import React, { useState } from "react";
import './styles/Square.css';

function Square(props) {
    const [player, setPlayer] = useState("");

    const onClick = () => {
        setPlayer(props.nextPlayer)
        props.setNextPlayer()
    }

    return (
        <button className="square" onClick={onClick}>
            {/* TODO */}
            {console.log(props.setNextPlayer)}
            {player}
        </button>
    )
}

export default Square;