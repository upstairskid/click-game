import React from "react";
import "./PlayerCard.css"

const PlayerCard = props =>(
    <div className="card">
        <div className="img-container">
            <img alt={props.player} src={props.image}
            onClick={()=>props.selectPlayer(props.player)
            }
            />
        </div>
    </div>
)

export default PlayerCard;